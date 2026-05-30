document.addEventListener('DOMContentLoaded', () => {
    // Menu elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');
    const appContent = document.getElementById('app-content');

    // Menu toggle logic
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

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Data for Menu Content and Prices
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

    // Routing System
    const routes = {
        '/': `
            <div class="text-center animate-fade-in">
                <h1 class="text-4xl md:text-5xl font-playfair font-bold text-cafe-brown mb-6">Kafe Keyfi'ne Hoş Geldiniz</h1>
                <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Sıcak bir atmosfer, taptaze kahve kokusu ve özenle hazırlanmış lezzetler... Sizi en güzel anılarınızı biriktireceğiniz kafemize bekliyoruz.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl mb-8 border-4 border-cafe-cream">
                    <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-96">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-4 border-b-2 border-cafe-brown pb-2">Hakkımızda</h2>
                <p class="text-lg text-gray-700 mb-4 leading-relaxed">Kafe Keyfi, 2023 yılında kahve tutkusunu ve lezzeti bir araya getirme hayaliyle kuruldu. Amacımız, modern ve minimalist bir ortamda misafirlerimize en kaliteli kahve deneyimini sunmaktır.</p>
                <p class="text-lg text-gray-700 leading-relaxed">Yerel üreticilerden temin ettiğimiz taze çekirdekler ve usta baristalarımızın dokunuşlarıyla hazırladığımız içeceklerimize, günlük hazırlanan taze tatlılarımız eşlik ediyor.</p>
            </div>
        `,
        '/destek': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-4 border-b-2 border-cafe-brown pb-2">Destek</h2>
                <p class="text-lg text-gray-700 mb-4">Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorununuz mu var? Size yardımcı olmaktan memnuniyet duyarız.</p>
                <div class="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Çalışma saatleriniz nedir? (Her gün 08:00 - 22:00)</li>
                        <li>Glutensiz ürününüz var mı? (Evet, glutensiz tatlı seçeneklerimiz mevcuttur.)</li>
                        <li>Paket servisiniz var mı? (Şu an için sadece gel-al hizmetimiz bulunmaktadır.)</li>
                    </ul>
                </div>
            </div>
        `,
        '/iletisim': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-4 border-b-2 border-cafe-brown pb-2">İletişim</h2>
                <p class="text-lg text-gray-700 mb-6">Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.</p>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-cafe-cream p-6 rounded-lg text-cafe-brown shadow-md">
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                        <p class="mb-2"><strong>E-posta:</strong> merhaba@kafekeyfi.com</p>
                        <p><strong>Adres:</strong> Kahve Sokak, No: 42, Kadıköy / İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-4 border-b-2 border-cafe-brown pb-2">Şube Konumları</h2>
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                        <h3 class="text-xl font-bold text-cafe-brown mb-2">Kadıköy Merkez (İstanbul)</h3>
                        <p class="text-gray-600">Moda Caddesi, No: 123</p>
                        <p class="text-sm text-gray-500 mt-2">Hafta içi: 07:00 - 23:00</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                        <h3 class="text-xl font-bold text-cafe-brown mb-2">Beşiktaş Şube (İstanbul)</h3>
                        <p class="text-gray-600">Barbaros Bulvarı, No: 45</p>
                        <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        `,
        '/icerikler': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-6 border-b-2 border-cafe-brown pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    ${menuItems.map(item => `
                        <div class="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <span class="text-lg font-bold text-gray-800">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="animate-fade-in">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-6 border-b-2 border-cafe-brown pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-2xl mx-auto">
                    <ul class="divide-y divide-gray-200">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                                <span class="text-lg text-gray-800 font-medium">${item.name}</span>
                                <span class="text-lg font-bold text-cafe-brown">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    function router() {
        // Get path from hash, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Render content
        appContent.innerHTML = routes[hash] || `
            <div class="text-center py-12">
                <h2 class="text-3xl font-playfair font-bold text-cafe-brown mb-4">404 - Sayfa Bulunamadı</h2>
                <p class="text-lg">Aradığınız sayfaya ulaşılamıyor.</p>
                <a href="#/" class="inline-block mt-6 px-6 py-2 bg-cafe-brown text-cafe-cream rounded-lg hover:bg-opacity-90 transition-opacity">Ana Sayfaya Dön</a>
            </div>
        `;
    }

    // Add CSS for simple fade in animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Listen to hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
