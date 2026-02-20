import os
import time
from playwright.sync_api import sync_playwright

def test_cafe_website():
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get absolute path to the file
        file_path = os.path.abspath("cafe-website/index.html")
        url = f"file://{file_path}"
        print(f"Navigating to: {url}")
        page.goto(url)

        # 1. Check Title
        print("Checking title...")
        title = page.title()
        print(f"Title found: {title}")
        assert "Kahve Dükkanı" in title

        # 2. Check Hamburger Menu
        print("Checking hamburger menu...")
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible()

        # 3. Open Sidebar
        print("Opening sidebar...")
        menu_btn.click()
        # Wait for transition
        page.wait_for_timeout(500)

        sidebar = page.locator("#sidebar")
        # Verify sidebar class changes (removes -translate-x-full)
        classes = sidebar.get_attribute("class")
        print(f"Sidebar classes: {classes}")
        assert "-translate-x-full" not in classes

        # 4. Navigate to Prices
        print("Navigating to Prices...")
        prices_link = page.locator("a[href='#prices']")
        prices_link.click()

        # Wait for render
        page.wait_for_timeout(500)

        content = page.locator("#app")
        text = content.inner_text()
        print("Checking Price content...")
        assert "Fiyat Listesi" in text
        assert "Espresso" in text
        assert "45 ₺" in text

        # 5. Navigate to Menu Contents
        print("Navigating to Menu Contents...")
        # We need to open the sidebar again because clicking a link closes it (based on my app.js logic)
        menu_btn.click()
        page.wait_for_timeout(500)

        menu_link = page.locator("a[href='#menu']")
        menu_link.click()

        page.wait_for_timeout(500)
        text = content.inner_text()
        print("Checking Menu Description content...")
        assert "Menü İçerikleri" in text
        assert "Yoğun, zengin aromalı klasik İtalyan kahvesi" in text

        browser.close()
        print("All tests passed successfully!")

if __name__ == "__main__":
    test_cafe_website()
