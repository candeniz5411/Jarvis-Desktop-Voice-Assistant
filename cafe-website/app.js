const menuData = [
    { name: "Espresso", price: 45, type: "İçecek" },
    { name: "Cappuccino", price: 55, type: "İçecek" },
    { name: "Latte", price: 60, type: "İçecek" },
    { name: "Türk Kahvesi", price: 40, type: "İçecek" },
    { name: "Çay", price: 25, type: "İçecek" },
    { name: "Cheesecake", price: 70, type: "Yiyecek" },
    { name: "Kruvasan", price: 50, type: "Yiyecek" },
    { name: "Sandviç", price: 80, type: "Yiyecek" },
    { name: "Soğuk Kahve", price: 65, type: "İçecek" },
    { name: "Limonata", price: 35, type: "İçecek" }
];

const routes = {
    '#hakkinda': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">Hakkında</h2>
        <p class="text-lg leading-relaxed">Kahve Dükkanı olarak 2026 yılından beri en taze kahve çekirdeklerini özenle seçip, uzman baristalarımızın ellerinde mükemmel bir deneyime dönüştürüyoruz. Amacımız sadece kahve sunmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz sıcak bir atmosfer yaratmaktır.</p>
    `,
    '#destek': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">Destek</h2>
        <p class="text-lg leading-relaxed">Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorunuz mu var? Sıkça sorulan soruları inceleyebilir veya doğrudan bizimle iletişime geçebilirsiniz. Müşteri memnuniyeti bizim için her zaman ön plandadır.</p>
    `,
    '#iletisim': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">İletişim</h2>
        <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No: 42, Lezzet Mahallesi, İstanbul</p>
        <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (212) 555 01 23</p>
        <p class="text-lg mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com.tr</p>
        <p class="text-lg mt-4">Haftanın her günü 08:00 - 22:00 saatleri arasında hizmetinizdeyiz.</p>
    `,
    '#sube-konumlari': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">Şube Konumları</h2>
        <ul class="list-disc pl-5 text-lg space-y-2">
            <li><strong>Merkez Şube:</strong> Lezzet Mahallesi, İstanbul</li>
            <li><strong>Kadıköy Şube:</strong> Moda Caddesi, İstanbul</li>
            <li><strong>Beşiktaş Şube:</strong> Çarşı İçi, İstanbul</li>
        </ul>
    `,
    '#menu-icerikleri': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">Menü İçerikleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${menuData.map(item => `
                <div class="bg-white p-4 rounded-lg shadow border border-kahve/20 flex justify-between items-center">
                    <span class="text-xl font-bold">${item.name}</span>
                    <span class="text-sm text-gray-500 italic">${item.type}</span>
                </div>
            `).join('')}
        </div>
    `,
    '#fiyatlar': `
        <h2 class="text-3xl font-bold mb-4 font-baslik">Fiyatlar</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${menuData.map(item => `
                <div class="bg-white p-4 rounded-lg shadow border border-kahve/20 flex justify-between items-center">
                    <span class="text-xl font-bold">${item.name}</span>
                    <span class="text-xl font-bold text-kahve">${item.price}₺</span>
                </div>
            `).join('')}
        </div>
    `,
    'home': `
        <div class="text-center">
            <h2 class="text-4xl font-bold mb-6 font-baslik">Kahve Dükkanı'na Hoş Geldiniz</h2>
            <p class="text-xl mb-8">Günün yorgunluğunu taze bir kahve ile atın.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mx-auto max-w-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı" class="w-full h-auto object-cover">
            </div>
        </div>
    `
};

const appDiv = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function render() {
    const hash = window.location.hash;
    const content = routes[hash] || routes['home'];
    appDiv.innerHTML = content;
}

function toggleMenu() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) { // Close sidebar on mobile after clicking a link
            toggleMenu();
        }
    });
});

window.addEventListener('hashchange', render);

// Initial render
render();