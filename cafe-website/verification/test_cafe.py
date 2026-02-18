import os
from playwright.sync_api import sync_playwright

def test_cafe_website():
    # Get absolute path to the HTML file
    # Assuming the script is run from the repo root
    base_path = os.path.abspath("cafe-website/index.html")
    file_url = f"file://{base_path}"

    print(f"Testing file: {file_url}")

    with sync_playwright() as p:
        # Use a mobile viewport to ensure the hamburger menu is the primary navigation method
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 375, "height": 812})

        print("Loading page...")
        page.goto(file_url)

        # 1. Verify Homepage
        # Wait for the content to be populated by JS
        page.wait_for_selector("#app h2")
        welcome_text = page.locator("text=Hoş Geldiniz")
        assert welcome_text.is_visible(), "Homepage welcome text not found"
        print("✓ Homepage verified.")

        # 2. Verify Hamburger Menu & Sidebar
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible(), "Hamburger menu button not visible"

        print("Clicking menu button...")
        menu_btn.click()
        # Wait for transition (CSS 0.3s)
        page.wait_for_timeout(500)

        sidebar = page.locator("#sidebar")
        class_attr = sidebar.get_attribute("class")
        assert "sidebar-open" in class_attr, f"Sidebar did not open. Class attribute: {class_attr}"
        print("✓ Sidebar toggle verified.")

        # 3. Verify Navigation to Menu
        print("Navigating to Menu...")
        menu_link = page.locator("#sidebar a[href='#menu']")
        menu_link.click()

        # Wait for routing update
        page.wait_for_timeout(200)

        # Check if sidebar closed automatically
        class_attr_closed = sidebar.get_attribute("class")
        assert "sidebar-open" not in class_attr_closed, "Sidebar did not auto-close after navigation"
        print("✓ Sidebar auto-close verified.")

        # Check content
        assert page.is_visible("text=Menü İçerikleri"), "Menu page header not found"
        assert page.is_visible("text=Espresso"), "Espresso item not found"
        assert page.is_visible("text=45₺"), "Espresso price not found"
        print("✓ Menu page verified.")

        # 4. Verify Navigation to Prices
        print("Navigating to Prices...")
        menu_btn.click()
        page.wait_for_timeout(500)

        prices_link = page.locator("#sidebar a[href='#prices']")
        prices_link.click()

        page.wait_for_timeout(200)

        assert page.is_visible("text=Fiyat Listesi"), "Prices page header not found"
        assert page.is_visible("text=Cappuccino"), "Cappuccino item not found in prices"
        assert page.is_visible("text=55₺"), "Cappuccino price not found in prices"
        print("✓ Prices page verified.")

        browser.close()
        print("\nAll tests passed successfully!")

if __name__ == "__main__":
    try:
        test_cafe_website()
    except Exception as e:
        print(f"\n❌ Test Failed: {e}")
        exit(1)
