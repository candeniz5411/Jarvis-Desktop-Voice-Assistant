// Data Structures
const menuItems = [
    { name: "Espresso", price: 45, category: "Sıcak İçecekler", description: "Zengin, yoğun ve taze çekilmiş kahve." },
    { name: "Cappuccino", price: 55, category: "Sıcak İçecekler", description: "Espresso, sıcak süt ve bol süt köpüğü." },
    { name: "Latte", price: 60, category: "Sıcak İçecekler", description: "Espresso ve bol sıcak süt, ince bir köpük tabakasıyla." },
    { name: "Türk Kahvesi", price: 40, category: "Sıcak İçecekler", description: "Geleneksel yöntemle hazırlanan, köpüklü Türk kahvesi." },
    { name: "Çay", price: 25, category: "Sıcak İçecekler", description: "Taze demlenmiş, ince belli bardakta Türk çayı." },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecekler", description: "Buzlu ve serinletici, özel demleme soğuk kahve." },
    { name: "Limonata", price: 35, category: "Soğuk İçecekler", description: "Taze sıkılmış limon, nane yaprakları ve buz." },
    { name: "Cheesecake", price: 70, category: "Tatlılar", description: "Orman meyveli, özel yapım peynir keki." },
    { name: "Kruvasan", price: 50, category: "Atıştırmalıklar", description: "Tereyağlı, taze ve çıtır çıtır Fransız klasiği." },
    { name: "Sandviç", price: 80, category: "Yiyecekler", description: "Beyaz peynir, domates ve fesleğenli taze sandviç." }
];

const branches = [
    { name: "Kadıköy Merkez Şube", address: "Caferağa Mah. Moda Cad. No: 12, Kadıköy / İstanbul", phone: "0216 123 45 67" },
    { name: "Beşiktaş Şube", address: "Sinanpaşa Mah. Ihlamurdere Cad. No: 34, Beşiktaş / İstanbul", phone: "0212 987 65 43" },
    { name: "Karşıyaka Şube", address: "Bostanlı Mah. Cemal Gürsel Cad. No: 56, Karşıyaka / İzmir", phone: "0232 456 78 90" },
    { name: "Çankaya Şube", address: "Kavaklıdere Mah. Tunalı Hilmi Cad. No: 78, Çankaya / Ankara", phone: "0312 345 67 89" }
];

// Content Render Functions
const renderHome = () => `
    <div class="flex flex-col items-center justify-center text-center animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-6 mt-8">
            Hoş Geldiniz!
        </h2>
        <p class="text-xl md:text-2xl font-body text-brand-accent mb-10 max-w-2xl">
            Kahve Dükkanı'na adım attığınız an, taze kahve kokusu ve sıcak bir gülümsemeyle karşılanırsınız. Günün her saati size özel lezzetlerimizle buradayız.
        </p>
        <div class="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative mb-12">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                 alt="Kahve Dükkanı Görseli"
                 class="w-full h-auto object-cover max-h-[500px]"
                 loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-brown/70 to-transparent flex items-end">
                <div class="p-8 text-left">
                    <h3 class="text-3xl font-heading text-brand-cream font-bold mb-2">Taze Çekilmiş</h3>
                    <p class="text-brand-cream font-body text-lg">Özenle seçilmiş çekirdeklerden, sizin için.</p>
                </div>
            </div>
        </div>
        <button onclick="window.location.hash='#menu'" class="bg-brand-brown text-brand-cream py-3 px-8 rounded-full font-heading text-xl hover:bg-brand-accent transition-colors shadow-lg">
            Menüyü Keşfet
        </button>
    </div>
`;

const renderHakkinda = () => `
    <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl mt-8 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-center border-b-2 border-brand-accent pb-4">Hakkımızda</h2>
        <div class="space-y-6 font-body text-lg leading-relaxed text-gray-700">
            <p>
                <strong>Kahve Dükkanı</strong>, 2010 yılından bu yana kaliteli kahve çekirdeklerini özenle seçip, geleneksel ve modern demleme yöntemlerini harmanlayarak misafirlerine eşsiz bir kahve deneyimi sunmaktadır.
            </p>
            <p>
                Amacımız sadece bir içecek sunmak değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı okurken huzur bulacağınız, ya da çalışırken ilham alabileceğiniz sıcak ve davetkâr bir atmosfer yaratmaktır.
            </p>
            <p>
                Sürdürülebilirlik ilkemiz doğrultusunda, kahvelerimizi adil ticaret kurallarına uygun olarak tedarik ediyor ve çevreye duyarlı ambalajlar kullanıyoruz. Her yudumda doğaya ve emeğe saygımızı hissedeceksiniz.
            </p>
            <div class="mt-8 p-6 bg-brand-cream border-l-4 border-brand-brown rounded-r-lg">
                <p class="italic text-brand-brown font-heading text-xl">"İyi bir gün, iyi bir kahve ile başlar."</p>
            </div>
        </div>
    </div>
`;

const renderDestek = () => `
    <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl mt-8 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6 text-center border-b-2 border-brand-accent pb-4">Destek</h2>

        <div class="space-y-8 mt-8">
            <div class="bg-brand-light p-6 rounded-lg">
                <h3 class="text-2xl font-heading font-bold text-brand-brown mb-3 flex items-center">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Sıkça Sorulan Sorular
                </h3>
                <div class="space-y-4 font-body">
                    <details class="group border-b pb-2 cursor-pointer">
                        <summary class="font-bold text-lg text-brand-brown hover:text-brand-accent">Vegan seçenekleriniz var mı?</summary>
                        <p class="mt-2 text-gray-600 pl-4">Evet, kahvelerimizde badem, yulaf ve soya sütü seçeneklerimiz mevcuttur. Ayrıca bazı tatlılarımız da vegandır.</p>
                    </details>
                    <details class="group border-b pb-2 cursor-pointer">
                        <summary class="font-bold text-lg text-brand-brown hover:text-brand-accent">Wi-Fi hizmetiniz var mı?</summary>
                        <p class="mt-2 text-gray-600 pl-4">Tüm şubelerimizde misafirlerimiz için ücretsiz ve hızlı Wi-Fi erişimi bulunmaktadır.</p>
                    </details>
                    <details class="group border-b pb-2 cursor-pointer">
                        <summary class="font-bold text-lg text-brand-brown hover:text-brand-accent">Rezervasyon yapıyor musunuz?</summary>
                        <p class="mt-2 text-gray-600 pl-4">Önceden rezervasyon almıyoruz, şubelerimize geldiğinizde size en uygun yeri ayarlamaktan mutluluk duyarız.</p>
                    </details>
                </div>
            </div>

            <div class="text-center font-body text-gray-700">
                <p>Başka bir sorunuz mu var? Lütfen iletişim sayfamızdan bize ulaşın.</p>
                <button onclick="window.location.hash='#iletisim'" class="mt-4 px-6 py-2 border-2 border-brand-brown text-brand-brown font-bold rounded-full hover:bg-brand-brown hover:text-white transition-colors">Bize Ulaşın</button>
            </div>
        </div>
    </div>
`;

const renderIletisim = () => `
    <div class="max-w-4xl mx-auto mt-8 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-brand-brown">İletişim</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-xl">
                <h3 class="text-2xl font-heading font-bold text-brand-brown mb-6 border-b pb-2">Bize Ulaşın</h3>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız başarıyla gönderildi. Teşekkür ederiz!'); this.reset();">
                    <div>
                        <label for="name" class="block font-body text-sm font-bold text-gray-700 mb-1">Adınız Soyadınız</label>
                        <input type="text" id="name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
                    </div>
                    <div>
                        <label for="email" class="block font-body text-sm font-bold text-gray-700 mb-1">E-posta Adresiniz</label>
                        <input type="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
                    </div>
                    <div>
                        <label for="message" class="block font-body text-sm font-bold text-gray-700 mb-1">Mesajınız</label>
                        <textarea id="message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brand-brown text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors shadow-md">
                        Gönder
                    </button>
                </form>
            </div>

            <div class="space-y-6">
                <div class="bg-brand-brown text-brand-cream p-8 rounded-2xl shadow-xl flex flex-col justify-center h-full">
                    <h3 class="text-2xl font-heading font-bold mb-6 border-b border-brand-accent pb-2">İletişim Bilgileri</h3>
                    <div class="space-y-4 font-body text-lg">
                        <p class="flex items-center">
                            <svg class="w-6 h-6 mr-3 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            hello@kahvedukkani.com
                        </p>
                        <p class="flex items-center">
                            <svg class="w-6 h-6 mr-3 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            +90 (850) 123 45 67
                        </p>
                        <div class="mt-8 pt-6 border-t border-brand-accent">
                            <p class="font-bold mb-2">Çalışma Saatleri:</p>
                            <p>Pzt - Cuma: 07:00 - 22:00</p>
                            <p>Cmt - Pzr: 08:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const renderSubeler = () => {
    let branchesHTML = branches.map(branch => `
        <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-brown hover:-translate-y-1 transition-transform duration-300">
            <h3 class="text-xl font-heading font-bold text-brand-brown mb-2">${branch.name}</h3>
            <p class="text-gray-600 font-body mb-3 flex items-start">
                <svg class="w-5 h-5 mr-2 mt-1 text-brand-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                ${branch.address}
            </p>
            <p class="text-gray-800 font-bold font-body flex items-center">
                <svg class="w-5 h-5 mr-2 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                ${branch.phone}
            </p>
        </div>
    `).join('');

    return `
        <div class="max-w-5xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-brand-brown border-b-2 border-brand-accent pb-4 inline-block mx-auto">Şube Konumlarımız</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                ${branchesHTML}
            </div>

            <!-- Map Placeholder -->
            <div class="mt-12 bg-gray-200 w-full h-64 md:h-96 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl relative overflow-hidden">
                <div class="absolute inset-0 bg-brand-brown opacity-10"></div>
                <div class="text-center relative z-10">
                    <svg class="w-16 h-16 mx-auto text-brand-brown mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                    <p class="font-heading text-xl text-brand-brown font-bold">Harita Görünümü</p>
                    <p class="font-body text-sm text-gray-600">İnteraktif harita entegrasyonu</p>
                </div>
            </div>
        </div>
    `;
};

const renderMenu = () => {
    // Group items by category
    const categories = [...new Set(menuItems.map(item => item.category))];

    let menuHTML = '';
    categories.forEach(category => {
        const itemsInCategory = menuItems.filter(item => item.category === category);

        let itemsHTML = itemsInCategory.map(item => `
            <div class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between h-full">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="text-xl font-heading font-bold text-brand-brown">${item.name}</h4>
                        <span class="text-lg font-bold text-brand-accent font-body bg-brand-cream px-2 py-1 rounded shadow-sm">${item.price}₺</span>
                    </div>
                    <p class="text-sm text-gray-500 font-body mb-4 leading-relaxed">${item.description}</p>
                </div>
                <div class="mt-auto flex justify-end">
                    <button onclick="window.location.hash='#fiyatlar'" class="text-xs text-brand-brown hover:text-brand-accent transition-colors underline font-body">
                        Fiyat Listesini Gör
                    </button>
                </div>
            </div>
        `).join('');

        menuHTML += `
            <div class="mb-10">
                <h3 class="text-2xl font-heading font-bold text-brand-accent mb-6 border-b pb-2">${category}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${itemsHTML}
                </div>
            </div>
        `;
    });

    return `
        <div class="max-w-6xl mx-auto mt-8 animate-fade-in">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-brown mb-4">Menü İçerikleri</h2>
                <p class="font-body text-gray-600 max-w-2xl mx-auto">En kaliteli malzemelerle, ustalıkla hazırlanan lezzetlerimiz. Her damak zevkine uygun bir seçenek mutlaka var.</p>
            </div>
            ${menuHTML}
        </div>
    `;
};

const renderFiyatlar = () => {
    let pricesHTML = menuItems.map(item => `
        <div class="flex justify-between items-center py-4 border-b border-gray-100 hover:bg-brand-cream/50 px-4 rounded-lg transition-colors">
            <span class="text-lg font-heading font-bold text-brand-brown">${item.name}</span>
            <span class="text-xl font-bold font-body text-brand-accent">${item.price}₺</span>
        </div>
    `).join('');

    return `
        <div class="max-w-3xl mx-auto mt-8 animate-fade-in mb-12">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-brown mb-4">Fiyat Listesi</h2>
                <p class="font-body text-gray-600">Güncel ürün fiyatlarımız aşağıda listelenmiştir. Tüm fiyatlarımıza KDV dâhildir.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-brand-brown">
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-center pb-4 border-b-2 border-brand-brown mb-4 px-4">
                        <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">Ürün</span>
                        <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">Fiyat</span>
                    </div>
                    <div class="space-y-1">
                        ${pricesHTML}
                    </div>
                </div>
                <div class="bg-brand-light p-4 text-center text-sm font-body text-gray-500">
                    Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}
                </div>
            </div>

            <div class="mt-8 text-center">
                <button onclick="window.location.hash='#menu'" class="text-brand-brown font-bold underline hover:text-brand-accent flex items-center justify-center mx-auto">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Menü İçeriklerine Dön
                </button>
            </div>
        </div>
    `;
};

// Routing System
const router = () => {
    const contentDiv = document.getElementById('content');
    const hash = window.location.hash;

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Simple hash-based router
    switch (hash) {
        case '#hakkinda':
            contentDiv.innerHTML = renderHakkinda();
            document.title = "Hakkında | Kahve Dükkanı";
            break;
        case '#destek':
            contentDiv.innerHTML = renderDestek();
            document.title = "Destek | Kahve Dükkanı";
            break;
        case '#iletisim':
            contentDiv.innerHTML = renderIletisim();
            document.title = "İletişim | Kahve Dükkanı";
            break;
        case '#subeler':
            contentDiv.innerHTML = renderSubeler();
            document.title = "Şube Konumları | Kahve Dükkanı";
            break;
        case '#menu':
            contentDiv.innerHTML = renderMenu();
            document.title = "Menü İçerikleri | Kahve Dükkanı";
            break;
        case '#fiyatlar':
            contentDiv.innerHTML = renderFiyatlar();
            document.title = "Fiyatlar | Kahve Dükkanı";
            break;
        default:
            contentDiv.innerHTML = renderHome();
            document.title = "Kahve Dükkanı";
            break;
    }
};

// Initialize Router on load and listen for hash changes
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// DOM Manipulation Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Sidebar
    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeMenuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on navigation click
    navLinks.forEach(link => {
        link.addEventListener('click', toggleSidebar);
    });
});
