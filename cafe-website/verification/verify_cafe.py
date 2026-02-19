from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to properly test the hamburger menu
        context = browser.new_context(viewport={"width": 375, "height": 812})
        page = context.new_page()

        # Calculate absolute path
        cwd = os.getcwd()
        file_path = f"file://{cwd}/cafe-website/index.html"

        print(f"Navigating to {file_path}")
        page.goto(file_path, wait_until="domcontentloaded")

        # 1. Verify Home Page
        print("Verifying Home Page...")
        page.wait_for_selector("#home-section")

        # 2. Click Hamburger Menu
        print("Clicking Hamburger Menu...")
        page.click("#hamburger-btn")

        # 3. Wait for Sidebar
        print("Waiting for Sidebar...")
        # Since we use CSS transform, we check if the class '-translate-x-full' is removed
        # or check if overlay is visible
        page.wait_for_selector("#sidebar-overlay.overlay-active", state="hidden") # wait for overlay to not be hidden?
        # Actually my JS removes 'hidden' from overlay.
        page.wait_for_selector("#sidebar-overlay:not(.hidden)")

        # 4. Click 'Fiyatlar' link in sidebar
        print("Clicking 'Fiyatlar'...")
        # Select the link with text "Fiyatlar" inside the sidebar
        page.click("#sidebar a[href='#prices']")

        # 5. Verify Prices Section is visible
        print("Verifying Prices Section...")
        page.wait_for_selector("#prices-section:not(.hidden)")

        # 6. Verify Content (e.g. Espresso)
        print("Verifying 'Espresso' text...")
        content = page.content()
        if "Espresso" in content and "45₺" in content:
            print("Found Espresso and 45₺")
        else:
            print("FAILED: content missing")
            exit(1)

        # 7. Take Screenshot of the Prices page
        screenshot_path = "cafe-website/verification/verification_prices.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()
