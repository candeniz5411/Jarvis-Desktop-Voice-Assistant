document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
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

    // DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Toggle Sidebar
    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Routing Logic
    const routes = {
        '/': `
            <div class="text-center max-w-2xl mx-auto">
                <img src="./Images/coffee.jpg" alt="Kafe Moka - Taze Kahve" class="w-full h-64 object-cover rounded-xl shadow-lg mb-8">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900">Kafe Moka'ya Hoş Geldiniz!</h2>
                <p class="text-lg mb-6 text-brown-900 leading-relaxed">
                    Şehrin kalbinde, en taze kahve çekirdekleri ve enfes lezzetlerle dolu sıcak bir mola noktası. Sizleri ağırlamaktan mutluluk duyarız.
                </p>
                <a href="#/icerikler" class="inline-block bg-brown-900 text-cream px-6 py-3 rounded-lg font-bold hover:bg-brown-500 transition-colors">Menüyü Keşfet</a>
            </div>
        `,
        '/hakkinda': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">Hakkında</h2>
                <p class="text-lg leading-relaxed text-brown-900">
                    Kafe Moka, 2023 yılında kahve tutkusunu herkesle paylaşmak amacıyla kuruldu. Modern ve minimalist yaklaşımımızla, misafirlerimize sadece bir içecek değil, huzurlu bir deneyim sunmayı hedefliyoruz. Özenle seçilmiş çekirdeklerimiz ve taze atıştırmalıklarımızla her yudumda kaliteyi hissedeceksiniz.
                </p>
            </div>
        `,
        '/destek': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">Destek</h2>
                <p class="text-lg leading-relaxed text-brown-900 mb-4">
                    Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa bizimle iletişime geçmekten çekinmeyin.
                </p>
                <p class="font-medium text-brown-900">Sıkça Sorulan Sorular:</p>
                <ul class="list-disc pl-5 mt-2 text-brown-900 space-y-2">
                    <li>Çalışma saatleriniz nedir? (Hafta içi 08:00 - 22:00)</li>
                    <li>Vegan seçenekleriniz var mı? (Evet, menümüzde belirtilmiştir.)</li>
                    <li>Paket servisiniz bulunuyor mu? (Şu an için sadece gel-al hizmetimiz mevcuttur.)</li>
                </ul>
            </div>
        `,
        '/iletisim': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">İletişim</h2>
                <p class="text-lg leading-relaxed text-brown-900 mb-4">
                    Bize ulaşmak çok kolay! Aşağıdaki iletişim bilgilerinden veya sosyal medya hesaplarımızdan bizi takip edebilirsiniz.
                </p>
                <ul class="space-y-3 text-brown-900 text-lg">
                    <li><strong>Telefon:</strong> +90 (555) 123 45 67</li>
                    <li><strong>E-posta:</strong> merhaba@kafemoka.com</li>
                    <li><strong>Instagram:</strong> @kafemoka</li>
                </ul>
            </div>
        `,
        '/subeler': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>
                <div class="grid gap-6 md:grid-cols-2 mt-6">
                    <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                        <h3 class="font-serif text-xl font-bold mb-2">Merkez Şube</h3>
                        <p class="text-brown-900">Kahveciler Sokak No:1, Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                        <h3 class="font-serif text-xl font-bold mb-2">Sahil Şube</h3>
                        <p class="text-brown-900">Deniz Yolu Caddesi No:42, Beşiktaş / İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        '/icerikler': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">Menü İçerikleri</h2>
                <p class="text-lg mb-6 text-brown-900">En sevilen lezzetlerimizden bazıları:</p>
                <div class="grid gap-4 sm:grid-cols-2">
                    ${menuItems.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow border border-brown-100 flex items-center">
                            <div class="w-3 h-3 rounded-full bg-brown-500 mr-3"></div>
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="max-w-2xl mx-auto">
                <h2 class="font-serif text-3xl font-bold mb-4 text-brown-900 border-b-2 border-brown-500 pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-lg shadow overflow-hidden border border-brown-100 mt-6">
                    <ul class="divide-y divide-brown-100">
                        ${menuItems.map(item => `
                            <li class="p-4 flex justify-between items-center hover:bg-cream transition-colors">
                                <span class="text-lg font-medium text-brown-900">${item.name}</span>
                                <span class="text-lg font-bold text-brown-500">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    const renderRoute = () => {
        let path = window.location.hash.slice(1) || '/';
        app.innerHTML = routes[path] || '<h2 class="font-serif text-2xl font-bold text-center mt-10">Sayfa bulunamadı.</h2>';
    };

    // Listen for hash changes
    window.addEventListener('hashchange', renderRoute);

    // Initial render
    renderRoute();
});
