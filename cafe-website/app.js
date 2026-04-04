// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', category: 'Kahve' },
    { name: 'Cappuccino', price: '55₺', category: 'Kahve' },
    { name: 'Latte', price: '60₺', category: 'Kahve' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Kahve' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Kahve' },
    { name: 'Çay', price: '25₺', category: 'İçecek' },
    { name: 'Limonata', price: '35₺', category: 'İçecek' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlı' },
    { name: 'Kruvasan', price: '50₺', category: 'Yiyecek' },
    { name: 'Sandviç', price: '80₺', category: 'Yiyecek' }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const appContent = document.getElementById('app-content');

// Sidebar Toggle Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking a link inside it
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// Update active link styling
function updateActiveLink(hash) {
    document.querySelectorAll('#sidebar a').forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('bg-brown-800', 'text-cream');
            link.classList.remove('hover:bg-brown-50', 'hover:text-brown-800');
        } else {
            link.classList.remove('bg-brown-800', 'text-cream');
            link.classList.add('hover:bg-brown-50', 'hover:text-brown-800');
        }
    });
}

// Views
const views = {
    '#/': () => `
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-heading font-bold mb-4">Kahve Dükkanı'na Hoş Geldiniz!</h2>
            <p class="text-lg text-brown-500 mb-8">Taze çekilmiş kahve çekirdekleri ve enfes tatlılarla dolu sıcacık bir mola.</p>
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı İçi" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg">
        </div>
    `,
    '#/hakkinda': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Hakkımızda</h2>
            <div class="space-y-4 text-lg">
                <p>Kahve Dükkanı, 2010 yılından beri şehrin kalbinde, kahve tutkunlarına hizmet vermektedir.</p>
                <p>Amacımız, dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini en iyi kavurma teknikleriyle hazırlayarak sizlere sunmaktır. Minimalist ve huzurlu atmosferimizde hem çalışabilir, hem de dostlarınızla keyifli vakit geçirebilirsiniz.</p>
            </div>
        </div>
    `,
    '#/destek': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Destek</h2>
            <p class="mb-4 text-lg">Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili her türlü geri bildirim ve yardım talebi için aşağıdaki formu doldurabilirsiniz.</p>

            <div class="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border mt-4">
                <form id="support-form" onsubmit="event.preventDefault(); document.getElementById('form-success').classList.remove('hidden'); this.reset();">
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Adınız</label>
                        <input type="text" required class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-brown-500">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">E-posta</label>
                        <input type="email" required class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-brown-500">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1">Mesajınız</label>
                        <textarea required rows="4" class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brown-800 text-cream py-2 rounded hover:bg-brown-900 transition">Gönder</button>
                </form>
                <div id="form-success" class="mt-4 p-4 bg-green-100 text-green-800 rounded hidden">
                    Mesajınız başarıyla alınmıştır. En kısa sürede dönüş yapılacaktır.
                </div>
            </div>
        </div>
    `,
    '#/iletisim': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div>
                    <h3 class="font-bold text-xl mb-2">Adres</h3>
                    <p>Kahve Sokak, No: 42<br>Kadıköy, İstanbul</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2">Telefon & E-posta</h3>
                    <p>Tel: +90 216 123 45 67<br>E-posta: merhaba@kahvedukkani.com</p>
                </div>
                <div class="md:col-span-2">
                    <h3 class="font-bold text-xl mb-2">Çalışma Saatleri</h3>
                    <p>Hafta içi: 07:30 - 22:00<br>Hafta sonu: 09:00 - 23:00</p>
                </div>
            </div>
        </div>
    `,
    '#/subeler': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Şube Konumları</h2>
            <div class="space-y-6">
                <div class="border p-4 rounded bg-gray-50">
                    <h3 class="font-bold text-xl mb-2 text-brown-800">Merkez Şube - Kadıköy</h3>
                    <p>Moda Caddesi, Kahve Sokak No: 42</p>
                </div>
                <div class="border p-4 rounded bg-gray-50">
                    <h3 class="font-bold text-xl mb-2 text-brown-800">Beşiktaş Şubesi</h3>
                    <p>Çarşı İçi, Ihlamurdere Caddesi No: 15</p>
                </div>
                <div class="border p-4 rounded bg-gray-50">
                    <h3 class="font-bold text-xl mb-2 text-brown-800">Nişantaşı Şubesi</h3>
                    <p>Teşvikiye Mahallesi, Güzel Sokak No: 8</p>
                </div>
            </div>
        </div>
    `,
    '#/menu': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Menü İçerikleri</h2>
            <p class="mb-6 text-lg text-gray-600">Özenle hazırladığımız lezzetlerimizi inceleyin.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="border p-4 rounded flex justify-between items-center bg-gray-50 hover:shadow-md transition">
                        <div>
                            <h3 class="font-bold text-lg text-brown-800">${item.name}</h3>
                            <span class="text-sm text-gray-500">${item.category}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '#/fiyatlar': () => `
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Fiyatlar</h2>
            <div class="space-y-2">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center border-b border-dashed border-gray-300 py-3">
                        <span class="font-semibold text-lg">${item.name}</span>
                        <span class="font-bold text-xl text-brown-800">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Router
function router() {
    // Get the current hash, default to '#/'
    let hash = window.location.hash || '#/';

    // Fallback if hash is not found in views
    if (!views[hash]) {
        hash = '#/';
    }

    // Render the view
    appContent.innerHTML = views[hash]();

    // Update sidebar styling
    updateActiveLink(hash);

    // Scroll to top on route change
    window.scrollTo(0, 0);
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
