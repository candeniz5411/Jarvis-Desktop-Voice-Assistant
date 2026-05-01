const menuData = [
    { name: 'Espresso', price: '45₺', category: 'Kahveler' },
    { name: 'Cappuccino', price: '55₺', category: 'Kahveler' },
    { name: 'Latte', price: '60₺', category: 'Kahveler' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Kahveler' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlılar' },
    { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalıklar' },
    { name: 'Sandviç', price: '80₺', category: 'Atıştırmalıklar' },
];

const pages = {
    home: `
        <div class="text-center mb-12 animate-fade-in">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-6 text-brand-dark">Kafe Mocha'ya Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-brand-accent mb-10 max-w-2xl mx-auto">Günün stresini lezzetli kahvelerimiz ve sıcacık ortamımızla atın.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-brand-dark/10">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80" alt="Kafe Atmosferi" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
        </div>
    `,
    hakkinda: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-brand-accent/20 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-6 text-brand-dark border-b pb-4">Hakkımızda</h2>
            <p class="text-lg text-brand-dark/80 leading-relaxed mb-6">Kafe Mocha, 2010 yılından bu yana kahve tutkunlarına en kaliteli çekirdeklerden özenle hazırlanan kahveleri sunmaktadır. Amacımız, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde hissedebilecekleri sıcak bir buluşma noktası olmaktır.</p>
            <p class="text-lg text-brand-dark/80 leading-relaxed">Yerel üreticileri destekleyerek temin ettiğimiz taze malzemelerle hazırladığımız tatlılarımız ve atıştırmalıklarımızla kahve keyfinizi taçlandırıyoruz.</p>
        </div>
    `,
    destek: `
        <div class="max-w-3xl mx-auto animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-8 text-brand-dark text-center">Destek Merkezi</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow border-l-4 border-brand-accent hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-heading font-bold mb-2 text-brand-dark">Sıkça Sorulan Sorular</h3>
                    <p class="text-brand-dark/70">Sipariş süreci, ödeme yöntemleri ve teslimat hakkında merak ettiklerinizi burada bulabilirsiniz.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow border-l-4 border-brand-accent hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-heading font-bold mb-2 text-brand-dark">Geri Bildirim</h3>
                    <p class="text-brand-dark/70">Hizmet kalitemizi artırmak için görüş ve önerileriniz bizim için çok değerlidir.</p>
                </div>
            </div>
        </div>
    `,
    iletisim: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-brand-accent/20 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-6 text-brand-dark border-b pb-4">İletişim</h2>
            <div class="space-y-6">
                <div class="flex items-start">
                    <svg class="w-6 h-6 mt-1 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <div class="ml-4">
                        <h4 class="font-bold text-brand-dark">Adres</h4>
                        <p class="text-brand-dark/70">Kahveciler Sok. No:42, Kadıköy / İstanbul</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <svg class="w-6 h-6 mt-1 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div class="ml-4">
                        <h4 class="font-bold text-brand-dark">Telefon</h4>
                        <p class="text-brand-dark/70">+90 555 123 45 67</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <svg class="w-6 h-6 mt-1 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div class="ml-4">
                        <h4 class="font-bold text-brand-dark">E-posta</h4>
                        <p class="text-brand-dark/70">iletisim@kafemocha.com</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="max-w-4xl mx-auto animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-8 text-brand-dark text-center">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="h-48 bg-brand-accent/20 flex items-center justify-center">
                        <span class="text-brand-dark/50 font-heading">Kadıköy Şubesi</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-heading font-bold text-brand-dark mb-2">Moda / Merkez</h3>
                        <p class="text-sm text-brand-dark/70 mb-4">Açılış: 08:00 - Kapanış: 23:00</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="h-48 bg-brand-accent/20 flex items-center justify-center">
                        <span class="text-brand-dark/50 font-heading">Beşiktaş Şubesi</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-heading font-bold text-brand-dark mb-2">Çarşı İçi</h3>
                        <p class="text-sm text-brand-dark/70 mb-4">Açılış: 07:30 - Kapanış: 22:30</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="h-48 bg-brand-accent/20 flex items-center justify-center">
                        <span class="text-brand-dark/50 font-heading">Karaköy Şubesi</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-heading font-bold text-brand-dark mb-2">Galata Port Yakını</h3>
                        <p class="text-sm text-brand-dark/70 mb-4">Açılış: 09:00 - Kapanış: 00:00</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-4xl mx-auto animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-8 text-brand-dark text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${['Kahveler', 'Soğuk İçecekler', 'Sıcak İçecekler', 'Tatlılar', 'Atıştırmalıklar'].map(category => `
                    <div class="bg-white shadow-md rounded-lg p-6 border border-brand-accent/20">
                        <h3 class="text-2xl font-heading font-bold mb-4 text-brand-accent border-b pb-2">${category}</h3>
                        <ul class="space-y-3">
                            ${menuData.filter(item => item.category === category).map(item => `
                                <li class="flex justify-between items-center text-brand-dark/80">
                                    <span class="font-semibold">${item.name}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="max-w-3xl mx-auto animate-fade-in">
            <h2 class="text-3xl font-heading font-bold mb-8 text-brand-dark text-center">Fiyat Listesi</h2>
            <div class="bg-white shadow-md rounded-lg overflow-hidden border border-brand-accent/20">
                <ul class="divide-y divide-gray-200">
                    ${menuData.map(item => `
                        <li class="flex justify-between items-center p-4 hover:bg-brand-light/50 transition-colors">
                            <div class="flex items-center space-x-4">
                                <div class="w-2 h-2 bg-brand-accent rounded-full"></div>
                                <span class="font-body font-semibold text-brand-dark text-lg">${item.name}</span>
                            </div>
                            <span class="font-heading font-bold text-xl text-brand-dark bg-brand-light px-3 py-1 rounded-full border border-brand-accent/30">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sidebar Toggle Logic
    const toggleSidebar = () => {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Auto-close sidebar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Routing Logic
    const handleRoute = () => {
        const hash = window.location.hash.substring(1) || 'home';
        if (pages[hash]) {
            appContent.innerHTML = pages[hash];
        } else {
            appContent.innerHTML = pages.home; // Fallback to home
        }
    };

    // Initial load
    handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);
});
