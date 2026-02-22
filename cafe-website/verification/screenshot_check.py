import os
import time
from playwright.sync_api import sync_playwright

def verify_screenshots():
    # Get absolute path to index.html
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(current_dir)
    index_path = os.path.join(project_root, 'index.html')
    file_url = f"file://{index_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to test responsive design
        page = browser.new_page(viewport={'width': 375, 'height': 812})

        print(f"Opening {file_url}")
        page.goto(file_url)

        # 1. Screenshot Home Page
        print("Taking screenshot of Home Page...")
        time.sleep(1) # Ensure assets load
        page.screenshot(path=os.path.join(current_dir, 'home_mobile.png'))

        # 2. Screenshot Sidebar
        print("Opening Sidebar...")
        page.click("#menu-btn")
        time.sleep(0.5) # Wait for transition
        page.screenshot(path=os.path.join(current_dir, 'sidebar_mobile.png'))

        # 3. Screenshot Prices (Fiyatlar)
        print("Navigating to Prices...")
        page.click("text=Fiyatlar")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(current_dir, 'prices_mobile.png'))

        # 4. Screenshot Menu Contents
        print("Opening Sidebar again...")
        page.click("#menu-btn")
        time.sleep(0.5)

        print("Navigating to Menu Contents...")
        page.click("text=Menü İçerikleri")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(current_dir, 'menu_mobile.png'))

        print("Screenshots taken!")
        browser.close()

if __name__ == "__main__":
    verify_screenshots()
