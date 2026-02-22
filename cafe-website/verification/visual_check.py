import os
import time
from playwright.sync_api import sync_playwright

def test_cafe_website():
    # Get absolute path to index.html
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(current_dir)
    index_path = os.path.join(project_root, 'index.html')
    file_url = f"file://{index_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport to test responsive design as requested
        page = browser.new_page(viewport={'width': 375, 'height': 812})

        print(f"Opening {file_url}")
        page.goto(file_url)

        # 1. Check Home Page Elements
        print("Checking Home Page...")
        assert page.is_visible("text=Kahve Dükkanı")
        assert page.is_visible("#menu-btn")

        # 2. Open Sidebar
        print("Opening Sidebar...")
        page.click("#menu-btn")
        # Wait for transition
        time.sleep(0.5)

        # Check if sidebar is active (by checking class or visibility of links)
        sidebar = page.locator("#sidebar")
        assert "active" in sidebar.get_attribute("class")

        # 3. Navigate to Prices (Fiyatlar)
        print("Navigating to Prices...")
        # Make sure the link is visible/clickable
        page.click("text=Fiyatlar")

        # Wait for routing content update
        time.sleep(0.5)

        # Verify content
        print("Verifying Prices...")
        content = page.locator("#app").inner_text()
        assert "Fiyat Listesi" in content
        assert "Espresso" in content
        assert "45₺" in content
        assert "Sandviç" in content
        assert "80₺" in content

        # 4. Open Sidebar again and Navigate to Menu Contents
        print("Opening Sidebar again...")
        page.click("#menu-btn")
        time.sleep(0.5)

        print("Navigating to Menu Contents...")
        page.click("text=Menü İçerikleri")

        time.sleep(0.5)

        print("Verifying Menu Contents...")
        content = page.locator("#app").inner_text()
        assert "Menü İçerikleri" in content
        assert "Yoğun ve aromatik İtalyan kahvesi" in content # Description check

        print("All checks passed!")
        browser.close()

if __name__ == "__main__":
    test_cafe_website()
