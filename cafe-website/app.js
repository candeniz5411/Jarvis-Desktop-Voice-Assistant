// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve" },
    { name: "Cappuccino", price: 55, category: "Kahve" },
    { name: "Latte", price: 60, category: "Kahve" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve" },
    { name: "Çay", price: 25, category: "Sıcak İçecek" },
    { name: "Cheesecake", price: 70, category: "Tatlı" },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık" },
    { name: "Sandviç", price: 80, category: "Yiyecek" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecek" },
    { name: "Limonata", price: 35, category: "Soğuk İçecek" }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const app = document.getElementById('app');

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('active'); // Needs corresponding CSS for transform
    sidebar.classList.toggle('-translate-x-full'); // Tailwind utility toggle

    if (sidebar.classList.contains('active')) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-50'), 10); // Fade in
    } else {
        overlay.classList.remove('opacity-50');
        setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for fade out
    }
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-50');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// Event Listeners for Sidebar
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
});

overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking a link inside it
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
function renderHome() {
    return `
        <div class="text-center fade-in">
            <h2 class="text-4xl font-serif font-bold mb-6 text-coffee-dark">Hoş Geldiniz</h2>
            <p class="text-lg mb-8 text-coffee-light">En taze kahve çekirdekleri ve sıcak atmosferimizle hizmetinizdeyiz.</p>
            <div class="rounded-lg overflow-hidden shadow-xl mb-8">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve ve Kruvasan" class="w-full h-64 object-cover">
            </div>
            <p class="text-md italic">"Kahve sadece bir içecek değil, bir yaşam tarzıdır."</p>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <p class="mb-4">Kahve Dükkanı olarak 2010 yılından beri şehrin en iyi kahvesini sunmak için çalışıyoruz. Çekirdeklerimizi özenle seçiyor, ustalıkla kavuruyoruz.</p>
            <p>Amacımız sadece kahve satmak değil, misafirlerimize huzurlu bir ortam sunmaktır.</p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="mb-4">Herhangi bir sorunuz veya öneriniz mi var? Bizimle iletişime geçmekten çekinmeyin.</p>
            <ul class="list-disc list-inside">
                <li>Sıkça Sorulan Sorular</li>
                <li>Müşteri Hizmetleri</li>
                <li>Geri Bildirim Formu</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 123, İstanbul</p>
                <p class="mb-2"><strong>Telefon:</strong> (0212) 555 12 34</p>
                <p class="mb-2"><strong>Email:</strong> info@kahvedukkani.com</p>
                <p><strong>Çalışma Saatleri:</strong> 08:00 - 22:00</p>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2">Kadıköy</h3>
                    <p>Moda Caddesi No: 45</p>
                </div>
                <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2">Beşiktaş</h3>
                    <p>Çarşı İçi No: 12</p>
                </div>
                <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2">Karaköy</h3>
                    <p>Kemankeş Caddesi No: 8</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    // Group items by category for "Menu Content" view
    const categories = [...new Set(menuItems.map(item => item.category))];

    let html = `<h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>`;

    categories.forEach(category => {
        html += `<h3 class="text-2xl font-bold mt-6 mb-4 text-coffee-light">${category}</h3>`;
        html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;

        menuItems.filter(item => item.category === category).forEach(item => {
            html += `
                <div class="flex items-center bg-white p-4 rounded-lg shadow hover:bg-coffee-cream transition-colors">
                    <div class="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center text-white mr-4">
                        <span class="text-2xl">${item.name[0]}</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg">${item.name}</h4>
                        <p class="text-sm text-gray-600">Özel tarifimizle hazırlanmıştır.</p>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    return `<div class="fade-in">${html}</div>`;
}

function renderPrices() {
    let html = `
        <div class="fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee-light pb-2">Fiyat Listesi</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="py-4 px-6 bg-coffee-light text-white font-bold uppercase text-sm border-b border-gray-200">Ürün</th>
                            <th class="py-4 px-6 bg-coffee-light text-white font-bold uppercase text-sm border-b border-gray-200 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">
    `;

    menuItems.forEach((item, index) => {
        const bgClass = index % 2 === 0 ? 'bg-gray-100' : 'bg-white';
        html += `
            <tr class="${bgClass} hover:bg-coffee-cream transition-colors">
                <td class="py-4 px-6 border-b border-gray-200">${item.name}</td>
                <td class="py-4 px-6 border-b border-gray-200 text-right font-bold text-coffee-dark">${item.price}₺</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return html;
}

function handleRoute() {
    const hash = window.location.hash || '#home';
    let content = '';

    switch (hash) {
        case '#home':
            content = renderHome();
            break;
        case '#about':
            content = renderAbout();
            break;
        case '#support':
            content = renderSupport();
            break;
        case '#contact':
            content = renderContact();
            break;
        case '#locations':
            content = renderLocations();
            break;
        case '#menu':
            content = renderMenu();
            break;
        case '#prices':
            content = renderPrices();
            break;
        default:
            content = renderHome();
    }

    // Simple transition effect
    app.style.opacity = 0;
    setTimeout(() => {
        app.innerHTML = content;
        app.style.opacity = 1;
        window.scrollTo(0, 0);
    }, 200);
}

// Initialize
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
    handleRoute();
});
