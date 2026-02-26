// Data for the Menu
const menuItems = [
    { name: 'Espresso', price: 45, category: 'Kahve' },
    { name: 'Cappuccino', price: 55, category: 'Kahve' },
    { name: 'Latte', price: 60, category: 'Kahve' },
    { name: 'Türk Kahvesi', price: 40, category: 'Kahve' },
    { name: 'Çay', price: 25, category: 'İçecek' },
    { name: 'Cheesecake', price: 70, category: 'Tatlı' },
    { name: 'Kruvasan', price: 50, category: 'Yiyecek' },
    { name: 'Sandviç', price: 80, category: 'Yiyecek' },
    { name: 'Soğuk Kahve', price: 65, category: 'Kahve' },
    { name: 'Limonata', price: 35, category: 'İçecek' }
];

// Router Configuration
const routes = {
    '': renderHome,
    '#home': renderHome,
    '#hakkinda': renderAbout,
    '#destek': renderSupport,
    '#iletisim': renderContact,
    '#sube-konumlari': renderLocations,
    '#menu-icerikleri': renderMenu,
    '#fiyatlar': renderPrices
};

function renderHome() {
    return `
        <div class="text-center">
            <h2 class="text-4xl font-heading mb-6">Hoş Geldiniz</h2>
            <p class="text-xl mb-8">En taze kahve çekirdekleri ve sıcak bir atmosfer ile hizmetinizdeyiz.</p>
            <div class="rounded-lg overflow-hidden shadow-xl mb-8">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı Ambiyansı" class="w-full h-auto object-cover">
            </div>
            <a href="#menu-icerikleri" class="btn-primary inline-block text-lg no-underline" onclick="closeSidebar()">Menümüzü Keşfedin</a>
        </div>
    `;
}

function renderAbout() {
    return `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">Hakkımızda</h2>
        <div class="card p-6">
            <p class="text-lg leading-relaxed mb-4">
                Kahve Dükkanı olarak 2010 yılından beri kahve tutkunlarına en kaliteli hizmeti sunuyoruz.
                Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini, ustalıkla kavuruyor ve sizlere sunuyoruz.
            </p>
            <p class="text-lg leading-relaxed">
                Misyonumuz, her fincanda mutluluk ve keyif sunmaktır.
            </p>
        </div>
    `;
}

function renderSupport() {
    return `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">Destek</h2>
        <div class="card p-6">
            <p class="mb-4">Herhangi bir sorunuz veya öneriniz mi var? Size yardımcı olmaktan mutluluk duyarız.</p>
            <ul class="list-disc list-inside space-y-2">
                <li>Sıkça Sorulan Sorular (SSS)</li>
                <li>İade ve Değişim Politikası</li>
                <li>Müşteri Hizmetleri</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    return `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">İletişim</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="card p-6">
                <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                <p class="mb-2"><strong>Telefon:</strong> +90 212 123 45 67</p>
                <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                <p><strong>Adres:</strong> Kahve Sokak No: 1, İstanbul</p>
            </div>
            <div class="card p-6">
                <h3 class="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 07:00 - 22:00</p>
                <p>Cumartesi - Pazar: 08:00 - 23:00</p>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">Şube Konumları</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="card p-6">
                <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                <p>Çarşı İçi, No: 5</p>
            </div>
            <div class="card p-6">
                <h3 class="text-xl font-bold mb-2">Kadıköy Şubesi</h3>
                <p>Moda Caddesi, No: 12</p>
            </div>
            <div class="card p-6">
                <h3 class="text-xl font-bold mb-2">Nişantaşı Şubesi</h3>
                <p>Valikonağı Caddesi, No: 8</p>
            </div>
        </div>
    `;
}

function renderMenu() {
    let menuHtml = `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">Menü İçerikleri</h2>
        <div class="grid md:grid-cols-2 gap-6">
    `;

    menuItems.forEach(item => {
        menuHtml += `
            <div class="card p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                    <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                    <span class="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full mt-1 inline-block">${item.category}</span>
                </div>
            </div>
        `;
    });

    menuHtml += `</div>`;
    return menuHtml;
}

function renderPrices() {
    let pricesHtml = `
        <h2 class="text-3xl font-heading mb-6 border-b-2 border-coffee-dark inline-block pb-2">Fiyat Listesi</h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-coffee-dark text-coffee-cream">
                        <th class="p-4 font-heading text-lg">Ürün</th>
                        <th class="p-4 font-heading text-lg text-right">Fiyat</th>
                    </tr>
                </thead>
                <tbody>
    `;

    menuItems.forEach((item, index) => {
        const rowClass = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
        pricesHtml += `
            <tr class="${rowClass} hover:bg-coffee-cream/50 transition-colors border-b border-gray-100 last:border-0">
                <td class="p-4 font-medium">${item.name}</td>
                <td class="p-4 text-right font-bold text-coffee-dark">${item.price}₺</td>
            </tr>
        `;
    });

    pricesHtml += `
                </tbody>
            </table>
        </div>
    `;
    return pricesHtml;
}

// Router Logic
function router() {
    const hash = window.location.hash || '';
    const contentDiv = document.getElementById('app');
    const renderFunction = routes[hash] || routes['#home']; // Fallback to home

    // Highlight active link
    document.querySelectorAll('#sidebar a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active-link');
        }
    });

    contentDiv.innerHTML = renderFunction();
    contentDiv.style.opacity = 0;
    setTimeout(() => {
        contentDiv.style.opacity = 1;
    }, 50);

    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
        closeSidebar();
    }
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburgerBtn = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-menu');

function openSidebar() {
    sidebar.classList.add('active');
    // Using style transform directly for stronger override if needed, though class is cleaner
    sidebar.style.transform = 'translateX(0)';
    overlay.classList.remove('hidden');
    // Slight delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebar.style.transform = 'translateX(-100%)';
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); // Match transition duration
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

hamburgerBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Initial call to set state correctly if needed
closeSidebar();
