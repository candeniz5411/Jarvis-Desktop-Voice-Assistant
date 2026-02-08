import os
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to ensure the hamburger menu is the primary navigation method
        # and to test responsiveness as requested.
        page = browser.new_page(viewport={"width": 375, "height": 812})

        # Get absolute path to the file
        file_path = os.path.abspath("cafe-website/index.html")
        page.goto(f"file://{file_path}")

        print("Page loaded.")

        # Verify Title
        assert "Kafe Web Sitesi" in page.title()
        print("Title verified.")

        # Verify Hamburger Menu exists
        menu_btn = page.locator("#menu-toggle")
        assert menu_btn.is_visible()
        print("Hamburger menu found.")

        # Verify Sidebar is initially hidden (using the -translate-x-full class logic or checking bounding box)
        sidebar = page.locator("#sidebar")
        # In Tailwind, -translate-x-full moves it out of view.
        # We can check if it has the class or check bounding box.
        # Let's check the class first.
        assert "-translate-x-full" in sidebar.get_attribute("class")
        print("Sidebar is initially hidden.")

        # Click Menu
        menu_btn.click()
        # Wait for animation
        page.wait_for_timeout(500)

        # Verify Sidebar is visible
        # It should now have 'translate-x-0'
        assert "translate-x-0" in sidebar.get_attribute("class")
        print("Sidebar opened.")

        # Click 'Menü İçerikleri'
        # The link href is #menu
        menu_link = page.locator('#sidebar a[href="#menu"]')
        menu_link.click()

        # Wait for potential rerender (though it's synchronous DOM manipulation, good practice)
        page.wait_for_timeout(500)

        # Verify Content
        content = page.content()
        assert "Espresso" in content
        assert "45₺" in content
        assert "Cheesecake" in content
        print("Menu content verified.")

        # Verify Prices Page
        # Open sidebar again as clicking a link might close it (due to onclick="closeSidebar()")
        menu_btn.click()
        page.wait_for_timeout(500)

        prices_link = page.locator('a[href="#prices"]')
        prices_link.click()
        page.wait_for_timeout(500)

        content = page.content()
        assert "Fiyat Listesi" in content
        assert "Türk Kahvesi" in content
        print("Prices page verified.")

        browser.close()
        print("All checks passed!")

if __name__ == "__main__":
    run()
