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

const appContent = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click (especially useful for mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

const pages = {
    home: () => `
        <div class="relative flex-1 flex flex-col justify-center items-center text-center p-8 bg-cover bg-center" style="background-image: url('./Images/coffee.jpg'); min-height: 80vh;">
            <div class="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            <div class="z-10 bg-cream bg-opacity-90 p-10 rounded-xl shadow-2xl max-w-2xl w-full">
                <h1 class="text-5xl font-heading font-bold text-brown-900 mb-6 drop-shadow-md">Kafe Merkezi'ne Hoş Geldiniz</h1>
                <p class="text-xl text-brown-700 font-body mb-8">Günün yorgunluğunu en taze kahvelerimiz ve leziz atıştırmalıklarımızla atın.</p>
                <a href="#menu" class="inline-block bg-brown-900 text-cream px-8 py-3 rounded-full font-bold hover:bg-brown-700 transition-colors shadow-lg">Menüyü İncele</a>
            </div>
        </div>
    `,
    hakkinda: () => `
        <div class="p-8 max-w-4xl mx-auto py-16">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-8 border-b-2 border-brown-300 pb-2 inline-block">Hakkımızda</h2>
            <div class="bg-white p-8 rounded-lg shadow-md leading-relaxed text-lg">
                <p class="mb-4">Kafe Merkezi, şehrin kalbinde, kahve tutkunları için özel olarak tasarlanmış sıcak ve samimi bir buluşma noktasıdır. 2010 yılından bu yana, dünyanın farklı yörelerinden özenle seçilmiş kahve çekirdeklerini en taze şekilde sizlere sunuyoruz.</p>
                <p>Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize kendilerini evlerinde hissedecekleri huzurlu bir ortam yaratmaktır. Deneyimli baristalarımız ve güler yüzlü ekibimizle her yudumda kaliteyi hissetmeniz için çalışıyoruz.</p>
            </div>
        </div>
    `,
    destek: () => `
        <div class="p-8 max-w-4xl mx-auto py-16 text-center">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-8 border-b-2 border-brown-300 pb-2 inline-block">Destek</h2>
            <div class="bg-white p-8 rounded-lg shadow-md">
                <p class="text-lg mb-6">Siparişleriniz, geri bildirimleriniz veya herhangi bir sorununuz için buradayız. Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:destek@kafemerkezi.com" class="bg-brown-900 text-cream px-6 py-3 rounded-md hover:bg-brown-700 transition-colors">E-posta Gönder</a>
                    <a href="tel:+905551234567" class="border-2 border-brown-900 text-brown-900 px-6 py-3 rounded-md hover:bg-brown-100 transition-colors">Bizi Arayın</a>
                </div>
            </div>
        </div>
    `,
    iletisim: () => `
        <div class="p-8 max-w-4xl mx-auto py-16">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-8 border-b-2 border-brown-300 pb-2 inline-block">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <h3 class="text-2xl font-heading mb-4 text-brown-700">Adres Bilgileri</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 12, Kadıköy, İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0(216) 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kafemerkezi.com</p>
                    <p class="mt-6"><strong>Çalışma Saatleri:</strong></p>
                    <p>Pazartesi - Pazar: 08:00 - 23:00</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <h3 class="text-2xl font-heading mb-4 text-brown-700">Bize Ulaşın</h3>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block mb-1 text-sm font-bold text-brown-900">İsim</label>
                            <input type="text" class="w-full border border-brown-300 p-2 rounded focus:outline-none focus:border-brown-900" required>
                        </div>
                        <div>
                            <label class="block mb-1 text-sm font-bold text-brown-900">Mesaj</label>
                            <textarea class="w-full border border-brown-300 p-2 rounded h-24 focus:outline-none focus:border-brown-900" required></textarea>
                        </div>
                        <button type="submit" class="bg-brown-900 text-cream px-6 py-2 rounded hover:bg-brown-700 w-full transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    subeler: () => `
        <div class="p-8 max-w-4xl mx-auto py-16">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-8 border-b-2 border-brown-300 pb-2 inline-block">Şube Konumları</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brown-900 hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-heading font-bold mb-2 text-brown-700">Merkez Şube (Kadıköy)</h3>
                    <p class="text-gray-600 mb-4">Kahve Sokak No: 12, Moda, İstanbul</p>
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Açık</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brown-500 hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-heading font-bold mb-2 text-brown-700">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mb-4">Sahil Yolu Cad. No: 45, Beşiktaş, İstanbul</p>
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Açık</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brown-300 hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-heading font-bold mb-2 text-brown-700">Ankara Şubesi</h3>
                    <p class="text-gray-600 mb-4">Tunalı Hilmi Cad. No: 88, Çankaya, Ankara</p>
                    <span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Kapalı</span>
                </div>
            </div>
        </div>
    `,
    menu: () => `
        <div class="p-8 max-w-4xl mx-auto py-16 text-center">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-4 border-b-2 border-brown-300 pb-2 inline-block">Menü İçerikleri</h2>
            <p class="text-lg text-brown-700 mb-10">Özenle hazırlanmış kahvelerimiz ve günlük taze tatlılarımız.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-heading text-brown-900 mb-4 border-b border-brown-100 pb-2">İçecekler</h3>
                    <ul class="space-y-3">
                        ${menuItems.filter(i => ['Espresso', 'Cappuccino', 'Latte', 'Türk Kahvesi', 'Çay', 'Soğuk Kahve', 'Limonata'].includes(i.name)).map(item => `
                            <li class="flex items-center text-lg"><span class="w-2 h-2 bg-brown-500 rounded-full mr-3"></span>${item.name}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-heading text-brown-900 mb-4 border-b border-brown-100 pb-2">Yiyecekler & Tatlılar</h3>
                    <ul class="space-y-3">
                        ${menuItems.filter(i => !['Espresso', 'Cappuccino', 'Latte', 'Türk Kahvesi', 'Çay', 'Soğuk Kahve', 'Limonata'].includes(i.name)).map(item => `
                            <li class="flex items-center text-lg"><span class="w-2 h-2 bg-brown-500 rounded-full mr-3"></span>${item.name}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `,
    fiyatlar: () => `
        <div class="p-8 max-w-4xl mx-auto py-16">
            <h2 class="text-4xl font-heading font-bold text-brown-900 mb-10 border-b-2 border-brown-300 pb-2 inline-block text-center w-full">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <ul class="divide-y divide-brown-100">
                    ${menuItems.map((item, index) => `
                        <li class="flex justify-between items-center p-4 hover:bg-cream transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}">
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                            <span class="text-xl font-bold font-heading text-brown-700">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `,
    notfound: () => `
        <div class="flex-1 flex flex-col justify-center items-center text-center p-8 py-20">
            <h2 class="text-6xl font-heading font-bold text-brown-900 mb-4">404</h2>
            <p class="text-2xl text-brown-700 mb-8">Sayfa bulunamadı.</p>
            <a href="#home" class="bg-brown-900 text-cream px-6 py-2 rounded hover:bg-brown-700 transition-colors">Ana Sayfaya Dön</a>
        </div>
    `
};

function router() {
    let hash = window.location.hash.substring(1);
    if (!hash) {
        hash = 'home';
    }

    // Map non-ascii/turkish characters to clean hash logic
    const routeMap = {
        'hakkinda': 'hakkinda',
        'destek': 'destek',
        'iletisim': 'iletisim',
        'subeler': 'subeler',
        'menu': 'menu',
        'fiyatlar': 'fiyatlar',
        'home': 'home'
    };

    const targetRoute = routeMap[hash] || 'notfound';
    appContent.innerHTML = pages[targetRoute]();
    window.scrollTo(0,0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
