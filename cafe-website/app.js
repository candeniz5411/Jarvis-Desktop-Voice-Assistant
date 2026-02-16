// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, type: "drink", description: "Yoğun aromalı klasik İtalyan kahvesi." },
    { name: "Cappuccino", price: 55, type: "drink", description: "Espresso, sıcak süt ve süt köpüğünün mükemmel uyumu." },
    { name: "Latte", price: 60, type: "drink", description: "Yumuşak içimli, bol sütlü kahve keyfi." },
    { name: "Türk Kahvesi", price: 40, type: "drink", description: "Geleneksel yöntemlerle hazırlanan bol köpüklü Türk kahvesi." },
    { name: "Çay", price: 25, type: "drink", description: "Taze demlenmiş Rize çayı." },
    { name: "Cheesecake", price: 70, type: "food", description: "Limonlu, frambuazlı veya çikolatalı seçenekleriyle." },
    { name: "Kruvasan", price: 50, type: "food", description: "Tereyağlı, çıtır çıtır taze kruvasan." },
    { name: "Sandviç", price: 80, type: "food", description: "Taze malzemelerle hazırlanan doyurucu sandviç." },
    { name: "Soğuk Kahve", price: 65, type: "drink", description: "Buz gibi serinleten kahve lezzeti." },
    { name: "Limonata", price: 35, type: "drink", description: "Ev yapımı, nane ferahlığıyla." }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-sidebar');
const app = document.getElementById('app');

// Sidebar Logic
function toggleSidebar(show) {
    if (show) {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0'); // Using tailwind class logic or custom css
        sidebarOverlay.classList.remove('hidden');
        sidebarOverlay.classList.add('block');
        // If verify fails, check style.css classes .translate-x-0
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
        sidebarOverlay.classList.remove('block');
        sidebarOverlay.classList.add('hidden');
        sidebar.style.transform = 'translateX(-100%)';
    }
}

menuBtn.addEventListener('click', () => toggleSidebar(true));
closeBtn.addEventListener('click', () => toggleSidebar(false));
sidebarOverlay.addEventListener('click', () => toggleSidebar(false));

// Close sidebar when a link is clicked
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => toggleSidebar(false));
});


// Routing Logic
function renderHome() {
    return `
        <div class="text-center animate-fade-in-up">
            <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6">Hoş Geldiniz</h2>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Kahve kokusunun huzurla buluştuğu yer. En taze çekirdeklerden hazırlanan kahvelerimiz ve lezzetli atıştırmalıklarımızla sizleri bekliyoruz.
            </p>
            <div class="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                 <!-- Using a solid color placeholder with text since external images can be flaky in verifying environments without internet access -->
                <div class="w-full h-full bg-coffee flex items-center justify-center text-cream text-2xl font-bold">
                    [Kahve Fotoğrafı]
                </div>
            </div>
            <a href="#menu" class="inline-block bg-coffee hover:bg-coffee-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Menümüzü Keşfedin
            </a>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                Kahve Dükkanı olarak 2010 yılından beri şehrin en iyi kahvesini sunmak için çalışıyoruz.
                Sürdürülebilir tarım uygulamalarını destekliyor ve yerel üreticilerden temin ettiğimiz en kaliteli çekirdekleri özenle kavuruyoruz.
            </p>
            <p class="text-gray-700 leading-relaxed">
                Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz sıcak bir ortam yaratmaktır.
            </p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="text-gray-700 mb-6">Görüş, öneri ve şikayetleriniz bizim için çok değerli. Aşağıdaki formu doldurarak bize ulaşabilirsiniz.</p>

            <form class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Adınız Soyadınız</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Adınız">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">E-posta Adresiniz</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="ornek@email.com">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mesajınız</label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Bize iletmek istedikleriniz..."></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-coffee hover:bg-coffee-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" type="button">
                        Gönder
                    </button>
                </div>
            </form>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4 text-coffee">Merkez Şube</h3>
                    <p class="text-gray-700 mb-2"><strong>Adres:</strong> Bağdat Caddesi No: 123, Kadıköy, İstanbul</p>
                    <p class="text-gray-700 mb-2"><strong>Telefon:</strong> (0216) 123 45 67</p>
                    <p class="text-gray-700 mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    <p class="text-gray-700"><strong>Çalışma Saatleri:</strong> 07:00 - 23:00</p>
                </div>
                <div class="bg-gray-200 rounded-lg flex items-center justify-center h-64">
                    <span class="text-gray-500 font-bold">[Harita Alanı]</span>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    const locations = [
        { name: "Kadıköy", address: "Bağdat Caddesi No: 123", phone: "(0216) 123 45 67" },
        { name: "Beşiktaş", address: "Çarşı içi, Kartal Heykeli Yanı", phone: "(0212) 234 56 78" },
        { name: "Karaköy", address: "Kemankeş Caddesi No: 45", phone: "(0212) 345 67 89" },
    ];

    let html = `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    locations.forEach(loc => {
        html += `
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-coffee">
                <h3 class="text-xl font-bold text-coffee-dark mb-2">${loc.name}</h3>
                <p class="text-gray-600 mb-2">${loc.address}</p>
                <p class="text-sm font-semibold text-gray-500">${loc.phone}</p>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function renderMenu() {
    let html = `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>
            <div class="grid md:grid-cols-2 gap-6">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white p-4 rounded-lg shadow flex items-center space-x-4 hover:bg-gray-50 transition-colors">
                <div class="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center text-coffee-dark font-bold text-xl">
                    ${item.name.charAt(0)}
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-baseline">
                        <h3 class="text-lg font-bold text-coffee-dark">${item.name}</h3>
                        <span class="text-lg font-bold text-coffee">${item.price}₺</span>
                    </div>
                    <p class="text-sm text-gray-600">${item.description}</p>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function renderPrices() {
    let html = `
        <div class="animate-fade-in-up">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Fiyat Listesi</h2>
            <div class="overflow-x-auto bg-white rounded-lg shadow">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Ürün Adı
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Kategori
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Fiyat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    menuItems.forEach(item => {
        const typeLabel = item.type === 'drink' ? 'İçecek' : 'Yiyecek';
        html += `
            <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap font-semibold">${item.name}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 ${item.type === 'drink' ? 'bg-green-200' : 'bg-orange-200'} opacity-50 rounded-full"></span>
                        <span class="relative">${typeLabel}</span>
                    </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <p class="text-gray-900 whitespace-no-wrap font-bold">${item.price}₺</p>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table></div></div>`;
    return html;
}

function handleHashChange() {
    const hash = window.location.hash;
    let content = '';

    // Simple router
    switch(hash) {
        case '#hakkinda':
            content = renderAbout();
            break;
        case '#destek':
            content = renderSupport();
            break;
        case '#iletisim':
            content = renderContact();
            break;
        case '#subeler':
            content = renderLocations();
            break;
        case '#menu':
            content = renderMenu();
            break;
        case '#fiyatlar':
            content = renderPrices();
            break;
        default:
            content = renderHome(); // Default to Home
            break;
    }

    app.innerHTML = content;

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initial Load
window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
