document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('#sidebar a');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Data ---
    const menuItems = [
        { name: 'Espresso', price: 45 },
        { name: 'Cappuccino', price: 55 },
        { name: 'Latte', price: 60 },
        { name: 'Türk Kahvesi', price: 40 },
        { name: 'Çay', price: 25 },
        { name: 'Cheesecake', price: 70 },
        { name: 'Kruvasan', price: 50 },
        { name: 'Sandviç', price: 80 },
        { name: 'Soğuk Kahve', price: 65 },
        { name: 'Limonata', price: 35 }
    ];

    // --- Pages Content Generators ---
    const pages = {
        home: () => `
            <div class="text-center">
                <h1 class="font-playfair text-4xl md:text-5xl font-bold mb-6">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-lg mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla gününüzü güzelleştirmek için buradayız.</p>
                <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı Görseli" class="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8 object-cover aspect-video" onerror="this.src='https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80'">
            </div>
        `,
        hakkinda: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">Hakkımızda</h1>
                <p class="mb-4">Kahve Dükkanı olarak amacımız, sadece kahve satmak değil, misafirlerimize unutulmaz bir deneyim sunmaktır. Özenle seçtiğimiz çekirdeklerimizi, usta baristalarımızın ellerinde sanata dönüştürüyoruz.</p>
                <p>Sıcak, samimi ve huzurlu ortamımızda sizleri ağırlamaktan mutluluk duyuyoruz.</p>
            </div>
        `,
        destek: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">Destek</h1>
                <p class="mb-4">Herhangi bir sorun yaşarsanız veya geri bildirimde bulunmak isterseniz bize ulaşabilirsiniz. Müşteri memnuniyeti bizim için her şeyden önemlidir.</p>
                <p class="font-bold">Sıkça Sorulan Sorular:</p>
                <ul class="list-disc pl-5 mt-2 space-y-2">
                    <li>Çalışma saatleriniz nedir? (Her gün 08:00 - 22:00)</li>
                    <li>Sipariş verebilir miyim? (Şu an için sadece gel-al ve mağaza içi hizmet vermekteyiz.)</li>
                </ul>
            </div>
        `,
        iletisim: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">İletişim</h1>
                <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 12, Lezzet Mahallesi, İstanbul</p>
                <p class="mb-2"><strong>Telefon:</strong> 0 (212) 555 00 00</p>
                <p class="mb-6"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
            </div>
        `,
        subeler: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-gray-200 p-4 rounded bg-[#FFFDD0]">
                        <h3 class="font-bold text-xl mb-2">Merkez Şube</h3>
                        <p>Kahve Sokak No: 12, Lezzet Mahallesi, İstanbul</p>
                    </div>
                    <div class="border border-gray-200 p-4 rounded bg-[#FFFDD0]">
                        <h3 class="font-bold text-xl mb-2">Sahil Şubesi</h3>
                        <p>Deniz Caddesi No: 45, Kordon, İzmir</p>
                    </div>
                    <div class="border border-gray-200 p-4 rounded bg-[#FFFDD0]">
                        <h3 class="font-bold text-xl mb-2">Park Şubesi</h3>
                        <p>Yeşil Vadi Parkı İçi, Ankara</p>
                    </div>
                </div>
            </div>
        `,
        menu: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">Menü İçerikleri</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between border-b border-gray-100 py-2">
                            <span>${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: () => `
            <div class="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
                <h1 class="font-playfair text-3xl font-bold mb-6 border-b border-gray-200 pb-2">Fiyatlar</h1>
                <div class="space-y-3">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center border-b border-gray-200 py-3">
                            <span class="text-lg">${item.name}</span>
                            <span class="font-bold text-xl font-playfair">${item.price}₺</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // --- Simple Router ---
    const appContainer = document.getElementById('app');

    function renderPage() {
        let hash = window.location.hash.substring(1);
        if (!hash || !pages[hash]) {
            hash = 'home';
        }
        appContainer.innerHTML = pages[hash]();
        window.scrollTo(0,0);
    }

    window.addEventListener('hashchange', renderPage);
    // Initial render
    renderPage();
});
