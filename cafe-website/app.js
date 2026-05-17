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

const views = {
    '/': () => `
        <div class="max-w-4xl mx-auto px-4 text-center">
            <img src="./Images/logo.jpg" alt="Kafe Logosu" class="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-brown-200 mb-6">
            <h2 class="font-heading text-4xl text-brown-900 mb-4">Kafe Köşesine Hoş Geldiniz</h2>
            <p class="text-lg text-brown-700 mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla gününüzü güzelleştirmek için buradayız.</p>
            <img src="./Images/coffee.jpg" alt="Kahve Görseli" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl">
        </div>
    `,
    '/hakkinda': () => `
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2">Hakkımızda</h2>
            <div class="bg-white p-8 rounded-xl shadow-md text-brown-800 leading-relaxed space-y-4">
                <p>Kafe Köşesi olarak 2010 yılından beri şehrin en iyi kahvesini sunmaktan gurur duyuyoruz. Misyonumuz, yoğun tempoda size sıcak, samimi ve huzurlu bir mola sunmaktır.</p>
                <p>Usta baristalarımız tarafından özenle hazırlanan kahvelerimiz, dünyanın dört bir yanından gelen en kaliteli çekirdeklerden elde edilmektedir.</p>
            </div>
        </div>
    `,
    '/destek': () => `
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2">Destek</h2>
            <div class="bg-white p-8 rounded-xl shadow-md text-brown-800 space-y-4">
                <h3 class="font-bold text-xl mb-2">Nasıl yardımcı olabiliriz?</h3>
                <p>Siparişleriniz, geri bildirimleriniz veya herhangi bir sorunuz için bize ulaşmaktan çekinmeyin.</p>
                <div class="mt-6 p-4 bg-cream-100 rounded-lg border border-brown-200">
                    <p class="font-medium text-brown-900">Sıkça Sorulan Sorular</p>
                    <ul class="list-disc list-inside mt-2 text-sm space-y-1">
                        <li>Çalışma saatleriniz nelerdir?</li>
                        <li>Glutensiz ürünleriniz var mı?</li>
                        <li>Toplu sipariş alıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    '/iletisim': () => `
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2">İletişim</h2>
            <div class="bg-white p-8 rounded-xl shadow-md text-brown-800">
                <div class="space-y-6">
                    <div>
                        <h4 class="font-bold text-brown-900">Adres:</h4>
                        <p>Kahve Sokak No:42, Lezzet Mahallesi, İstanbul</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-brown-900">Telefon:</h4>
                        <p>+90 (555) 123 45 67</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-brown-900">E-posta:</h4>
                        <p>merhaba@kafekosesi.com</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    '/subeler': () => `
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-500">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">Merkez Şube</h3>
                    <p class="text-brown-700">Kadıköy Meydanı, İstanbul</p>
                    <p class="text-sm text-gray-500 mt-2">Hafta içi: 07:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-500">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">Sahil Şubesi</h3>
                    <p class="text-brown-700">Moda Sahili, İstanbul</p>
                    <p class="text-sm text-gray-500 mt-2">Her gün: 08:00 - 00:00</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-500">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">AVM Şubesi</h3>
                    <p class="text-brown-700">Levent, İstanbul</p>
                    <p class="text-sm text-gray-500 mt-2">Her gün: 10:00 - 22:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu': () => `
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
                        <span class="font-heading text-xl text-brown-800">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '/fiyatlar': () => `
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="font-heading text-3xl text-brown-900 mb-6 border-b border-brown-200 pb-2 text-center">Fiyatlar</h2>
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <ul class="divide-y divide-brown-100">
                    ${menuItems.map(item => `
                        <li class="p-4 flex justify-between items-center hover:bg-cream-50 transition-colors">
                            <span class="font-medium text-lg text-brown-800">${item.name}</span>
                            <span class="font-heading text-xl text-brown-900 font-bold">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
};

// Router Logic
function router() {
    const path = window.location.hash.slice(1) || '/';
    const appRoot = document.getElementById('app-root');

    // Render view
    if (views[path]) {
        appRoot.innerHTML = views[path]();
    } else {
        appRoot.innerHTML = `<div class="text-center mt-20"><h2 class="text-2xl">Sayfa Bulunamadı</h2><a href="#/" class="text-brown-500 underline mt-4 inline-block">Ana Sayfaya Dön</a></div>`;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close sidebar on navigation on mobile
    closeSidebar();
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
