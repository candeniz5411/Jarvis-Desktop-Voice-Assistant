document.addEventListener("DOMContentLoaded", () => {
    // Menu items data with prices
    const menuItems = [
        { name: "Espresso", price: 45 },
        { name: "Cappuccino", price: 55 },
        { name: "Latte", price: 60 },
        { name: "Türk Kahvesi", price: 40 },
        { name: "Çay", price: 25 },
        { name: "Cheesecake", price: 70 },
        { name: "Kruvasan", price: 50 },
        { name: "Sandviç", price: 80 },
        { name: "Soğuk Kahve", price: 65 },
        { name: "Limonata", price: 35 }
    ];

    // Sidebar and overlay elements
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const appContent = document.getElementById("app-content");

    // Functions to open and close the sidebar
    const openSidebar = () => {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
    };

    const closeSidebar = () => {
        sidebar.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
    };

    // Event listeners for opening/closing sidebar
    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Also close sidebar when a link inside it is clicked (mobile friendly)
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Content templates for routing
    const pages = {
        "/": `
            <div class="text-center">
                <h2 class="text-3xl font-heading font-bold mb-4">Hoş Geldiniz!</h2>
                <p class="mb-6 text-lg">En iyi kahve deneyimi için doğru yerdesiniz. Özenle seçilmiş çekirdeklerimiz ve sıcacık ortamımızla sizi bekliyoruz.</p>
                <img src="./Images/coffee-main.jpg" alt="Kafe Atmosferi" class="w-full max-w-2xl mx-auto rounded-lg shadow-md object-cover h-64 sm:h-96">
            </div>
        `,
        "/hakkinda": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Hakkımızda</h2>
                <p class="text-lg mb-4">Şehrin kalbinde, kahve tutkunları için huzurlu bir kaçış noktası. Yılların tecrübesiyle, dünyanın dört bir yanından getirdiğimiz en kaliteli kahve çekirdeklerini sizler için özenle kavuruyor ve demliyoruz.</p>
                <p class="text-lg">Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir ortam sunmaktır.</p>
            </div>
        `,
        "/destek": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Destek</h2>
                <p class="text-lg mb-4">Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atabilir veya özel talepleriniz için iletişim formumuzu kullanabilirsiniz.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Sipariş ve Teslimat</li>
                    <li>Ürün İadeleri</li>
                    <li>Geri Bildirimleriniz</li>
                </ul>
            </div>
        `,
        "/iletisim": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">İletişim</h2>
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahveci Sokak No: 42, Lezzet Mahallesi, İstanbul</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0212 555 00 00</p>
                <p class="text-lg mb-6"><strong>E-posta:</strong> merhaba@kafewebsitesi.com</p>

                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">İsim</label>
                        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500 p-2 border" placeholder="Adınız Soyadınız">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Mesaj</label>
                        <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500 p-2 border" placeholder="Mesajınız..."></textarea>
                    </div>
                    <button type="button" class="bg-brown-900 text-cream px-4 py-2 rounded shadow hover:bg-brown-800 transition-colors">Gönder</button>
                </form>
            </div>
        `,
        "/sube-konumlari": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div class="bg-brown-100 p-4 rounded-lg">
                        <h3 class="text-xl font-bold font-heading mb-2">Merkez Şube</h3>
                        <p>Kahveci Sokak No: 42, Kadıköy, İstanbul</p>
                    </div>
                    <div class="bg-brown-100 p-4 rounded-lg">
                        <h3 class="text-xl font-bold font-heading mb-2">Sahil Şube</h3>
                        <p>Deniz Yolu Caddesi No: 15, Beşiktaş, İstanbul</p>
                    </div>
                    <div class="bg-brown-100 p-4 rounded-lg">
                        <h3 class="text-xl font-bold font-heading mb-2">Kampüs Şube</h3>
                        <p>Üniversite Bulvarı No: 88, Sarıyer, İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        "/menu-icerikleri": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex items-center p-3 border rounded shadow-sm hover:shadow-md transition-shadow">
                            <div class="h-12 w-12 bg-brown-900 text-cream rounded-full flex items-center justify-center font-bold text-xl mr-4">
                                ${item.name.charAt(0)}
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">${item.name}</h3>
                                <p class="text-sm text-gray-600">Özenle hazırlanmış enfes lezzet.</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `,
        "/fiyatlar": `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Fiyatlar</h2>
                <div class="max-w-xl mx-auto bg-white border rounded-lg shadow-sm overflow-hidden">
                    <ul class="divide-y divide-gray-200">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center p-4 hover:bg-brown-100 transition-colors">
                                <span class="font-medium text-lg">${item.name}</span>
                                <span class="font-bold text-xl text-brown-900">${item.price}₺</span>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </div>
        `
    };

    // Router function
    const router = () => {
        // Get the hash from the URL, default to "/"
        let path = window.location.hash.slice(1) || "/";

        // Handle routes that might not exist
        if (!pages[path]) {
            path = "/";
            window.location.hash = "#/";
        }

        // Render the content
        appContent.innerHTML = pages[path];

        // Scroll to top
        window.scrollTo(0, 0);
    };

    // Listen to hash changes for routing
    window.addEventListener("hashchange", router);

    // Initial load
    router();
});