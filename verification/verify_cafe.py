import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Set viewport to mobile to ensure sidebar behaviors (auto-close on click)
        page.set_viewport_size({"width": 375, "height": 812})

        # Get absolute path to the file
        file_path = os.path.abspath("cafe-website/index.html")
        page.goto(f"file://{file_path}")

        print("Page loaded.")

        # Verify Title
        assert "Kafe Keyfi" in page.title()
        print("Title verified.")

        # Verify Navbar exists
        assert page.is_visible("nav")
        print("Navbar verified.")

        # Open Sidebar
        page.click("#menu-btn")
        page.wait_for_timeout(500)

        # Verify Sidebar is visible
        sidebar_class = page.get_attribute("#sidebar", "class")
        assert "-translate-x-full" not in sidebar_class
        print("Sidebar opened verified.")

        # Navigate to Menu
        # On mobile, this should close the sidebar
        page.click("a[href='#menu']")
        page.wait_for_timeout(500)

        # Verify Sidebar is closed
        sidebar_class = page.get_attribute("#sidebar", "class")
        assert "-translate-x-full" in sidebar_class
        print("Sidebar auto-close verified.")

        # Verify Content
        content_text = page.inner_text("#content")
        assert "Espresso" in content_text
        assert "Menü İçerikleri" in content_text
        print("Menu page verified.")

        # Navigate to Prices
        # Sidebar is closed, so we can click menu-btn
        page.click("#menu-btn")
        page.wait_for_timeout(500)

        page.click("a[href='#prices']")
        page.wait_for_timeout(500)

        content_text_prices = page.inner_text("#content")
        assert "45₺" in content_text_prices
        assert "Fiyat Listesi" in content_text_prices
        print("Prices page verified.")

        # Take screenshot
        page.screenshot(path="cafe_preview.png")
        print("Screenshot taken: cafe_preview.png")

        browser.close()

if __name__ == "__main__":
    run()
