from playwright.sync_api import sync_playwright
import os
import sys

def run():
    print("Starting verification script...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport to verify responsiveness/hamburger menu
        context = browser.new_context(viewport={"width": 375, "height": 667})
        page = context.new_page()

        # Construct absolute path for file:// access
        cwd = os.getcwd()
        file_path = f"file://{cwd}/cafe-website/index.html"
        print(f"Loading: {file_path}")

        try:
            page.goto(file_path, wait_until="domcontentloaded")

            # 1. Verify Title
            title = page.title()
            print(f"Page Title: {title}")
            if "Kahve Dükkanı" not in title:
                print("ERROR: Title does not match 'Kahve Dükkanı'")
                sys.exit(1)

            # 2. Verify Initial Home Content
            if not page.is_visible("text=Hoş Geldiniz"):
                print("ERROR: Home page content 'Hoş Geldiniz' not visible.")
                sys.exit(1)
            print("Home page content verified.")

            # 3. Open Sidebar
            print("Clicking hamburger menu...")
            page.click("#hamburger")

            # Wait for sidebar to become visible (check class active or visibility)
            # Since we toggle class 'active' which sets transform, we check for the class.
            try:
                page.wait_for_selector("#sidebar.active", state="visible", timeout=2000)
                print("Sidebar opened successfully.")
            except Exception as e:
                print(f"ERROR: Sidebar did not open or receive .active class. {e}")
                # Debugging: check classes
                classes = page.getAttribute("#sidebar", "class")
                print(f"Sidebar classes: {classes}")
                sys.exit(1)

            # 4. Navigate to Prices
            print("Clicking 'Fiyatlar' link...")
            # Use specific selector
            page.click("#sidebar a[href='#prices']")

            # 5. Verify Price List Content
            print("Verifying Price List...")
            # Wait for the header "Fiyat Listesi"
            page.wait_for_selector("text=Fiyat Listesi", timeout=2000)

            # Check for specific item and price
            content = page.content()
            if "Espresso" in content and "45 ₺" in content:
                print("SUCCESS: Found 'Espresso' and '45 ₺'.")
            else:
                print("ERROR: Price list content missing or incorrect.")
                print(content[:500]) # Print first 500 chars for debug
                sys.exit(1)

            # Screenshot
            screenshot_path = "cafe-website/verification/screenshot.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")

        except Exception as e:
            print(f"An error occurred during verification: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run()
