import os
import sys
from playwright.sync_api import sync_playwright

def run():
    # Get the absolute path to the index.html file
    file_path = os.path.abspath("cafe-website/index.html")
    file_url = f"file://{file_path}"

    print(f"Testing URL: {file_url}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to test responsive design and hamburger menu
        page = browser.new_page(viewport={"width": 375, "height": 812})

        page.goto(file_url)
        page.wait_for_load_state("domcontentloaded")

        # Open Sidebar
        print("Opening sidebar...")
        page.click("#menu-btn")
        # Wait for transition
        page.wait_for_timeout(500)

        # Navigate to Menu
        print("Navigating to Menu...")
        menu_link = page.locator("#sidebar a[href='#menu']")
        menu_link.click()

        # Wait for content update
        page.wait_for_timeout(1000)

        # Take screenshot of the menu page
        screenshot_path = "verification/cafe_menu.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    try:
        run()
    except Exception as e:
        print(f"Test failed: {e}")
        sys.exit(1)