import os
import sys
from playwright.sync_api import sync_playwright

def verify_cafe_website():
    # Construct the absolute path to the index.html file
    base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_url = f"file://{os.path.join(base_path, 'index.html')}"

    print(f"Testing URL: {file_url}")

    with sync_playwright() as p:
        # Use a mobile viewport to test responsive design and sidebar
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 414, 'height': 896}) # iPhone 11 Pro size

        try:
            page.goto(file_url)
            page.wait_for_load_state("domcontentloaded")

            # 1. Verify Title
            title = page.title()
            assert "Kahve Dükkanı" in title, f"Expected title 'Kahve Dükkanı', but got '{title}'"
            print("✅ Title verification passed.")

            # 2. Verify Hamburger Menu Presence
            hamburger = page.locator("#hamburger-menu")
            assert hamburger.is_visible(), "Hamburger menu should be visible on mobile."
            print("✅ Hamburger menu visibility passed.")

            # 3. Verify Sidebar Interaction
            # Sidebar should be hidden initially (off-canvas)
            sidebar = page.locator("#sidebar")
            # Checking transform style or position is tricky, but we can check bounding box or visibility if it wasn't translated
            # Here we rely on the logic that clicking the button brings it into view

            hamburger.click()
            # Wait for animation
            page.wait_for_timeout(500)

            # Check if a link in the sidebar is visible/clickable
            menu_link = page.locator("#sidebar a[href='#menu-icerikleri']")
            assert menu_link.is_visible(), "Sidebar menu link should be visible after clicking hamburger menu."
            print("✅ Sidebar toggle verification passed.")

            # 4. Navigate to Menu Content
            menu_link.click()
            page.wait_for_timeout(500) # Wait for routing and potential sidebar closing

            # Verify specific menu item exists
            espresso_item = page.locator("text=Espresso")
            assert espresso_item.is_visible(), "Espresso should be listed in the menu."
            print("✅ Menu content verification passed.")

            # 5. Navigate to Prices
            # Re-open sidebar
            hamburger.click()
            page.wait_for_timeout(500)

            prices_link = page.locator("#sidebar a[href='#fiyatlar']")
            prices_link.click()
            page.wait_for_timeout(500)

            # Verify price table content
            price_val = page.locator("text=45₺") # Espresso price
            assert price_val.is_visible(), "Price for Espresso (45₺) should be visible."
            print("✅ Price list verification passed.")

            # Screenshot for visual confirmation
            screenshot_path = os.path.join(os.path.dirname(__file__), "site_verification.png")
            page.screenshot(path=screenshot_path)
            print(f"✅ Screenshot saved to {screenshot_path}")

        except Exception as e:
            print(f"❌ Verification failed: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    verify_cafe_website()
