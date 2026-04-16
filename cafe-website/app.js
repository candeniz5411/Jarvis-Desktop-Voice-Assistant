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

// Views / Pages
const views = {
    'ana-sayfa': () => `
        <div class="flex flex-col items-center justify-center text-center animation-fade-in">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl mb-8 max-w-2xl">En taze çekirdekler ve ustalıkla hazırlanan kahvelerimizle gününüze lezzet katın.</p>
            <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    'hakkinda': () => `
        <div class="max-w-3xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee pb-2 inline-block">Hakkımızda</h1>
            <p class="text-lg mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini sizlerle buluşturuyoruz. Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, sıcak bir atmosfer sunmaktır.</p>
            <p class="text-lg leading-relaxed">Uzman baristalarımız her bir fincanı özenle hazırlarken, taze günlük atıştırmalıklarımız da kahve keyfinizi tamamlıyor.</p>
        </div>
    `,
    'destek': () => `
        <div class="max-w-3xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee pb-2 inline-block">Destek Merkezi</h1>
            <p class="text-lg mb-6">Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorunuz varsa, buradayız.</p>
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Özel etkinlikler için rezervasyon yapıyor musunuz?</li>
                    <li>Vegan veya glütensiz seçenekleriniz var mı?</li>
                    <li>Toplu siparişlerde indirim uyguluyor musunuz?</li>
                </ul>
            </div>
        </div>
    `,
    'iletisim': () => `
        <div class="max-w-3xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee pb-2 inline-block">İletişim</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> 0(212) 555 01 23</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                    <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
                </div>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-medium mb-1">Adınız</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded focus:ring-coffee focus:border-coffee" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Mesajınız</label>
                        <textarea rows="4" class="w-full p-2 border border-gray-300 rounded focus:ring-coffee focus:border-coffee" required></textarea>
                    </div>
                    <button type="submit" class="bg-coffee text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors w-full">Gönder</button>
                </form>
            </div>
        </div>
    `,
    'sube-konumlari': () => `
        <div class="max-w-3xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee pb-2 inline-block">Şube Konumları</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                    <h3 class="font-bold text-xl mb-2">Kadıköy Merkez Şubesi</h3>
                    <p class="text-gray-600 mb-4">Moda Caddesi No: 45, Kadıköy / İstanbul</p>
                    <button class="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Haritada Gör</button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                    <h3 class="font-bold text-xl mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mb-4">Barbaros Bulvarı No: 12, Beşiktaş / İstanbul</p>
                    <button class="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Haritada Gör</button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                    <h3 class="font-bold text-xl mb-2">Alsancak Şubesi</h3>
                    <p class="text-gray-600 mb-4">Kıbrıs Şehitleri Caddesi No: 88, Konak / İzmir</p>
                    <button class="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Haritada Gör</button>
                </div>
            </div>
        </div>
    `,
    'menu-icerikleri': () => `
        <div class="max-w-4xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-8 text-center border-b-2 border-coffee pb-2 inline-block mx-auto block w-max">Menü İçerikleri</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuData.map(item => `
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4 text-coffee">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold font-heading">${item.name}</h3>
                        <p class="text-sm text-gray-500 mt-2">Özenle seçilmiş malzemelerle hazırlanır.</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    'fiyatlar': () => `
        <div class="max-w-3xl mx-auto animation-fade-in">
            <h1 class="text-3xl font-heading font-bold mb-8 text-center border-b-2 border-coffee pb-2 inline-block mx-auto block w-max">Fiyatlar</h1>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-coffee text-white">
                            <th class="py-4 px-6 font-semibold uppercase text-sm">Ürün</th>
                            <th class="py-4 px-6 font-semibold uppercase text-sm text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuData.map((item, index) => `
                            <tr class="border-b border-gray-100 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
                                <td class="py-4 px-6 text-lg font-medium">${item.name}</td>
                                <td class="py-4 px-6 text-lg font-bold text-right text-coffee">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// State Elements
const app = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Sidebar Toggle Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');

    if (isClosed) {
        // Open
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    } else {
        // Close
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }
}

menuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking a link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Router Logic
function router() {
    // Get hash, default to 'ana-sayfa'
    let hash = window.location.hash.replace('#', '');
    if (!hash || !views[hash]) {
        hash = 'ana-sayfa';
        window.location.hash = hash;
        return; // wait for hashchange
    }

    // Render View
    app.innerHTML = views[hash]();

    // Add simple animation class dynamically
    const content = app.firstElementChild;
    if(content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(10px)';
        content.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';

        requestAnimationFrame(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        });
    }

    // Scroll to top
    window.scrollTo(0,0);
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
