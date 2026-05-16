// Menu Data
const menuData = [
    { name: "Espresso", price: "45₺" },
    { name: "Cappuccino", price: "55₺" },
    { name: "Latte", price: "60₺" },
    { name: "Türk Kahvesi", price: "40₺" },
    { name: "Çay", price: "25₺" },
    { name: "Cheesecake", price: "70₺" },
    { name: "Kruvasan", price: "50₺" },
    { name: "Sandviç", price: "80₺" },
    { name: "Soğuk Kahve", price: "65₺" },
    { name: "Limonata", price: "35₺" },
];

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const navLinks = document.querySelectorAll('.nav-link');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const appContainer = document.getElementById('app');

const routes = {
    '/': renderHome,
    '/hakkinda': renderAbout,
    '/destek': renderSupport,
    '/iletisim': renderContact,
    '/sube-konumlari': renderLocations,
    '/menu-icerikleri': renderMenuContents,
    '/fiyatlar': renderPricing,
};

function router() {
    // Get the current hash, or default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Find the matching route, or default to Home
    const renderFunction = routes[path] || routes['/'];

    // Inject the content into the app container
    appContainer.innerHTML = renderFunction();
}

// Route rendering functions
function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center text-center space-y-6 mt-8">
            <h2 class="text-4xl heading-font font-bold text-coffee-dark">Hoş Geldiniz!</h2>
            <p class="text-lg text-gray-700 max-w-2xl">
                En taze kahveler ve lezzetli atıştırmalıklar eşliğinde gününüze keyif katın.
                Modern ve rahat atmosferimizde sizi ağırlamaktan mutluluk duyarız.
            </p>
            <div class="mt-8 rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <a href="#/menu-icerikleri" class="mt-6 inline-block bg-coffee-dark text-cream px-8 py-3 rounded-full font-bold hover:bg-coffee-hover transition-colors shadow-lg">
                Menüyü İncele
            </a>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">Hakkımızda</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                2010 yılından bu yana, en kaliteli kahve çekirdeklerini özenle seçiyor ve usta baristalarımızın ellerinde sanata dönüştürüyoruz. Amacımız sadece kahve satmak değil, misafirlerimize unutulmaz bir deneyim sunmaktır.
            </p>
            <p class="text-gray-700 leading-relaxed">
                Modern ve minimalist yaklaşımımızla tasarladığımız mekanlarımızda, günün yorgunluğunu atabilir, sevdiklerinizle keyifli vakit geçirebilir veya huzurlu bir çalışma ortamı bulabilirsiniz.
            </p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">Destek</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili her türlü sorunuz için buradayız.
            </p>
            <div class="bg-cream/50 p-6 rounded-lg border border-gray-100">
                <h3 class="font-bold text-lg mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Siparişimi nasıl iptal edebilirim?</li>
                    <li>Alerjen bildirimlerinizi nereden görebilirim?</li>
                    <li>Sadakat programınıza nasıl katılabilirim?</li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-lg mb-2 text-coffee-dark">Bize Ulaşın</h3>
                    <p class="text-gray-700 mb-1"><strong>Telefon:</strong> 0(212) 555 12 34</p>
                    <p class="text-gray-700 mb-1"><strong>E-posta:</strong> merhaba@kafeportali.com</p>
                    <p class="text-gray-700 mt-4"><strong>Çalışma Saatleri:</strong><br>Pazartesi - Pazar: 08:00 - 23:00</p>
                </div>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Adınız</label>
                        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-light focus:ring-coffee-light p-2 border" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Mesajınız</label>
                        <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-light focus:ring-coffee-light p-2 border" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee-dark text-cream py-2 px-4 rounded hover:bg-coffee-hover transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">Şube Konumları</h2>
            <div class="space-y-6">
                <div class="border-l-4 border-coffee-light pl-4">
                    <h3 class="text-xl font-bold text-coffee-dark">Kadıköy Merkez Şube</h3>
                    <p class="text-gray-600 mt-1">Caferağa Mah. Moda Cad. No: 123 Kadıköy, İstanbul</p>
                </div>
                <div class="border-l-4 border-coffee-light pl-4">
                    <h3 class="text-xl font-bold text-coffee-dark">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mt-1">Sinanpaşa Mah. Barbaros Bulvarı No: 45 Beşiktaş, İstanbul</p>
                </div>
                <div class="border-l-4 border-coffee-light pl-4">
                    <h3 class="text-xl font-bold text-coffee-dark">Karaköy Şubesi</h3>
                    <p class="text-gray-600 mt-1">Kemankeş Karamustafa Paşa Mah. Mumhane Cad. No: 78 Beyoğlu, İstanbul</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenuContents() {
    const listItems = menuData.map(item =>
        `<li class="py-3 px-4 bg-cream/30 rounded-lg flex justify-between items-center border border-gray-100 hover:shadow-md transition-shadow">
            <span class="font-medium text-gray-800">${item.name}</span>
            <span class="text-sm text-gray-500 italic">Detaylar için tıklayın</span>
        </li>`
    ).join('');

    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">Menü İçerikleri</h2>
            <p class="text-gray-600 mb-6">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz:</p>
            <ul class="space-y-3">
                ${listItems}
            </ul>
        </div>
    `;
}

function renderPricing() {
    const tableRows = menuData.map(item =>
        `<tr class="border-b border-gray-100 hover:bg-cream/20 transition-colors">
            <td class="py-4 px-6 text-gray-800 font-medium">${item.name}</td>
            <td class="py-4 px-6 text-right font-bold text-coffee-dark">${item.price}</td>
        </tr>`
    ).join('');

    return `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 class="text-3xl heading-font font-bold mb-6 text-coffee-dark border-b pb-2">Fiyat Listesi</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-coffee-dark text-cream">
                            <th class="py-3 px-6 rounded-tl-lg">Ürün</th>
                            <th class="py-3 px-6 text-right rounded-tr-lg">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Initialize router
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
