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
    '/': {
        title: 'Hoş Geldiniz',
        render: () => `
            <div class="text-center">
                <img src="../Images/Cover_pic.jpg" alt="Kahve Fotoğrafı" class="w-full h-64 object-cover rounded-xl shadow-lg mb-8" onerror="this.src='https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'">
                <h2 class="text-4xl font-bold mb-4 font-playfair text-brown-950">Cafe Jules'e Hoş Geldiniz</h2>
                <p class="text-lg text-brown-800 mb-6">Güne mükemmel bir kahve ile başlayın. Özenle seçilmiş çekirdeklerimiz ve taze atıştırmalıklarımızla hizmetinizdeyiz.</p>
                <a href="#/menu-icerikleri" class="inline-block bg-brown-700 text-cream px-6 py-3 rounded-full hover:bg-brown-800 transition-colors duration-300 font-bold shadow-md">Menüyü İncele</a>
            </div>
        `
    },
    '/hakkinda': {
        title: 'Hakkında',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
            <p class="text-lg mb-4">Cafe Jules olarak 2010 yılından beri en kaliteli kahve çekirdeklerini sizlerle buluşturuyoruz. Tutkumuz, her fincanda mükemmelliği yakalamak.</p>
            <p class="text-lg">Sıcak, samimi ve modern atmosferimizde misafirlerimizi ağırlamaktan mutluluk duyuyoruz.</p>
        `
    },
    '/destek': {
        title: 'Destek',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Destek</h2>
            <p class="text-lg mb-4">Müşteri memnuniyeti bizim için önceliklidir. Soru, görüş veya önerileriniz için bize ulaşmaktan çekinmeyin.</p>
            <div class="bg-brown-100 p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Çalışma saatleriniz nedir? (Her gün 08:00 - 22:00)</li>
                    <li>Vegan seçenekleriniz var mı? (Evet, bitkisel süt seçeneklerimiz mevcuttur.)</li>
                    <li>Paket servisiniz var mı? (Gel-al servisimiz mevcuttur.)</li>
                </ul>
            </div>
        `
    },
    '/iletisim': {
        title: 'İletişim',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">İletişim Bilgileri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@cafejules.com</p>
                    <p><strong>Adres:</strong> Kahve Sokak No: 42, Moda, İstanbul</p>
                </div>
                <div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block text-sm font-medium mb-1">Adınız</label>
                            <input type="text" class="w-full p-2 border border-brown-300 rounded focus:ring-2 focus:ring-brown-500 focus:outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Mesajınız</label>
                            <textarea class="w-full p-2 border border-brown-300 rounded focus:ring-2 focus:ring-brown-500 focus:outline-none h-24" required></textarea>
                        </div>
                        <button type="submit" class="bg-brown-700 text-cream px-4 py-2 rounded hover:bg-brown-800 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `
    },
    '/sube-konumlari': {
        title: 'Şube Konumları',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Şubelerimiz</h2>
            <div class="space-y-6">
                <div class="p-6 bg-white rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-xl font-bold mb-2">Moda Şubesi (Merkez)</h3>
                    <p class="text-brown-700">Kahve Sokak No: 42, Moda, Kadıköy, İstanbul</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-xl font-bold mb-2">Nişantaşı Şubesi</h3>
                    <p class="text-brown-700">Valikonağı Caddesi No: 15, Nişantaşı, Şişli, İstanbul</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-xl font-bold mb-2">Bebek Şubesi</h3>
                    <p class="text-brown-700">Cevdet Paşa Caddesi No: 88, Bebek, Beşiktaş, İstanbul</p>
                </div>
            </div>
        `
    },
    '/menu-icerikleri': {
        title: 'Menü İçerikleri',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Lezzetlerimiz</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow border border-brown-100">
                        <span class="font-bold text-lg">${item.name}</span>
                        <span class="text-brown-500">Taze & Lezzetli</span>
                    </div>
                `).join('')}
            </div>
        `
    },
    '/fiyatlar': {
        title: 'Fiyatlar',
        render: () => `
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow overflow-hidden border border-brown-100">
                <table class="min-w-full">
                    <thead class="bg-brown-900 text-cream">
                        <tr>
                            <th class="py-3 px-6 text-left">Ürün</th>
                            <th class="py-3 px-6 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-brown-100">
                        ${menuItems.map(item => `
                            <tr class="hover:bg-brown-50 transition-colors">
                                <td class="py-3 px-6 font-medium">${item.name}</td>
                                <td class="py-3 px-6 text-right font-bold text-brown-800">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `
    }
};

// Routing logic
const appContainer = document.getElementById('app-container');

function router() {
    // Get the path from the hash, default to '/' if no hash
    const path = location.hash.slice(1).toLowerCase() || '/';
    const route = routes[path];

    if (route) {
        appContainer.innerHTML = route.render();
        document.title = `${route.title} - Cafe Jules`;
        window.scrollTo(0, 0);
    } else {
        appContainer.innerHTML = `
            <div class="text-center py-12">
                <h2 class="text-4xl font-bold mb-4 text-brown-900">404</h2>
                <p class="text-xl mb-6">Sayfa bulunamadı.</p>
                <a href="#/" class="text-brown-700 underline hover:text-brown-900">Ana sayfaya dön</a>
            </div>
        `;
        document.title = '404 - Cafe Jules';
    }
}

// Listen for hash changes
window.addEventListener('hashchange', router);
// Run router on initial load
window.addEventListener('load', router);


// Sidebar toggling logic
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    // small delay to allow display:block to apply before changing opacity
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); // match transition duration
}

hamburgerMenu.addEventListener('click', openSidebar);
closeMenu.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked (useful for mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});
