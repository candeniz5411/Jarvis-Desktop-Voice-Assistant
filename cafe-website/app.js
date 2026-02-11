// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', category: 'Sıcak Kahve' },
    { name: 'Cappuccino', price: '55₺', category: 'Sıcak Kahve' },
    { name: 'Latte', price: '60₺', category: 'Sıcak Kahve' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Sıcak Kahve' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecek' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlı' },
    { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalık' },
    { name: 'Sandviç', price: '80₺', category: 'Atıştırmalık' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecek' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecek' },
];

// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const mainContent = document.getElementById('main-content');
const body = document.body;

// Sidebar Logic
function toggleSidebar() {
    const isOpen = !sidebar.classList.contains('-translate-x-full');

    if (isOpen) {
        // Close sidebar
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
        overlay.classList.add('hidden');
        body.classList.remove('menu-open');
    } else {
        // Open sidebar
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        body.classList.add('menu-open');
    }
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when a link is clicked
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        // Only close on mobile or small screens if needed,
        // but generally good UX to close after navigation
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing Logic
function renderHome() {
    return `
        <div class="fade-in text-center">
            <h2 class="text-4xl font-serif font-bold text-coffee mb-6">Hoş Geldiniz</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">En kaliteli kahve çekirdekleri ve ustalıkla hazırlanan lezzetlerimizle keyifli anlar yaşayın.</p>

            <div class="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-8 group">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                     alt="Kahve Görseli"
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent flex items-end justify-center pb-8">
                    <span class="text-white text-2xl font-serif tracking-widest">KAHVE TUTKUSU</span>
                </div>
            </div>

            <a href="#menu" class="inline-block bg-coffee text-cream px-8 py-3 rounded-full hover:bg-coffee-light transition-colors text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Menümüzü İnceleyin
            </a>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <p class="text-lg leading-relaxed mb-4">
                    Kahve Dükkanı olarak 2010 yılından beri kahve severlere en iyi deneyimi sunmak için çalışıyoruz.
                    Dünyanın dört bir yanından özenle seçilen çekirdekleri, uzman baristalarımızın ellerinde sanata dönüştürüyoruz.
                </p>
                <p class="text-lg leading-relaxed">
                    Sadece bir kahve dükkanı değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz,
                    kitabınızı okuyup huzur bulabileceğiniz bir yaşam alanı sunuyoruz.
                </p>
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <p class="text-lg mb-4">Sizlere daha iyi hizmet verebilmek için buradayız. Öneri, şikayet veya talepleriniz için bize ulaşın.</p>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold mb-1">Konu</label>
                        <select class="w-full p-2 border border-gray-300 rounded focus:border-coffee focus:ring-1 focus:ring-coffee outline-none">
                            <option>Genel Bilgi</option>
                            <option>Şikayet</option>
                            <option>Öneri</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Mesajınız</label>
                        <textarea class="w-full p-2 border border-gray-300 rounded h-32 focus:border-coffee focus:ring-1 focus:ring-coffee outline-none"></textarea>
                    </div>
                    <button type="button" class="bg-coffee text-cream px-6 py-2 rounded hover:bg-coffee-light transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-4">Adres Bilgileri</h3>
                    <p class="mb-2"><strong>Merkez:</strong> Kahve Caddesi No: 42, Kadıköy / İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> +90 216 555 00 00</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 07:00 - 23:00</p>
                    <p>Cumartesi - Pazar: 08:00 - 00:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    const locations = [
        { name: 'Kadıköy', address: 'Moda Caddesi No:12' },
        { name: 'Beşiktaş', address: 'Çarşı İçi Sokak No:5' },
        { name: 'Nişantaşı', address: 'Abdi İpekçi Caddesi No:22' },
        { name: 'Karaköy', address: 'Kemankeş Caddesi No:8' }
    ];

    const listHtml = locations.map(loc => `
        <div class="bg-white p-4 rounded shadow border-l-4 border-coffee hover:bg-cream-light transition-colors cursor-pointer">
            <h3 class="text-lg font-bold">${loc.name}</h3>
            <p class="text-gray-600">${loc.address}</p>
        </div>
    `).join('');

    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid gap-4 md:grid-cols-2">
                ${listHtml}
            </div>
        </div>
    `;
}

function renderMenu() {
    const cardsHtml = menuItems.map(item => `
        <div class="menu-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
            <div class="h-40 bg-gray-200 relative overflow-hidden">
                <!-- Placeholder Image based on item name for variety -->
                <img src="https://source.unsplash.com/400x300/?coffee,${item.name.split(' ')[0]}"
                     alt="${item.name}"
                     class="w-full h-full object-cover"
                     onerror="this.src='https://placehold.co/400x300/3e2723/fff?text=${item.name}'">
                <span class="absolute top-2 right-2 bg-cream text-coffee text-xs font-bold px-2 py-1 rounded-full shadow">
                    ${item.category}
                </span>
            </div>
            <div class="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-coffee mb-2">${item.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">Taze malzemelerle günlük olarak hazırlanmıştır.</p>
                </div>
                <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span class="text-2xl font-bold text-coffee-light">${item.price}</span>
                    <button class="bg-coffee text-white px-3 py-1 rounded hover:bg-coffee-light text-sm transition-colors">Sepete Ekle</button>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>
            <div class="menu-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    const rowsHtml = menuItems.map(item => `
        <tr class="hover:bg-cream-light transition-colors border-b border-gray-100">
            <td class="py-3 px-4 font-medium text-coffee">${item.name}</td>
            <td class="py-3 px-4 text-gray-600">${item.category}</td>
            <td class="py-3 px-4 text-right font-bold text-coffee-light">${item.price}</td>
        </tr>
    `).join('');

    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold text-coffee mb-6 border-b-2 border-coffee-light pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-coffee text-cream">
                        <tr>
                            <th class="py-3 px-4 font-serif">Ürün</th>
                            <th class="py-3 px-4 font-serif">Kategori</th>
                            <th class="py-3 px-4 font-serif text-right">Fiyat</th>
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

function handleRouting() {
    const hash = window.location.hash || '#home';
    let htmlContent = '';

    switch(hash) {
        case '#home':
            htmlContent = renderHome();
            break;
        case '#about':
            htmlContent = renderAbout();
            break;
        case '#support':
            htmlContent = renderSupport();
            break;
        case '#contact':
            htmlContent = renderContact();
            break;
        case '#locations':
            htmlContent = renderLocations();
            break;
        case '#menu':
            htmlContent = renderMenu();
            break;
        case '#prices':
            htmlContent = renderPrices();
            break;
        default:
            htmlContent = renderHome();
    }

    mainContent.innerHTML = htmlContent;
    window.scrollTo(0, 0);
}

// Event Listeners for Routing
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);
