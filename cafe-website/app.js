const contentDiv = document.getElementById('content');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('#sidebar a');

// Menu items and prices
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

// Content for each route
const routes = {
    '/': `
        <div class="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
            <h1 class="text-4xl font-heading font-bold text-brown-900 mb-4">Kafe Molası'na Hoş Geldiniz</h1>
            <p class="text-lg text-brown-800 mb-4 leading-relaxed">Kahvenin en taze, lezzetin en tatlı halini sizlerle buluşturuyoruz. Sizi de bekleriz!</p>
            <img src="./Images/coffee.jpg" class="w-full h-64 object-cover rounded-lg mb-6 shadow-md" alt="Kahve">
        </div>
    `,
    '/hakkinda': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">Hakkında</h2>
        <div class="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
            <p class="text-lg text-brown-800 mb-4 leading-relaxed">2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizin için hazırlıyoruz. Amacımız sadece kahve yapmak değil, keyifli anılarınıza eşlik etmektir.</p>
        </div>
    `,
    '/destek': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">Destek</h2>
        <div class="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
            <p class="text-lg text-brown-800 mb-4 leading-relaxed">Sorularınız, önerileriniz veya yardıma ihtiyacınız varsa destek ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
            <p class="text-lg text-brown-800 leading-relaxed font-bold">Email: destek@kafemolasi.com</p>
        </div>
    `,
    '/iletisim': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">İletişim</h2>
        <div class="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
            <ul class="text-left list-disc list-inside text-lg text-brown-800 space-y-2">
                <li><strong>Telefon:</strong> 0 (212) 555 55 55</li>
                <li><strong>Adres:</strong> Kahve Sokak, Lezzet Mahallesi No:1 İstanbul</li>
                <li><strong>Çalışma Saatleri:</strong> 08:00 - 22:00 (Haftanın her günü)</li>
            </ul>
        </div>
    `,
    '/sube-konumlari': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">Şube Konumları</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div class="bg-white p-4 rounded-lg shadow w-full text-center font-bold text-lg text-brown-900 mb-4 border-l-4 border-brown-900">Kadıköy Şubesi</div>
            <div class="bg-white p-4 rounded-lg shadow w-full text-center font-bold text-lg text-brown-900 mb-4 border-l-4 border-brown-900">Beşiktaş Şubesi</div>
            <div class="bg-white p-4 rounded-lg shadow w-full text-center font-bold text-lg text-brown-900 mb-4 border-l-4 border-brown-900">Kızılay Şubesi (Ankara)</div>
            <div class="bg-white p-4 rounded-lg shadow w-full text-center font-bold text-lg text-brown-900 mb-4 border-l-4 border-brown-900">Alsancak Şubesi (İzmir)</div>
        </div>
    `,
    '/menu-icerikleri': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">Menü İçerikleri</h2>
        <ul class="w-full max-w-2xl">
            ${menuItems.map(item => `
                <li class="bg-white p-4 rounded-lg shadow w-full text-center font-bold text-lg text-brown-900 mb-4 list-none">${item.name}</li>
            `).join('')}
        </ul>
    `,
    '/fiyatlar': `
        <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 text-center">Fiyatlar</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            ${menuItems.map(item => `
                <div class="bg-white p-4 rounded-lg shadow flex justify-between items-center border-l-4 border-brown-900 w-full mb-4">
                    <div class="font-bold text-lg">${item.name}</div>
                    <div class="text-brown-700 font-bold text-lg">${item.price}</div>
                </div>
            `).join('')}
        </div>
    `
};

// Routing function
function navigate() {
    let hash = window.location.hash || '#/';
    hash = hash.replace('#', '');

    if (routes[hash]) {
        contentDiv.innerHTML = routes[hash];
    } else {
        contentDiv.innerHTML = routes['/'];
    }
}

// Sidebar toggle functions
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

// Event Listeners
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});
