
const menuItems = [
    { name: "Espresso", price: 45, category: "Sıcak İçecekler" },
    { name: "Cappuccino", price: 55, category: "Sıcak İçecekler" },
    { name: "Latte", price: 60, category: "Sıcak İçecekler" },
    { name: "Türk Kahvesi", price: 40, category: "Sıcak İçecekler" },
    { name: "Çay", price: 25, category: "Sıcak İçecekler" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecekler" },
    { name: "Limonata", price: 35, category: "Soğuk İçecekler" },
    { name: "Cheesecake", price: 70, category: "Yiyecekler" },
    { name: "Kruvasan", price: 50, category: "Yiyecekler" },
    { name: "Sandviç", price: 80, category: "Yiyecekler" },
];

const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

// Sidebar Toggle Logic
function toggleSidebar() {
    // We use custom classes with !important to override Tailwind defaults
    sidebar.classList.toggle('sidebar-open');
    overlay.classList.toggle('overlay-active');
}

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
});

overlay.addEventListener('click', toggleSidebar);

// Close sidebar when a link is clicked
// We need to attach this to the document or sidebar because links might not be parsed if we were dynamically generating them (though sidebar is static in index.html)
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close if it's open
        if (sidebar.classList.contains('sidebar-open')) {
            toggleSidebar();
        }
    });
});

// Routing Logic
function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center text-center mt-10">
            <h2 class="text-4xl md:text-6xl font-heading font-bold text-coffee-dark mb-8 animate-fade-in">Hoş Geldiniz</h2>
            <div class="relative w-full max-w-lg mb-10 overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition duration-500">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                     alt="Delicious Coffee"
                     class="w-full h-auto object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <p class="text-xl md:text-2xl text-coffee-light max-w-2xl leading-relaxed mb-8">
                En taze kahve çekirdekleri, sıcak bir atmosfer ve unutulmaz tatlar sizi bekliyor.
            </p>
            <a href="#menu" class="bg-coffee-dark text-coffee-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-coffee-light transition transform hover:-translate-y-1 shadow-lg">
                Menüyü Keşfet
            </a>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-cream pb-4">Hakkımızda</h2>
            <div class="prose text-lg text-gray-700">
                <p class="mb-4">Kahve Dükkanı olarak, kahve tutkusunu bir sanata dönüştürüyoruz. 2010 yılından bu yana, dünyanın en seçkin kahve çiftliklerinden getirdiğimiz çekirdekleri özenle kavuruyor ve sizlere sunuyoruz.</p>
                <p class="mb-4">Misyonumuz sadece kahve satmak değil, her fincanda bir hikaye anlatmak ve sizlere huzurlu bir sığınak sunmaktır.</p>
                <p>Minimalist tasarımımız ve samimi atmosferimizle, şehrin gürültüsünden uzaklaşabileceğiniz bir alan yarattık.</p>
            </div>
        </div>
    `;
}

function renderMenu() {
    // Group items by category (optional, but requested layout was simple list)
    // Let's stick to the grid layout
    let html = `
        <div class="max-w-5xl mx-auto mt-8">
            <h2 class="text-4xl font-heading font-bold text-center text-coffee-dark mb-10">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-coffee-cream group">
                <div class="h-2 bg-coffee-dark group-hover:bg-coffee-light transition"></div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-coffee-dark mb-2">${item.name}</h3>
                    <p class="text-gray-500 font-medium">${item.category}</p>
                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-lg font-bold text-coffee-dark">${item.price}₺</span>
                        <button class="text-sm bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full font-bold">Detay</button>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function renderPrices() {
     let html = `
        <div class="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-coffee-dark p-6">
                <h2 class="text-3xl font-heading font-bold text-coffee-cream text-center">Fiyat Listesi</h2>
            </div>
            <ul class="divide-y divide-gray-200">
    `;

    menuItems.forEach(item => {
        html += `
            <li class="p-6 flex justify-between items-center hover:bg-coffee-cream hover:bg-opacity-20 transition">
                <span class="text-xl font-medium text-gray-800">${item.name}</span>
                <span class="text-xl font-bold text-coffee-dark">${item.price}₺</span>
            </li>
        `;
    });

    html += `</ul></div>`;
    return html;
}

function renderBranches() {
    return `
        <div class="max-w-4xl mx-auto mt-8">
            <h2 class="text-3xl font-heading font-bold text-center text-coffee-dark mb-10">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-coffee-dark">
                    <h3 class="font-bold text-2xl text-coffee-dark mb-4">Merkez Şube</h3>
                    <p class="text-gray-600 mb-2"><span class="font-bold">Adres:</span> Bağdat Caddesi No: 123, Kadıköy/İstanbul</p>
                    <p class="text-gray-600"><span class="font-bold">Çalışma Saatleri:</span> 08:00 - 23:00</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-coffee-dark">
                    <h3 class="font-bold text-2xl text-coffee-dark mb-4">Taksim Şube</h3>
                    <p class="text-gray-600 mb-2"><span class="font-bold">Adres:</span> İstiklal Caddesi No: 45, Beyoğlu/İstanbul</p>
                    <p class="text-gray-600"><span class="font-bold">Çalışma Saatleri:</span> 09:00 - 02:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-8 text-center">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-coffee-light">Bize Ulaşın</h3>
                    <p class="flex items-center text-gray-700">
                        <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        0212 123 45 67
                    </p>
                    <p class="flex items-center text-gray-700">
                         <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        info@kahvedukkani.com
                    </p>
                    <p class="flex items-center text-gray-700">
                        <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Örnek Mahallesi, Kahve Sokak No:1
                    </p>
                </div>
                <div class="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Harita Alanı
                </div>
            </div>
        </div>
    `;
}

function renderSupport() {
     return `
        <div class="max-w-2xl mx-auto mt-8">
            <h2 class="text-3xl font-heading font-bold text-center text-coffee-dark mb-8">Destek</h2>
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <p class="mb-6 text-gray-600 text-center">Görüşleriniz bizim için değerli. Lütfen aşağıdaki formu doldurun.</p>
                <form class="space-y-6">
                    <div>
                        <label class="block text-gray-700 font-bold mb-2">Adınız Soyadınız</label>
                        <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee-dark transition">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-bold mb-2">E-posta Adresiniz</label>
                        <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee-dark transition">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-bold mb-2">Mesajınız</label>
                        <textarea class="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-coffee-dark transition"></textarea>
                    </div>
                    <button class="w-full bg-coffee-dark text-white p-4 rounded-lg font-bold hover:bg-coffee-light transition duration-300">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function router() {
    const hash = window.location.hash || '#home';
    let content = '';

    // Simple routing
    switch(hash) {
        case '#home':
            content = renderHome();
            break;
        case '#about':
            content = renderAbout();
            break;
        case '#menu':
            content = renderMenu();
            break;
        case '#prices':
            content = renderPrices();
            break;
        case '#branches':
            content = renderBranches();
            break;
        case '#contact':
            content = renderContact();
            break;
        case '#support':
            content = renderSupport();
            break;
        default:
            content = renderHome();
    }

    app.innerHTML = content;
    window.scrollTo(0, 0);
}

// Initialize
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
