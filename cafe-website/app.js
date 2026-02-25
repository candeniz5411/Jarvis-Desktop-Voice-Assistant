// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve" },
    { name: "Cappuccino", price: 55, category: "Kahve" },
    { name: "Latte", price: 60, category: "Kahve" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve" },
    { name: "Çay", price: 25, category: "Sıcak İçecek" },
    { name: "Cheesecake", price: 70, category: "Tatlı" },
    { name: "Kruvasan", price: 50, category: "Hamur İşi" },
    { name: "Sandviç", price: 80, category: "Atıştırmalık" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecek" },
    { name: "Limonata", price: 35, category: "Soğuk İçecek" }
];

// App Element
const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

// Toggle Sidebar Function
function toggleSidebar() {
    const isActive = sidebar.classList.contains('active');
    if (isActive) {
        sidebar.classList.remove('active');
        sidebar.classList.add('-translate-x-full'); // Ensure tailwind class is back
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
    } else {
        sidebar.classList.add('active');
        sidebar.classList.remove('-translate-x-full'); // Remove tailwind hide class
        overlay.classList.remove('hidden');
        // Small timeout for fade effect if we had transition, but block->opacity works best with requestAnimationFrame or timeout
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
    }
}

// Close sidebar when clicking a link
function closeSidebar() {
    if (sidebar.classList.contains('active')) {
        toggleSidebar();
    }
}

// Event Listeners
hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Handle Navigation Links in Sidebar
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
function render() {
    const hash = window.location.hash || '#home';
    app.innerHTML = ''; // Clear content

    switch (hash) {
        case '#home':
            renderHome();
            break;
        case '#about':
            renderPage('Hakkımızda', 'Kahve tutkusuyla 2010 yılından beri hizmetinizdeyiz. En taze çekirdekleri özenle seçip, ustalıkla kavuruyoruz.');
            break;
        case '#support':
            renderPage('Destek', 'Sorularınız ve önerileriniz için her zaman buradayız. Bize ulaşın.');
            break;
        case '#contact':
            renderPage('İletişim', 'Telefon: 0212 555 55 55<br>E-posta: info@kahvedukkani.com<br>Adres: Kahve Sokak No: 1, İstanbul');
            break;
        case '#locations':
            renderPage('Şube Konumları', '<ul><li>Kadıköy Merkez</li><li>Beşiktaş Çarşı</li><li>Karaköy Sahil</li></ul>');
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
}

// Page Renderers
function renderHome() {
    app.innerHTML = `
        <div class="text-center fade-in">
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-coffee-dark">Hoş Geldiniz</h2>
            <p class="text-lg mb-8 italic">"Bir fincan kahve, bin yıllık hatır..."</p>
            <div class="rounded-lg overflow-hidden shadow-2xl mx-auto max-w-md">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
                     alt="Kahve ve Kruvasan"
                     class="w-full h-auto object-cover transform hover:scale-105 transition duration-500">
            </div>
            <div class="mt-8">
                <a href="#menu" class="bg-coffee-dark text-cream-light px-6 py-3 rounded-full hover:bg-opacity-90 transition shadow-lg">Menüyü İncele</a>
            </div>
        </div>
    `;
}

function renderPage(title, content) {
    app.innerHTML = `
        <div class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold mb-4 border-b-2 border-coffee-dark pb-2">${title}</h2>
            <div class="text-lg leading-relaxed">${content}</div>
        </div>
    `;
}

function renderMenu() {
    let html = `
        <h2 class="text-3xl font-serif font-bold mb-6 text-center">Menü İçerikleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex justify-between items-center border-l-4 border-coffee-dark">
                <div>
                    <h3 class="text-xl font-bold">${item.name}</h3>
                    <p class="text-sm text-gray-600">${item.category}</p>
                </div>
                <!-- Icons or details could go here -->
            </div>
        `;
    });

    html += `</div>`;
    app.innerHTML = html;
}

function renderPrices() {
    let html = `
        <h2 class="text-3xl font-serif font-bold mb-6 text-center">Fiyat Listesi</h2>
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <ul class="divide-y divide-gray-200">
    `;

    menuItems.forEach(item => {
        html += `
            <li class="py-4 flex justify-between items-center">
                <span class="text-lg font-medium">${item.name}</span>
                <span class="text-lg font-bold text-coffee-dark">${item.price} ₺</span>
            </li>
        `;
    });

    html += `</ul></div>`;
    app.innerHTML = html;
}

// Initialize
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
