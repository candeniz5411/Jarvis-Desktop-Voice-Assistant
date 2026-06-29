// Menu Data
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

// Page Contents
const pages = {
    'home': `
        <div class="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in py-10">
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-brown-900">Kafe Logos'a Hoş Geldiniz</h2>
            <p class="font-body text-xl text-brown-700 max-w-2xl">En taze kahve çekirdekleri ve enfes tatlılarımızla size unutulmaz bir deneyim sunuyoruz.</p>
            <div class="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl mt-8">
                <img src="./Images/coffee-home.jpg" alt="Kafe Atmosferi" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    'hakkinda': `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
            <p class="font-body text-lg text-brown-800 leading-relaxed space-y-4">
                Kafe Logos olarak, 2010 yılından bu yana kahve tutkunlarına en kaliteli hizmeti sunmayı amaçlıyoruz.
                Özenle seçilmiş kahve çekirdeklerimiz, usta baristalarımızın ellerinde sanata dönüşüyor.
                Modern, minimalist ve sıcak atmosferimizde, hem çalışmak hem de dostlarınızla keyifli vakit geçirmek için ideal bir ortam yaratıyoruz.
            </p>
        </div>
    `,
    'destek': `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">Destek</h2>
            <p class="font-body text-lg text-brown-800 mb-4">Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atabilir veya bizimle doğrudan iletişime geçebilirsiniz.</p>
            <ul class="list-disc list-inside font-body text-brown-700 space-y-2 ml-4">
                <li>Sipariş takibi</li>
                <li>Geri bildirim ve şikayetler</li>
                <li>Özel etkinlik rezervasyonları</li>
                <li>Kariyer fırsatları</li>
            </ul>
        </div>
    `,
    'iletisim': `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md font-body text-brown-800">
                <p class="mb-4"><strong>Adres:</strong> Kahve Sokak No:42, Kadıköy, İstanbul</p>
                <p class="mb-4"><strong>Telefon:</strong> +90 555 123 45 67</p>
                <p class="mb-4"><strong>E-posta:</strong> merhaba@kafelogos.com</p>
                <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
            </div>
        </div>
    `,
    'subeler': `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-5 rounded-lg shadow border-l-4 border-brown-500">
                    <h3 class="font-heading text-xl font-bold mb-2">Kadıköy Merkez</h3>
                    <p class="font-body text-sm text-brown-600">Moda Caddesi, No: 15</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow border-l-4 border-brown-500">
                    <h3 class="font-heading text-xl font-bold mb-2">Beşiktaş Şube</h3>
                    <p class="font-body text-sm text-brown-600">Barbaros Bulvarı, No: 42</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow border-l-4 border-brown-500">
                    <h3 class="font-heading text-xl font-bold mb-2">Alsancak Şube</h3>
                    <p class="font-body text-sm text-brown-600">Kordon Boyu, No: 88, İzmir</p>
                </div>
            </div>
        </div>
    `,
    'icerikler': `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">Menü İçerikleri</h2>
            <p class="font-body text-lg text-brown-800 mb-6">Özenle hazırladığımız yiyecek ve içeceklerimiz.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white rounded-lg shadow-sm p-4 text-center border border-brown-100 hover:shadow-md transition-shadow">
                        <h3 class="font-heading font-semibold text-xl text-brown-900">${item.name}</h3>
                        <p class="font-body text-sm text-brown-500 mt-2">Taze ve lezzetli</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    'fiyatlar': `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="font-heading text-3xl font-bold text-brown-900 mb-6 border-b-2 border-brown-200 pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="w-full text-left font-body">
                    <thead class="bg-brown-900 text-cream">
                        <tr>
                            <th class="py-3 px-6 font-semibold">Ürün</th>
                            <th class="py-3 px-6 font-semibold text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-brown-100">
                        ${menuItems.map(item => `
                            <tr class="hover:bg-brown-50 transition-colors">
                                <td class="py-4 px-6 text-brown-800 font-medium">${item.name}</td>
                                <td class="py-4 px-6 text-right text-brown-900 font-bold">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// DOM Elements
const appDiv = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar Toggle Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        // Open
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            sidebarOverlay.classList.remove('opacity-0');
            sidebarOverlay.classList.add('opacity-100');
        }, 10);
    } else {
        // Close
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.remove('opacity-100');
        sidebarOverlay.classList.add('opacity-0');
        setTimeout(() => {
            sidebarOverlay.classList.add('hidden');
        }, 300); // Wait for transition
    }
}

// Event Listeners for Sidebar
menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar when a link is clicked (especially useful on mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing Logic
function handleRoute() {
    // Get the hash without the '#' symbol. Default to 'home'
    let hash = window.location.hash.substring(1) || 'home';

    // Check if the route exists, otherwise fallback to 'home'
    if (!pages[hash]) {
        hash = 'home';
    }

    // Inject the HTML content
    appDiv.innerHTML = pages[hash];

    // Scroll to top on route change
    window.scrollTo(0, 0);
}

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);

// Initialize routing on page load
window.addEventListener('DOMContentLoaded', () => {
    // Setup initial overlay classes for smooth fade in
    sidebarOverlay.classList.add('opacity-0');
    handleRoute();
});
