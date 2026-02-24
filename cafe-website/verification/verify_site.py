import os
from playwright.sync_api import sync_playwright

def verify_site():
    # Use absolute path for file:// protocol
    file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../index.html'))
    url = f"file://{file_path}"

    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport to ensure hamburger menu is the primary navigation method (though it's always there in this design)
        page = browser.new_page(viewport={'width': 414, 'height': 896})

        print(f"Opening {url}...")
        page.goto(url)

        # 1. Verify Title
        title = page.title()
        assert "Kahve Dükkanı" in title, f"Expected title 'Kahve Dükkanı', but got '{title}'"
        print("✅ Title verification passed.")

        # 2. Verify Home Content
        page.wait_for_selector("text=Hoş Geldiniz")
        print("✅ Home content verification passed.")

        # 3. Verify Sidebar Interaction
        # Sidebar should be hidden initially (-translate-x-full)
        sidebar = page.locator("#sidebar")
        # Note: Tailwind uses transform, so checking visibility might need to check class or bounding box.
        # However, off-screen elements are often considered 'hidden' by Playwright if strictly checking visibility in viewport,
        # but let's check the class first.
        assert "-translate-x-full" in sidebar.get_attribute("class"), "Sidebar should have -translate-x-full class initially."

        # Click Hamburger Menu
        print("Clicking hamburger menu...")
        page.click("#menu-btn")

        # Wait for transition
        page.wait_for_timeout(500)

        # Sidebar should now NOT have -translate-x-full or have 'active' class
        assert "active" in sidebar.get_attribute("class"), "Sidebar should have 'active' class after click."
        print("✅ Sidebar open verification passed.")

        # 4. Navigate to Prices
        print("Navigating to Fiyatlar...")
        # Link inside sidebar
        page.click("a[href='#prices']")

        # Wait for content update (simple timeout or selector)
        page.wait_for_selector("text=Fiyat Listesi")

        # 5. Verify Price Content
        print("Verifying prices...")
        content = page.content()
        assert "Espresso" in content, "Espresso not found in prices."
        assert "45₺" in content, "45₺ not found for Espresso."
        assert "Cheesecake" in content, "Cheesecake not found in prices."
        assert "70₺" in content, "70₺ not found for Cheesecake."

        print("✅ Price list verification passed.")

        browser.close()

if __name__ == "__main__":
    try:
        verify_site()
        print("🎉 All verifications passed successfully!")
    except Exception as e:
        print(f"❌ Verification failed: {e}")
        exit(1)
