const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');
const appDiv = document.getElementById('app');

const toggleSidebar = () => {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
};

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', toggleSidebar);
});

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

const renderPage = () => {
    const hash = window.location.hash || '#';
    let content = '';

    switch (hash) {
        case '#hakkinda':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">Hakkında</h2>
                    <p class="text-lg">Kahve Durağı, en kaliteli kahve çekirdeklerini özenle işleyerek size sunar. Modern ve minimalist yaklaşımımızla kahve deneyiminizi bir üst seviyeye taşıyoruz.</p>
                </div>
            `;
            break;
        case '#destek':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">Destek</h2>
                    <p class="text-lg">Her türlü soru ve sorununuz için destek ekibimizle iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarız.</p>
                </div>
            `;
            break;
        case '#iletisim':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">İletişim</h2>
                    <div class="text-left space-y-4 text-lg">
                        <p><strong>Adres:</strong> Kahve Sk. No:1, İstanbul</p>
                        <p><strong>Telefon:</strong> 0555 555 55 55</p>
                        <p><strong>E-posta:</strong> info@kahveduragi.com</p>
                    </div>
                </div>
            `;
            break;
        case '#subeler':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">Şube Konumları</h2>
                    <ul class="text-left space-y-4 text-lg list-disc list-inside">
                        <li>Kadıköy Merkez Şube</li>
                        <li>Beşiktaş Şube</li>
                        <li>Karaköy Şube</li>
                        <li>Moda Şube</li>
                    </ul>
                </div>
            `;
            break;
        case '#icerikler':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">Menü İçerikleri</h2>
                    <p class="text-lg mb-4">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içeceklerimiz.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${menuItems.map(item => `
                            <div class="p-4 bg-cafe-cream rounded-lg shadow border border-cafe-light text-left">
                                <span class="font-bold text-lg">${item.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case '#fiyatlar':
            content = `
                <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-4 text-center">
                    <h2 class="text-4xl font-serif text-cafe-brown mb-4 font-bold">Fiyatlar</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${menuItems.map(item => `
                            <div class="p-4 bg-cafe-cream rounded-lg shadow flex justify-between items-center border border-cafe-light">
                                <span class="font-bold text-lg">${item.name}</span>
                                <span class="font-bold text-lg text-cafe-brown">${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        default:
            // Ana sayfa
            content = `
                <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden text-center mt-4 pb-8">
                    <img src="./Images/coffee.jpg" class="w-full h-80 object-cover" alt="Kahve">
                    <h2 class="text-4xl font-serif text-cafe-brown mt-8 mb-4 font-bold">Kahve Durağı'na Hoş Geldiniz</h2>
                    <p class="text-lg px-8">Günün yorgunluğunu atmak, lezzetli atıştırmalıklar tatmak ve en iyi kahveyi içmek için doğru yerdesiniz.</p>
                </div>
            `;
    }

    appDiv.innerHTML = content;
};

window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);