// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, desc: "Yoğun aromalı ve zengin.", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Cappuccino", price: 55, desc: "Espresso, sıcak süt ve süt köpüğü.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Latte", price: 60, desc: "Espresso ve bol sıcak süt.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Türk Kahvesi", price: 40, desc: "Geleneksel lezzet, bol köpüklü.", img: "https://images.unsplash.com/photo-1596952854378-4a18e9c1935c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Çay", price: 25, desc: "Taze demlenmiş Rize çayı.", img: "https://images.unsplash.com/photo-1563822249510-04678c78ae85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Cheesecake", price: 70, desc: "Limonlu, frambuazlı veya çikolatalı.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Kruvasan", price: 50, desc: "Tereyağlı, çıtır çıtır Fransız lezzeti.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Sandviç", price: 80, desc: "Taze malzemelerle hazırlanmış doyurucu sandviç.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Soğuk Kahve", price: 65, desc: "Buzlu, ferahlatıcı kahve keyfi.", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { name: "Limonata", price: 35, desc: "Ev yapımı, nane ferahlığıyla.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
];

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menu-toggle');
const sidebarContainer = document.getElementById('sidebar-container');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('-translate-x-full');
        sidebarContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            sidebarContainer.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 300); // Wait for transition
    }
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('active');
    setTimeout(() => {
        sidebarContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 300);
}

menuToggle.addEventListener('click', () => {
    sidebarContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // Slight delay to allow display:block to apply before transform
    setTimeout(() => {
        sidebar.classList.add('active');
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.add('active');
    }, 10);
});


// Routing Logic
const app = document.getElementById('app');

const routes = {
    '': renderHome,
    '#home': renderHome,
    '#about': renderAbout,
    '#support': renderSupport,
    '#contact': renderContact,
    '#locations': renderLocations,
    '#menu': renderMenu,
    '#prices': renderPrices
};

function router() {
    const hash = window.location.hash || '#home';
    const renderFn = routes[hash] || renderHome;
    renderFn();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Page Renderers

function renderHome() {
    app.innerHTML = `
        <div class="text-center py-10 fade-in">
            <h2 class="text-4xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">Hoş Geldiniz</h2>
            <p class="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">En taze kahve çekirdekleri ve sıcak bir atmosfer ile sizleri bekliyoruz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı Ambiyans" class="w-full h-auto object-cover">
            </div>
            <div class="mt-8">
                <a href="#menu" class="bg-coffee-dark text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-coffee-light transition-colors shadow-lg">Menüyü İncele</a>
            </div>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <p class="text-lg text-gray-800 leading-relaxed mb-4">
                Kahve Dükkanı, 2010 yılından beri kahve tutkunlarına en kaliteli çekirdeklerden elde edilen eşsiz lezzetleri sunmaktadır.
                Sadece bir kafe değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz sıcak bir yuvadır.
            </p>
            <p class="text-lg text-gray-800 leading-relaxed">
                Misyonumuz, her fincanda mutluluk ve enerji sunmaktır. Sürdürülebilir tarım ürünlerini destekliyor ve yerel üreticilerle çalışıyoruz.
            </p>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="text-lg text-gray-800 mb-4">Sizlere daha iyi hizmet verebilmek için buradayız. Her türlü soru, öneri ve şikayetiniz için bize ulaşabilirsiniz.</p>
            <ul class="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>Sıkça Sorulan Sorular (SSS)</li>
                <li>İade Politikası</li>
                <li>Hizmet Şartları</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> +90 212 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    <p class="mb-2"><strong>Adres:</strong> Bağdat Caddesi No: 123, Kadıköy, İstanbul</p>
                </div>
                <form class="space-y-4">
                    <input type="text" placeholder="Adınız" class="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-light">
                    <input type="email" placeholder="E-posta Adresiniz" class="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-light">
                    <textarea rows="4" placeholder="Mesajınız" class="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-coffee-light"></textarea>
                    <button type="submit" class="bg-coffee-dark text-white px-6 py-2 rounded hover:bg-coffee-light transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="card p-6 border-l-4 border-coffee-dark">
                    <h3 class="text-2xl font-bold mb-2">Kadıköy Merkez</h3>
                    <p class="text-gray-600">Bağdat Caddesi No: 123<br>Kadıköy / İstanbul</p>
                </div>
                <div class="card p-6 border-l-4 border-coffee-dark">
                    <h3 class="text-2xl font-bold mb-2">Beşiktaş</h3>
                    <p class="text-gray-600">Çarşı İçi Sokak No: 45<br>Beşiktaş / İstanbul</p>
                </div>
                <div class="card p-6 border-l-4 border-coffee-dark">
                    <h3 class="text-2xl font-bold mb-2">Karaköy</h3>
                    <p class="text-gray-600">Kemankeş Caddesi No: 12<br>Beyoğlu / İstanbul</p>
                </div>
                <div class="card p-6 border-l-4 border-coffee-dark">
                    <h3 class="text-2xl font-bold mb-2">Nişantaşı</h3>
                    <p class="text-gray-600">Abdi İpekçi Caddesi No: 88<br>Şişli / İstanbul</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const itemsHtml = menuItems.map(item => `
        <div class="card flex flex-col md:flex-row gap-4 p-4 items-center md:items-start bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src="${item.img}" alt="${item.name}" class="w-full md:w-32 h-32 object-cover rounded-md">
            <div class="flex-grow text-center md:text-left">
                <div class="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2 mb-2">
                    <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                    <span class="text-xl font-bold text-coffee-light">${item.price}₺</span>
                </div>
                <p class="text-gray-600">${item.desc}</p>
            </div>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="max-w-4xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-8 border-b-2 border-coffee-light pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid gap-6">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    // This could be a simple list view without images, or similar to menu.
    // Let's make it a clean table-like list for variety.
    const itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center py-3 border-b border-gray-200 hover:bg-coffee-cream px-2 transition-colors">
            <span class="text-lg font-medium text-coffee-dark">${item.name}</span>
            <span class="text-lg font-bold text-coffee-light">${item.price}₺</span>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="max-w-2xl mx-auto py-10">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-8 border-b-2 border-coffee-light pb-2 text-center">Fiyat Listesi</h2>
            <div class="bg-white p-6 rounded-lg shadow-xl">
                ${itemsHtml}
            </div>
        </div>
    `;
}
