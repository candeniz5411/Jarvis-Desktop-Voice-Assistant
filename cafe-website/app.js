const menuItems = [
    { name: "Espresso", price: 45, type: "drink" },
    { name: "Cappuccino", price: 55, type: "drink" },
    { name: "Latte", price: 60, type: "drink" },
    { name: "Türk Kahvesi", price: 40, type: "drink" },
    { name: "Çay", price: 25, type: "drink" },
    { name: "Cheesecake", price: 70, type: "food" },
    { name: "Kruvasan", price: 50, type: "food" },
    { name: "Sandviç", price: 80, type: "food" },
    { name: "Soğuk Kahve", price: 65, type: "drink" },
    { name: "Limonata", price: 35, type: "drink" }
];

const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelectorAll('.nav-link');

function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const page = link.getAttribute('data-page');
        renderPage(page);
        toggleSidebar();
    });
});

function renderPage(page) {
    let content = '';

    switch(page) {
        case 'home':
            content = `
                <div class="flex flex-col items-center text-center space-y-6 animate-fade-in">
                    <h2 class="text-4xl font-bold text-coffee-dark mb-4">Kahve Molası'na Hoş Geldiniz</h2>
                    <p class="text-xl text-gray-700 max-w-2xl">En taze çekirdeklerden özenle hazırladığımız kahvelerimiz ve lezzetli atıştırmalıklarımızla anın tadını çıkarın.</p>
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kahve ve Kruvasan" class="rounded-lg shadow-xl w-full max-w-2xl object-cover h-64 md:h-96">
                </div>
            `;
            break;
        case 'about':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">Hakkımızda</h2>
                <div class="bg-white p-6 rounded-lg shadow-md text-gray-700 space-y-4">
                    <p>Kahve Molası, kahve tutkunları için 2023 yılında kurulmuş modern bir kafedir.</p>
                    <p>Amacımız, misafirlerimize sadece bir fincan kahve değil, aynı zamanda huzurlu bir ortam ve unutulmaz bir deneyim sunmaktır.</p>
                    <p>Kaliteli çekirdekler, uzman baristalar ve samimi hizmet anlayışımızla sizleri bekliyoruz.</p>
                </div>
            `;
            break;
        case 'support':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">Destek</h2>
                <div class="bg-white p-6 rounded-lg shadow-md text-gray-700">
                    <p class="mb-4">Herhangi bir sorunuz, öneriniz veya şikayetiniz mi var? Size yardımcı olmaktan mutluluk duyarız.</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Sıkça Sorulan Sorular</li>
                        <li>Canlı Destek (09:00 - 18:00)</li>
                        <li>Geri Bildirim Formu</li>
                    </ul>
                </div>
            `;
            break;
        case 'contact':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">İletişim</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Telefon:</strong> +90 212 555 12 34</p>
                        <p class="mb-2"><strong>E-posta:</strong> info@kahvemolasi.com</p>
                        <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                        <p>Hafta İçi: 07:00 - 23:00</p>
                        <p>Hafta Sonu: 08:00 - 00:00</p>
                    </div>
                </div>
            `;
            break;
        case 'locations':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">Şube Konumları</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="font-bold text-lg">Kadıköy</h3>
                        <p class="text-sm text-gray-600">Moda Caddesi No:10</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="font-bold text-lg">Beşiktaş</h3>
                        <p class="text-sm text-gray-600">Çarşı İçi No:5</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="font-bold text-lg">Taksim</h3>
                        <p class="text-sm text-gray-600">İstiklal Caddesi No:100</p>
                    </div>
                </div>
            `;
            break;
        case 'menu':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">Menü İçerikleri</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                            <div class="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                                <!-- Placeholder for Food/Drink Image -->
                                <span class="text-4xl">☕</span>
                            </div>
                            <div class="p-4">
                                <h3 class="text-xl font-bold text-coffee">${item.name}</h3>
                                <p class="text-gray-500 text-sm mt-1">Lezzetli ve taze.</p>
                                <div class="mt-4 flex justify-between items-center">
                                    <span class="text-lg font-bold text-coffee-dark">${item.price}₺</span>
                                    <button class="bg-coffee text-cream px-3 py-1 rounded text-sm hover:bg-coffee-dark transition">İncele</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
        case 'prices':
            content = `
                <h2 class="text-3xl font-bold text-coffee-dark mb-6">Fiyat Listesi</h2>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-coffee text-cream">
                            <tr>
                                <th class="p-4 border-b border-coffee-light">Ürün</th>
                                <th class="p-4 border-b border-coffee-light text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            ${menuItems.map(item => `
                                <tr class="hover:bg-cream transition">
                                    <td class="p-4 font-medium text-gray-800">${item.name}</td>
                                    <td class="p-4 text-right font-bold text-coffee">${item.price}₺</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            break;
        default:
            content = `<p>Sayfa bulunamadı.</p>`;
    }

    app.innerHTML = content;
}

// Initial render
renderPage('home');

// Expose renderPage globally for the logo onclick
window.renderPage = renderPage;
