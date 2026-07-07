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
    '': () => `
        <div class="flex flex-col items-center justify-center flex-grow text-center">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl mb-8 max-w-2xl">En taze kahveler ve lezzetli atıştırmalıklar için doğru adrestesiniz. Kendinizi evinizde hissedin.</p>
            <div class="w-full max-w-4xl h-64 md:h-96 rounded-xl overflow-hidden shadow-lg relative">
                <img src="./Images/coffee-hero.jpg" alt="Kahve" class="w-full h-full object-cover">
            </div>
        </div>
    `,
    '#hakkinda': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed">Biz, kahveye tutkuyla bağlı bir ekibiz. Amacımız, size sadece bir içecek değil, aynı zamanda unutulmaz bir deneyim sunmaktır. Kaliteli çekirdekler, özenli sunum ve sıcak bir atmosfer ile her yudumda keyfi hissetmenizi istiyoruz.</p>
        </div>
    `,
    '#destek': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Destek</h2>
            <p class="text-lg leading-relaxed">Siparişleriniz, geri bildirimleriniz veya herhangi bir sorunuz için buradayız. Müşteri memnuniyeti bizim için en büyük önceliktir. Bize dilediğiniz zaman ulaşabilirsiniz.</p>
        </div>
    `,
    '#iletisim': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">İletişim</h2>
            <div class="bg-brown-100 p-6 rounded-lg shadow-md">
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak, No: 1, Lezzet Mahallesi</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0(555) 123 45 67</p>
                <p class="text-lg"><strong>E-posta:</strong> merhaba@kafewebsitesi.com</p>
            </div>
        </div>
    `,
    '#subeler': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>
            <ul class="space-y-4 text-lg">
                <li class="bg-brown-100 p-4 rounded shadow"><strong>Merkez Şube:</strong> Kahve Sokak, No: 1</li>
                <li class="bg-brown-100 p-4 rounded shadow"><strong>Sahil Şubesi:</strong> Deniz Caddesi, No: 42</li>
                <li class="bg-brown-100 p-4 rounded shadow"><strong>Meydan Şubesi:</strong> Cumhuriyet Meydanı, No: 7</li>
            </ul>
        </div>
    `,
    '#icerikler': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Menü İçerikleri</h2>
            <p class="text-lg mb-6">Özenle hazırladığımız yiyecek ve içeceklerimiz:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-brown-100 p-4 rounded shadow flex justify-between items-center">
                        <span class="font-bold text-xl">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '#fiyatlar': () => `
        <div class="max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Fiyatlar</h2>
            <div class="bg-brown-100 rounded-lg shadow overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown-500 text-cream">
                            <th class="p-4 font-bold border-b border-brown-900">Ürün</th>
                            <th class="p-4 font-bold border-b border-brown-900 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map((item, index) => `
                            <tr class="${index % 2 === 0 ? 'bg-brown-100' : 'bg-[#e5ddd9]'} hover:bg-[#d4c9c4] transition">
                                <td class="p-4 border-b border-brown-500 font-semibold">${item.name}</td>
                                <td class="p-4 border-b border-brown-500 text-right font-bold text-lg">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

const appDiv = document.getElementById('app');

function render() {
    const hash = window.location.hash;
    const content = routes[hash] || routes[''];
    appDiv.innerHTML = content();
    closeSidebar(); // Close sidebar on navigation if on mobile
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});
