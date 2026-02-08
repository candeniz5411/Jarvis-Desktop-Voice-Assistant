import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport
        page = browser.new_page(viewport={"width": 375, "height": 812})

        # Get absolute path to the file
        file_path = os.path.abspath("cafe-website/index.html")
        page.goto(f"file://{file_path}")

        # 1. Screenshot Home Page
        page.screenshot(path="verification/screenshot_home.png")
        print("Screenshot of Home Page taken.")

        # 2. Open Sidebar and Screenshot
        page.locator("#menu-toggle").click()
        page.wait_for_timeout(500) # Wait for animation
        page.screenshot(path="verification/screenshot_sidebar.png")
        print("Screenshot of Sidebar taken.")

        # 3. Navigate to Menu and Screenshot
        page.locator('#sidebar a[href="#menu"]').click()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/screenshot_menu.png")
        print("Screenshot of Menu Page taken.")

        browser.close()

if __name__ == "__main__":
    run()
