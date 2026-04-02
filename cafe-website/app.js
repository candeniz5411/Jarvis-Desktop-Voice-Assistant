// Data
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

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.getElementById('main-content');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small timeout to allow display:block to apply before animating opacity
    setTimeout(() => {
        sidebarOverlay.classList.remove('opacity-0');
        sidebarOverlay.classList.add('opacity-100');
    }, 10);
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.remove('opacity-100');
    sidebarOverlay.classList.add('opacity-0');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300); // match transition duration
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// Routing Logic
const routes = {
    'home': () => `
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-coffee-accent mb-8">En iyi çekirdeklerden özenle demlenmiş kahvelerimizle gününüze lezzet katın.</p>
            <div class="rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Lezzetli bir fincan kahve" class="w-full h-auto object-cover">
            </div>
        </div>
    `,
    'about': () => `
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">Hakkında</h1>
            <p class="mb-4 text-lg leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri sizlere en kaliteli kahve deneyimini sunmayı hedefliyoruz. Dünyanın farklı yörelerinden özenle seçtiğimiz kahve çekirdeklerini, ustalarımızın ellerinde mükemmel bir lezzete dönüştürüyoruz.</p>
            <p class="text-lg leading-relaxed">Amacımız sadece kahve satmak değil, misafirlerimize kendilerini evlerinde hissedecekleri sıcak ve samimi bir ortam sunmaktır.</p>
        </div>
    `,
    'support': () => `
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">Destek</h1>
            <p class="mb-6 text-lg">Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorunuz mu var? Sıkça sorulan sorulara göz atabilir veya bizimle iletişime geçebilirsiniz.</p>
            <div class="bg-white/50 p-6 rounded-lg shadow-sm">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Glutensiz ürünleriniz var mı?</li>
                    <li>Vegan süt seçenekleriniz neler?</li>
                    <li>Toplu sipariş verebilir miyim?</li>
                </ul>
            </div>
        </div>
    `,
    'contact': () => `
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">İletişim</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:1, İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0212 555 55 55</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                </div>
                <form class="space-y-4">
                    <div>
                        <input type="text" placeholder="Adınız" class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-transparent">
                    </div>
                    <div>
                        <input type="email" placeholder="E-posta Adresiniz" class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-transparent">
                    </div>
                    <div>
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-transparent"></textarea>
                    </div>
                    <button type="button" class="bg-coffee-dark text-coffee-light px-6 py-2 rounded hover:bg-opacity-90 transition-opacity font-bold">Gönder</button>
                </form>
            </div>
        </div>
    `,
    'locations': () => `
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">Şube Konumları</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border-t-4 border-coffee-dark">
                    <h3 class="font-bold text-xl mb-2">Kadıköy Şubesi</h3>
                    <p>Caferağa Mah. Moda Cad. No: 1</p>
                    <p class="text-sm text-coffee-accent mt-2">Her gün: 08:00 - 23:00</p>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border-t-4 border-coffee-dark">
                    <h3 class="font-bold text-xl mb-2">Beşiktaş Şubesi</h3>
                    <p>Sinanpaşa Mah. Barbaros Blv. No: 5</p>
                    <p class="text-sm text-coffee-accent mt-2">Her gün: 07:30 - 24:00</p>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border-t-4 border-coffee-dark">
                    <h3 class="font-bold text-xl mb-2">Karaköy Şubesi</h3>
                    <p>Kemankeş Karamustafa Paşa Mah. No: 12</p>
                    <p class="text-sm text-coffee-accent mt-2">Her gün: 09:00 - 22:00</p>
                </div>
            </div>
        </div>
    `,
    'menu-items': () => {
        let itemsHtml = menuData.map(item => `
            <div class="bg-white/60 p-4 rounded-lg shadow flex items-center justify-center text-center">
                <span class="font-bold text-lg">${item.name}</span>
            </div>
        `).join('');

        return `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">Menü İçerikleri</h1>
                <p class="mb-6 text-lg text-center">Özenle hazırladığımız lezzetlerimizi keşfedin.</p>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    ${itemsHtml}
                </div>
            </div>
        `;
    },
    'prices': () => {
        let pricesHtml = menuData.map(item => `
            <div class="flex justify-between items-center border-b border-coffee-accent border-dashed py-3">
                <span class="font-bold text-lg">${item.name}</span>
                <span class="font-bold text-xl text-coffee-dark">${item.price}₺</span>
            </div>
        `).join('');

        return `
            <div class="max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold mb-6 border-b-2 border-coffee-accent pb-2">Fiyatlar</h1>
                <div class="bg-white/40 p-6 rounded-lg shadow-md">
                    <div class="space-y-2">
                        ${pricesHtml}
                    </div>
                </div>
            </div>
        `;
    }
};

function router() {
    let hash = window.location.hash.replace('#', '');

    // Default route
    if (!hash || !routes[hash]) {
        hash = 'home';
        window.history.replaceState(null, null, '#home');
    }

    const content = routes[hash]();

    // Update main content with a small fade effect
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.innerHTML = content;
        mainContent.style.opacity = 1;
        mainContent.style.transition = 'opacity 0.3s ease-in-out';
    }, 150);

    // Update active link styling
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('bg-coffee-accent', 'text-white');
        } else {
            link.classList.remove('bg-coffee-accent', 'text-white');
        }
    });
}

// Initial route
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
