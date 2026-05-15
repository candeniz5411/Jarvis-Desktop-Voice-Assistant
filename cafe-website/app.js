// Menu Data
const menuItems = [
    { name: 'Espresso', price: 45, category: 'Sıcak İçecekler', desc: 'Sert ve yoğun kahve deneyimi.' },
    { name: 'Cappuccino', price: 55, category: 'Sıcak İçecekler', desc: 'Espresso, sıcak süt ve bol süt köpüğü.' },
    { name: 'Latte', price: 60, category: 'Sıcak İçecekler', desc: 'Espresso ve buharda ısıtılmış bol süt.' },
    { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecekler', desc: 'Geleneksel lezzet, lokum ile servis edilir.' },
    { name: 'Çay', price: 25, category: 'Sıcak İçecekler', desc: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler', desc: 'Buzlu, ferahlatıcı kahve.' },
    { name: 'Limonata', price: 35, category: 'Soğuk İçecekler', desc: 'Taze sıkılmış, ev yapımı nane ferahlığı.' },
    { name: 'Cheesecake', price: 70, category: 'Tatlılar', desc: 'Orman meyveli taze cheesecake.' },
    { name: 'Kruvasan', price: 50, category: 'Yiyecekler', desc: 'Tereyağlı, taze fırınlanmış kruvasan.' },
    { name: 'Sandviç', price: 80, category: 'Yiyecekler', desc: 'Taze yeşillikler ve özel peynirler ile.' }
];

// Sidebar Toggle Function
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Toggle the translate-x-full class to slide in/out
    sidebar.classList.toggle('-translate-x-full');

    // Toggle the hidden class for the overlay
    overlay.classList.toggle('hidden');
};

// Route Definitions
const routes = {
    '/': renderHome,
    '/hakkinda': renderAbout,
    '/destek': renderSupport,
    '/iletisim': renderContact,
    '/subeler': renderBranches,
    '/menu-icerikleri': renderMenuContents,
    '/fiyatlar': renderPrices
};

// Router Function
function router() {
    // Get the current path from the hash, default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Find the matching route, or default to home if not found
    const routeHandler = routes[path] || routes['/'];

    // Get the app container
    const appContainer = document.getElementById('app');

    // Clear current content and render new route
    appContainer.innerHTML = routeHandler();

    // Scroll to top on route change
    window.scrollTo(0, 0);
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Page Render Functions
function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-8">
            <div class="mb-8 p-4 bg-brown-100 rounded-full inline-block shadow-sm">
                <svg class="w-16 h-16 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 8H4M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8M4 8l3-3h10l3 3m-9 4h2v4h-2v-4z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path>
                </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-playfair font-bold text-brown-900 mb-6">Kafe Serenity'ye Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl text-brown-700 mb-10 max-w-2xl font-lato leading-relaxed">
                Şehrin gürültüsünden uzak, taze kavrulmuş kahve çekirdeklerinin kokusuyla dolu sakin bir mola. Özenle hazırladığımız lezzetleri keşfetmek için doğru yerdesiniz.
            </p>
            <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl mb-8">
                <img src="./Images/coffee.jpg" alt="Kafe Atmosferi ve Kahve" class="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700">
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto py-8 bg-white p-8 rounded-lg shadow-md border-t-4 border-brown-500">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-4">Hakkımızda</h2>
            <p class="mb-4 text-gray-700 leading-relaxed font-lato">
                Kafe Serenity, 2010 yılından beri kahve tutkunlarına hizmet veren, kalite ve samimiyeti bir araya getiren butik bir kahvehanedir. Amacımız, misafirlerimize sadece bir içecek değil, aynı zamanda huzurlu bir deneyim sunmaktır.
            </p>
            <p class="text-gray-700 leading-relaxed font-lato mb-6">
                Dünyanın farklı bölgelerinden özenle seçtiğimiz kahve çekirdeklerini kendi kavurma yöntemlerimizle hazırlıyor, usta baristalarımızın ellerinden fincanınıza taşıyoruz. Kahvenin yanında sunduğumuz taze atıştırmalıklar ve tatlılar da günlük olarak kendi mutfağımızda üretilmektedir.
            </p>
            <div class="bg-brown-50 p-6 rounded-md italic text-brown-800 border-l-4 border-brown-400">
                "İyi bir kahve, iyi bir günün başlangıcıdır."
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="max-w-3xl mx-auto py-8 bg-white p-8 rounded-lg shadow-md border-t-4 border-brown-500">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-4">Destek Merkezi</h2>
            <p class="mb-6 text-gray-700 font-lato">
                Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atabilir veya özel bir sorununuz varsa iletişim kanallarımızı kullanabilirsiniz.
            </p>

            <div class="space-y-4">
                <div class="border rounded-md p-4 bg-gray-50">
                    <h3 class="font-bold text-brown-800 mb-2 font-playfair">Siparişimi iptal edebilir miyim?</h3>
                    <p class="text-sm text-gray-600">Online siparişlerinizde, hazırlık aşamasına geçilmediği sürece ilk 5 dakika içinde iptal işlemi yapabilirsiniz.</p>
                </div>
                <div class="border rounded-md p-4 bg-gray-50">
                    <h3 class="font-bold text-brown-800 mb-2 font-playfair">Glutensiz ürünleriniz var mı?</h3>
                    <p class="text-sm text-gray-600">Evet, menümüzde glutensiz sandviç ve tatlı seçenekleri bulunmaktadır. Detaylar için personelimizden bilgi alabilirsiniz.</p>
                </div>
                <div class="border rounded-md p-4 bg-gray-50">
                    <h3 class="font-bold text-brown-800 mb-2 font-playfair">Sadakat programınız (Müşteri Kartı) var mı?</h3>
                    <p class="text-sm text-gray-600">Serenity Kart ile her 10 kahve alımınızda 1 adet dilediğiniz kahveyi ücretsiz olarak ikram ediyoruz.</p>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="max-w-3xl mx-auto py-8 bg-white p-8 rounded-lg shadow-md border-t-4 border-brown-500">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-4">İletişim</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-brown-800 mb-4 font-playfair">Bize Ulaşın</h3>
                    <ul class="space-y-4 font-lato text-gray-700">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-brown-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <div>
                                <strong>Telefon:</strong><br>
                                +90 (555) 123 45 67
                            </div>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-brown-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <div>
                                <strong>E-posta:</strong><br>
                                merhaba@kafeserenity.com
                            </div>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-brown-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <strong>Çalışma Saatleri:</strong><br>
                                Pzt - Cuma: 07:00 - 22:00<br>
                                Hft Sonu: 08:00 - 23:00
                            </div>
                        </li>
                    </ul>
                </div>

                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                        <input type="text" class="w-full p-2 border rounded focus:ring-brown-500 focus:border-brown-500" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                        <input type="email" class="w-full p-2 border rounded focus:ring-brown-500 focus:border-brown-500" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                        <textarea rows="4" class="w-full p-2 border rounded focus:ring-brown-500 focus:border-brown-500" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brown-800 text-white font-bold py-2 px-4 rounded hover:bg-brown-900 transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderBranches() {
    return `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-8 text-center">Şube Konumlarımız</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Branch 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-brown-600 transition-transform hover:-translate-y-1">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2 font-playfair flex items-center">
                            <svg class="w-5 h-5 mr-2 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Merkez Şube (Kadıköy)
                        </h3>
                        <p class="text-gray-600 mb-4 font-lato text-sm">Caferağa Mah. Moda Cad. No:123 Kadıköy / İstanbul</p>
                        <p class="text-gray-500 text-sm italic">"Tarihi doku içinde kahve keyfi"</p>
                    </div>
                </div>

                <!-- Branch 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-brown-600 transition-transform hover:-translate-y-1">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2 font-playfair flex items-center">
                            <svg class="w-5 h-5 mr-2 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Beşiktaş Şubesi
                        </h3>
                        <p class="text-gray-600 mb-4 font-lato text-sm">Sinanpaşa Mah. Şair Nedim Cad. No:45 Beşiktaş / İstanbul</p>
                        <p class="text-gray-500 text-sm italic">"Boğaz havası eşliğinde serinlik"</p>
                    </div>
                </div>

                <!-- Branch 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-brown-600 transition-transform hover:-translate-y-1">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2 font-playfair flex items-center">
                            <svg class="w-5 h-5 mr-2 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Ankara Çankaya
                        </h3>
                        <p class="text-gray-600 mb-4 font-lato text-sm">Tunali Hilmi Cad. No:89 Çankaya / Ankara</p>
                        <p class="text-gray-500 text-sm italic">"Başkentin en tatlı molası"</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMenuContents() {
    let menuHtml = `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-2 text-center">Menü İçerikleri</h2>
            <p class="text-center text-gray-600 mb-8 font-lato">Taze malzemelerle özenle hazırlanmış lezzetlerimiz.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    `;

    // Group items by category (simplified for display)
    const categories = [...new Set(menuItems.map(item => item.category))];

    categories.forEach(category => {
        menuHtml += `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-2xl font-playfair font-bold text-brown-800 mb-4 border-b-2 border-brown-200 inline-block pb-1">${category}</h3>
                <ul class="space-y-4">
        `;

        const itemsInCategory = menuItems.filter(item => item.category === category);
        itemsInCategory.forEach(item => {
            menuHtml += `
                <li>
                    <div class="font-bold text-lg text-brown-900">${item.name}</div>
                    <p class="text-sm text-gray-500 italic font-lato mt-1">${item.desc}</p>
                </li>
            `;
        });

        menuHtml += `
                </ul>
            </div>
        `;
    });

    menuHtml += `
            </div>
        </div>
    `;
    return menuHtml;
}

function renderPrices() {
    let pricesHtml = `
        <div class="max-w-3xl mx-auto py-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="bg-brown-900 text-cream py-6 px-8 text-center">
                    <h2 class="text-3xl font-playfair font-bold">Fiyat Listesi</h2>
                    <p class="opacity-80 mt-2 font-lato text-sm">Tüm fiyatlarımıza KDV dahildir.</p>
                </div>
                <div class="p-8">
                    <div class="space-y-6">
    `;

    menuItems.forEach(item => {
        pricesHtml += `
            <div class="flex justify-between items-center border-b border-gray-100 pb-4 hover:bg-gray-50 p-2 rounded transition-colors">
                <span class="text-lg font-bold text-brown-800 font-lato">${item.name}</span>
                <span class="text-xl font-playfair font-bold text-brown-600">${item.price}₺</span>
            </div>
        `;
    });

    pricesHtml += `
                    </div>
                </div>
            </div>
        </div>
    `;
    return pricesHtml;
}