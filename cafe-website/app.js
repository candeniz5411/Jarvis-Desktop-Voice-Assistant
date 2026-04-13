document.addEventListener('DOMContentLoaded', () => {
    // Menu items data
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

    // Sidebar elements
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoLink = document.getElementById('logo-link');
    const appContent = document.getElementById('app-content');

    // Sidebar Toggle Logic
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    menuBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('-translate-x-full')) {
            openSidebar();
        } else {
            closeSidebar();
        }
    });

    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Close sidebar if logo is clicked
    logoLink.addEventListener('click', () => {
        closeSidebar();
        window.location.hash = ''; // Go to home
    });

    // Hash Routing Logic
    const renderContent = () => {
        const hash = window.location.hash.substring(1) || 'home';
        let html = '';

        switch (hash) {
            case 'home':
                html = `
                    <div class="text-center space-y-6">
                        <h1 class="text-4xl md:text-5xl font-heading font-bold text-coffee-dark mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
                        <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Taze çekilmiş kahve çekirdekleri, günlük tatlılar ve sıcak bir ortam sizi bekliyor.</p>
                        <div class="mt-8 rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
                            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Fotoğrafı" class="w-full h-auto object-cover">
                        </div>
                    </div>
                `;
                break;
            case 'hakkinda':
                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">Hakkında</h2>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Kahve Dükkanı olarak 2024 yılından bu yana sizlere en kaliteli kahve deneyimini sunmak için çalışıyoruz.
                            Özenle seçtiğimiz kahve çekirdeklerini kendi kavurmahanemizde kavuruyor, ustalıkla hazırlayıp
                            siz değerli misafirlerimize sunuyoruz. Modern ve minimalist mekanımızda, hem çalışmak hem de
                            sevdiklerinizle vakit geçirmek için ideal bir ortam yaratmayı hedefledik.
                        </p>
                    </div>
                `;
                break;
            case 'destek':
                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">Destek</h2>
                    <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <h3 class="text-xl font-bold text-coffee-dark">Sıkça Sorulan Sorular</h3>
                        <p class="text-gray-700"><strong>Çalışma saatleriniz nedir?</strong><br>Hafta içi 08:00 - 22:00, Hafta sonu 09:00 - 23:00 arası hizmet vermekteyiz.</p>
                        <p class="text-gray-700"><strong>Vegan seçenekleriniz var mı?</strong><br>Evet, bitkisel süt seçeneklerimiz ve vegan tatlı alternatiflerimiz bulunmaktadır.</p>
                        <p class="text-gray-700"><strong>Rezervasyon yapıyor musunuz?</strong><br>Şu an için rezervasyon sistemimiz bulunmamaktadır.</p>
                    </div>
                `;
                break;
            case 'iletisim':
                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">İletişim</h2>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <p class="text-lg text-gray-700 mb-2"><strong>Adres:</strong> Kahve Sokak No: 123, Moda, İstanbul</p>
                        <p class="text-lg text-gray-700 mb-2"><strong>Telefon:</strong> 0(212) 555 00 00</p>
                        <p class="text-lg text-gray-700 mb-6"><strong>E-posta:</strong> info@kahvedukkani.com</p>

                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">Adınız</label>
                                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-dark" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">Mesajınız</label>
                                <textarea class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-dark" rows="4" required></textarea>
                            </div>
                            <button type="submit" class="bg-coffee-dark text-white px-4 py-2 rounded hover:bg-opacity-90 transition-opacity">Gönder</button>
                        </form>
                    </div>
                `;
                break;
            case 'subeler':
                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">Şube Konumları</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-dark">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Moda Şubesi (Merkez)</h3>
                            <p class="text-gray-700">Kahve Sokak No: 123, Moda, Kadıköy / İstanbul</p>
                            <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 22:00</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-dark">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Beşiktaş Şubesi</h3>
                            <p class="text-gray-700">Deniz Caddesi No: 45, Beşiktaş / İstanbul</p>
                            <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 23:00</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-dark">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Karaköy Şubesi</h3>
                            <p class="text-gray-700">Tarihi Sokak No: 12, Karaköy / İstanbul</p>
                            <p class="text-sm text-gray-500 mt-2">Hafta içi: 07:30 - 21:00</p>
                        </div>
                    </div>
                `;
                break;
            case 'menu':
                const menuItemsList = menuItems.map(item => `
                    <li class="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
                        <span class="text-lg font-medium text-gray-800">${item.name}</span>
                    </li>
                `).join('');

                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">Menü İçerikleri</h2>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-coffee-dark text-white p-4">
                            <h3 class="text-xl font-bold">Yiyecek ve İçeceklerimiz</h3>
                        </div>
                        <ul class="divide-y divide-gray-200">
                            ${menuItemsList}
                        </ul>
                        <div class="p-4 bg-gray-50 text-center">
                            <a href="#fiyatlar" class="text-coffee-dark hover:underline font-medium">Fiyatları Görmek İçin Tıklayın</a>
                        </div>
                    </div>
                `;
                break;
            case 'fiyatlar':
                const priceItemsList = menuItems.map(item => `
                    <li class="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
                        <span class="text-lg font-medium text-gray-800">${item.name}</span>
                        <span class="text-lg font-bold text-coffee-dark">${item.price}</span>
                    </li>
                `).join('');

                html = `
                    <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6">Fiyatlar</h2>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
                        <div class="bg-coffee-light p-4 border-b-2 border-coffee-dark">
                            <h3 class="text-xl font-bold text-coffee-dark text-center">Güncel Fiyat Listesi</h3>
                        </div>
                        <ul class="divide-y divide-gray-200">
                            ${priceItemsList}
                        </ul>
                    </div>
                `;
                break;
            default:
                html = `
                    <div class="text-center py-12">
                        <h2 class="text-3xl font-bold text-gray-800 mb-4">Sayfa Bulunamadı</h2>
                        <a href="#" class="text-coffee-dark hover:underline">Ana Sayfaya Dön</a>
                    </div>
                `;
        }

        appContent.innerHTML = html;
        window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', renderContent);

    // Initial render
    renderContent();
});