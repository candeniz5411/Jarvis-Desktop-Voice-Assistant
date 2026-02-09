import os
import pytest
from playwright.sync_api import sync_playwright

def test_cafe_website_mobile():
    """
    Verifies the cafe website functionality on a mobile viewport.
    """
    # Absolute path to the HTML file
    file_path = os.path.abspath("cafe-website/index.html")
    file_url = f"file://{file_path}"

    with sync_playwright() as p:
        # Launch browser (headless by default)
        browser = p.chromium.launch()

        # Create a mobile context
        context = browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
        )

        page = context.new_page()

        print(f"Navigating to {file_url}")
        page.goto(file_url)

        # 1. Check Homepage Load
        assert "Kahve Dükkanı" in page.title()
        # Verify hamburger menu exists
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible()

        # 2. Open Sidebar
        print("Clicking menu button...")
        menu_btn.click()

        # Wait for sidebar animation
        page.wait_for_timeout(500)

        sidebar = page.locator("#sidebar")
        # Check if the class '-translate-x-full' is removed (which means it's open)
        # Or check if a link inside is visible and clickable
        menu_link = sidebar.locator("text=Menü İçerikleri")
        assert menu_link.is_visible()

        # 3. Navigate to Menu
        print("Clicking 'Menü İçerikleri'...")
        menu_link.click()

        # Wait for navigation/render
        page.wait_for_timeout(500)

        # Verify content
        content = page.locator("#app")
        print("Verifying menu content...")
        assert content.locator("text=Espresso").is_visible()
        assert content.locator("text=45₺").is_visible()
        assert content.locator("text=Cappuccino").is_visible()

        # 4. Navigate to Prices via Sidebar again
        print("Opening sidebar again...")
        menu_btn.click()
        page.wait_for_timeout(500)

        prices_link = sidebar.locator("text=Fiyatlar")
        print("Clicking 'Fiyatlar'...")
        prices_link.click()
        page.wait_for_timeout(500)

        # Verify table content
        print("Verifying price list...")
        assert content.locator("text=Fiyat Listesi").is_visible()
        assert content.locator("text=Cheesecake").is_visible()
        assert content.locator("text=70₺").is_visible()

        browser.close()

if __name__ == "__main__":
    test_cafe_website_mobile()
