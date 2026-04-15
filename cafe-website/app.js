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
    '': homeView,
    '#home': homeView,
    '#hakkinda': aboutView,
    '#destek': supportView,
    '#iletisim': contactView,
    '#subeler': branchesView,
    '#menu-icerikleri': menuContentsView,
    '#fiyatlar': pricesView
};

function homeView() {
    return `
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-lg mb-8 text-gray-700">En taze kahve çekirdekleri ve enfes tatlılar ile hizmetinizdeyiz.</p>
            <img src="../Images/Cover_pic.jpg" alt="Kahve Görseli" class="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" onerror="this.src='https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000';">
        </div>
    `;
}

function aboutView() {
    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed mb-4">
                Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz.
                Amacımız sadece bir kahve içme mekanı olmak değil, aynı zamanda dostlukların pekiştiği sıcak bir yuva olmaktır.
            </p>
            <p class="text-lg leading-relaxed">
                Modern ve minimalist tasarımımızla, günün yorgunluğunu atabileceğiniz huzurlu bir ortam sunuyoruz.
            </p>
        </div>
    `;
}

function supportView() {
    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">Destek</h2>
            <p class="text-lg mb-4">Sıkça Sorulan Sorular ve Müşteri Destek Merkezi.</p>
            <ul class="list-disc pl-5 space-y-2 text-lg">
                <li>Sipariş takibi nasıl yapılır?</li>
                <li>İade ve değişim koşulları nelerdir?</li>
                <li>Özel etkinlikler için rezervasyon yapabilir miyim?</li>
            </ul>
        </div>
    `;
}

function contactView() {
    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">İletişim</h2>
            <div class="bg-cream p-6 rounded-lg shadow-md">
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No: 42, İstanbul</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0212 555 12 34</p>
                <p class="text-lg mb-4"><strong>E-posta:</strong> info@kahvedukkani.com</p>

                <h3 class="text-xl font-bold mt-6 mb-3">Bize Yazın</h3>
                <form class="space-y-4">
                    <input type="text" placeholder="Adınız Soyadınız" class="w-full p-2 border border-gray-300 rounded">
                    <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-gray-300 rounded"></textarea>
                    <button type="button" class="bg-brown text-cream px-6 py-2 rounded hover:bg-opacity-90 transition-opacity">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function branchesView() {
    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-cream p-5 rounded-lg shadow">
                    <h3 class="text-xl font-bold mb-2">Kadıköy Şubesi</h3>
                    <p>Caferağa Mah. Moda Cad. No:1</p>
                    <p class="text-sm text-gray-600 mt-2">Çalışma Saatleri: 08:00 - 23:00</p>
                </div>
                <div class="bg-cream p-5 rounded-lg shadow">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                    <p>Sinanpaşa Mah. Barbaros Bulvarı No:10</p>
                    <p class="text-sm text-gray-600 mt-2">Çalışma Saatleri: 07:30 - 22:30</p>
                </div>
                <div class="bg-cream p-5 rounded-lg shadow">
                    <h3 class="text-xl font-bold mb-2">Karaköy Şubesi</h3>
                    <p>Kemankeş Mah. Rıhtım Cad. No:5</p>
                    <p class="text-sm text-gray-600 mt-2">Çalışma Saatleri: 08:30 - 24:00</p>
                </div>
            </div>
        </div>
    `;
}

function menuContentsView() {
    const itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded-lg shadow border border-gray-100 flex justify-between items-center">
            <span class="text-lg font-bold">${item.name}</span>
            <span class="text-brown font-semibold bg-cream px-3 py-1 rounded-full">${item.price}</span>
        </div>
    `).join('');

    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">Menü İçerikleri</h2>
            <p class="mb-6 text-lg">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function pricesView() {
    // Re-using the menu data for prices view, displayed slightly differently
    const itemsHtml = menuItems.map(item => `
        <tr class="border-b border-gray-200 hover:bg-cream transition-colors">
            <td class="py-3 px-4 text-lg">${item.name}</td>
            <td class="py-3 px-4 text-lg font-bold text-right">${item.price}</td>
        </tr>
    `).join('');

    return `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown pb-2">Fiyat Listesi</h2>
            <div class="overflow-x-auto bg-white rounded-lg shadow">
                <table class="min-w-full table-auto">
                    <thead class="bg-brown text-cream">
                        <tr>
                            <th class="py-3 px-4 text-left font-heading">Ürün</th>
                            <th class="py-3 px-4 text-right font-heading">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-right">* Fiyatlarımıza KDV dahildir.</p>
        </div>
    `;
}

function router() {
    const hash = window.location.hash;
    const viewFunction = routes[hash] || homeView;
    const appContainer = document.getElementById('app');

    // Add fade out effect
    appContainer.style.opacity = 0;

    setTimeout(() => {
        appContainer.innerHTML = viewFunction();
        // Add fade in effect
        appContainer.style.transition = 'opacity 0.3s ease-in-out';
        appContainer.style.opacity = 1;
    }, 150);

    // Close sidebar on navigation (mobile friendly)
    closeSidebar();
}

// Sidebar Navigation Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link inside it is clicked
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});
