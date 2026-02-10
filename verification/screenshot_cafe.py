import os
from playwright.sync_api import sync_playwright

def screenshot_cafe():
    current_dir = os.getcwd()
    file_path = f"file://{current_dir}/cafe-website/index.html"

    with sync_playwright() as p:
        # Use a mobile view to test responsiveness as requested
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()

        # 1. Home Page
        page.goto(file_path)
        page.wait_for_timeout(1000) # Wait for external resources
        page.screenshot(path="verification/1_home_mobile.png")
        print("Captured Home Mobile")

        # 2. Sidebar Open
        page.locator("#hamburger-btn").click()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/2_sidebar_mobile.png")
        print("Captured Sidebar Mobile")

        # 3. Menu Page
        page.locator('#sidebar a[href="#menu"]').click()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/3_menu_mobile.png")
        print("Captured Menu Mobile")

        browser.close()

if __name__ == "__main__":
    screenshot_cafe()
