// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const appContent = document.getElementById('app-content');

// Sidebar Toggle Functionality
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a navigation link is clicked
const navLinks = document.querySelectorAll('#sidebar a');
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Menu Data
const menuItems = [
    { name: 'Espresso', price: 45 },
    { name: 'Cappuccino', price: 55 },
    { name: 'Latte', price: 60 },
    { name: 'Türk Kahvesi', price: 40 },
    { name: 'Çay', price: 25 },
    { name: 'Cheesecake', price: 70 },
    { name: 'Kruvasan', price: 50 },
    { name: 'Sandviç', price: 80 },
    { name: 'Soğuk Kahve', price: 65 },
    { name: 'Limonata', price: 35 }
];

// Views
const views = {
    home: `
        <div class="flex flex-col items-center justify-center w-full min-h-[70vh] p-4 text-center">
            <h2 class="brand-font text-4xl md:text-5xl font-bold mb-4 text-brown-900">Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl text-brown-800 mb-8 max-w-2xl">
                Kahve Dükkanı'na hoş geldiniz. Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla size eşsiz bir deneyim sunuyoruz.
            </p>
            <div class="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" alt="Kahve Görseli" class="w-full h-auto object-cover">
            </div>
        </div>
    `,
    hakkinda: `
        <div class="w-full max-w-3xl p-6 md:p-12 mt-8 bg-white rounded-lg shadow-md mx-auto">
            <h2 class="brand-font text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
            <p class="text-lg text-brown-800 leading-relaxed mb-4">
                Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini sizlerle buluşturuyoruz. Tutkumuz, her yudumda size mükemmel kahve deneyimini yaşatmaktır.
            </p>
            <p class="text-lg text-brown-800 leading-relaxed">
                Modern ve minimalist tasarım anlayışımızla hazırladığımız mekanlarımızda, şehrin gürültüsünden uzaklaşıp huzurlu bir mola verebilirsiniz.
            </p>
        </div>
    `,
    destek: `
        <div class="w-full max-w-3xl p-6 md:p-12 mt-8 bg-white rounded-lg shadow-md mx-auto">
            <h2 class="brand-font text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Destek</h2>
            <p class="text-lg text-brown-800 leading-relaxed mb-4">
                Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorununuz mu var? Size yardımcı olmaktan memnuniyet duyarız.
            </p>
            <div class="bg-cream-100 p-4 rounded border border-brown-200">
                <h3 class="font-bold text-brown-900 mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 text-brown-800 space-y-2">
                    <li>Online sipariş verebilir miyim?</li>
                    <li>Sadakat programınız var mı?</li>
                    <li>Vegan seçenekleriniz mevcut mu?</li>
                </ul>
            </div>
        </div>
    `,
    iletisim: `
        <div class="w-full max-w-3xl p-6 md:p-12 mt-8 bg-white rounded-lg shadow-md mx-auto">
            <h2 class="brand-font text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-800">Adres</h3>
                    <p class="text-brown-800 mb-4">Kahve Mahallesi, Çekirdek Sokak No:1<br>Kadıköy / İstanbul</p>

                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-800">Telefon</h3>
                    <p class="text-brown-800 mb-4">+90 (216) 123 45 67</p>

                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-800">E-posta</h3>
                    <p class="text-brown-800">merhaba@kahvedukkani.com</p>
                </div>
                <div class="bg-cream-100 p-6 rounded flex items-center justify-center border border-brown-200">
                    <p class="text-brown-800 text-center italic">Sosyal medyada bizi takip edin!</p>
                </div>
            </div>
        </div>
    `,
    'sube-konumlari': `
        <div class="w-full max-w-4xl p-6 md:p-12 mt-8 bg-white rounded-lg shadow-md mx-auto">
            <h2 class="brand-font text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-cream-100 p-4 rounded border border-brown-200">
                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-900">Kadıköy Merkez</h3>
                    <p class="text-sm text-brown-800">Moda Caddesi, Kadıköy</p>
                </div>
                <div class="bg-cream-100 p-4 rounded border border-brown-200">
                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-900">Beşiktaş</h3>
                    <p class="text-sm text-brown-800">Barbaros Bulvarı, Beşiktaş</p>
                </div>
                <div class="bg-cream-100 p-4 rounded border border-brown-200">
                    <h3 class="brand-font text-xl font-bold mb-2 text-brown-900">Karaköy</h3>
                    <p class="text-sm text-brown-800">Kemankeş Caddesi, Karaköy</p>
                </div>
            </div>
        </div>
    `,
    'menu-icerikleri': () => {
        let itemsHtml = menuItems.map(item => `
            <div class="bg-white p-4 rounded-lg shadow border border-brown-100 flex justify-between items-center">
                <span class="font-bold text-brown-900 text-lg">${item.name}</span>
            </div>
        `).join('');

        return `
            <div class="w-full max-w-4xl p-6 md:p-12 mt-8 mx-auto">
                <h2 class="brand-font text-3xl font-bold mb-8 text-brown-900 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${itemsHtml}
                </div>
            </div>
        `;
    },
    fiyatlar: () => {
        let itemsHtml = menuItems.map(item => `
            <div class="bg-white p-4 rounded-lg shadow border border-brown-100 flex justify-between items-center border-b-2 border-brown-200 hover:bg-cream-100 transition">
                <span class="font-bold text-brown-900 text-lg">${item.name}</span>
                <span class="text-brown-800 font-bold text-xl">${item.price}₺</span>
            </div>
        `).join('');

        return `
            <div class="w-full max-w-4xl p-6 md:p-12 mt-8 mx-auto">
                <h2 class="brand-font text-3xl font-bold mb-8 text-brown-900 text-center">Fiyat Listesi</h2>
                <div class="flex flex-col space-y-3">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }
};

// Routing
function handleRoute() {
    let hash = window.location.hash.substring(1);

    // Default to home if no hash or invalid hash
    if (!hash || !views[hash]) {
        hash = 'home';
    }

    const viewContent = views[hash];

    // Handle both string templates and functions that return templates
    if (typeof viewContent === 'function') {
        appContent.innerHTML = viewContent();
    } else {
        appContent.innerHTML = viewContent;
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);

// Initialize routing on page load
window.addEventListener('DOMContentLoaded', handleRoute);
