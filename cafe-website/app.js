const menuItems = [
    { name: 'Espresso', price: '45₺' },
    { name: 'Cappuccino', price: '55₺' },
    { name: 'Latte', price: '60₺' },
    { name: 'Türk Kahvesi', price: '40₺' },
    { name: 'Çay', price: '25₺' },
    { name: 'Cheesecake', price: '70₺' },
    { name: 'Kruvasan', price: '50₺' },
    { name: 'Sandviç', price: '80₺' },
    { name: 'Soğuk Kahve', price: '65₺' },
    { name: 'Limonata', price: '35₺' },
];

const appContainer = document.getElementById('app');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarLinks = sidebar.querySelectorAll('a');

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

hamburgerBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing Logic
const routes = {
    '': renderHome,
    '#ana-sayfa': renderHome,
    '#hakkinda': renderAbout,
    '#destek': renderSupport,
    '#iletisim': renderContact,
    '#sube-konumlari': renderLocations,
    '#menu-icerikleri': renderMenuContents,
    '#fiyatlar': renderPrices,
};

function router() {
    const hash = window.location.hash;
    const renderFunc = routes[hash] || renderHome;
    appContainer.innerHTML = ''; // Clear current content
    renderFunc();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions
function renderHome() {
    appContainer.innerHTML = `
        <div class="text-center mt-10">
            <h1 class="text-4xl font-bold mb-6 text-brown-dark">Kafe'mize Hoş Geldiniz!</h1>
            <p class="text-lg mb-8">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
            <img src="./Images/coffee.jpg" alt="Taze Kahve" class="mx-auto rounded-lg shadow-2xl max-w-full h-auto object-cover md:h-96">
        </div>
    `;
}

function renderAbout() {
    appContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md mt-10">
            <h2 class="text-3xl font-bold mb-4 text-brown-dark border-b pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed">Biz, kaliteli kahve çekirdeklerini özenle seçerek size en iyi deneyimi sunmayı hedefleyen butik bir kafeyiz. Misafirlerimize sıcak, samimi ve modern bir ortamda hizmet veriyoruz.</p>
        </div>
    `;
}

function renderSupport() {
    appContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md mt-10">
            <h2 class="text-3xl font-bold mb-4 text-brown-dark border-b pb-2">Destek</h2>
            <p class="text-lg leading-relaxed">Sorularınız veya geri bildirimleriniz için buradayız. Her türlü önerinizi dinlemekten mutluluk duyarız.</p>
        </div>
    `;
}

function renderContact() {
    appContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md mt-10">
            <h2 class="text-3xl font-bold mb-4 text-brown-dark border-b pb-2">İletişim</h2>
            <p class="text-lg leading-relaxed mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Lezzet Mahallesi</p>
            <p class="text-lg leading-relaxed mb-2"><strong>Telefon:</strong> 0123 456 78 90</p>
            <p class="text-lg leading-relaxed"><strong>E-posta:</strong> merhaba@kafemiz.com</p>
        </div>
    `;
}

function renderLocations() {
    appContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md mt-10">
            <h2 class="text-3xl font-bold mb-4 text-brown-dark border-b pb-2">Şube Konumları</h2>
            <ul class="list-disc list-inside text-lg leading-relaxed">
                <li>Merkez Şube - Kadıköy</li>
                <li>Moda Şubesi</li>
                <li>Beşiktaş Şubesi</li>
            </ul>
        </div>
    `;
}

function renderMenuContents() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded shadow flex items-center justify-between">
            <span class="text-lg font-semibold">${item.name}</span>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <div class="mt-10">
            <h2 class="text-3xl font-bold mb-6 text-brown-dark text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded shadow flex items-center justify-between border-l-4 border-brown-dark">
            <span class="text-lg font-semibold">${item.name}</span>
            <span class="text-xl font-bold text-brown-dark">${item.price}</span>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <div class="mt-10">
            <h2 class="text-3xl font-bold mb-6 text-brown-dark text-center">Fiyatlar</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}
