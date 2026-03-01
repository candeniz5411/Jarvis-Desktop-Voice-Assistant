// Menu Data
const menuItems = [
    { name: "Espresso", price: "45₺" },
    { name: "Cappuccino", price: "55₺" },
    { name: "Latte", price: "60₺" },
    { name: "Türk Kahvesi", price: "40₺" },
    { name: "Çay", price: "25₺" },
    { name: "Cheesecake", price: "70₺" },
    { name: "Kruvasan", price: "50₺" },
    { name: "Sandviç", price: "80₺" },
    { name: "Soğuk Kahve", price: "65₺" },
    { name: "Limonata", price: "35₺" }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menu-toggle');
const menuCloseBtn = document.getElementById('menu-close');
const overlay = document.getElementById('sidebar-overlay');
const appContent = document.getElementById('app-content');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar Toggle Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    // small delay to allow display block to take effect before opacity
    setTimeout(() => {
        overlay.classList.add('opacity-100');
        overlay.classList.remove('opacity-0');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0');
    overlay.classList.remove('opacity-100');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); // match transition duration
}

menuToggleBtn.addEventListener('click', openSidebar);
menuCloseBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking a link (mobile friendly)
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing and View Templates
const views = {
    home: () => `
        <div class="fade-in text-center flex flex-col items-center justify-center space-y-6 mt-10 text-[#3E2723]">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-gray-700 max-w-2xl">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz. Kahve Dükkanı'nda anın tadını çıkarın.</p>
            <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl mt-8 border-4 border-white">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200&h=600" alt="Taze Kahve ve Ortam" class="w-full h-auto object-cover object-center" style="max-height: 400px;">
            </div>
            <a href="#/menu-icerikleri" class="mt-8 inline-block bg-[#3E2723] text-[#FFFDD0] px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-md">Menüyü Keşfet</a>
        </div>
    `,
    hakkinda: () => `
        <div class="fade-in bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Hakkımızda</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
                <p>Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle kavuruyor ve siz değerli misafirlerimize sunuyoruz.</p>
                <p>Amacımız, sadece kahve içilen bir yer olmak değil; dostlukların pekiştiği, güzel anıların biriktiği sıcak bir yuva olmaktır. Geleneksel tatları modern dokunuşlarla harmanlayarak her damakta unutulmaz bir lezzet bırakmayı hedefliyoruz.</p>
                <p>Sürdürülebilirlik ilkelerine bağlı kalarak doğaya saygılı bir üretim süreci benimsiyor, yerel üreticileri destekliyoruz.</p>
            </div>
        </div>
    `,
    destek: () => `
        <div class="fade-in bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Destek SSS</h2>
            <div class="space-y-6">
                <div>
                    <h3 class="font-bold text-xl mb-2">Çalışma saatleriniz nedir?</h3>
                    <p class="text-gray-700">Hafta içi: 07:00 - 22:00, Hafta sonu: 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2">Online sipariş verebilir miyim?</h3>
                    <p class="text-gray-700">Evet, anlaşmalı yemek platformları üzerinden adresinize sipariş verebilirsiniz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2">Özel etkinlikler için yer ayırıyor musunuz?</h3>
                    <p class="text-gray-700">Evet, küçük toplantılar veya kutlamalar için iletişim sayfamızdan bize ulaşarak rezervasyon yaptırabilirsiniz.</p>
                </div>
            </div>
        </div>
    `,
    iletisim: () => `
        <div class="fade-in bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <p class="mb-4 text-gray-700">Görüş ve önerileriniz bizim için değerlidir. Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <span class="font-bold w-24 inline-block">Adres:</span>
                            <span class="text-gray-700">Kahve Sokak No:12/A, Kadıköy, İstanbul</span>
                        </li>
                        <li class="flex items-center">
                            <span class="font-bold w-24 inline-block">Telefon:</span>
                            <span class="text-gray-700">0 (212) 555 12 34</span>
                        </li>
                        <li class="flex items-center">
                            <span class="font-bold w-24 inline-block">E-posta:</span>
                            <span class="text-gray-700">merhaba@kahvedukkani.com</span>
                        </li>
                    </ul>
                </div>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi. Teşekkürler!');">
                    <div>
                        <label class="block text-sm font-bold mb-1">Adınız</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3E2723] focus:border-[#3E2723] outline-none transition" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Mesajınız</label>
                        <textarea class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3E2723] focus:border-[#3E2723] outline-none transition h-24" required></textarea>
                    </div>
                    <button type="submit" class="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#2c1c19] transition">Gönder</button>
                </form>
            </div>
        </div>
    `,
    subekonumlari: () => `
        <div class="fade-in bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Şube Konumları</h2>
            <p class="mb-6 text-gray-700">Şu anda 3 farklı şubemiz ile sizlere hizmet vermekteyiz.</p>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="border rounded p-4 hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Kadıköy (Merkez)</h3>
                    <p class="text-sm text-gray-600 mb-2">Kahve Sokak No:12/A</p>
                    <p class="text-sm font-semibold">Çalışma: 07:00 - 23:00</p>
                </div>
                <div class="border rounded p-4 hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Beşiktaş</h3>
                    <p class="text-sm text-gray-600 mb-2">Çarşı İçi Sahil Yolu No:45</p>
                    <p class="text-sm font-semibold">Çalışma: 08:00 - 22:00</p>
                </div>
                <div class="border rounded p-4 hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Karaköy</h3>
                    <p class="text-sm text-gray-600 mb-2">Liman Cad. Tarihi Bina Altı</p>
                    <p class="text-sm font-semibold">Çalışma: 09:00 - 24:00</p>
                </div>
            </div>
        </div>
    `,
    menuicerikleri: () => {
        const itemsHtml = menuItems.map(item => `
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition flex justify-between items-center">
                <span class="font-bold text-lg">${item.name}</span>
                <span class="price-tag text-xl">${item.price}</span>
            </div>
        `).join('');

        return `
            <div class="fade-in bg-[#FFFDD0]">
                <div class="bg-white p-8 rounded-xl shadow-md">
                    <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4">Menü İçerikleri</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        `;
    },
    fiyatlar: () => {
         const tableRows = menuItems.map(item => `
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition">
                <td class="py-3 px-4 font-semibold">${item.name}</td>
                <td class="py-3 px-4 text-right price-tag">${item.price}</td>
            </tr>
        `).join('');

        return `
            <div class="fade-in bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Fiyat Listesi</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-[#3E2723] text-white rounded-t">
                                <th class="py-3 px-4 rounded-tl">Ürün Adı</th>
                                <th class="py-3 px-4 text-right rounded-tr">Fiyat (₺)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
                <p class="mt-4 text-xs text-gray-500 text-right">* Fiyatlarımıza KDV dahildir.</p>
            </div>
        `;
    },
    error: () => `
        <div class="fade-in text-center py-20">
            <h2 class="text-4xl font-bold mb-4">404</h2>
            <p class="text-xl">Sayfa bulunamadı.</p>
            <a href="#/" class="text-[#3E2723] underline mt-4 inline-block">Ana Sayfaya Dön</a>
        </div>
    `
};

// Router
function router() {
    let hash = window.location.hash;

    // Default to home
    if (!hash || hash === '#/' || hash === '#') {
        hash = '#/home';
    }

    // Extract the path
    const path = hash.replace('#/', '').toLowerCase().replace(/[^a-z]/g, '');

    // Render the view
    if (path === '' || path === 'home') {
        appContent.innerHTML = views.home();
    } else if (views[path]) {
        appContent.innerHTML = views[path]();
    } else {
        // Handle variations
        if(path.includes('sube')) {
             appContent.innerHTML = views.subekonumlari();
        } else if (path.includes('menu')) {
             appContent.innerHTML = views.menuicerikleri();
        } else if (path.includes('hakkinda')) {
             appContent.innerHTML = views.hakkinda();
        } else if (path.includes('iletisim')) {
             appContent.innerHTML = views.iletisim();
        } else if (path.includes('destek')) {
             appContent.innerHTML = views.destek();
        } else if (path.includes('fiyatlar')) {
             appContent.innerHTML = views.fiyatlar();
        } else {
             appContent.innerHTML = views.error();
        }
    }
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
