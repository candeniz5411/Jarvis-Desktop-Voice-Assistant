const menuItems = [
    { name: 'Espresso', price: 45, description: 'Yoğun, zengin aromalı klasik İtalyan kahvesi.' },
    { name: 'Cappuccino', price: 55, description: 'Eşit oranda espresso, sıcak süt ve süt köpüğü.' },
    { name: 'Latte', price: 60, description: 'Yumuşak içimli, bol sütlü espresso keyfi.' },
    { name: 'Türk Kahvesi', price: 40, description: 'Geleneksel yöntemle pişirilen, telvesiyle sunulan kahve.' },
    { name: 'Çay', price: 25, description: 'Taze demlenmiş Rize çayı.' },
    { name: 'Cheesecake', price: 70, description: 'Frambuaz veya limon soslu nefis cheesecake.' },
    { name: 'Kruvasan', price: 50, description: 'Tereyağlı, kat kat, çıtır Fransız çöreği.' },
    { name: 'Sandviç', price: 80, description: 'Taze malzemelerle hazırlanmış doyurucu sandviç.' },
    { name: 'Soğuk Kahve', price: 65, description: 'Buzlu, ferahlatıcı kahve deneyimi.' },
    { name: 'Limonata', price: 35, description: 'Ev yapımı, nane ile tatlandırılmış limonata.' }
];

const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// --- Navigation & Routing ---

function navigate() {
    const hash = window.location.hash || '#home';
    app.innerHTML = ''; // Clear content
    app.classList.remove('fade-in');
    void app.offsetWidth; // Trigger reflow for animation
    app.classList.add('fade-in');

    switch (hash) {
        case '#home':
            renderHome();
            break;
        case '#about':
            renderGeneric('Hakkında', 'Biz, kahve tutkunları için en kaliteli çekirdekleri özenle seçip, ustalıkla kavuran bir ekibiz. 2010 yılından beri şehrin en sevilen köşesi olmaktan gurur duyuyoruz. Amacımız sadece kahve satmak değil, misafirlerimize sıcak ve huzurlu bir ortam sunmaktır.');
            break;
        case '#support':
            renderGeneric('Destek', 'Herhangi bir sorun, öneri veya şikayetiniz mi var? Müşteri memnuniyeti bizim için her şeyden önemlidir. Bize ulaşın, size en kısa sürede yardımcı olalım.');
            break;
        case '#contact':
            renderContact();
            break;
        case '#locations':
            renderLocations();
            break;
        case '#menu':
            renderMenu();
            break;
        case '#prices':
            renderPrices();
            break;
        default:
            renderHome();
    }
    closeSidebar();
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

// --- Render Functions ---

function renderHome() {
    app.innerHTML = `
        <div class="text-center space-y-6">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-4">Hoş Geldiniz</h2>
            <p class="text-xl text-gray-700 italic">"Bir fincan kahvenin kırk yıl hatırı vardır."</p>
            <div class="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mt-6">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                     alt="Taze Kahve" class="object-cover w-full h-full">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <span class="text-white text-3xl font-serif font-bold tracking-widest border-2 border-white p-4">KAHVE SANATI</span>
                </div>
            </div>
            <p class="mt-6 text-lg leading-relaxed">
                En taze kahve çekirdekleri, sıcacık atmosfer ve lezzetli atıştırmalıklarla gününüze keyif katın.
            </p>
            <a href="#menu" class="inline-block mt-4 px-6 py-3 bg-coffee-dark text-white rounded hover:bg-opacity-90 transition-colors">Menüyü Keşfet</a>
        </div>
    `;
}

function renderGeneric(title, content) {
    app.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">${title}</h2>
            <p class="text-lg leading-relaxed text-gray-700">${content}</p>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="space-y-4 text-lg">
                <p><i class="fas fa-map-marker-alt mr-3 text-coffee-dark"></i> Bağdat Caddesi No: 123, Kadıköy / İstanbul</p>
                <p><i class="fas fa-phone mr-3 text-coffee-dark"></i> +90 216 123 45 67</p>
                <p><i class="fas fa-envelope mr-3 text-coffee-dark"></i> info@kahvedukkani.com</p>
                <div class="flex space-x-4 mt-6">
                    <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="space-y-6">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 text-center">Şubelerimiz</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold mb-2">Kadıköy Merkez</h3>
                    <p class="text-gray-600">Hafta içi: 07:00 - 23:00</p>
                    <p class="text-gray-600">Hafta sonu: 08:00 - 00:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş Çarşı</h3>
                    <p class="text-gray-600">Hafta içi: 07:30 - 22:00</p>
                    <p class="text-gray-600">Hafta sonu: 08:30 - 23:30</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold mb-2">Karaköy Sahil</h3>
                    <p class="text-gray-600">Hafta içi: 08:00 - 23:00</p>
                    <p class="text-gray-600">Hafta sonu: 09:00 - 01:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold mb-2">Nişantaşı</h3>
                    <p class="text-gray-600">Hafta içi: 08:00 - 22:00</p>
                    <p class="text-gray-600">Hafta sonu: 09:00 - 23:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const list = menuItems.map(item => `
        <div class="flex justify-between items-start border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors px-2 rounded">
            <div>
                <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                <p class="text-sm text-gray-500 italic mt-1">${item.description}</p>
            </div>
            <div class="text-xl font-bold text-coffee-dark hidden md:block">
                <!-- Prices hidden in this view as per request, but can be shown if needed -->
                <i class="fas fa-utensils text-gray-300"></i>
            </div>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 text-center">Menü İçerikleri</h2>
            <div class="space-y-2">
                ${list}
            </div>
        </div>
    `;
}

function renderPrices() {
    const list = menuItems.map(item => `
        <div class="flex justify-between items-center border-b border-dotted border-coffee-light py-3">
            <span class="text-lg font-medium text-gray-800">${item.name}</span>
            <span class="text-lg font-bold text-coffee-dark">${item.price} ₺</span>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 text-center">Fiyat Listesi</h2>
            <div class="space-y-1">
                ${list}
            </div>
        </div>
    `;
}


// --- Sidebar Logic ---

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        sidebarOverlay.classList.add('opacity-100');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.remove('opacity-100');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300); // match transition duration
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
