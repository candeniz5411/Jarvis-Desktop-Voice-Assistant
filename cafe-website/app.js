// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const appContainer = document.getElementById('app');

// Toggle Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

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

// Views HTML
const views = {
    home: `
        <div class="text-center mt-10 animate-fade-in">
            <img src="Images/coffee.jpg" alt="Kahve" class="w-full max-w-2xl mx-auto rounded-xl shadow-2xl mb-8 object-cover h-64 md:h-96">
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-brown-900">Kafemize Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl text-brown-700 max-w-2xl mx-auto leading-relaxed">
                Modern, minimalist ve huzurlu ortamımızda en kaliteli kahve çekirdekleriyle hazırlanan içeceklerimizin tadını çıkarın. Sizi ağırlamaktan mutluluk duyarız.
            </p>
        </div>
    `,
    hakkinda: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
            <p class="text-brown-700 mb-4 leading-relaxed">
                Şehrin kalbinde, stresten uzak ve sakin bir mola noktası yaratmak amacıyla yola çıktık. Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla misafirlerimize en iyi deneyimi sunmayı hedefliyoruz.
            </p>
            <p class="text-brown-700 leading-relaxed">
                Tasarımımızdaki minimalizm ve sadelik, kahvemizin ön planda olmasını sağlar. Doğal ahşap ve kahve tonlarının sıcaklığıyla dekore edilmiş kafemiz, hem çalışmak hem de dinlenmek için ideal bir mekandır.
            </p>
        </div>
    `,
    destek: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Destek</h2>
            <p class="text-brown-700 mb-4 leading-relaxed">
                Siparişleriniz, özel istekleriniz veya karşılaştığınız herhangi bir sorun için buradayız.
            </p>
            <div class="bg-cream p-4 rounded-lg">
                <h3 class="font-bold text-brown-800 mb-2">Sıkça Sorulan Sorular:</h3>
                <ul class="list-disc pl-5 space-y-2 text-brown-700">
                    <li>Glutensiz seçenekleriniz var mı? <br><span class="text-sm text-brown-600">- Evet, bazı tatlılarımız glutensizdir.</span></li>
                    <li>Wi-Fi ücretsiz mi? <br><span class="text-sm text-brown-600">- Evet, tüm misafirlerimiz için ücretsiz sınırsız internetimiz bulunmaktadır.</span></li>
                    <li>Paket servisiniz var mı? <br><span class="text-sm text-brown-600">- Maalesef şu an için sadece şubelerimizde hizmet vermekteyiz.</span></li>
                </ul>
            </div>
        </div>
    `,
    iletisim: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-brown-800 mb-4">Bize Ulaşın</h3>
                    <p class="text-brown-700 mb-2"><strong class="text-brown-900">Adres:</strong> Kahve Sokak No: 42, Lezzet Mahallesi, İstanbul</p>
                    <p class="text-brown-700 mb-2"><strong class="text-brown-900">Telefon:</strong> +90 555 123 45 67</p>
                    <p class="text-brown-700 mb-4"><strong class="text-brown-900">E-posta:</strong> merhaba@kafemiz.com.tr</p>

                    <h3 class="text-xl font-bold text-brown-800 mb-4 mt-6">Çalışma Saatleri</h3>
                    <p class="text-brown-700">Pazartesi - Cuma: 07:30 - 22:00</p>
                    <p class="text-brown-700">Hafta Sonu: 09:00 - 23:00</p>
                </div>
                <div class="bg-cream p-4 rounded-lg flex items-center justify-center min-h-[200px]">
                     <p class="text-brown-500 italic text-center">Sosyal medya hesaplarımız üzerinden de bize mesaj gönderebilirsiniz.</p>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
            <div class="space-y-6">
                <div class="p-4 border border-brown-200 rounded-lg hover:bg-cream transition-colors">
                    <h3 class="text-xl font-bold text-brown-800 mb-2">1. Merkez Şube (Kadıköy)</h3>
                    <p class="text-brown-700">Moda Caddesi, No: 12, Kadıköy / İstanbul</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg hover:bg-cream transition-colors">
                    <h3 class="text-xl font-bold text-brown-800 mb-2">2. Beşiktaş Şubesi</h3>
                    <p class="text-brown-700">Barbaros Bulvarı, No: 88, Beşiktaş / İstanbul</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg hover:bg-cream transition-colors">
                    <h3 class="text-xl font-bold text-brown-800 mb-2">3. Ankara Şubesi</h3>
                    <p class="text-brown-700">Tunalı Hilmi Caddesi, No: 45, Çankaya / Ankara</p>
                </div>
            </div>
        </div>
    `,
    menu_icerik: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Menü İçerikleri</h2>
            <p class="text-brown-700 mb-8">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içecek seçeneklerimiz.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="menu-grid">
                <!-- Populated by JS -->
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
            <h2 class="text-3xl font-serif font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Fiyat Listesi</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="py-4 px-6 bg-brown-900 text-cream font-bold uppercase text-sm border-b border-brown-800 rounded-tl-lg">Ürün</th>
                            <th class="py-4 px-6 bg-brown-900 text-cream font-bold uppercase text-sm border-b border-brown-800 text-right rounded-tr-lg">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody id="price-table-body">
                        <!-- Populated by JS -->
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// Render Logic
function renderMenuGrid() {
    const grid = document.getElementById('menu-grid');
    if (grid) {
        grid.innerHTML = menuItems.map(item => `
            <div class="flex justify-between items-center p-4 bg-cream rounded-lg shadow-sm border border-brown-100">
                <span class="font-bold text-brown-800 text-lg">${item.name}</span>
            </div>
        `).join('');
    }
}

function renderPriceTable() {
    const tbody = document.getElementById('price-table-body');
    if (tbody) {
        tbody.innerHTML = menuItems.map((item, index) => `
            <tr class="hover:bg-brown-50 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-brown-100' : ''}">
                <td class="py-4 px-6 text-brown-800 font-medium">${item.name}</td>
                <td class="py-4 px-6 text-brown-900 font-bold text-right">${item.price}₺</td>
            </tr>
        `).join('');
    }
}

// Router
window.navigateTo = function(page) {
    if (views[page]) {
        appContainer.innerHTML = views[page];

        // Post-render specific logic
        if (page === 'menu_icerik') {
            renderMenuGrid();
        } else if (page === 'fiyatlar') {
            renderPriceTable();
        }

        // Close sidebar on mobile after clicking a link
        if(window.innerWidth < 1024) { // Tailwind's lg breakpoint is 1024px, but let's close it on all screens for consistent SPA feel
            closeSidebar();
        }

        // Simple scroll to top
        window.scrollTo(0, 0);
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
