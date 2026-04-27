document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- Sidebar Toggle Logic ---
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

    // Close sidebar on link click (mobile friendly)
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Data ---
    const menuData = [
        { name: "Espresso", price: "45₺", category: "coffee" },
        { name: "Cappuccino", price: "55₺", category: "coffee" },
        { name: "Latte", price: "60₺", category: "coffee" },
        { name: "Türk Kahvesi", price: "40₺", category: "coffee" },
        { name: "Çay", price: "25₺", category: "tea" },
        { name: "Cheesecake", price: "70₺", category: "dessert" },
        { name: "Kruvasan", price: "50₺", category: "pastry" },
        { name: "Sandviç", price: "80₺", category: "food" },
        { name: "Soğuk Kahve", price: "65₺", category: "coffee" },
        { name: "Limonata", price: "35₺", category: "cold-drink" }
    ];

    // --- Content Views ---
    const views = {
        home: `
            <div class="relative h-64 md:h-96 w-full mb-8">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
                    <h1 class="text-4xl md:text-6xl text-cafe-cream font-heading font-bold mb-4 text-center">Hoş Geldiniz</h1>
                    <p class="text-cafe-cream text-lg md:text-xl text-center max-w-2xl font-body">Günün yorgunluğunu en iyi kahvelerimizle atın.</p>
                </div>
            </div>
            <div class="container mx-auto px-4 py-8 text-center">
                <h2 class="text-3xl font-heading mb-4">Öne Çıkan Lezzetler</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light">
                        <h3 class="text-xl font-heading font-bold mb-2">Espresso</h3>
                        <p class="text-gray-600 mb-4">Yoğun ve zengin aroma.</p>
                        <span class="text-cafe-brown font-bold text-lg">45₺</span>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light">
                        <h3 class="text-xl font-heading font-bold mb-2">Cheesecake</h3>
                        <p class="text-gray-600 mb-4">Taptaze ve hafif.</p>
                        <span class="text-cafe-brown font-bold text-lg">70₺</span>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light">
                        <h3 class="text-xl font-heading font-bold mb-2">Latte</h3>
                        <p class="text-gray-600 mb-4">Sütlü ve yumuşak içim.</p>
                        <span class="text-cafe-brown font-bold text-lg">60₺</span>
                    </div>
                </div>
            </div>
        `,
        about: `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">Hakkında</h1>
                <p class="text-lg mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçip sizlerle buluşturuyoruz. Misyonumuz, sadece bir kahve içmek değil, aynı zamanda dostlarla keyifli vakit geçirilecek sıcak bir ortam sunmaktır.</p>
                <p class="text-lg leading-relaxed">Modern ve minimalist tasarımımız, sakin atmosferimiz ile şehrin gürültüsünden uzaklaşmak isteyenler için ideal bir kaçış noktasıyız.</p>
            </div>
        `,
        support: `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">Destek</h1>
                <p class="text-lg mb-6 text-center">Sıkça sorulan sorulara göz atabilir veya yardım almak için bize ulaşabilirsiniz.</p>
                <div class="space-y-4">
                    <div class="bg-white p-4 rounded shadow-sm border border-cafe-light">
                        <h3 class="font-bold text-lg mb-2">Çalışma Saatleriniz Nelerdir?</h3>
                        <p>Hafta içi 08:00 - 22:00, hafta sonu 09:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow-sm border border-cafe-light">
                        <h3 class="font-bold text-lg mb-2">Vegan seçenekleriniz var mı?</h3>
                        <p>Evet, bitkisel süt seçeneklerimiz ve vegan tatlılarımız bulunmaktadır.</p>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">İletişim</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 font-heading">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:12, Merkez/İstanbul</p>
                        <p class="mb-2"><strong>Telefon:</strong> 0212 555 12 34</p>
                        <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    </div>
                    <form class="flex flex-col gap-4">
                        <input type="text" placeholder="Adınız" class="p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown">
                        <input type="email" placeholder="E-posta Adresiniz" class="p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown">
                        <textarea placeholder="Mesajınız" rows="4" class="p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"></textarea>
                        <button type="submit" class="bg-cafe-brown text-cafe-cream py-2 px-4 rounded hover:bg-opacity-90 transition-opacity font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        locations: `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light text-center">
                        <h3 class="text-2xl font-heading font-bold mb-2">Merkez Şube</h3>
                        <p class="mb-4">Kahve Sokak No:12, Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light text-center">
                        <h3 class="text-2xl font-heading font-bold mb-2">Sahil Şube</h3>
                        <p class="mb-4">Deniz Yolu Caddesi No:45, Beşiktaş / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light text-center">
                        <h3 class="text-2xl font-heading font-bold mb-2">Kampüs Şube</h3>
                        <p class="mb-4">Üniversite Mah. Öğrenci Sk. No:3, Ankara</p>
                    </div>
                </div>
            </div>
        `,
        'menu-items': `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">Menü İçerikleri</h1>
                <p class="text-center mb-8 text-lg">Özenle hazırladığımız yiyecek ve içeceklerimiz.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    ${menuData.map(item => `
                        <div class="flex justify-between items-center border-b border-gray-300 py-3">
                            <span class="text-xl font-heading">${item.name}</span>
                            <span class="text-gray-500 italic text-sm">${
                                item.category === 'coffee' ? 'Sıcak İçecek' :
                                item.category === 'tea' ? 'Sıcak İçecek' :
                                item.category === 'cold-drink' ? 'Soğuk İçecek' : 'Yiyecek / Tatlı'
                            }</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        pricing: `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h1 class="text-4xl font-heading font-bold mb-6 text-center border-b-2 border-cafe-light pb-4">Fiyatlar</h1>
                <div class="bg-white p-6 rounded-lg shadow-md border border-cafe-light">
                    <ul class="divide-y divide-gray-200">
                        ${menuData.map(item => `
                            <li class="py-4 flex justify-between items-center">
                                <span class="text-lg font-heading">${item.name}</span>
                                <span class="text-xl font-bold text-cafe-brown">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // --- Routing ---
    function handleRoute() {
        let hash = window.location.hash.substring(1);
        if (!hash || !views[hash]) {
            hash = 'home';
        }

        appContent.innerHTML = views[hash];
        window.scrollTo(0, 0);

        // Update active link styling
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('bg-cafe-light', 'font-bold');
            } else {
                link.classList.remove('bg-cafe-light', 'font-bold');
            }
        });
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial load
    handleRoute();
});