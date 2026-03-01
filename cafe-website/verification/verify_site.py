from playwright.sync_api import Page, expect, sync_playwright
import os

def test_cafe_mobile_view(page: Page):
    # Get absolute path for local file testing based on script location
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_path = f"file://{os.path.join(base_dir, 'index.html')}"

    # Go to local file
    page.goto(file_path, wait_until="domcontentloaded")

    # Take screenshot of the home page
    page.screenshot(path="cafe-website/verification/home_mobile.png")

    # 1. Verify hamburger menu is visible
    menu_toggle = page.locator("#menu-toggle")
    expect(menu_toggle).to_be_visible()

    # 2. Click the hamburger menu to open sidebar
    menu_toggle.click()

    # Wait for sidebar to transition in (remove -translate-x-full class)
    sidebar = page.locator("#sidebar")
    page.wait_for_timeout(500) # wait for animation

    # Take screenshot with open sidebar
    page.screenshot(path="cafe-website/verification/sidebar_open_mobile.png")

    # 3. Verify sidebar links exist
    menu_link = page.locator("#sidebar a[href='#/menu-icerikleri']")
    expect(menu_link).to_be_visible()

    # 4. Click a link to navigate and auto-close sidebar
    menu_link.click()
    page.wait_for_timeout(500) # wait for close animation

    # Take screenshot of the menu page
    page.screenshot(path="cafe-website/verification/menu_page_mobile.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        # Launch with mobile viewport simulation
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 414, 'height': 896}, # iPhone XR/11 size
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True
        )
        page = context.new_page()
        try:
            test_cafe_mobile_view(page)
            print("Test passed and screenshots generated.")
        except Exception as e:
            print(f"Test failed: {e}")
        finally:
            context.close()
            browser.close()
