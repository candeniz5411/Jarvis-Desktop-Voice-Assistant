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

const routes = {
    '': `
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">Kafemize Hoş Geldiniz</h1>
            <p class="text-lg text-gray-700 mb-8">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
            <img src="./Images/coffee.jpg" alt="Taze Kahve" class="mx-auto rounded-lg shadow-md max-w-full h-auto" style="max-height: 400px; object-fit: cover;">
        </div>
    `,
    '#hakkinda': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">Hakkında</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
                Kafemiz, kahve tutkunlarına en kaliteli çekirdeklerden özenle hazırlanan kahveleri sunmak amacıyla kurulmuştur.
                Sıcak ve samimi ortamımızda hem dinlenebilir hem de sevdiklerinizle keyifli vakit geçirebilirsiniz.
            </p>
        </div>
    `,
    '#destek': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">Destek</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Siparişlerinizle veya kafemizle ilgili herhangi bir sorun yaşarsanız, size yardımcı olmaktan memnuniyet duyarız.
            </p>
            <p class="text-gray-700">
                Sıkça Sorulan Sorular bölümümüz yakında eklenecektir.
            </p>
        </div>
    `,
    '#iletisim': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">İletişim</h2>
            <div class="space-y-4 text-lg text-gray-700">
                <p><strong>Adres:</strong> Kahve Sokak No: 1, Lezzet Mahallesi, İstanbul</p>
                <p><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                <p><strong>E-posta:</strong> info@kafem.com</p>
            </div>
        </div>
    `,
    '#subeler': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">Şube Konumları</h2>
            <ul class="list-disc pl-5 space-y-2 text-lg text-gray-700">
                <li><strong>Merkez Şube:</strong> Kadıköy, İstanbul</li>
                <li><strong>Avrupa Şubesi:</strong> Beşiktaş, İstanbul</li>
                <li><strong>Anadolu Şubesi:</strong> Üsküdar, İstanbul</li>
            </ul>
        </div>
    `,
    '#menu-icerikleri': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">Menü İçerikleri</h2>
            <p class="text-lg text-gray-700 mb-6">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-brown-100 p-4 rounded-lg shadow flex items-center justify-between">
                        <span class="font-bold text-brown-900">${item.name}</span>
                        <span class="text-sm bg-white px-2 py-1 rounded text-brown-800">Lezzetli</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '#fiyatlar': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-100 pb-2">Fiyatlar</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr class="bg-brown-900 text-cream">
                            <th class="py-2 px-4 border-b text-left">Ürün</th>
                            <th class="py-2 px-4 border-b text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map(item => `
                            <tr class="hover:bg-brown-100 transition-colors">
                                <td class="py-2 px-4 border-b font-medium text-gray-800">${item.name}</td>
                                <td class="py-2 px-4 border-b text-right text-gray-800 font-bold">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

function render() {
    const app = document.getElementById('app');
    const hash = window.location.hash;
    app.innerHTML = routes[hash] || routes[''];
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// Sidebar logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on link click (mobile friendly)
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});
