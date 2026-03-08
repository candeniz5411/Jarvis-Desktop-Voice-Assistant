from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport
        context = browser.new_context(viewport={'width': 414, 'height': 896})
        page = context.new_page()

        # Open index.html directly via file protocol, repository is mounted at /app but we can use absolute path
        page.goto("file:///app/cafe-website/index.html", wait_until="domcontentloaded")

        # Ensure it loaded and we have a title
        assert "Kahve Dükkanı" in page.title()

        # Verify hamburger menu exists
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible()

        # Verify sidebar is hidden by checking translation class (-translate-x-full)
        sidebar = page.locator("#sidebar")
        assert "-translate-x-full" in sidebar.get_attribute("class")

        # Click menu button
        menu_btn.click()
        page.wait_for_timeout(500) # Wait for transition

        # Verify sidebar is now visible
        assert "-translate-x-full" not in sidebar.get_attribute("class")

        # Verify links
        assert page.locator("#sidebar a:has-text('Hakkında')").is_visible()
        assert page.locator("#sidebar a:has-text('Destek')").is_visible()
        assert page.locator("#sidebar a:has-text('İletişim')").is_visible()
        assert page.locator("#sidebar a:has-text('Şube Konumları')").is_visible()
        assert page.locator("#sidebar a:has-text('Menü İçerikleri')").is_visible()
        assert page.locator("#sidebar a:has-text('Fiyatlar')").is_visible()

        # Navigate to "Menü İçerikleri"
        page.locator("#sidebar a:has-text('Menü İçerikleri')").click()
        page.wait_for_timeout(500)

        # Sidebar should close on mobile after click
        assert "-translate-x-full" in sidebar.get_attribute("class")

        # Verify menu content
        assert page.locator("h2:has-text('Menü İçerikleri')").is_visible()
        assert page.locator("span:has-text('Espresso')").is_visible()
        assert page.locator("span:has-text('45₺')").is_visible()

        # Take a screenshot
        page.screenshot(path="cafe-website-mobile.png")
        print("Frontend verification passed. Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
