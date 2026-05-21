document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app');
    const sidebarLinks = sidebar.querySelectorAll('a');

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

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Data ---
    const menuItems = [
        { name: 'Espresso', price: '45₺', icon: '☕' },
        { name: 'Cappuccino', price: '55₺', icon: '☕' },
        { name: 'Latte', price: '60₺', icon: '☕' },
        { name: 'Türk Kahvesi', price: '40₺', icon: '☕' },
        { name: 'Çay', price: '25₺', icon: '🍵' },
        { name: 'Cheesecake', price: '70₺', icon: '🍰' },
        { name: 'Kruvasan', price: '50₺', icon: '🥐' },
        { name: 'Sandviç', price: '80₺', icon: '🥪' },
        { name: 'Soğuk Kahve', price: '65₺', icon: '🧊☕' },
        { name: 'Limonata', price: '35₺', icon: '🍋' }
    ];

    // --- Views ---
    const views = {
        home: `
            <div class="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
                <div class="w-32 h-32 rounded-full bg-brown-700 flex items-center justify-center text-cream shadow-lg">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
                </div>
                <h1 class="text-4xl md:text-5xl font-serif font-bold text-brown-900">Kafe Portalı'na Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-brown-700 max-w-2xl">Sıcak bir kahve molası, taze lezzetler ve samimi bir ortam sizi bekliyor. Bizimle küçük bir mola verin.</p>
                <div class="w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl mt-8">
                    <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        `,
        about: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">Hakkımızda</h2>
                <p class="text-lg leading-relaxed">2010 yılından beri, şehrin kalbinde, kahve tutkunlarına en taze çekirdeklerle hazırladığımız içeceklerimizi sunuyoruz. Amacımız sadece kahve satmak değil, misafirlerimize kendilerini evlerinde hissedebilecekleri sıcak bir ortam yaratmaktır.</p>
                <p class="text-lg leading-relaxed">Yerel üreticileri destekliyor, sürdürülebilir tarım uygulamalarıyla yetiştirilen kahve çekirdeklerini tercih ediyoruz.</p>
            </div>
        `,
        support: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">Destek</h2>
                <p class="text-lg">Bir sorununuz mu var? Size yardımcı olmaktan mutluluk duyarız.</p>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li>Sipariş takibi</li>
                    <li>İade ve değişim koşulları</li>
                    <li>Sıkça Sorulan Sorular (SSS)</li>
                </ul>
                <div class="mt-6 p-4 bg-brown-100 rounded-lg text-brown-900">
                    <p class="font-semibold">Müşteri Hizmetleri:</p>
                    <p>0850 123 45 67 (09:00 - 18:00)</p>
                </div>
            </div>
        `,
        contact: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg mb-4">Bize ulaşmak için aşağıdaki bilgileri kullanabilir veya formu doldurabilirsiniz.</p>
                        <div class="space-y-2">
                            <p><strong>Adres:</strong> Kahve Sokak No:12, Lezzet Mahallesi, İstanbul</p>
                            <p><strong>Telefon:</strong> 0212 555 55 55</p>
                            <p><strong>E-posta:</strong> info@kafeportali.com</p>
                        </div>
                    </div>
                    <form class="space-y-4 bg-white p-6 rounded-lg shadow-md" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block text-sm font-medium text-brown-700">Adınız</label>
                            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500 p-2 border" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-brown-700">Mesajınız</label>
                            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500 p-2 border" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brown-700 text-cream py-2 px-4 rounded-md hover:bg-brown-900 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        locations: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Kadıköy Merkez Şube</h3>
                        <p class="text-brown-700">Moda Caddesi, No:45 Kadıköy/İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Her gün: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş Şube</h3>
                        <p class="text-brown-700">Barbaros Bulvarı, No:12 Beşiktaş/İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Her gün: 07:30 - 22:30</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Alsancak Şube</h3>
                        <p class="text-brown-700">Kıbrıs Şehitleri Caddesi, No:8 İzmir</p>
                        <p class="text-sm text-gray-500 mt-2">Her gün: 08:00 - 24:00</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">Menü İçerikleri</h2>
                <p class="text-lg mb-6">Özenle seçilmiş kahve çekirdekleri ve günlük hazırlanan atıştırmalıklarımızla tanışın.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-brown-100 flex flex-col items-center text-center">
                            <span class="text-4xl mb-3">${item.icon}</span>
                            <h3 class="text-xl font-bold text-brown-900">${item.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        prices: `
            <div class="space-y-6 animate-fade-in">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-300 pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-xl shadow-md overflow-hidden border border-brown-100">
                    <ul class="divide-y divide-brown-100">
                        ${menuItems.map(item => `
                            <li class="px-6 py-4 flex justify-between items-center hover:bg-brown-50 transition-colors">
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">${item.icon}</span>
                                    <span class="text-lg font-medium text-brown-900">${item.name}</span>
                                </div>
                                <span class="text-lg font-bold text-brown-700">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // --- Routing ---
    function renderView() {
        // Add minimal CSS for animations if not present
        if (!document.getElementById('custom-styles')) {
            const style = document.createElement('style');
            style.id = 'custom-styles';
            style.innerHTML = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `;
            document.head.appendChild(style);
        }

        let hash = window.location.hash.substring(1);
        if (!hash || !views[hash]) {
            hash = 'home';
        }

        appContent.innerHTML = views[hash];
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', renderView);
    renderView(); // Initial render
});