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
    '/': {
        title: 'Ana Sayfa',
        render: () => `
            <div class="text-center max-w-2xl mx-auto mt-8">
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-brown-900 mb-6">Kafe'mize Hoş Geldiniz</h2>
                <p class="text-lg mb-8 text-brown-800">En taze kahveler ve lezzetli atıştırmalıklar ile gününüzü güzelleştirin.</p>
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Taze Kahve" class="w-full h-64 object-cover rounded-xl shadow-md mb-8">
            </div>
        `
    },
    '/hakkinda': {
        title: 'Hakkında',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Hakkımızda</h2>
                <p class="text-brown-800 leading-relaxed mb-4">
                    Kafemiz 2010 yılından bu yana kaliteli kahve çekirdekleri ve samimi ortamıyla misafirlerine hizmet vermektedir.
                    Amacımız, yoğun günlük hayatın içinde sizlere huzurlu bir mola imkanı sunmaktır.
                </p>
                <p class="text-brown-800 leading-relaxed">
                    Sürdürülebilirlik ve yerel üreticileri destekleme konusundaki kararlılığımızla, her fincanda en iyiyi sunmayı hedefliyoruz.
                </p>
            </div>
        `
    },
    '/destek': {
        title: 'Destek',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Destek Merkezi</h2>
                <p class="text-brown-800 mb-6">Sıkça sorulan sorulara göz atabilir veya aşağıdan bize ulaşabilirsiniz.</p>
                <div class="space-y-4 text-brown-800">
                    <details class="bg-cream p-4 rounded-md">
                        <summary class="font-bold cursor-pointer">Siparişimi nasıl iptal edebilirim?</summary>
                        <p class="mt-2 text-sm">Siparişinizi oluşturduktan sonraki 5 dakika içinde müşteri hizmetlerimizi arayarak iptal edebilirsiniz.</p>
                    </details>
                    <details class="bg-cream p-4 rounded-md">
                        <summary class="font-bold cursor-pointer">Alerjen bilgilerine nereden ulaşabilirim?</summary>
                        <p class="mt-2 text-sm">Tüm ürünlerimizin alerjen bilgileri kasalarımızda ve menü içerikleri sayfamızda yer almaktadır.</p>
                    </details>
                </div>
            </div>
        `
    },
    '/iletisim': {
        title: 'İletişim',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Bize Ulaşın</h2>
                <div class="space-y-4 text-brown-800">
                    <p><strong>Adres:</strong> Kahveci Sokak No:12, Kadıköy, İstanbul</p>
                    <p><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                    <p><strong>E-posta:</strong> merhaba@kafemiz.com.tr</p>
                    <p class="mt-6 font-bold">Çalışma Saatleri:</p>
                    <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                    <p>Hafta Sonu: 09:00 - 23:00</p>
                </div>
            </div>
        `
    },
    '/subeler': {
        title: 'Şube Konumları',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Şubelerimiz</h2>
                <ul class="space-y-4 text-brown-800">
                    <li class="bg-cream p-4 rounded-md">
                        <h3 class="font-bold text-lg mb-1">Kadıköy Merkez (Moda)</h3>
                        <p class="text-sm">Moda Caddesi, No:45</p>
                    </li>
                    <li class="bg-cream p-4 rounded-md">
                        <h3 class="font-bold text-lg mb-1">Beşiktaş Çarşı</h3>
                        <p class="text-sm">Ihlamurdere Caddesi, No:120</p>
                    </li>
                    <li class="bg-cream p-4 rounded-md">
                        <h3 class="font-bold text-lg mb-1">Nişantaşı</h3>
                        <p class="text-sm">Valikonağı Caddesi, No:33</p>
                    </li>
                </ul>
            </div>
        `
    },
    '/menu-icerikleri': {
        title: 'Menü İçerikleri',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Menü İçerikleri</h2>
                <ul class="list-disc list-inside space-y-2 text-brown-800">
                    ${menuItems.map(item => `<li>${item.name}</li>`).join('')}
                </ul>
            </div>
        `
    },
    '/fiyatlar': {
        title: 'Fiyatlar',
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md mt-4">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b border-brown-900/10 pb-2">Fiyat Listesi</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center bg-cream p-3 rounded-md">
                            <span class="font-bold text-brown-900">${item.name}</span>
                            <span class="text-brown-700 bg-white px-2 py-1 rounded shadow-sm">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    }
};

const appContainer = document.getElementById('app-container');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOverlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

function renderRoute() {
    // Get current hash route, default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Ensure path matches one of our routes, else default to '/'
    if (!routes[path]) {
        path = '/';
    }

    const route = routes[path];
    appContainer.innerHTML = route.render();

    // Update document title optionally
    document.title = `${route.title} - Kafe`;
}

// Listen for hash changes to navigate
window.addEventListener('hashchange', renderRoute);

// Handle sidebar link clicks on mobile: close sidebar after clicking
document.querySelectorAll('#sidebar nav a').forEach(link => {
    link.addEventListener('click', () => {
        // If sidebar is open, close it
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Initial render
window.addEventListener('DOMContentLoaded', renderRoute);