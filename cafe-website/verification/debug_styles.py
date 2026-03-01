from playwright.sync_api import sync_playwright
import os

def check():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        file_path = f"file://{os.path.abspath('cafe-website/index.html')}"
        print(f"Loading: {file_path}")
        page.goto(file_path)
        page.wait_for_timeout(1000)

        # Evaluate to see if bg-brand-dark is applied to the button
        color = page.evaluate('getComputedStyle(document.querySelector("a[href=\'#/menu-icerikleri\']")).backgroundColor')
        print(f"Button background color: {color}")

        color2 = page.evaluate('getComputedStyle(document.querySelector("h1")).color')
        print(f"H1 text color: {color2}")

        browser.close()

if __name__ == "__main__":
    check()
