document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
    const menuItems = [
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

    // Sidebar & Navigation Elements
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const appContainer = document.getElementById('app');

    // Sidebar Toggle Logic
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when open
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Content Generation Templates
    const pages = {
        home: `
            <div class="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in py-10">
                <div class="bg-brown-900 rounded-full p-6 text-cream-100 shadow-xl mb-4">
                     <svg class="w-20 h-20 sm:w-24 sm:h-24 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
                    </svg>
                </div>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-brown-900">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="font-sans text-lg text-brown-700 max-w-2xl leading-relaxed">Günün her saatinde taze kahvemiz, enfes tatlılarımız ve sıcacık ortamımızla sizleri ağırlamaktan mutluluk duyuyoruz.</p>
                <div class="w-full max-w-3xl mt-8 rounded-xl overflow-hidden shadow-2xl border-4 border-brown-900/10">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı Görseli" class="w-full h-64 sm:h-96 object-cover hover:scale-105 transition-transform duration-700">
                </div>
            </div>
        `,
        hakkinda: `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">Hakkımızda</h2>
                <div class="space-y-4 text-brown-800 leading-relaxed text-lg">
                    <p>Kahve Dükkanı, kahve tutkusunu kalite ve samimiyetle harmanlayarak misafirlerine unutulmaz bir deneyim sunmak amacıyla kurulmuştur.</p>
                    <p>Özenle seçilmiş çekirdeklerimiz, alanında uzman baristalarımız tarafından ustalıkla demlenir. Amacımız sadece kahve satmak değil, kendinizi evinizde hissedeceğiniz bir atmosfer yaratmaktır.</p>
                </div>
            </div>
        `,
        destek: `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">Destek</h2>
                <div class="space-y-6">
                    <p class="text-lg text-brown-800">Sıkça sorulan sorulara göz atabilir veya bize ulaşarak yardım alabilirsiniz.</p>
                    <div class="space-y-4">
                        <div class="bg-cream-100 p-4 rounded-lg border border-brown-200">
                            <h3 class="font-bold text-brown-900 mb-2">Çalışma saatleriniz nelerdir?</h3>
                            <p class="text-brown-700">Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                        </div>
                        <div class="bg-cream-100 p-4 rounded-lg border border-brown-200">
                            <h3 class="font-bold text-brown-900 mb-2">Vegan seçenekleriniz var mı?</h3>
                            <p class="text-brown-700">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan tatlılarımız mevcuttur.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        iletisim: `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">İletişim</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="space-y-4 text-brown-800">
                        <p class="flex items-center"><svg class="w-6 h-6 mr-3 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Kahve Caddesi No:1, Lezzet Mahallesi</p>
                        <p class="flex items-center"><svg class="w-6 h-6 mr-3 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 0(555) 123 45 67</p>
                        <p class="flex items-center"><svg class="w-6 h-6 mr-3 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> hello@kahvedukkani.com</p>
                    </div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi. Teşekkürler!');">
                        <input type="text" placeholder="Adınız Soyadınız" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream-50" required>
                        <input type="email" placeholder="E-posta Adresiniz" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream-50" required>
                        <textarea rows="4" placeholder="Mesajınız" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream-50" required></textarea>
                        <button type="submit" class="w-full bg-brown-800 text-white font-bold py-3 rounded hover:bg-brown-900 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        'sube-konumlari': `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">Şube Konumları</h2>
                <div class="grid sm:grid-cols-2 gap-6">
                    <div class="bg-cream-100 p-6 rounded-xl border border-brown-200 hover:shadow-md transition-shadow">
                        <h3 class="font-serif text-xl font-bold text-brown-900 mb-2">Merkez Şube</h3>
                        <p class="text-brown-700 mb-2">Kahve Caddesi No:1, Lezzet Mahallesi</p>
                        <p class="text-sm text-brown-500">Hafta içi: 08:00 - 23:00<br>Hafta sonu: 09:00 - 00:00</p>
                    </div>
                    <div class="bg-cream-100 p-6 rounded-xl border border-brown-200 hover:shadow-md transition-shadow">
                        <h3 class="font-serif text-xl font-bold text-brown-900 mb-2">Moda Şubesi</h3>
                        <p class="text-brown-700 mb-2">Sahil Yolu Sokak No:45, Kadıköy</p>
                        <p class="text-sm text-brown-500">Hafta içi: 08:30 - 22:30<br>Hafta sonu: 09:00 - 23:30</p>
                    </div>
                    <div class="bg-cream-100 p-6 rounded-xl border border-brown-200 hover:shadow-md transition-shadow">
                        <h3 class="font-serif text-xl font-bold text-brown-900 mb-2">Nişantaşı Şubesi</h3>
                        <p class="text-brown-700 mb-2">Valikonağı Caddesi No:112, Şişli</p>
                        <p class="text-sm text-brown-500">Hafta içi: 07:30 - 22:00<br>Hafta sonu: 08:30 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">Menü İçerikleri</h2>
                <p class="text-brown-700 mb-8 text-lg">Özenle hazırladığımız yiyecek ve içeceklerimiz.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-brown-100 hover:bg-cream-100 transition-colors">
                            <span class="font-bold text-brown-800 text-lg">${item.name}</span>
                            <span class="text-brown-600"><svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>Taze Hazırlanır</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brown-200">
                <h2 class="heading text-3xl mb-6 pb-2 border-b-2 border-brown-500">Fiyat Listesi</h2>
                <div class="max-w-2xl mx-auto bg-cream-50 rounded-xl overflow-hidden border border-brown-200">
                    <ul class="divide-y divide-brown-200">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center p-4 hover:bg-cream-100 transition-colors">
                                <span class="font-serif font-bold text-lg text-brown-900">${item.name}</span>
                                <span class="font-bold text-brown-700 bg-cream-200 px-3 py-1 rounded-full border border-brown-300">${item.price} ₺</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // Router Logic
    function router() {
        // Get the hash from the URL, default to 'home' if empty
        let hash = window.location.hash.slice(1);
        if (!hash || !pages[hash]) {
            hash = 'home';
            window.location.hash = hash;
        }

        // Render the content
        appContainer.innerHTML = pages[hash];

        // Update active state in sidebar
        navLinks.forEach(link => {
            const linkHash = link.getAttribute('href').slice(1);
            if (linkHash === hash) {
                link.classList.add('bg-brown-700', 'text-white', 'font-bold');
            } else {
                link.classList.remove('bg-brown-700', 'text-white', 'font-bold');
            }
        });

        // Ensure scroll to top on navigation
        window.scrollTo(0,0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});