// DOM Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navLinks = document.querySelectorAll('.nav-link');
const appContainer = document.getElementById('app');
const logo = document.getElementById('logo');

// Menu Data
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
    { name: 'Limonata', price: '35₺' }
];

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

openMenuBtn.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Page Contents
const pages = {
    home: `
        <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Kafe Viyana'ya Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">En iyi kahve çekirdekleri ve enfes tatlılarla, gününüzü güzelleştirmek için buradayız.</p>
            <div class="rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto border-4 border-brown-base/10">
                <img src="Images/cover.jpg" alt="Kahve" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    about: `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">Hakkında</h2>
            <p class="text-lg mb-4">Kafe Viyana, kahve tutkusunu en saf haliyle sunmak için kurulmuş bağımsız bir kahve dükkanıdır.</p>
            <p class="text-lg mb-4">Dünyanın dört bir yanından özenle seçilmiş çekirdekleri, ustalıkla kavuruyor ve misafirlerimize unutulmaz bir deneyim yaşatıyoruz. Amacımız sadece kahve satmak değil, aynı zamanda keyifli sohbetlerin ve güzel anıların paylaşıldığı bir mekan olmaktır.</p>
        </div>
    `,
    support: `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">Destek</h2>
            <p class="text-lg mb-4">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorununuz veya öneriniz varsa lütfen bize ulaşın.</p>
            <ul class="list-disc pl-6 text-lg space-y-2 mt-4">
                <li>Sıkça Sorulan Sorular</li>
                <li>Geri Bildirim Formu</li>
                <li>İade ve İptal Politikası</li>
            </ul>
        </div>
    `,
    contact: `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">İletişim</h2>
            <div class="bg-brown-base/5 p-6 rounded-lg">
                <p class="text-lg mb-3"><strong>Adres:</strong> Kahve Sokak No: 42, Moda, Kadıköy / İstanbul</p>
                <p class="text-lg mb-3"><strong>Telefon:</strong> 0 (216) 555 01 23</p>
                <p class="text-lg mb-3"><strong>E-posta:</strong> merhaba@kafeviyana.com.tr</p>
                <p class="text-lg"><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
            </div>
        </div>
    `,
    locations: `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">Şube Konumları</h2>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="bg-cream shadow-md p-6 rounded-lg border border-brown-base/20">
                    <h3 class="text-xl font-bold mb-2">Moda (Merkez)</h3>
                    <p>Kahve Sokak No: 42, Moda</p>
                </div>
                <div class="bg-cream shadow-md p-6 rounded-lg border border-brown-base/20">
                    <h3 class="text-xl font-bold mb-2">Karaköy</h3>
                    <p>Liman Cad. No: 15, Karaköy</p>
                </div>
                <div class="bg-cream shadow-md p-6 rounded-lg border border-brown-base/20">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş</h3>
                    <p>Çarşı İçi Sok. No: 8, Beşiktaş</p>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">Menü İçerikleri</h2>
            <p class="text-lg mb-6">Özenle hazırladığımız kahvelerimiz ve enfes tatlılarımızla hizmetinizdeyiz. İşte menümüzde bulabileceğiniz bazı lezzetler:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-brown-base/5 p-4 rounded-lg flex justify-between items-center border border-brown-base/10 hover:bg-brown-base/10 transition-colors">
                        <span class="text-xl font-semibold">${item.name}</span>
                        <span class="text-lg text-brown-base/80">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    prices: `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-base pb-2">Fiyatlar</h2>
            <div class="bg-cream rounded-lg overflow-hidden border border-brown-base/20 shadow-md">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown-base text-cream">
                            <th class="py-3 px-6 text-lg font-bold">Ürün</th>
                            <th class="py-3 px-6 text-lg font-bold text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map((item, index) => `
                            <tr class="border-b border-brown-base/10 hover:bg-brown-base/5 transition-colors ${index % 2 === 0 ? 'bg-white/50' : ''}">
                                <td class="py-3 px-6 text-lg">${item.name}</td>
                                <td class="py-3 px-6 text-lg text-right font-semibold">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// Routing Logic
function loadPage(pageKey) {
    if (pages[pageKey]) {
        appContainer.innerHTML = pages[pageKey];
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Navigation Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageKey = link.getAttribute('data-link');
        loadPage(pageKey);
        closeSidebar();
    });
});

logo.addEventListener('click', () => {
    loadPage('home');
});

// Load Home by default
loadPage('home');
