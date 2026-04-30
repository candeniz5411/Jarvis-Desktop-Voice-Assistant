document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    // Toggle Sidebar
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

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Menu Data
    const menuData = [
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

    // Views Content
    const views = {
        '': `
            <div class="text-center space-y-6">
                <h2 class="text-3xl font-heading font-bold mb-4">Kafe Keyfi'ne Hoş Geldiniz!</h2>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kafe Atmosferi" class="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-6 object-cover h-64">
                <p class="text-lg">Taze kahvemiz ve nefis tatlılarımızla gününüze keyif katın. Modern ve minimalist ortamımızda sizi ağırlamaktan mutluluk duyarız.</p>
            </div>
        `,
        '#about': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-4">Hakkımızda</h2>
                <p class="text-lg">Kafe Keyfi olarak, kahve tutkusunu en kaliteli çekirdeklerle harmanlayıp sizlere sunuyoruz. Misafirlerimize sadece bir içecek değil, aynı zamanda huzurlu bir ortam vadediyoruz.</p>
                <p class="text-lg">Modern ve minimalist tasarım anlayışımızla oluşturduğumuz mekanımızda, kahvenizin tadını çıkarırken sevdiklerinizle keyifli vakit geçirebilirsiniz.</p>
            </div>
        `,
        '#support': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-4">Destek</h2>
                <p class="text-lg">Her türlü soru, görüş ve öneriniz için buradayız. Müşteri memnuniyeti bizim için her şeyden önemlidir.</p>
                <p class="text-lg">Lütfen deneyimlerinizi bizimle paylaşmaktan çekinmeyin.</p>
            </div>
        `,
        '#contact': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-4">İletişim</h2>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak, No: 12, Lezzet Mahallesi, İstanbul</p>
                    <p class="text-lg mb-2"><strong>Telefon:</strong> 0212 555 12 34</p>
                    <p class="text-lg"><strong>E-posta:</strong> merhaba@kafekeyfi.com</p>
                </div>
            </div>
        `,
        '#locations': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-4">Şube Konumları</h2>
                <ul class="space-y-4">
                    <li class="bg-white p-4 rounded-lg shadow-md border-l-4 border-brown-500">
                        <h3 class="text-xl font-bold">Merkez Şube</h3>
                        <p>Kahve Sokak, No: 12, Lezzet Mahallesi</p>
                    </li>
                    <li class="bg-white p-4 rounded-lg shadow-md border-l-4 border-brown-500">
                        <h3 class="text-xl font-bold">Sahil Şubesi</h3>
                        <p>Deniz Yolu, No: 45, Manzara Mahallesi</p>
                    </li>
                </ul>
            </div>
        `,
        '#menu-items': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${menuData.map(item => `
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brown-100 flex items-center justify-between">
                             <span class="text-xl font-bold text-brown-900">${item.name}</span>
                             <span class="text-lg text-brown-500">₺${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '#prices': `
            <div class="space-y-4">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Fiyatlar</h2>
                <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                    <ul class="divide-y divide-brown-100">
                        ${menuData.map(item => `
                            <li class="py-3 flex justify-between items-center last:border-0">
                                <span class="text-lg font-bold">${item.name}</span>
                                <span class="text-lg text-brown-500 font-semibold">${item.price} ₺</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // Routing Logic
    function handleRoute() {
        let hash = window.location.hash;
        // Default to home if hash is invalid or empty
        if (!views[hash]) {
            hash = '';
        }
        mainContent.innerHTML = views[hash];
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial Load
    handleRoute();
});