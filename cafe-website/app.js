document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    const menuItems = [
        { name: 'Espresso', price: '45₺' },
        { name: 'Cappuccino', price: '55₺' },
        { name: 'Latte', price: '60₺' },
        { name: 'Türk Kahvesi', price: '40₺' },
        { name: 'Çay', price: '25₺' },
        { name: 'Cheesecake', price: '70₺' },
        { name: 'Kruvasan', price: '50₺' },
        { name: 'Sandviç', price: '80₺' },
        { name: 'Soğuk Kahve', price: '65₺' },
        { name: 'Limonata', price: '35₺' }
    ];

    const routes = {
        '': renderHome,
        '#hakkinda': () => `
            <h2 class="text-3xl font-bold mb-4">Hakkında</h2>
            <p class="text-lg leading-relaxed">Modern ve minimalist kahve dünyamıza hoş geldiniz. En kaliteli çekirdekleri özenle seçiyor ve sizin için en iyi kahveyi hazırlıyoruz. Rahat ortamımızda günün stresinden uzaklaşın.</p>
        `,
        '#destek': () => `
            <h2 class="text-3xl font-bold mb-4">Destek</h2>
            <p class="text-lg leading-relaxed">Müşteri memnuniyeti bizim için önceliktir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorunuz varsa bize ulaşmaktan çekinmeyin.</p>
        `,
        '#iletisim': () => `
            <h2 class="text-3xl font-bold mb-4">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Lezzet Mahallesi, İstanbul</p>
                <p class="mb-2"><strong>Telefon:</strong> 0212 555 12 34</p>
                <p><strong>E-posta:</strong> merhaba@kafem.com</p>
            </div>
        `,
        '#subeler': () => `
            <h2 class="text-3xl font-bold mb-4">Şube Konumları</h2>
            <ul class="space-y-4">
                <li class="bg-white p-4 rounded-lg shadow-md"><strong>Merkez Şube:</strong> Kadıköy, İstanbul</li>
                <li class="bg-white p-4 rounded-lg shadow-md"><strong>Kuzey Şube:</strong> Beşiktaş, İstanbul</li>
                <li class="bg-white p-4 rounded-lg shadow-md"><strong>Güney Şube:</strong> Çankaya, Ankara</li>
            </ul>
        `,
        '#menu': renderMenu,
        '#fiyatlar': renderMenu // Aynı içeriği gösterelim ya da sadece liste olarak
    };

    function renderHome() {
        return `
            <div class="text-center">
                <h2 class="text-4xl font-bold mb-2">Hoş Geldiniz</h2>
                <p class="text-xl mb-8 text-gray-600 font-serif italic">Kahvenin en saf hali...</p>
                <div class="rounded-xl overflow-hidden shadow-2xl mb-8 max-w-2xl mx-auto">
                    <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-96">
                </div>
                <button onclick="window.location.hash='#menu'" class="bg-brown-900 text-white px-8 py-3 rounded-full font-bold hover:bg-brown-800 transition shadow-lg">Menüyü İncele</button>
            </div>
        `;
    }

    function renderMenu() {
        let html = '<h2 class="text-3xl font-bold mb-6">Menü & Fiyatlar</h2>';
        html += '<div class="bg-white rounded-lg shadow-md overflow-hidden">';
        html += '<ul class="divide-y divide-gray-200">';

        menuItems.forEach(item => {
            html += `
                <li class="flex justify-between items-center p-4 hover:bg-brown-100 transition">
                    <span class="text-lg font-bold">${item.name}</span>
                    <span class="text-lg font-serif text-brown-900 font-bold">${item.price}</span>
                </li>
            `;
        });

        html += '</ul></div>';
        return html;
    }

    function router() {
        const hash = window.location.hash;
        const renderFunction = routes[hash] || routes[''];
        app.innerHTML = renderFunction();
    }

    window.addEventListener('hashchange', router);
    router(); // Initial load
});