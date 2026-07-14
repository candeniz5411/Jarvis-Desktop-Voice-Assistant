// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const app = document.getElementById('app');

// Menu Data
const menuItems = [
    { name: 'Espresso', price: 45, category: 'Sıcak İçecekler' },
    { name: 'Cappuccino', price: 55, category: 'Sıcak İçecekler' },
    { name: 'Latte', price: 60, category: 'Sıcak İçecekler' },
    { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecekler' },
    { name: 'Çay', price: 25, category: 'Sıcak İçecekler' },
    { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler' },
    { name: 'Limonata', price: 35, category: 'Soğuk İçecekler' },
    { name: 'Cheesecake', price: 70, category: 'Tatlılar' },
    { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar' },
    { name: 'Sandviç', price: 80, category: 'Atıştırmalıklar' },
];

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// Routing Logic
const routes = {
    '': renderHome,
    '#': renderHome,
    '#hakkinda': renderAbout,
    '#destek': renderSupport,
    '#iletisim': renderContact,
    '#subeler': renderBranches,
    '#menu': renderMenuContent,
    '#fiyatlar': renderPrices,
};

function router() {
    const hash = window.location.hash;
    const renderFunction = routes[hash] || renderHome;
    app.innerHTML = ''; // Clear current content
    renderFunction();
    window.scrollTo(0, 0); // Scroll to top on route change
}

// Event listener for hash changes
window.addEventListener('hashchange', router);

// Render Functions

function renderHome() {
    app.innerHTML = `
        <div class="relative w-full h-[60vh] bg-coffee-800">
            <img src="./Images/coffee.jpg" alt="Coffee" class="absolute inset-0 w-full h-full object-cover opacity-70">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h1 class="text-5xl md:text-6xl font-heading font-bold mb-4 text-center">Kafe Vakti'ne Hoş Geldiniz</h1>
                <p class="text-xl md:text-2xl font-light text-center">En taze kahve çekirdekleri, en sıcak ortam.</p>
                <a href="#menu" class="mt-8 bg-coffee-500 hover:bg-coffee-900 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">Menüyü İncele</a>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16">
            <div class="text-center max-w-3xl mx-auto">
                <h2 class="text-3xl font-heading font-bold text-coffee-900 mb-6 border-b-2 border-coffee-500 inline-block pb-2">Günün Kahvesi</h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Bugün sizin için özel olarak hazırladığımız Kolombiya çekirdekli filtre kahvemizi denediniz mi?
                    Karamel ve çikolata notalarıyla gününüze tat katacak.
                </p>
            </div>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">Hakkımızda</h2>
            <div class="bg-white rounded-lg shadow-md p-8">
                <p class="text-lg mb-4 text-gray-700">
                    2010 yılından beri, kahve tutkusunu en saf haliyle misafirlerimize sunmayı amaçlıyoruz.
                    Dünyanın dört bir yanından özenle seçtiğimiz çekirdekleri, ustalıkla kavurup,
                    her bir fincanda eşsiz bir deneyime dönüştürüyoruz.
                </p>
                <p class="text-lg mb-4 text-gray-700">
                    Amacımız sadece iyi bir kahve sunmak değil, aynı zamanda dostlukların pekiştiği,
                    kitapların okunduğu, keyifli anıların biriktiği sıcak bir yuva olmak.
                </p>
                <div class="mt-8 p-6 bg-coffee-100 rounded border border-coffee-200">
                    <h3 class="text-xl font-heading font-bold text-coffee-800 mb-2">Vizyonumuz</h3>
                    <p class="text-gray-700">Şehrin en sevilen, en samimi kahve durağı olmak.</p>
                </div>
            </div>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">Destek Merkezi</h2>
            <div class="bg-white rounded-lg shadow-md p-8">
                <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-4">Sıkça Sorulan Sorular</h3>
                <div class="space-y-6">
                    <div>
                        <h4 class="font-bold text-lg text-coffee-900">Glutensiz seçenekleriniz var mı?</h4>
                        <p class="text-gray-700 mt-1">Evet, menümüzde çeşitli glutensiz tatlı ve atıştırmalık alternatifleri bulunmaktadır.</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg text-coffee-900">Paket servisiniz var mı?</h4>
                        <p class="text-gray-700 mt-1">Şu an için paket servisimiz bulunmamaktadır, ancak tüm ürünlerimizi "al-götür" (takeaway) olarak sipariş edebilirsiniz.</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg text-coffee-900">Rezervasyon yapıyor musunuz?</h4>
                        <p class="text-gray-700 mt-1">Grup etkinlikleri dışında rezervasyon almıyoruz, ilk gelen oturur prensibiyle çalışıyoruz.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-4">Bize Ulaşın</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">İsim</label>
                            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 border p-2">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">E-posta</label>
                            <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 border p-2">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Mesajınız</label>
                            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 border p-2"></textarea>
                        </div>
                        <button type="button" class="bg-coffee-800 text-white px-4 py-2 rounded hover:bg-coffee-900 w-full">Gönder</button>
                    </form>
                </div>
                <div class="bg-white rounded-lg shadow-md p-8 flex flex-col justify-center">
                    <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-4">İletişim Bilgileri</h3>
                    <p class="mb-2"><span class="font-bold">Telefon:</span> +90 555 123 45 67</p>
                    <p class="mb-2"><span class="font-bold">E-posta:</span> info@kafevakti.com</p>
                    <div class="mt-6">
                        <h4 class="font-bold mb-2">Çalışma Saatleri</h4>
                        <p>Pazartesi - Cuma: 07:00 - 22:00</p>
                        <p>Cumartesi - Pazar: 08:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderBranches() {
    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">Şube Konumları</h2>
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-2">Kadıköy Merkez Şube</h3>
                        <p class="text-gray-600">Caferağa Mah. Moda Cad. No: 123, Kadıköy / İstanbul</p>
                    </div>
                    <button class="mt-4 md:mt-0 bg-coffee-100 text-coffee-900 px-4 py-2 rounded border border-coffee-200 hover:bg-coffee-200">Haritada Gör</button>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-600">Sinanpaşa Mah. Şair Nedim Cad. No: 45, Beşiktaş / İstanbul</p>
                    </div>
                    <button class="mt-4 md:mt-0 bg-coffee-100 text-coffee-900 px-4 py-2 rounded border border-coffee-200 hover:bg-coffee-200">Haritada Gör</button>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-2">Alsancak Şube</h3>
                        <p class="text-gray-600">Kültür Mah. Kıbrıs Şehitleri Cad. No: 78, Konak / İzmir</p>
                    </div>
                    <button class="mt-4 md:mt-0 bg-coffee-100 text-coffee-900 px-4 py-2 rounded border border-coffee-200 hover:bg-coffee-200">Haritada Gör</button>
                </div>
            </div>
        </div>
    `;
}

function renderMenuContent() {
    let menuHTML = '';

    // Group items by category (simple approach for this example)
    const categories = [...new Set(menuItems.map(item => item.category))];

    categories.forEach(category => {
        const itemsInCategory = menuItems.filter(item => item.category === category);

        menuHTML += `
            <div class="mb-10">
                <h3 class="text-2xl font-heading font-bold text-coffee-800 mb-4 pb-2 border-b-2 border-coffee-200 inline-block">${category}</h3>
                <div class="grid md:grid-cols-2 gap-6">
        `;

        itemsInCategory.forEach(item => {
            menuHTML += `
                <div class="bg-white p-4 rounded-lg shadow flex justify-between items-center border-l-4 border-coffee-500 hover:shadow-md transition-shadow">
                    <span class="text-lg font-medium text-gray-800">${item.name}</span>
                    <span class="text-lg font-bold text-coffee-900 bg-coffee-100 px-3 py-1 rounded">${item.price}₺</span>
                </div>
            `;
        });

        menuHTML += `
                </div>
            </div>
        `;
    });

    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-5xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">Menü İçerikleri</h2>
            ${menuHTML}
        </div>
    `;
}

function renderPrices() {
    // Similar to menu, but presented more like a price list
    let listHTML = '';

    menuItems.forEach(item => {
        listHTML += `
            <li class="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                <span class="text-gray-800 font-medium">${item.name}</span>
                <span class="font-bold text-coffee-900">${item.price} ₺</span>
            </li>
        `;
    });

    app.innerHTML = `
        <div class="container mx-auto px-4 py-12 max-w-3xl">
            <h2 class="text-4xl font-heading font-bold text-coffee-900 mb-8 text-center border-b border-coffee-200 pb-4">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <ul class="divide-y divide-gray-200">
                    ${listHTML}
                </ul>
                <div class="mt-8 text-sm text-gray-500 text-center">
                    * Tüm fiyatlarımıza KDV dahildir. Fiyatlar şubelere göre değişiklik gösterebilir.
                </div>
            </div>
        </div>
    `;
}

// Initialize app
window.addEventListener('load', () => {
    router();
});