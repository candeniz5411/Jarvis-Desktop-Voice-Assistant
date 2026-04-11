// Data
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

// Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const appContainer = document.getElementById('app');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

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

// Routing
const routes = {
    '/': renderHome,
    '/hakkinda': renderAbout,
    '/destek': renderSupport,
    '/iletisim': renderContact,
    '/subeler': renderLocations,
    '/menu': renderMenu,
    '/fiyatlar': renderPrices,
};

function router() {
    let path = window.location.hash.slice(1) || '/';
    const renderFunction = routes[path] || renderNotFound;
    appContainer.innerHTML = ''; // Clear current content
    appContainer.appendChild(renderFunction());
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Views
function createView(title, contentHTML) {
    const div = document.createElement('div');
    div.className = 'max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-coffee-light';
    div.innerHTML = `
        <h2 class="text-3xl font-bold heading-font mb-6 text-coffee-dark border-b-2 border-cream pb-2">${title}</h2>
        <div class="text-lg leading-relaxed">${contentHTML}</div>
    `;
    return div;
}

function renderHome() {
    const div = document.createElement('div');
    div.className = 'max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-8 py-12';

    // Choose an image from the local Images directory
    div.innerHTML = `
        <h2 class="text-4xl md:text-5xl font-bold heading-font text-coffee-dark">Hoş Geldiniz</h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-2xl">En taze kahve çekirdekleri ve enfes tatlılarımızla sizleri ağırlamaktan mutluluk duyarız.</p>

        <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl mt-8 border-4 border-cream">
            <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı İç Mekan" class="w-full h-auto object-cover max-h-[500px]" onerror="this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80'">
        </div>
    `;
    return div;
}

function renderAbout() {
    return createView('Hakkında', `
        <p class="mb-4">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçerek, ustalıkla kavuruyor ve sizlere sunuyoruz.</p>
        <p>Amacımız, her yudumda size benzersiz bir deneyim yaşatmak ve sıcak, samimi ortamımızda sevdiklerinizle keyifli vakit geçirmenizi sağlamaktır.</p>
    `);
}

function renderSupport() {
    return createView('Destek', `
        <p class="mb-4">Müşteri memnuniyeti bizim için önceliktir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız bize ulaşabilirsiniz.</p>
        <div class="bg-cream p-4 rounded-md mt-4">
            <h3 class="font-bold mb-2">Sıkça Sorulan Sorular</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Online sipariş verebilir miyim? (Yakında!)</li>
                <li>Hangi ödeme yöntemleri geçerlidir? (Nakit, Kredi Kartı)</li>
                <li>Vegan seçenekleriniz var mı? (Evet, menümüzde bulabilirsiniz.)</li>
            </ul>
        </div>
    `);
}

function renderContact() {
    return createView('İletişim', `
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                <p class="mb-2"><strong class="font-bold">Adres:</strong> Kahve Sokak No: 1, Kadıköy, İstanbul</p>
                <p class="mb-2"><strong class="font-bold">Telefon:</strong> +90 (212) 555 01 23</p>
                <p class="mb-2"><strong class="font-bold">E-posta:</strong> info@kahvedukkani.com</p>
                <p class="mt-4"><strong class="font-bold">Çalışma Saatleri:</strong></p>
                <p>Pzt - Cum: 08:00 - 22:00</p>
                <p>Cmt - Paz: 09:00 - 23:00</p>
            </div>
            <div>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Ad Soyad</label>
                        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-light focus:ring-opacity-50 p-2 border" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">E-posta</label>
                        <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-light focus:ring-opacity-50 p-2 border" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Mesaj</label>
                        <textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-light focus:ring-opacity-50 p-2 border" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee-dark text-cream py-2 px-4 rounded hover:bg-[#2A1A17] transition duration-300">Gönder</button>
                </form>
            </div>
        </div>
    `);
}

function renderLocations() {
    return createView('Şube Konumları', `
        <div class="space-y-6">
            <div class="border-l-4 border-coffee-dark pl-4">
                <h3 class="text-xl font-bold mb-1">Kadıköy Merkez (İstanbul)</h3>
                <p class="text-gray-600">Moda Caddesi No: 42, Kadıköy</p>
            </div>
            <div class="border-l-4 border-coffee-dark pl-4">
                <h3 class="text-xl font-bold mb-1">Beşiktaş Şubesi (İstanbul)</h3>
                <p class="text-gray-600">Barbaros Bulvarı No: 15, Beşiktaş</p>
            </div>
            <div class="border-l-4 border-coffee-dark pl-4">
                <h3 class="text-xl font-bold mb-1">Kızılay Şubesi (Ankara)</h3>
                <p class="text-gray-600">Atatürk Bulvarı No: 100, Çankaya</p>
            </div>
            <div class="border-l-4 border-coffee-dark pl-4">
                <h3 class="text-xl font-bold mb-1">Alsancak Şubesi (İzmir)</h3>
                <p class="text-gray-600">Kıbrıs Şehitleri Caddesi No: 88, Konak</p>
            </div>
        </div>
    `);
}

function renderMenu() {
    const itemsHTML = menuItems.map(item => `
        <div class="bg-cream p-4 rounded-lg shadow flex items-center justify-between">
            <span class="font-bold text-lg">${item.name}</span>
            <span class="bg-coffee-dark text-white text-sm px-3 py-1 rounded-full">Taze & Lezzetli</span>
        </div>
    `).join('');

    return createView('Menü İçerikleri', `
        <p class="mb-6 text-gray-600">Özenle hazırladığımız ürünlerimizi keşfedin.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${itemsHTML}
        </div>
    `);
}

function renderPrices() {
    const itemsHTML = menuItems.map(item => `
        <div class="flex justify-between items-center border-b border-gray-200 py-3 last:border-0">
            <span class="text-lg">${item.name}</span>
            <span class="font-bold text-xl heading-font text-coffee-dark">${item.price}₺</span>
        </div>
    `).join('');

    return createView('Fiyatlar', `
        <div class="bg-white p-6 rounded-lg shadow-inner border border-gray-100">
            ${itemsHTML}
        </div>
        <p class="text-sm text-gray-500 mt-4 text-center">* Fiyatlarımıza KDV dahildir.</p>
    `);
}

function renderNotFound() {
    const div = document.createElement('div');
    div.className = 'text-center py-20';
    div.innerHTML = `
        <h2 class="text-6xl font-bold heading-font text-coffee-dark mb-4">404</h2>
        <p class="text-2xl mb-8">Sayfa bulunamadı.</p>
        <a href="#/" class="bg-coffee-dark text-cream py-2 px-6 rounded-full hover:bg-[#2A1A17] transition duration-300">Ana Sayfaya Dön</a>
    `;
    return div;
}
