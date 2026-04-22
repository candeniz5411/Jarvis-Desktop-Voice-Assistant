// Data for menu and prices
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

// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const appContainer = document.getElementById('app');
const navLinks = document.querySelectorAll('[data-link]');

// Sidebar Toggle Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// Event Listeners for Sidebar
menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click (important for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing
const routes = {
    '/': () => `
        <div class="max-w-4xl mx-auto px-6 py-12 text-center">
            <h1 class="font-serif text-4xl md:text-5xl font-bold mb-6 text-brown-900">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl mb-10 text-brown-800">Gününüzü güzelleştirecek taze kahveler ve lezzetli atıştırmalıklar burada sizi bekliyor.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Görseli" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    '/hakkinda': () => `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Hakkında</h1>
            <p class="text-lg mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle kavuruyor ve misafirlerimize sunuyoruz. Amacımız, her yudumda size benzersiz bir deneyim yaşatmaktır.</p>
            <p class="text-lg leading-relaxed">Modern ve minimalist tasarım anlayışımızla hazırladığımız mekanlarımızda, günün stresinden uzaklaşıp keyifli vakit geçirebilirsiniz.</p>
        </div>
    `,
    '/destek': () => `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Destek</h1>
            <p class="text-lg mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Müşteri destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Online sipariş verilebilir mi?</li>
                    <li>Glutensiz ürünleriniz var mı?</li>
                    <li>Toplu siparişlerde indirim uygulanıyor mu?</li>
                </ul>
            </div>
        </div>
    `,
    '/iletisim': () => `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">İletişim</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sk. No:42 Kadıköy/İstanbul</p>
                </div>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Adınız</label>
                        <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Mesajınız</label>
                        <textarea class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500" rows="4"></textarea>
                    </div>
                    <button type="button" class="bg-brown-900 text-white px-6 py-2 rounded-md hover:bg-brown-800 transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `,
    '/subeler': () => `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Şube Konumları</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brown-900">
                    <h3 class="font-bold text-xl mb-2 font-serif">Kadıköy Merkez Şube</h3>
                    <p class="text-gray-600 mb-2">Moda Caddesi, No: 12</p>
                    <p class="text-sm">Çalışma Saatleri: 08:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brown-900">
                    <h3 class="font-bold text-xl mb-2 font-serif">Beşiktaş Şube</h3>
                    <p class="text-gray-600 mb-2">Çarşı İçi, Kahveciler Sk.</p>
                    <p class="text-sm">Çalışma Saatleri: 07:30 - 22:30</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brown-900">
                    <h3 class="font-bold text-xl mb-2 font-serif">Nişantaşı Şube</h3>
                    <p class="text-gray-600 mb-2">Valikonağı Caddesi</p>
                    <p class="text-sm">Çalışma Saatleri: 08:30 - 22:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu': () => `
        <div class="max-w-4xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-8 border-b-2 border-brown-200 pb-2 text-center">Menü İçerikleri</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-brown-100 flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mb-4 text-brown-900">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 class="font-bold text-xl mb-2 font-serif">${item.name}</h3>
                        <p class="text-brown-600 text-sm">Özenle hazırlanmış enfes lezzet.</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '/fiyatlar': () => `
        <div class="max-w-3xl mx-auto px-6 py-12">
            <h1 class="font-serif text-3xl font-bold mb-8 border-b-2 border-brown-200 pb-2 text-center">Fiyat Listesi</h1>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown-900 text-white">
                            <th class="py-4 px-6 font-semibold">Ürün</th>
                            <th class="py-4 px-6 font-semibold text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map((item, index) => `
                            <tr class="${index % 2 === 0 ? 'bg-brown-50' : 'bg-white'} border-b border-brown-100 hover:bg-brown-100 transition-colors">
                                <td class="py-4 px-6 font-medium">${item.name}</td>
                                <td class="py-4 px-6 text-right font-bold text-brown-900">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// Router Function
function router() {
    // Get the hash part of the URL, default to '/'
    let hash = window.location.hash.slice(1) || '/';

    // Render the corresponding component or a 404 message
    const render = routes[hash] || (() => '<div class="text-center py-20"><h2 class="text-2xl font-bold">404 - Sayfa Bulunamadı</h2></div>');

    appContainer.innerHTML = render();

    // Scroll to top on route change
    window.scrollTo(0, 0);
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Listen for page load
window.addEventListener('load', router);
