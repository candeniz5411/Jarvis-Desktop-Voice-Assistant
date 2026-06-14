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

const renderHome = () => `
    <div class="text-center">
        <h1 class="text-4xl md:text-5xl mb-4">Kafe Keyfi'ne Hoş Geldiniz</h1>
        <p class="text-lg md:text-xl mb-8 opacity-80">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
        <div class="rounded-xl overflow-hidden shadow-lg border-2 border-cafe-dark/10">
            <img src="./Images/hero.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px]">
        </div>
    </div>
`;

const renderAbout = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">Hakkında</h1>
        <p class="text-lg leading-relaxed mb-4">Kafe Keyfi olarak 2010 yılından beri sizlere en iyi kahve deneyimini sunmayı amaçlıyoruz. Özenle seçilmiş kahve çekirdeklerimiz ve taptaze ürünlerimizle günün her saati yanınızdayız.</p>
        <p class="text-lg leading-relaxed">Amacımız, sadece bir kafe olmak değil, aynı zamanda misafirlerimizin rahatça vakit geçirebileceği sıcak bir ortam yaratmaktır.</p>
    </div>
`;

const renderSupport = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">Destek</h1>
        <p class="text-lg leading-relaxed mb-4">Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız, müşteri hizmetleri ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.</p>
        <p class="text-lg leading-relaxed font-bold">Müşteri Destek Hattı: 0850 123 45 67</p>
    </div>
`;

const renderContact = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">İletişim</h1>
        <p class="text-lg leading-relaxed mb-4">Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
        <ul class="text-lg leading-relaxed space-y-2">
            <li><strong>Telefon:</strong> 0212 555 12 34</li>
            <li><strong>E-posta:</strong> info@kafekeyfi.com</li>
            <li><strong>Adres:</strong> Kahve Sokak No:42, Kadıköy / İstanbul</li>
        </ul>
    </div>
`;

const renderBranches = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">Şube Konumları</h1>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Kadıköy Merkez</h3>
                <p>Kahve Sokak No:42, Kadıköy / İstanbul</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Beşiktaş Şubesi</h3>
                <p>Barbaros Bulvarı No:15, Beşiktaş / İstanbul</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Karşıyaka Şubesi</h3>
                <p>Yalı Caddesi No:88, Karşıyaka / İzmir</p>
            </div>
        </div>
    </div>
`;

const renderMenuContent = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">Menü İçerikleri</h1>
        <p class="text-lg leading-relaxed mb-6">Özenle hazırladığımız menümüzde herkesin damak zevkine uygun bir lezzet bulmak mümkün.</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Sıcak İçecekler</h3>
                <ul class="list-disc list-inside opacity-80 space-y-1">
                    <li>Espresso</li>
                    <li>Cappuccino</li>
                    <li>Latte</li>
                    <li>Türk Kahvesi</li>
                    <li>Çay</li>
                </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Soğuk İçecekler</h3>
                <ul class="list-disc list-inside opacity-80 space-y-1">
                    <li>Soğuk Kahve</li>
                    <li>Limonata</li>
                </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm border border-cafe-dark/10">
                <h3 class="text-xl mb-2">Tatlılar & Atıştırmalıklar</h3>
                <ul class="list-disc list-inside opacity-80 space-y-1">
                    <li>Cheesecake</li>
                    <li>Kruvasan</li>
                    <li>Sandviç</li>
                </ul>
            </div>
        </div>
    </div>
`;

const renderPrices = () => `
    <div>
        <h1 class="text-3xl mb-6 border-b-2 border-cafe-dark/20 pb-2">Fiyatlar</h1>
        <div class="bg-white rounded-lg shadow-sm border border-cafe-dark/10 overflow-hidden">
            <ul class="divide-y divide-cafe-dark/10">
                ${menuItems.map(item => `
                    <li class="flex justify-between items-center p-4 hover:bg-cafe-dark/5 transition-colors">
                        <span class="text-lg font-medium">${item.name}</span>
                        <span class="text-lg font-bold">${item.price}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    </div>
`;

const routes = {
    '/': renderHome,
    '/hakkinda': renderAbout,
    '/destek': renderSupport,
    '/iletisim': renderContact,
    '/subeler': renderBranches,
    '/menu-icerikleri': renderMenuContent,
    '/fiyatlar': renderPrices
};

const router = () => {
    const hash = window.location.hash.slice(1) || '/';
    const contentDiv = document.getElementById('content');

    // Find matching route or fallback to home
    const renderFunction = routes[hash] || routes['/'];
    contentDiv.innerHTML = renderFunction();
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleMenu();
            }
        });
    });

    // Handle routing
    window.addEventListener('hashchange', router);
    // Initial route
    router();
});
