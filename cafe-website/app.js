const menuItems = [
    { name: "Espresso", price: 45, type: "drink" },
    { name: "Cappuccino", price: 55, type: "drink" },
    { name: "Latte", price: 60, type: "drink" },
    { name: "Türk Kahvesi", price: 40, type: "drink" },
    { name: "Çay", price: 25, type: "drink" },
    { name: "Cheesecake", price: 70, type: "food" },
    { name: "Kruvasan", price: 50, type: "food" },
    { name: "Sandviç", price: 80, type: "food" },
    { name: "Soğuk Kahve", price: 65, type: "drink" },
    { name: "Limonata", price: 35, type: "drink" }
];

const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const app = document.getElementById('app');

// Sidebar Toggle Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Routing Logic
const routes = {
    'home': renderHome,
    'about': renderAbout,
    'support': renderSupport,
    'contact': renderContact,
    'locations': renderLocations,
    'menu': renderMenu,
    'prices': renderPrices
};

function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const renderFn = routes[hash] || renderHome;

    // Close sidebar on mobile if open when navigating
    closeSidebar();

    renderFn();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


// Page Renderers
function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <h1 class="text-4xl font-bold text-brown-dark">Hoş Geldiniz</h1>
            <p class="text-lg text-brown-light max-w-md">Şehrin en taze kahveleri ve lezzetli atıştırmalıkları sizi bekliyor.</p>
            <div class="rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                     alt="Kahve" class="w-full h-64 object-cover">
            </div>
            <a href="#menu" class="mt-4 px-6 py-3 bg-brown-light text-cream rounded-full font-semibold hover:bg-brown-dark transition duration-300">
                Menüyü Keşfet
            </a>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2">Hakkımızda</h2>
            <p>2010 yılından beri kahve tutkusuyla hizmet veriyoruz. Dünyanın en iyi çekirdeklerini özenle seçiyor ve sizin için kavuruyoruz.</p>
            <p>Amacımız sadece bir fincan kahve değil, unutulmaz bir deneyim sunmak.</p>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2">Destek</h2>
            <p>Herhangi bir sorunuz veya öneriniz mi var? Size yardımcı olmaktan mutluluk duyarız.</p>
            <ul class="list-disc list-inside mt-4">
                <li>Müşteri Hizmetleri: 0850 123 45 67</li>
                <li>Email: destek@kafe.com</li>
                <li>Çalışma Saatleri: 09:00 - 22:00</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2">İletişim</h2>
            <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                <div class="flex flex-col">
                    <label class="font-bold mb-1">Adınız</label>
                    <input type="text" class="p-2 border border-brown-light rounded bg-white" placeholder="Adınız Soyadınız">
                </div>
                <div class="flex flex-col">
                    <label class="font-bold mb-1">E-posta</label>
                    <input type="email" class="p-2 border border-brown-light rounded bg-white" placeholder="ornek@email.com">
                </div>
                <div class="flex flex-col">
                    <label class="font-bold mb-1">Mesajınız</label>
                    <textarea class="p-2 border border-brown-light rounded bg-white" rows="4"></textarea>
                </div>
                <button type="submit" class="bg-brown-dark text-cream px-6 py-2 rounded hover:bg-brown-light transition">Gönder</button>
            </form>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2">Şube Konumları</h2>
            <div class="grid gap-4 md:grid-cols-2">
                <div class="bg-white p-4 rounded shadow border-l-4 border-brown-light">
                    <h3 class="font-bold text-xl">Kadıköy Şubesi</h3>
                    <p class="text-sm text-gray-600">Caferağa Mah. Moda Cad. No:12</p>
                    <p class="text-sm text-gray-600">Kadıköy / İstanbul</p>
                </div>
                <div class="bg-white p-4 rounded shadow border-l-4 border-brown-light">
                    <h3 class="font-bold text-xl">Beşiktaş Şubesi</h3>
                    <p class="text-sm text-gray-600">Sinanpaşa Mah. Ortabahçe Cad. No:5</p>
                    <p class="text-sm text-gray-600">Beşiktaş / İstanbul</p>
                </div>
                <div class="bg-white p-4 rounded shadow border-l-4 border-brown-light">
                    <h3 class="font-bold text-xl">Karaköy Şubesi</h3>
                    <p class="text-sm text-gray-600">Kemankeş Karamustafa Paşa Mah. No:8</p>
                    <p class="text-sm text-gray-600">Beyoğlu / İstanbul</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const itemsHtml = menuItems.map(item => `
        <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
            <div class="w-16 h-16 bg-brown-light rounded-full flex items-center justify-center text-cream mb-3">
                <i class="fa-solid ${item.type === 'food' ? 'fa-utensils' : 'fa-mug-hot'} text-2xl"></i>
            </div>
            <h3 class="font-bold text-lg text-brown-dark">${item.name}</h3>
            <p class="text-sm text-gray-500 mt-1">${item.type === 'food' ? 'Lezzetli Atıştırmalık' : 'Sıcak/Soğuk İçecek'}</p>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    const rowsHtml = menuItems.map(item => `
        <tr class="border-b border-brown-light/20 hover:bg-brown-light/10 transition">
            <td class="p-3 font-semibold">${item.name}</td>
            <td class="p-3 text-right font-bold text-brown-dark">${item.price} ₺</td>
        </tr>
    `).join('');

    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-4">
            <h2 class="text-3xl font-bold border-b-2 border-brown-light pb-2 text-center">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-brown-light text-cream">
                        <tr>
                            <th class="p-3">Ürün</th>
                            <th class="p-3 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
