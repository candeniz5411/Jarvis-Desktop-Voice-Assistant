import os
from playwright.sync_api import sync_playwright

def verify_cafe_website():
    # Get absolute path to index.html
    base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'index.html'))
    file_url = f"file://{base_path}"

    with sync_playwright() as p:
        # Use a mobile viewport to test responsive design and hamburger menu
        iphone_11 = p.devices['iPhone 11']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone_11)
        page = context.new_page()

        print(f"Loading page: {file_url}")
        page.goto(file_url, wait_until="domcontentloaded")

        # 1. Verify Title
        title = page.title()
        assert "Kahve Dükkanı" in title
        print("✅ Title verification passed.")

        # 2. Verify Hamburger Menu Exists and Sidebar is initially hidden
        # Note: Sidebar has transform -100%, so it's technically "visible" in DOM but off-screen.
        # We check if it has the class 'open'.
        sidebar = page.locator("#sidebar")
        assert "open" not in sidebar.get_attribute("class")
        print("✅ Sidebar initially hidden.")
        page.screenshot(path="cafe-website/verification/screenshots/1_home.png")

        # 3. Open Sidebar
        page.click("#hamburger-btn")
        # Wait for transition if necessary or check class immediately
        page.wait_for_timeout(500)
        assert "open" in sidebar.get_attribute("class")
        print("✅ Sidebar opened via hamburger menu.")
        page.screenshot(path="cafe-website/verification/screenshots/2_sidebar_open.png")

        # 4. Navigate to "Menü İçerikleri"
        # Find link with href="#menu" inside sidebar
        menu_link = page.locator("#sidebar a[href='#menu']")
        menu_link.click()

        # Sidebar should close automatically on mobile after click
        page.wait_for_timeout(500)
        assert "open" not in sidebar.get_attribute("class")
        print("✅ Sidebar closed after navigation.")

        # 5. Verify Content Update (Menu Items)
        # Check for "Espresso" and "45₺"
        # Use exact match for heading to avoid matching descriptions containing "Espresso"
        espresso = page.get_by_role("heading", name="Espresso", exact=True)
        price = page.locator("text=45₺").first # Use .first just in case, though 45₺ should be unique to Espresso in this list

        # Wait for content to render
        espresso.wait_for(state="visible")
        assert espresso.is_visible()
        assert price.is_visible()
        print("✅ Menu content (Espresso 45₺) verified.")
        page.screenshot(path="cafe-website/verification/screenshots/3_menu_content.png")

        # 6. Navigate to "Fiyatlar"
        # We need to open sidebar again
        page.click("#hamburger-btn")
        page.wait_for_timeout(500)

        prices_link = page.locator("#sidebar a[href='#prices']")
        prices_link.click()

        # Verify Price List Header
        header = page.locator("h2:has-text('Fiyat Listesi')")
        header.wait_for(state="visible")
        assert header.is_visible()
        print("✅ Prices page verified.")

        browser.close()

if __name__ == "__main__":
    verify_cafe_website()
