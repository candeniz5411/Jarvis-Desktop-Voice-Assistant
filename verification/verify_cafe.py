import os
import time
from playwright.sync_api import sync_playwright

def verify_cafe():
    cwd = os.getcwd()
    file_path = f"file://{cwd}/cafe-website/index.html"

    print(f"Testing: {file_path}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(file_path)

        # 1. Check Title
        title = page.title()
        print(f"Page Title: {title}")
        assert "Kafe Keyfi" in title

        # 2. Check Hamburger Button
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible()
        print("Hamburger menu button is visible.")

        # 3. Open Sidebar
        # Initial state: sidebar has class -translate-x-full (hidden off screen)
        sidebar = page.locator("#sidebar")
        classes = sidebar.get_attribute("class")
        assert "-translate-x-full" in classes
        print("Sidebar is initially hidden.")

        menu_btn.click()
        # Wait for transition - check if class is removed
        page.wait_for_function("!document.getElementById('sidebar').classList.contains('-translate-x-full')")
        print("Sidebar opened successfully.")

        # 4. Navigate to Menu
        # Be specific to the sidebar link
        menu_link = page.locator("#sidebar a[href='#menu-icerikleri']")
        menu_link.click()

        # Wait for content update
        page.wait_for_selector("text=Espresso")

        # 5. Verify Content
        content = page.content()
        assert "Espresso" in content
        assert "45₺" in content
        assert "Cappuccino" in content
        print("Menu content verified (Espresso found).")

        # 6. Navigate to Prices
        # Open sidebar again (it might have closed if we implemented auto-close on mobile,
        # but my code doesn't auto-close unless the link is inside the sidebar which it is)

        # Check if sidebar is closed (my code toggles it).
        # When clicking a link in sidebar, my code:
        # document.querySelectorAll('#sidebar a').forEach(link => ... toggleSidebar())
        # So sidebar should be closed now.

        menu_btn.click() # Open it again
        page.wait_for_function("!document.getElementById('sidebar').classList.contains('-translate-x-full')")

        price_link = page.locator("a[href='#fiyatlar']")
        price_link.click()

        page.wait_for_selector("h2:has-text('Fiyat Listesi')")
        assert "Fiyat Listesi" in page.content()
        print("Prices page verified.")

        browser.close()
        print("All checks passed!")

if __name__ == "__main__":
    verify_cafe()
