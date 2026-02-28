from playwright.sync_api import sync_playwright
import os
import time

def verify_site():
    print("Starting Playwright verification...")
    with sync_playwright() as p:
        # Using a mobile viewport
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 414, "height": 896})
        page = context.new_page()

        # Get absolute path for local testing
        file_path = f"file://{os.path.abspath('cafe-website/index.html')}"
        print(f"Navigating to {file_path}")

        # Avoid networkidle on local files, use domcontentloaded
        page.goto(file_path, wait_until="domcontentloaded")

        # Wait a moment for dynamic rendering
        page.wait_for_timeout(1000)

        # 1. Take a screenshot of the home page
        print("Taking screenshot of home page...")
        page.screenshot(path="cafe-website/verification/home_mobile.png", full_page=True)

        # 2. Open the sidebar
        print("Opening sidebar...")
        menu_btn = page.locator("#menu-btn")
        menu_btn.click()

        # Wait for the sidebar transition (300ms defined in css)
        page.wait_for_timeout(500)

        # Verify sidebar is visible
        sidebar = page.locator("#sidebar")
        is_visible = sidebar.is_visible()
        print(f"Sidebar is visible: {is_visible}")

        print("Taking screenshot of open sidebar...")
        page.screenshot(path="cafe-website/verification/sidebar_open.png")

        # 3. Click on a specific sidebar link (e.g. Fiyatlar)
        print("Clicking 'Fiyatlar' link in sidebar...")
        # Using specific selector as per memory
        fiyatlar_link = page.locator("#sidebar a[href='#fiyatlar']")
        fiyatlar_link.click()

        # Wait for routing and transition
        page.wait_for_timeout(500)

        # Verify routing worked (heading should say 'Fiyat Listesi')
        heading = page.locator("h2").first
        heading_text = heading.inner_text()
        print(f"Current page heading: {heading_text}")

        print("Taking screenshot of Fiyatlar page...")
        page.screenshot(path="cafe-website/verification/fiyatlar_page.png", full_page=True)

        # 4. Check if sidebar auto-closed
        print("Checking if sidebar closed after link click...")
        # Check if the overlay has the 'hidden' class, or if sidebar is translated
        # It should have -translate-x-full
        is_sidebar_hidden = "-translate-x-full" in sidebar.get_attribute("class")
        print(f"Sidebar is hidden: {is_sidebar_hidden}")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_site()
