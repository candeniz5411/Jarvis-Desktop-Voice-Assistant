// Sidebar DOM Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuItems = document.querySelectorAll('.menu-item');

// Toggle Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when a menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Menu Data
const menuData = [
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

// Pages Content Logic
const mainContent = document.getElementById('main-content');

const pages = {
    '': `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl font-bold mb-4">Hoş Geldiniz!</h2>
            <p class="text-lg mb-8 text-coffee-light">En iyi kahve deneyimi için doğru yerdesiniz.</p>
            <img src="./Images/coffee.jpg" alt="Kahve" class="w-full h-64 object-cover rounded-xl shadow-lg mx-auto max-w-2xl">
        </div>
    `,
    '#hakkinda': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed">
                Kafemiz, kahve tutkunlarına en kaliteli çekirdekleri özenle sunmayı amaçlayan modern ve samimi bir mekandır. Yılların tecrübesiyle hazırladığımız her bir fincan kahve, size benzersiz bir tatil deneyimi yaşatmak için tasarlandı.
            </p>
        </div>
    `,
    '#destek': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="text-lg mb-4">Müşteri memnuniyeti bizim için her şeydir. Herhangi bir sorununuz veya öneriniz varsa lütfen bize bildirin.</p>
            <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-light text-coffee-dark">
                <p><strong>SSS:</strong> Sıkça sorulan sorulara göz atabilirsiniz.</p>
                <p class="mt-2"><strong>Yardım Merkezi:</strong> Daha fazla destek için bizimle iletişime geçin.</p>
            </div>
        </div>
    `,
    '#iletisim': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-light text-coffee-dark flex flex-col gap-4">
                <p><strong>Adres:</strong> Kahve Sk. No:42, Merkez/Şehir</p>
                <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                <p><strong>E-posta:</strong> info@kafesitesi.com</p>
            </div>
        </div>
    `,
    '#subeler': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <ul class="space-y-4">
                <li class="bg-white p-4 rounded-lg shadow-md border-l-4 border-coffee text-coffee-dark">
                    <h3 class="font-bold text-xl">Merkez Şube</h3>
                    <p>Kahve Sk. No:42, Şehir Merkezi</p>
                </li>
                <li class="bg-white p-4 rounded-lg shadow-md border-l-4 border-coffee text-coffee-dark">
                    <h3 class="font-bold text-xl">Sahil Şubesi</h3>
                    <p>Deniz Cad. No:10, Sahil Yolu</p>
                </li>
                <li class="bg-white p-4 rounded-lg shadow-md border-l-4 border-coffee text-coffee-dark">
                    <h3 class="font-bold text-xl">AVM Şubesi</h3>
                    <p>Büyük AVM, Zemin Kat No:15</p>
                </li>
            </ul>
        </div>
    `,
    '#icerikler': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuData.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center text-coffee-dark">
                        <span class="font-bold text-lg">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '#fiyatlar': `
        <div>
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-coffee-light pb-2">Fiyatlar</h2>
            <div class="flex flex-col gap-3">
                ${menuData.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center border-l-4 border-coffee text-coffee-dark">
                        <span class="font-bold text-lg">${item.name}</span>
                        <span class="text-xl font-bold text-coffee">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Router function
function router() {
    let hash = window.location.hash;
    // Default to home if hash is invalid or not in pages
    if (!pages[hash]) {
        hash = '';
    }
    mainContent.innerHTML = pages[hash];
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Initial load
window.addEventListener('DOMContentLoaded', router);
