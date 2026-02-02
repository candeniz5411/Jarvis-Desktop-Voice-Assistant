const menuItems = [
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

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

// Add event listener to the menu button
document.getElementById('menu-btn').addEventListener('click', toggleSidebar);

function render() {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#home';

    // Scroll to top
    window.scrollTo(0, 0);

    let content = '';

    switch (hash) {
        case '#home':
            content = `
                <div class="text-center animate-fade-in">
                    <h1 class="text-4xl md:text-6xl font-bold text-coffee mb-6">Hoş Geldiniz</h1>
                    <p class="text-lg md:text-xl mb-8 text-coffee-dark">En taze kahve çekirdekleri ve sıcak bir atmosfer sizi bekliyor.</p>
                    <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-coffee-light">
                        <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                             alt="Kahve Görseli" class="w-full h-auto object-cover transform hover:scale-105 transition duration-700">
                    </div>
                </div>
            `;
            break;

        case '#about':
            content = `
                <div class="max-w-2xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Hakkımızda</h1>
                    <p class="mb-4">Kafe Keyfi, kahve tutkusunu paylaşmak için kurulmuş butik bir işletmedir. Dünyanın farklı bölgelerinden özenle seçilmiş çekirdekleri, ustalıkla kavuruyor ve sizlere sunuyoruz.</p>
                    <p>Modern ve minimalist tasarımımızla, şehrin gürültüsünden uzaklaşıp huzurlu bir mola verebileceğiniz bir alan yarattık.</p>
                </div>
            `;
            break;

        case '#support':
            content = `
                <div class="max-w-2xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Destek</h1>
                    <p class="mb-4">Size nasıl yardımcı olabiliriz?</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Sipariş sorunları</li>
                        <li>Rezervasyon iptali</li>
                        <li>Öneri ve şikayetler</li>
                    </ul>
                </div>
            `;
            break;

        case '#contact':
            content = `
                <div class="max-w-2xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">İletişim</h1>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <p class="mb-2"><strong class="text-coffee">Telefon:</strong> +90 212 555 1234</p>
                        <p class="mb-2"><strong class="text-coffee">E-posta:</strong> info@kafekeyfi.com</p>
                        <p class="mb-2"><strong class="text-coffee">Adres:</strong> Kahve Sokak No: 42, İstanbul</p>
                    </div>
                </div>
            `;
            break;

        case '#locations':
            content = `
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Şube Konumları</h1>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                            <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                            <p>Kadıköy, İstanbul</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                            <h3 class="text-xl font-bold mb-2">Beşiktaş Şube</h3>
                            <p>Beşiktaş, İstanbul</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee">
                            <h3 class="text-xl font-bold mb-2">Alsancak Şube</h3>
                            <p>Konak, İzmir</p>
                        </div>
                    </div>
                </div>
            `;
            break;

        case '#menu':
            content = `
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-8 border-b-2 border-coffee pb-2 text-center">Menü İçerikleri</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${menuItems.map(item => `
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                                <div class="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                    <i class="fa-solid ${item.type === 'İçecek' ? 'fa-mug-hot' : 'fa-utensils'} text-6xl text-coffee-light"></i>
                                </div>
                                <div class="p-6">
                                    <div class="flex justify-between items-center mb-2">
                                        <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                                        <span class="bg-cream text-coffee-dark py-1 px-3 rounded-full text-sm font-bold">${item.price}₺</span>
                                    </div>
                                    <p class="text-gray-600 text-sm">Lezzetli ve taze hazırlanmış.</p>
                                    <button class="mt-4 w-full bg-coffee text-white py-2 rounded hover:bg-coffee-dark transition">Sepete Ekle</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;

        case '#prices':
            content = `
                <div class="max-w-2xl mx-auto">
                    <h1 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Fiyat Listesi</h1>
                    <div class="bg-white rounded-lg shadow overflow-hidden">
                        <table class="w-full">
                            <thead class="bg-coffee text-white">
                                <tr>
                                    <th class="py-3 px-4 text-left">Ürün</th>
                                    <th class="py-3 px-4 text-right">Fiyat</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                ${menuItems.map(item => `
                                    <tr class="hover:bg-cream transition">
                                        <td class="py-3 px-4">${item.name}</td>
                                        <td class="py-3 px-4 text-right font-bold text-coffee">${item.price}₺</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            break;

        default:
            content = '<h1 class="text-2xl text-red-500">Sayfa Bulunamadı</h1>';
    }

    app.innerHTML = content;
}

// Initial render
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
