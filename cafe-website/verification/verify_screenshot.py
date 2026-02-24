import os
from playwright.sync_api import sync_playwright

def verify_screenshots():
    file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../index.html'))
    url = f"file://{file_path}"

    output_dir = os.path.dirname(__file__)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport
        page = browser.new_page(viewport={'width': 414, 'height': 896})

        print(f"Opening {url}...")
        page.goto(url)
        page.wait_for_selector("text=Hoş Geldiniz")

        # 1. Home Screenshot
        home_path = os.path.join(output_dir, "screenshot_home.png")
        page.screenshot(path=home_path)
        print(f"📸 Home screenshot saved to {home_path}")

        # 2. Sidebar Screenshot
        page.click("#menu-btn")
        # Wait for transition (approx 300ms)
        page.wait_for_timeout(500)
        sidebar_path = os.path.join(output_dir, "screenshot_sidebar.png")
        page.screenshot(path=sidebar_path)
        print(f"📸 Sidebar screenshot saved to {sidebar_path}")

        # 3. Prices Screenshot
        page.click("a[href='#prices']")
        page.wait_for_selector("text=Fiyat Listesi")
        prices_path = os.path.join(output_dir, "screenshot_prices.png")
        page.screenshot(path=prices_path)
        print(f"📸 Prices screenshot saved to {prices_path}")

        browser.close()
        return prices_path

if __name__ == "__main__":
    verify_screenshots()
