import asyncio
import os
from playwright.async_api import async_playwright

async def verify_site():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Use mobile viewport to verify sidebar auto-close and responsive layout
        context = await browser.new_context(viewport={'width': 414, 'height': 896})
        page = await context.new_page()

        # Construct absolute path using __file__
        current_dir = os.path.dirname(os.path.abspath(__file__))
        index_path = os.path.join(current_dir, '..', 'index.html')
        file_url = f"file://{index_path}"

        # Load page (wait for domcontentloaded instead of networkidle for local files)
        await page.goto(file_url, wait_until="domcontentloaded")

        # Verify initial state: Home page content is loaded
        await page.wait_for_selector('h1:has-text("Kahve Dükkanı\'na Hoş Geldiniz")')

        # Verify Sidebar Interaction
        menu_btn = page.locator('#menu-btn')
        sidebar = page.locator('#sidebar')

        # Sidebar should be initially hidden (-translate-x-full class is active)
        # Note: Playwright checks visibility by bounding box, but for classes we can check the class attribute.
        class_attr = await sidebar.get_attribute('class')
        assert '-translate-x-full' in class_attr, "Sidebar should be initially hidden"

        # Open sidebar
        await menu_btn.click()
        # Wait a bit for transition
        await page.wait_for_timeout(500)
        class_attr = await sidebar.get_attribute('class')
        assert '-translate-x-full' not in class_attr, "Sidebar should be visible after click"

        # Click a link in sidebar (e.g., Menü İçerikleri) and verify auto-close and routing
        menu_link = sidebar.locator('a:has-text("Menü İçerikleri")')
        await menu_link.click()

        # Wait for transition
        await page.wait_for_timeout(500)

        # Verify Sidebar closed
        class_attr = await sidebar.get_attribute('class')
        assert '-translate-x-full' in class_attr, "Sidebar should auto-close on mobile after clicking a link"

        # Verify Route content updated
        await page.wait_for_selector('h2:has-text("Menü İçerikleri")')

        # Verify specific items and prices exist using strict locators
        await page.wait_for_selector('text="Espresso"')
        await page.wait_for_selector('text="Cappuccino"')

        # Test Fiyatlar route
        await page.evaluate("window.location.hash = '#fiyatlar'")
        await page.wait_for_selector('h2:has-text("Fiyat Listesi")')
        await page.wait_for_selector('text="45₺"')

        print("Verification successful!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_site())