import os
from playwright.sync_api import sync_playwright

def verify_cafe_website():
    # Get the absolute path to the index.html file
    file_path = os.path.abspath("cafe-website/index.html")
    file_url = f"file://{file_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Set viewport to ensure sidebar fits
        context = browser.new_context(viewport={"width": 414, "height": 896})
        page = context.new_page()

        print(f"Opening {file_url}...")
        page.goto(file_url)

        # 1. Verify Page Title
        title = page.title()
        print(f"Page Title: {title}")
        assert "Kahve Dükkanı" in title

        # 2. Verify Hamburger Menu Exists
        menu_btn = page.locator("#menu-btn")
        assert menu_btn.is_visible()
        print("Hamburger menu button is visible.")

        # 3. Click Hamburger Menu and Verify Sidebar
        print("Clicking hamburger menu...")
        menu_btn.click()

        # Wait for sidebar transition (simple wait or check class)
        sidebar = page.locator("#sidebar")
        # Check if sidebar is now visible/has correct class
        # In our implementation, we remove -translate-x-full and add translate-x-0
        page.wait_for_timeout(500) # Wait for animation

        # Check if a link in sidebar is visible
        menu_link = page.locator("#sidebar a[href='#menu']")
        assert menu_link.is_visible()
        print("Sidebar opened, 'Menü İçerikleri' link is visible.")

        # 4. Navigate to 'Fiyatlar' (Prices)
        prices_link = page.locator("#sidebar a[href='#prices']")
        print("Clicking 'Fiyatlar' link...")
        box = prices_link.bounding_box()
        print(f"Prices Link Bounding Box: {box}")
        prices_link.click()

        # Wait for content update
        page.wait_for_selector("h2:has-text('Fiyat Listesi')")
        print("Navigated to Prices page.")

        # Verify specific price item
        espresso_price = page.locator("text=Espresso").first
        price_val = page.locator("text=45₺").first

        assert espresso_price.is_visible()
        assert price_val.is_visible()
        print("Verified price: Espresso - 45₺")

        # 5. Navigate to 'Menü İçerikleri'
        # Open sidebar again since it closes on click (mobile behavior logic)
        # But wait, did we simulate mobile? Default viewport is 1280x720 usually.
        # Our logic closes sidebar on link click regardless of viewport in app.js?
        # Yes: `closeSidebar()` is called in `router`.

        # So we need to open sidebar again?
        # Actually, let's just check if we can click the link if it's visible?
        # If sidebar closed, links are hidden (off-canvas).
        # So we must click menu button again.

        print("Opening sidebar again...")
        menu_btn.click()
        page.wait_for_timeout(500)

        print("Clicking 'Menü İçerikleri'...")
        menu_link.click()

        # Wait for content
        page.wait_for_selector("h2:has-text('Menü İçerikleri')")
        print("Navigated to Menu Contents page.")

        # Take screenshot
        screenshot_path = "cafe-website/verification/screenshot_menu.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()
        print("Verification successful!")

if __name__ == "__main__":
    verify_cafe_website()
