import os
from playwright.sync_api import sync_playwright

def verify_cafe_website():
    # Get absolute path to the index.html
    current_dir = os.getcwd()
    file_path = f"file://{os.path.join(current_dir, 'cafe-website', 'index.html')}"

    with sync_playwright() as p:
        # Use a mobile viewport
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 390, 'height': 844}) # iPhone 12 Pro dimensions
        page = context.new_page()

        print(f"Loading page: {file_path}")
        page.goto(file_path)

        # Test 1: Check Title
        title = page.title()
        assert "Kahve Dükkanı" in title, f"Expected title to contain 'Kahve Dükkanı', got '{title}'"
        print("✅ Title Verified")

        # Test 2: Check Hamburger Menu
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible(), "Hamburger menu button not visible"
        print("✅ Hamburger Menu Verified")

        # Test 3: Open Sidebar
        menu_btn.click()
        # Wait for sidebar transition (simple wait or check class)
        page.wait_for_timeout(500)
        sidebar = page.locator("#sidebar")

        # Check if sidebar has the open class or translation is removed
        # In our JS, we toggle 'sidebar-open'
        assert "sidebar-open" in sidebar.get_attribute("class"), "Sidebar did not open (missing 'sidebar-open' class)"
        print("✅ Sidebar Open Verified")

        # Test 4: Check Menu Link and Navigate
        menu_link = page.locator("a[href='#menu']")
        assert menu_link.is_visible(), "Menu link not visible in sidebar"
        menu_link.click()

        # Wait for routing update (fast for local SPA but good to be safe)
        page.wait_for_timeout(200)

        # Test 5: Verify Menu Content
        content_header = page.locator("h2", has_text="Menü İçerikleri")
        assert content_header.is_visible(), "Menu header not found after navigation"

        espresso = page.locator("text=Espresso")
        price = page.locator("text=45₺")

        assert espresso.is_visible(), "Espresso item not found in menu"
        assert price.is_visible(), "Price 45₺ not found in menu"
        print("✅ Menu Content Verified")

        # Test 6: Navigate to Prices
        # Re-open sidebar since clicking a link closes it
        menu_btn.click()
        page.wait_for_timeout(500)

        prices_link = page.locator("a[href='#fiyatlar']")
        prices_link.click()
        page.wait_for_timeout(200)

        prices_header = page.locator("h2", has_text="Fiyat Listesi")
        assert prices_header.is_visible(), "Prices header not found"
        print("✅ Prices Page Verified")

        # Take Screenshot
        screenshot_path = os.path.join(current_dir, "cafe_verification_mobile.png")
        page.screenshot(path=screenshot_path)
        print(f"✅ Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    try:
        verify_cafe_website()
        print("\n🎉 All verifications passed!")
    except Exception as e:
        print(f"\n❌ Verification failed: {e}")
        exit(1)
