// Data: Menu Items
const menuData = [
    { name: 'Espresso', price: 45 },
    { name: 'Cappuccino', price: 55 },
    { name: 'Latte', price: 60 },
    { name: 'Türk Kahvesi', price: 40 },
    { name: 'Çay', price: 25 },
    { name: 'Cheesecake', price: 70 },
    { name: 'Kruvasan', price: 50 },
    { name: 'Sandviç', price: 80 },
    { name: 'Soğuk Kahve', price: 65 },
    { name: 'Limonata', price: 35 }
];

// Views
const views = {
    home: `
        <div class="flex-grow flex flex-col justify-center items-center px-4 py-12">
            <div class="max-w-4xl mx-auto text-center mb-12 fade-in">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-cafe-dark mb-6">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl font-body text-gray-700 max-w-2xl mx-auto">En taze çekirdeklerle hazırladığımız enfes kahvelerinizi yudumlarken sıcak atmosferimizin tadını çıkarın.</p>
            </div>

            <div class="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl mb-8 fade-in" style="animation-delay: 0.1s">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200&h=600" alt="Sıcak Kahve Fincanı" class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700">
            </div>
        </div>
    `,
    hakkinda: `
        <div class="max-w-4xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8">Hakkımızda</h2>
            <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-cafe-accent/30 text-gray-800 font-body leading-relaxed text-lg">
                <p class="mb-4">Kahve Dükkanı olarak 2010 yılından beri sizlere en taze, organik ve sürdürülebilir kahve çekirdekleriyle hizmet vermekteyiz.</p>
                <p class="mb-4">Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların paylaşıldığı sıcak bir ortam yaratmaktır.</p>
                <p>Usta baristalarımız her bir fincanı sevgi ve özenle hazırlayarak sizlere eşsiz bir deneyim sunmayı hedefler.</p>
            </div>
        </div>
    `,
    destek: `
        <div class="max-w-4xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8">Destek ve S.S.S.</h2>
            <div class="space-y-4">
                <div class="bg-white p-6 rounded-xl shadow-md border border-cafe-accent/30">
                    <h3 class="font-bold text-xl font-heading mb-2 text-cafe-dark">Siparişimi nasıl iptal edebilirim?</h3>
                    <p class="text-gray-700 font-body">Siparişinizi verdikten sonraki ilk 5 dakika içerisinde 0850 XXX XX XX numarasını arayarak iptal edebilirsiniz.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md border border-cafe-accent/30">
                    <h3 class="font-bold text-xl font-heading mb-2 text-cafe-dark">Glutensiz ürünleriniz var mı?</h3>
                    <p class="text-gray-700 font-body">Evet, menümüzde yer alan bazı tatlılarımız glutensiz olarak hazırlanmaktadır. Detaylı bilgi için şubelerimizdeki baristalarımıza danışabilirsiniz.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md border border-cafe-accent/30">
                    <h3 class="font-bold text-xl font-heading mb-2 text-cafe-dark">Hangi kahve çekirdeklerini kullanıyorsunuz?</h3>
                    <p class="text-gray-700 font-body">Genellikle Kolombiya, Etiyopya ve Brezilya menşeili %100 Arabica çekirdekleri kullanıyoruz.</p>
                </div>
            </div>
        </div>
    `,
    iletisim: `
        <div class="max-w-4xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg border border-cafe-accent/30">
                    <h3 class="text-xl font-bold font-heading mb-4 text-cafe-dark">Bize Ulaşın</h3>
                    <ul class="space-y-4 font-body text-gray-700">
                        <li class="flex items-start">
                            <span class="font-bold w-24 block shrink-0 text-cafe-dark">Adres:</span>
                            <span>Kahve Sokak, No: 123, Moda, Kadıköy / İstanbul</span>
                        </li>
                        <li class="flex items-start">
                            <span class="font-bold w-24 block shrink-0 text-cafe-dark">Telefon:</span>
                            <span>+90 216 123 45 67</span>
                        </li>
                        <li class="flex items-start">
                            <span class="font-bold w-24 block shrink-0 text-cafe-dark">E-posta:</span>
                            <span>merhaba@kahvedukkani.com</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg border border-cafe-accent/30">
                    <h3 class="text-xl font-bold font-heading mb-4 text-cafe-dark">Çalışma Saatleri</h3>
                    <ul class="space-y-3 font-body text-gray-700">
                        <li class="flex justify-between border-b border-gray-100 pb-2">
                            <span>Pazartesi - Cuma</span>
                            <span class="font-bold">07:00 - 22:00</span>
                        </li>
                        <li class="flex justify-between border-b border-gray-100 pb-2">
                            <span>Cumartesi</span>
                            <span class="font-bold">08:00 - 23:00</span>
                        </li>
                        <li class="flex justify-between pt-1">
                            <span>Pazar</span>
                            <span class="font-bold">08:00 - 21:00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="max-w-4xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl shadow-md overflow-hidden border border-cafe-accent/30 hover:shadow-xl transition-shadow">
                    <div class="bg-cafe-dark text-cafe-cream p-4">
                        <h3 class="text-xl font-bold font-heading">Moda Merkez</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 font-body mb-2">Caferağa Mah. Moda Cad. No:123 Kadıköy/İstanbul</p>
                        <p class="text-sm text-gray-500 font-bold">Tel: 0216 123 45 67</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-md overflow-hidden border border-cafe-accent/30 hover:shadow-xl transition-shadow">
                    <div class="bg-cafe-dark text-cafe-cream p-4">
                        <h3 class="text-xl font-bold font-heading">Beşiktaş</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 font-body mb-2">Sinanpaşa Mah. Ihlamurdere Cad. No:45 Beşiktaş/İstanbul</p>
                        <p class="text-sm text-gray-500 font-bold">Tel: 0212 987 65 43</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-md overflow-hidden border border-cafe-accent/30 hover:shadow-xl transition-shadow">
                    <div class="bg-cafe-dark text-cafe-cream p-4">
                        <h3 class="text-xl font-bold font-heading">Karaköy</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 font-body mb-2">Kemankeş Mah. Mumhane Cad. No:12 Beyoğlu/İstanbul</p>
                        <p class="text-sm text-gray-500 font-bold">Tel: 0212 555 44 33</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-md overflow-hidden border border-cafe-accent/30 hover:shadow-xl transition-shadow">
                    <div class="bg-cafe-dark text-cafe-cream p-4">
                        <h3 class="text-xl font-bold font-heading">İzmir Alsancak</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-700 font-body mb-2">Kıbrıs Şehitleri Cad. No:89 Konak/İzmir</p>
                        <p class="text-sm text-gray-500 font-bold">Tel: 0232 444 22 11</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-4xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8 text-center md:text-left">Menü İçerikleri</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Sıcak İçecekler -->
                <div class="bg-white rounded-xl shadow-lg border border-cafe-accent/30 overflow-hidden">
                    <div class="bg-cafe-dark text-cafe-cream py-3 px-6">
                        <h3 class="text-2xl font-heading font-bold">Sıcak İçecekler</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        ${menuData.slice(0, 5).map(item => `
                            <div class="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 hover:bg-cafe-light/30 p-2 rounded transition-colors menu-item">
                                <span class="font-body text-gray-800 text-lg font-medium">${item.name}</span>
                                <span class="font-heading font-bold text-cafe-dark text-lg">${item.price}₺</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Soğuk İçecekler & Yiyecekler -->
                <div class="bg-white rounded-xl shadow-lg border border-cafe-accent/30 overflow-hidden">
                    <div class="bg-cafe-dark text-cafe-cream py-3 px-6">
                        <h3 class="text-2xl font-heading font-bold">Soğuk & Yiyecekler</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        ${menuData.slice(5).map(item => `
                            <div class="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 hover:bg-cafe-light/30 p-2 rounded transition-colors menu-item">
                                <span class="font-body text-gray-800 text-lg font-medium">${item.name}</span>
                                <span class="font-heading font-bold text-cafe-dark text-lg">${item.price}₺</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="max-w-3xl mx-auto px-4 py-12 fade-in w-full">
            <h2 class="text-3xl font-heading font-bold text-cafe-dark border-b-2 border-cafe-dark pb-2 mb-8 text-center">Fiyat Listesi</h2>

            <div class="bg-white rounded-2xl shadow-xl border border-cafe-accent/50 p-6 md:p-10">
                <div class="space-y-4">
                    ${menuData.map((item, index) => `
                        <div class="flex justify-between items-end border-b-2 border-dotted border-cafe-accent pb-2 menu-item transition-all" style="animation-delay: ${index * 0.05}s">
                            <span class="font-body text-gray-800 text-xl md:text-2xl font-bold bg-white pr-2">${item.name}</span>
                            <span class="font-heading font-bold text-cafe-dark text-xl md:text-2xl bg-white pl-2">${item.price}₺</span>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-10 text-center text-gray-500 font-body text-sm">
                    <p>* Tüm fiyatlarımıza KDV dahildir.</p>
                </div>
            </div>
        </div>
    `
};

// Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');

// Sidebar toggle functions
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    // small delay to allow display block to apply before opacity transition
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300); // match duration-300
    document.body.style.overflow = '';
}

// Event Listeners for Sidebar
hamburgerBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Routing
function handleRoute() {
    // Get the hash part of the URL, remove the #/
    let hash = window.location.hash.slice(2);

    // Default to 'home' if empty
    if (!hash) {
        hash = 'home';
    }

    // Map URL hashes to view keys
    const routeMap = {
        '': 'home',
        'home': 'home',
        'hakkinda': 'hakkinda',
        'destek': 'destek',
        'iletisim': 'iletisim',
        'subeler': 'subeler',
        'menu': 'menu',
        'fiyatlar': 'fiyatlar'
    };

    const viewKey = routeMap[hash] || 'home';

    // Render content
    mainContent.innerHTML = views[viewKey];

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update active link styling
    navLinks.forEach(link => {
        if(link.getAttribute('href') === `#/${hash}` || (hash==='home' && link.getAttribute('href') === '#/')) {
            link.classList.add('bg-cafe-dark', 'text-white');
            link.classList.remove('text-cafe-cream');
        } else {
            link.classList.remove('bg-cafe-dark', 'text-white');
            link.classList.add('text-cafe-cream');
        }
    });
}

// Close sidebar on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);

// Initial route handling
window.addEventListener('DOMContentLoaded', handleRoute);
