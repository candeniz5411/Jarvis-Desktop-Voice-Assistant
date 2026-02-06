// Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Sıcak İçecekler" },
    { name: "Cappuccino", price: 55, category: "Sıcak İçecekler" },
    { name: "Latte", price: 60, category: "Sıcak İçecekler" },
    { name: "Türk Kahvesi", price: 40, category: "Sıcak İçecekler" },
    { name: "Çay", price: 25, category: "Sıcak İçecekler" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecekler" },
    { name: "Limonata", price: 35, category: "Soğuk İçecekler" },
    { name: "Cheesecake", price: 70, category: "Yiyecekler" },
    { name: "Kruvasan", price: 50, category: "Yiyecekler" },
    { name: "Sandviç", price: 80, category: "Yiyecekler" }
];

// Routes Content Generators
const routes = {
    home: () => `
        <div class="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 fade-in">
            <h1 class="text-4xl md:text-6xl font-serif text-coffee-900 mb-6 font-bold">Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Şehrin en taze kahveleri ve en lezzetli tatlıları ile sizi ağırlamaktan mutluluk duyarız.
                Rahatlayın, bir yudum alın ve anın tadını çıkarın.
            </p>
            <div class="rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80"
                     alt="Coffee Cup"
                     class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="mt-8">
                <a href="#menu" class="bg-coffee-900 text-cream px-8 py-3 rounded-full font-bold hover:bg-coffee-700 transition-colors shadow-lg">
                    Menüyü İncele
                </a>
            </div>
        </div>
    `,
    about: () => `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">Hakkımızda</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="text-gray-700 leading-relaxed mb-4">
                    2023 yılında kurulan kafemiz, kahve tutkunlarına en kaliteli çekirdeklerden elde edilen eşsiz lezzetleri sunmak amacıyla yola çıkmıştır.
                    Modern ve minimalist tasarımımızla, sadece bir kafe değil, aynı zamanda huzurlu bir çalışma ve sosyalleşme alanı sunuyoruz.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Misyonumuz, her fincanda mutluluk ve her ziyarette unutulmaz bir deneyim yaşatmaktır.
                </p>
            </div>
        </div>
    `,
    support: () => `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">Destek</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-4">Size nasıl yardımcı olabiliriz?</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li>Sipariş sorunları</li>
                    <li>Rezervasyon iptali</li>
                    <li>Öneri ve Şikayetler</li>
                </ul>
                <div class="mt-6">
                    <button class="bg-coffee-700 text-white px-6 py-2 rounded hover:bg-coffee-800 transition">Canlı Destek Başlat</button>
                </div>
            </div>
        </div>
    `,
    contact: () => `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4 text-coffee-800">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> +90 212 555 1234</p>
                    <p class="mb-2"><strong>Email:</strong> info@modernkafe.com</p>
                    <p class="mb-2"><strong>Adres:</strong> Bağdat Caddesi No: 123, Kadıköy, İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4 text-coffee-800">Çalışma Saatleri</h3>
                    <p class="mb-1">Pazartesi - Cuma: 07:00 - 23:00</p>
                    <p class="mb-1">Haftasonu: 08:00 - 00:00</p>
                </div>
            </div>
        </div>
    `,
    locations: () => `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 class="text-xl font-bold mb-2 text-coffee-800">Kadıköy Merkez</h3>
                    <p class="text-gray-600 text-sm">Rıhtım Caddesi, No: 45</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 class="text-xl font-bold mb-2 text-coffee-800">Beşiktaş Çarşı</h3>
                    <p class="text-gray-600 text-sm">Şair Nedim Cad, No: 12</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 class="text-xl font-bold mb-2 text-coffee-800">Karaköy</h3>
                    <p class="text-gray-600 text-sm">Kemankeş Cad, No: 8</p>
                </div>
            </div>
        </div>
    `,
    menu: () => {
        let html = `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">Menü İçerikleri</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;
        menuItems.forEach(item => {
            html += `
                <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-between group hover:bg-coffee-900 hover:text-cream transition-colors duration-300">
                    <div>
                        <h3 class="font-bold text-lg">${item.name}</h3>
                        <span class="text-xs uppercase tracking-wide opacity-75">${item.category}</span>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
        return html;
    },
    prices: () => {
        let html = `
        <div class="container mx-auto px-4 py-8 fade-in">
            <h2 class="text-3xl font-serif text-coffee-900 mb-6 border-b-2 border-coffee-100 pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-coffee-100 text-coffee-900">
                        <tr>
                            <th class="p-4 border-b border-coffee-200">Ürün</th>
                            <th class="p-4 border-b border-coffee-200 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
        `;
        menuItems.forEach(item => {
            html += `
                <tr class="hover:bg-coffee-50 transition-colors">
                    <td class="p-4 text-gray-800 font-medium">${item.name}</td>
                    <td class="p-4 text-coffee-900 font-bold text-right">${item.price}₺</td>
                </tr>
            `;
        });
        html += `</tbody></table></div></div>`;
        return html;
    }
};

// Router Logic
function router() {
    const mainContent = document.getElementById('main-content');
    // Get hash, remove '#', default to 'home'
    let hash = window.location.hash.slice(1) || 'home';

    // Fallback if route doesn't exist
    if (!routes[hash]) hash = 'home';

    // Render content
    mainContent.innerHTML = routes[hash]();

    // Close sidebar on mobile if open
    closeSidebar();
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); // Match transition duration
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openSidebar();
});

overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking links inside it (handled in router but good as backup)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});
