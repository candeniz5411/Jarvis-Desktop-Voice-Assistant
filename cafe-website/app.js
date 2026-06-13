document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const sidebarLinks = sidebar.querySelectorAll("a");
    const appContainer = document.getElementById("app");

    // Sidebar Toggles
    const openSidebar = () => {
        sidebar.classList.remove("-translate-x-full");
        sidebarOverlay.classList.remove("hidden");
    };

    const closeSidebar = () => {
        sidebar.classList.add("-translate-x-full");
        sidebarOverlay.classList.add("hidden");
    };

    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    sidebarOverlay.addEventListener("click", closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Menu Data
    const menuItems = [
        { name: "Espresso", price: "45₺" },
        { name: "Cappuccino", price: "55₺" },
        { name: "Latte", price: "60₺" },
        { name: "Türk Kahvesi", price: "40₺" },
        { name: "Çay", price: "25₺" },
        { name: "Cheesecake", price: "70₺" },
        { name: "Kruvasan", price: "50₺" },
        { name: "Sandviç", price: "80₺" },
        { name: "Soğuk Kahve", price: "65₺" },
        { name: "Limonata", price: "35₺" },
    ];

    // Page Components
    const pages = {
        home: `
            <div class="flex flex-col items-center justify-center text-center mt-10">
                <img src="Images/coffee.jpg" alt="Kafe Rüstik" class="w-full max-w-lg rounded-lg shadow-lg mb-8 object-cover h-64">
                <h2 class="text-4xl font-heading text-brown-900 mb-4">Kafe Rüstik'e Hoş Geldiniz</h2>
                <p class="text-xl text-brown-700 max-w-2xl">En taze kahve çekirdekleri ve samimi ortamımızla hizmetinizdeyiz. Lezzetin ve huzurun buluşma noktası.</p>
            </div>
        `,
        hakkinda: `
            <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">Hakkımızda</h2>
                <p class="text-lg text-brown-700 leading-relaxed mb-4">
                    Kafe Rüstik, şehrin karmaşasından uzaklaşıp kaliteli bir kahve molası vermek isteyenler için 2020 yılında kuruldu.
                    Amacımız, özenle seçilmiş kahve çekirdeklerini en iyi şekilde işleyerek misafirlerimize sunmak ve onlara sıcak bir yuva hissi yaşatmaktır.
                </p>
                <p class="text-lg text-brown-700 leading-relaxed">
                    Modern ve minimalist tasarımımızla, sadece bir kafe değil, aynı zamanda dostlarınızla vakit geçirebileceğiniz, çalışabileceğiniz veya kitabınızı okurken huzur bulabileceğiniz bir yaşam alanı sunuyoruz.
                </p>
            </div>
        `,
        destek: `
             <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">Destek</h2>
                <p class="text-lg text-brown-700 mb-4">Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya kafemizle ilgili her türlü soru, öneri ve şikayetiniz için destek ekibimizle iletişime geçebilirsiniz.</p>
                <ul class="list-disc pl-5 text-brown-700 text-lg space-y-2">
                    <li>Sıkça Sorulan Sorular</li>
                    <li>Geri Bildirim Formu</li>
                    <li>Sipariş Takibi</li>
                </ul>
            </div>
        `,
        iletisim: `
            <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">İletişim</h2>
                <div class="text-lg text-brown-700 space-y-4">
                    <p><strong>Adres:</strong> Kahve Sokak No: 12, Merkez/Şehir</p>
                    <p><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                    <p><strong>E-posta:</strong> merhaba@kaferustik.com</p>
                    <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
                </div>
            </div>
        `,
        subeler: `
            <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-brown-300 p-4 rounded bg-cream">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Merkez Şube</h3>
                        <p class="text-brown-700">Kahve Sokak No: 12, Merkez/Şehir</p>
                    </div>
                    <div class="border border-brown-300 p-4 rounded bg-cream">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Sahil Şubesi</h3>
                        <p class="text-brown-700">Deniz Cad. No: 45, Sahil/Şehir</p>
                    </div>
                    <div class="border border-brown-300 p-4 rounded bg-cream">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Üniversite Şubesi</h3>
                        <p class="text-brown-700">Kampüs Yolu, Öğrenci Mah.</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-3 hover:bg-cream rounded transition-colors border-b border-brown-100 last:border-0 md:border-0 md:border-b-0">
                            <span class="text-lg text-brown-900 font-bold">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="bg-white p-8 rounded-lg shadow-md mt-10">
                <h2 class="text-3xl font-heading text-brown-900 mb-6 border-b pb-2">Fiyatlar</h2>
                <div class="flex flex-col space-y-3">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-3 bg-cream rounded shadow-sm">
                            <span class="text-lg text-brown-900 font-bold">${item.name}</span>
                            <span class="text-xl text-brown-700 font-heading">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Router
    const router = () => {
        const hash = window.location.hash.substring(1) || "home";
        const content = pages[hash] || pages["home"];
        appContainer.innerHTML = content;
        window.scrollTo(0, 0);
    };

    // Listen to hash changes
    window.addEventListener("hashchange", router);

    // Initial render
    router();
});