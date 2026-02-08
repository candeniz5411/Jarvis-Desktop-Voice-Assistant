const menuItems = [
    { name: "Espresso", price: 45, category: "Sıcak Kahve", description: "Yoğun ve aromatik saf kahve deneyimi." },
    { name: "Cappuccino", price: 55, category: "Sıcak Kahve", description: "Espresso, buharla ısıtılmış süt ve yoğun süt köpüğü." },
    { name: "Latte", price: 60, category: "Sıcak Kahve", description: "Espresso ve bol süt ile yumuşak içim." },
    { name: "Türk Kahvesi", price: 40, category: "Sıcak Kahve", description: "Geleneksel yöntemlerle hazırlanan köpüklü Türk kahvesi." },
    { name: "Çay", price: 25, category: "Sıcak İçecek", description: "Taze demlenmiş Rize çayı." },
    { name: "Cheesecake", price: 70, category: "Tatlı", description: "Limonlu veya frambuazlı taze cheesecake." },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık", description: "Tereyağlı, çıtır Fransız kruvasanı." },
    { name: "Sandviç", price: 80, category: "Atıştırmalık", description: "Peynirli, domatesli ve yeşillikli taze sandviç." },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk Kahve", description: "Buzlu espresso ve süt ile serinletici lezzet." },
    { name: "Limonata", price: 35, category: "Soğuk İçecek", description: "Ev yapımı, nane ferahlığıyla taze limonata." }
];

const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menu-toggle');

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('translate-x-0'); // Tailwind class for visible
    sidebar.classList.toggle('-translate-x-full'); // Tailwind class for hidden
    overlay.classList.toggle('hidden');
}

function closeSidebar() {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Routing Logic
function router() {
    const hash = window.location.hash || '#home';
    app.innerHTML = ''; // Clear content

    switch(hash) {
        case '#home':
            renderHome();
            break;
        case '#about':
            renderAbout();
            break;
        case '#menu':
            renderMenu();
            break;
        case '#prices':
            renderPrices();
            break;
        case '#locations':
            renderLocations();
            break;
        case '#contact':
            renderContact();
            break;
        case '#support':
            renderSupport();
            break;
        default:
            renderHome();
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions

function renderHome() {
    const section = document.createElement('section');
    section.className = 'text-center space-y-6 animate-fade-in';
    section.innerHTML = `
        <div class="py-10">
            <h2 class="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">Kafe Lezzet'e Hoş Geldiniz</h2>
            <p class="text-xl text-gray-700 max-w-2xl mx-auto">En kaliteli kahve çekirdekleri ve taze atıştırmalıklarla gününüze lezzet katın.</p>
        </div>
        <div class="relative w-full max-w-3xl mx-auto h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                 alt="Kahve ve Kruvasan"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <a href="#menu" class="bg-cream text-coffee-dark px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300">Menüyü Keşfet</a>
            </div>
        </div>
    `;
    app.appendChild(section);
}

function renderAbout() {
    const section = document.createElement('section');
    section.className = 'max-w-3xl mx-auto';
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Kafe Lezzet olarak, kahve tutkusunu bir yaşam biçimi haline getirdik. 2023 yılında başlayan yolculuğumuzda,
                en taze çekirdekleri özenle seçiyor ve ustalıkla kavuruyoruz.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
                Amacımız sadece kahve satmak değil, misafirlerimize sıcak, samimi ve huzurlu bir ortam sunmaktır.
                Modern tasarımımız ve güler yüzlü ekibimizle sizi ağırlamaktan mutluluk duyarız.
            </p>
        </div>
    `;
    app.appendChild(section);
}

function renderMenu() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6 text-center">Menü İçerikleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${menuItems.map(item => `
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-coffee-dark">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-gray-800">${item.name}</h3>
                        <span class="text-lg font-bold text-coffee-dark">${item.price}₺</span>
                    </div>
                    <span class="text-sm text-gray-500 uppercase tracking-wide mb-2 block">${item.category}</span>
                    <p class="text-gray-600">${item.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    app.appendChild(section);
}

function renderPrices() {
    const section = document.createElement('section');
    section.className = 'max-w-2xl mx-auto';
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6 text-center">Fiyat Listesi</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <table class="w-full text-left">
                <thead class="bg-coffee-dark text-cream">
                    <tr>
                        <th class="p-4">Ürün</th>
                        <th class="p-4 text-right">Fiyat</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    ${menuItems.map(item => `
                        <tr class="hover:bg-gray-50">
                            <td class="p-4 font-medium text-gray-800">${item.name}</td>
                            <td class="p-4 text-right font-bold text-coffee-dark">${item.price}₺</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    app.appendChild(section);
}

function renderLocations() {
    const locations = [
        { name: "Merkez Şube", address: "İstiklal Caddesi No: 123, Beyoğlu, İstanbul" },
        { name: "Kadıköy Şube", address: "Moda Caddesi No: 45, Kadıköy, İstanbul" },
        { name: "Beşiktaş Şube", address: "Çarşı içi, Beşiktaş, İstanbul" }
    ];

    const section = document.createElement('section');
    section.className = 'max-w-3xl mx-auto';
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6 text-center">Şube Konumları</h2>
        <div class="space-y-4">
            ${locations.map(loc => `
                <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <div class="bg-coffee-light p-3 rounded-full text-coffee-dark">
                        <i class="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-800">${loc.name}</h3>
                        <p class="text-gray-600">${loc.address}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    app.appendChild(section);
}

function renderContact() {
    const section = document.createElement('section');
    section.className = 'max-w-xl mx-auto';
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6 text-center">İletişim</h2>
        <div class="bg-white p-8 rounded-lg shadow-md">
            <form onsubmit="event.preventDefault(); alert('Mesajınız alındı!');" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-bold mb-2">Adınız</label>
                    <input type="text" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark" placeholder="Adınız Soyadınız" required>
                </div>
                <div>
                    <label class="block text-gray-700 font-bold mb-2">E-posta</label>
                    <input type="email" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark" placeholder="ornek@email.com" required>
                </div>
                <div>
                    <label class="block text-gray-700 font-bold mb-2">Mesajınız</label>
                    <textarea class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark" rows="4" placeholder="Size nasıl yardımcı olabiliriz?" required></textarea>
                </div>
                <button type="submit" class="w-full bg-coffee-dark text-cream font-bold py-2 px-4 rounded hover:bg-opacity-90 transition">
                    Gönder
                </button>
            </form>
            <div class="mt-8 text-center text-gray-600">
                <p><i class="fas fa-phone mr-2"></i> +90 212 123 45 67</p>
                <p><i class="fas fa-envelope mr-2"></i> info@kafelezzet.com</p>
            </div>
        </div>
    `;
    app.appendChild(section);
}

function renderSupport() {
    const section = document.createElement('section');
    section.className = 'max-w-3xl mx-auto text-center';
    section.innerHTML = `
        <h2 class="text-3xl font-bold text-coffee-dark mb-6">Destek</h2>
        <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="mb-8">
                <i class="fas fa-headset text-6xl text-coffee-dark mb-4"></i>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Nasıl yardımcı olabiliriz?</h3>
                <p class="text-gray-600">Sıkça sorulan sorulara göz atın veya bizimle iletişime geçin.</p>
            </div>
            <div class="space-y-4 text-left">
                <details class="bg-gray-50 p-4 rounded cursor-pointer">
                    <summary class="font-bold text-gray-800">Rezervasyon yapıyor musunuz?</summary>
                    <p class="mt-2 text-gray-600">Evet, telefonla arayarak rezervasyon yapabilirsiniz.</p>
                </details>
                <details class="bg-gray-50 p-4 rounded cursor-pointer">
                    <summary class="font-bold text-gray-800">Wi-Fi hizmetiniz var mı?</summary>
                    <p class="mt-2 text-gray-600">Tüm şubelerimizde ücretsiz yüksek hızlı Wi-Fi mevcuttur.</p>
                </details>
                <details class="bg-gray-50 p-4 rounded cursor-pointer">
                    <summary class="font-bold text-gray-800">Eve sipariş var mı?</summary>
                    <p class="mt-2 text-gray-600">Evet, popüler yemek siparişi uygulamaları üzerinden sipariş verebilirsiniz.</p>
                </details>
            </div>
        </div>
    `;
    app.appendChild(section);
}
