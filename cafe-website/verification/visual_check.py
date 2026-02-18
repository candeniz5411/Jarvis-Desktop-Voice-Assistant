import os
from playwright.sync_api import sync_playwright

def visual_check():
    base_path = os.path.abspath("cafe-website/index.html")
    file_url = f"file://{base_path}"
    output_dir = "cafe-website/verification/screenshots"
    os.makedirs(output_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Desktop View
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto(file_url)
        page.wait_for_timeout(1000) # Wait for image to load
        page.screenshot(path=f"{output_dir}/desktop_home.png")
        print("Captured desktop_home.png")

        # Open Sidebar
        page.click("#menu-btn")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{output_dir}/desktop_sidebar.png")
        print("Captured desktop_sidebar.png")

        # Go to Menu
        page.click("text=Menü İçerikleri")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{output_dir}/desktop_menu.png")
        print("Captured desktop_menu.png")

        # 2. Mobile View
        context_mobile = browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        )
        page_mobile = context_mobile.new_page()
        page_mobile.goto(file_url)
        page_mobile.wait_for_timeout(1000)
        page_mobile.screenshot(path=f"{output_dir}/mobile_home.png")
        print("Captured mobile_home.png")

        page_mobile.click("#menu-btn")
        page_mobile.wait_for_timeout(500)
        page_mobile.screenshot(path=f"{output_dir}/mobile_sidebar.png")
        print("Captured mobile_sidebar.png")

        browser.close()

if __name__ == "__main__":
    visual_check()
