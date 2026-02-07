import os
import time
from playwright.sync_api import sync_playwright

def verify_cafe():
    # Get absolute path to the HTML file
    repo_root = os.getcwd()
    file_path = os.path.join(repo_root, "cafe-website", "index.html")
    file_url = f"file://{file_path}"

    print(f"Testing URL: {file_url}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the page
        page.goto(file_url)

        # 1. Verify Title
        title = page.title()
        assert "Kahve Keyfi" in title, f"Unexpected title: {title}"
        print("✅ Title verification passed.")

        # 2. Verify Sidebar is initially hidden (off-screen)
        sidebar = page.locator("#sidebar")
        # Check if class contains -translate-x-full
        classes = sidebar.get_attribute("class")
        assert "-translate-x-full" in classes, "Sidebar should be hidden initially"
        print("✅ Initial sidebar state verification passed.")

        # 3. Click Hamburger Menu
        page.click("#hamburger-btn")
        # Wait for transition
        time.sleep(0.5)

        # 4. Verify Sidebar is visible (active class, -translate-x-full removed)
        classes = sidebar.get_attribute("class")
        assert "active" in classes, "Sidebar should have active class after click"
        assert "-translate-x-full" not in classes, "Sidebar should not be translated off-screen"
        print("✅ Sidebar toggle verification passed.")

        # 5. Verify Navigation to Menu
        # Click "Menü İçerikleri" link (href="#menu")
        # Locator for link with href="#menu" inside sidebar
        page.click("nav a[href='#menu']")
        time.sleep(0.5)

        # Check if content updated
        content_header = page.locator("#app h2").first
        assert "Menü İçerikleri" in content_header.inner_text(), "Menu page did not load correctly"

        # Check for specific item
        espresso = page.locator("h3:text-is('Espresso')")
        assert espresso.is_visible(), "Espresso item (h3) not found on Menu page"

        # Take screenshot of Menu page
        page.screenshot(path="verification/menu_page.png")
        print("✅ Menu navigation and content verification passed. Screenshot saved.")

        # 6. Verify Mobile Responsiveness
        # Set viewport to mobile size
        page.set_viewport_size({"width": 375, "height": 812})
        page.reload()

        # Check hamburger button is visible (it should be visible on all sizes based on current code, but especially mobile)
        hamburger = page.locator("#hamburger-btn")
        assert hamburger.is_visible(), "Hamburger button not visible on mobile"

        # Click hamburger
        hamburger.click()
        time.sleep(0.5)

        # Verify sidebar opens
        classes = sidebar.get_attribute("class")
        assert "active" in classes, "Sidebar failed to open on mobile"

        # Take screenshot of Mobile Sidebar
        page.screenshot(path="verification/mobile_sidebar.png")
        print("✅ Mobile responsiveness verification passed. Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    try:
        verify_cafe()
        print("\nAll verifications passed successfully! 🚀")
    except Exception as e:
        print(f"\n❌ Verification failed: {e}")
        exit(1)
