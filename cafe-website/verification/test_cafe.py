import os
import time
from playwright.sync_api import sync_playwright

def test_cafe_website():
    # Get absolute path to the index.html file
    cwd = os.getcwd()
    file_path = os.path.join(cwd, 'cafe-website', 'index.html')
    url = f"file://{file_path}"

    print(f"Testing URL: {url}")

    with sync_playwright() as p:
        # Launch browser (headless=True for CI/Environment)
        browser = p.chromium.launch(headless=True)
        # Use a mobile-like viewport to test responsiveness
        page = browser.new_page(viewport={"width": 375, "height": 812})

        # 1. Load the page
        page.goto(url)
        # Wait for content to load
        page.wait_for_selector("#app")
        print("Page loaded successfully.")

        # Verify Home Page Content
        assert "Hoş Geldiniz" in page.content()
        print("Home page content verified.")

        # 2. Test Sidebar Toggle
        # Check if sidebar is initially hidden (off-screen)
        sidebar = page.locator("#sidebar")
        # In CSS we use transform translate, so we can check if the button exists and is clickable

        # Click Hamburger Menu
        page.click("#menu-toggle")
        # Wait for transition
        time.sleep(0.5)

        # Check if sidebar is active (has class 'active')
        assert "active" in sidebar.get_attribute("class")
        print("Sidebar opened successfully.")

        # 3. Test Navigation to Menu
        # Click "Menü İçerikleri" link in sidebar
        # The link href is #menu
        page.click("a[href='#menu']")

        # Wait for hash change and render
        time.sleep(0.5)

        # Verify Menu Content
        assert "Menü İçerikleri" in page.content()
        assert "Espresso" in page.content()
        assert "45₺" in page.content()
        print("Navigated to Menu page and verified content.")

        # Take a screenshot
        screenshot_path = os.path.join(cwd, 'cafe-website', 'verification', 'menu_screenshot.png')
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        # 4. Test Navigation to Prices
        # Open sidebar again (it closes on link click in our logic)
        page.click("#menu-toggle")
        time.sleep(0.5)

        page.click("a[href='#prices']")
        time.sleep(0.5)

        assert "Fiyat Listesi" in page.content()
        assert "Cheesecake" in page.content()
        print("Navigated to Prices page and verified content.")

        browser.close()

if __name__ == "__main__":
    try:
        test_cafe_website()
        print("All tests passed!")
    except Exception as e:
        print(f"Test failed: {e}")
        exit(1)
