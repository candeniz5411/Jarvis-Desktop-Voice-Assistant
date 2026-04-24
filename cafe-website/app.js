// Data
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

// Views
const views = {
    '/': `
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl text-brown-900 mb-6">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl mb-8 text-brown-700">En taze kahve çekirdekleri ve enfes tatlılarla hizmetinizdeyiz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000" alt="Kahve Görseli" class="w-full h-[400px] object-cover">
            </div>
        </div>
    `,
    '/hakkinda': `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b pb-2 border-brown-300">Hakkımızda</h2>
            <p class="mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve uzman baristalarımızla sizlere sunuyoruz.</p>
            <p class="leading-relaxed">Misyonumuz, sıcak ve samimi bir ortamda, günün yorgunluğunu atabileceğiniz lezzetli anlar yaratmaktır.</p>
        </div>
    `,
    '/destek': `
         <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b pb-2 border-brown-300">Destek</h2>
            <p class="mb-4">Müşteri memnuniyeti bizim için ön plandadır. Herhangi bir sorunuz veya sorununuz varsa bize ulaşmaktan çekinmeyin.</p>
            <p>Sıkça sorulan sorulara yakında buradan ulaşabileceksiniz.</p>
        </div>
    `,
    '/iletisim': `
         <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b pb-2 border-brown-300">İletişim</h2>
            <div class="space-y-4">
                <p><strong>Adres:</strong> Örnek Mahallesi, Kahve Caddesi No:1, İstanbul</p>
                <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                <p><strong>E-posta:</strong> info@kahvedukkani.com</p>
            </div>
        </div>
    `,
    '/subeler': `
         <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b pb-2 border-brown-300">Şube Konumları</h2>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Kadıköy Merkez Şube:</strong> Moda Caddesi No:45</li>
                <li><strong>Beşiktaş Şube:</strong> Çarşı İçi No:12</li>
                <li><strong>Karaköy Şube:</strong> Kemankeş Caddesi No:78</li>
            </ul>
        </div>
    `,
    '/menu': `
         <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-8 text-center border-b pb-2 border-brown-300 inline-block">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex justify-between items-center">
                        <span class="font-bold text-lg">${item.name}</span>
                        <span class="text-brown-500 font-semibold">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '/fiyatlar': `
         <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b pb-2 border-brown-300">Fiyat Listesi</h2>
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b-2 border-brown-300">
                        <th class="py-3 px-4 font-heading font-bold text-lg">Ürün</th>
                        <th class="py-3 px-4 font-heading font-bold text-lg text-right">Fiyat</th>
                    </tr>
                </thead>
                <tbody>
                    ${menuItems.map((item, index) => `
                        <tr class="${index % 2 === 0 ? 'bg-cream/30' : ''} border-b border-brown-100 last:border-0 hover:bg-brown-100/50 transition-colors">
                            <td class="py-3 px-4">${item.name}</td>
                            <td class="py-3 px-4 text-right font-semibold">${item.price}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `
};

// DOM Elements
const appDiv = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// Router
function router() {
    // Get the current path from the URL hash, default to '/'
    const hash = window.location.hash || '#/';
    const path = hash.substring(1); // Remove the '#'

    // Render the view or a 404 message
    appDiv.innerHTML = views[path] || `
        <div class="text-center py-20">
            <h2 class="text-3xl font-bold mb-4">404 - Sayfa Bulunamadı</h2>
            <p>Aradığınız sayfa mevcut değil.</p>
            <a href="#/" class="text-brown-500 hover:underline mt-4 inline-block">Ana Sayfaya Dön</a>
        </div>
    `;

    // Close sidebar on navigation (mobile friendly)
    closeSidebar();
}

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});