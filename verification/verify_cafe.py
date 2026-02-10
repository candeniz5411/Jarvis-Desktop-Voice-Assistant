import os
import sys
from playwright.sync_api import sync_playwright

def verify_cafe_website():
    current_dir = os.getcwd()
    file_path = f"file://{current_dir}/cafe-website/index.html"
    print(f"Opening: {file_path}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # 1. Open the page
            page.goto(file_path)

            # 2. Check Title
            title = page.title()
            print(f"Page title: {title}")
            assert "Kahve Dükkanı" in title, f"Expected title 'Kahve Dükkanı', got '{title}'"
            print("✅ Title verification passed.")

            # 3. Check Hamburger Menu exists
            hamburger = page.locator("#hamburger-btn")
            assert hamburger.is_visible(), "Hamburger button not visible"
            print("✅ Hamburger button found.")

            # 4. Open Sidebar
            hamburger.click()
            sidebar = page.locator("#sidebar")

            # Wait for transition/class change if needed.
            # In our CSS, we remove '-translate-x-full'.
            # We can check if the class is removed or just wait for visibility if we were checking computed styles.
            # But checking if the class list changes is reliable.
            page.wait_for_timeout(500) # Wait for animation
            classes = sidebar.get_attribute("class")
            assert "-translate-x-full" not in classes, "Sidebar did not open (class '-translate-x-full' still present)"
            print("✅ Sidebar opened.")

            # 5. Navigate to Menu
            menu_link = page.locator('#sidebar a[href="#menu"]')
            menu_link.click()

            # Wait for content to render (it's synchronous JS but let's be safe)
            page.wait_for_timeout(100)

            # 6. Verify Menu Content
            content = page.locator("#main-content")
            assert content.locator("text=Espresso").is_visible(), "Espresso not found in Menu"
            assert content.locator("text=45₺").is_visible(), "Price for Espresso not found"
            print("✅ Menu content verification passed.")

            # 7. Navigate to Prices
            # Open sidebar again as clicking a link closes it
            hamburger.click()
            page.wait_for_timeout(500)

            prices_link = page.locator('#sidebar a[href="#prices"]')
            prices_link.click()
            page.wait_for_timeout(100)

            # 8. Verify Prices Content
            assert content.locator("text=Cappuccino").is_visible(), "Cappuccino not found in Prices"
            assert content.locator("text=55₺").is_visible(), "Price for Cappuccino not found"
            print("✅ Prices content verification passed.")

        except Exception as e:
            print(f"❌ Verification failed: {e}")
            page.screenshot(path="verification/failure.png")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    verify_cafe_website()
