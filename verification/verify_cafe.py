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

        # 1. Check Title
        print("Checking title...")
        assert "Kahve Dükkanı" in page.title()
        print("Title check passed.")

        # 2. Check Home Content
        print("Checking home content...")
        assert page.is_visible("text=Hoş Geldiniz")
        print("Home content check passed.")

        # 3. Check Sidebar is initially hidden (using the class or visibility)
        # In our implementation, it has -translate-x-full
        print("Checking sidebar initial state...")
        sidebar = page.locator("#sidebar")
        # We can check if it has the class that hides it
        assert "-translate-x-full" in sidebar.get_attribute("class")
        print("Sidebar initial state check passed.")

        # 4. Open Sidebar
        print("Opening sidebar...")
        page.click("#menu-btn")
        # Wait for transition
        page.wait_for_timeout(500)

        # Check if the class was removed
        classes = sidebar.get_attribute("class")
        assert "-translate-x-full" not in classes
        print("Sidebar opened.")

        # 5. Navigate to Menu
        print("Navigating to Menu...")
        # Locator for the menu link inside the sidebar
        menu_link = page.locator("#sidebar a[href='#menu']")
        menu_link.click()

        # Wait for content update
        page.wait_for_timeout(500)

        # Check for menu items
        print("Checking menu items...")
        assert page.is_visible("text=Menü İçerikleri")
        assert page.is_visible("text=Espresso")
        assert page.is_visible("text=45₺")
        assert page.is_visible("text=Sandviç")
        assert page.is_visible("text=80₺")
        print("Menu items check passed.")

        # 6. Navigate to Prices
        print("Navigating to Prices...")
        # Since the sidebar closes on click (mobile behavior), we need to open it again
        # or check if it closed automatically.
        # Our JS implementation closes sidebar on link click.

        # Verify sidebar is closed
        assert "-translate-x-full" in sidebar.get_attribute("class")
        print("Sidebar auto-close check passed.")

        # Open again
        page.click("#menu-btn")
        page.wait_for_timeout(500)

        prices_link = page.locator("#sidebar a[href='#prices']")
        prices_link.click()
        page.wait_for_timeout(500)

        print("Checking price list...")
        assert page.is_visible("text=Fiyat Listesi")
        assert page.is_visible("text=Cappuccino")
        assert page.is_visible("text=55₺")
        print("Price list check passed.")

        browser.close()
        print("All tests passed!")

if __name__ == "__main__":
    try:
        run()
    except Exception as e:
        print(f"Test failed: {e}")
        sys.exit(1)