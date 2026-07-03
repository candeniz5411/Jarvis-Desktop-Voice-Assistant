document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');

    // Toggle Sidebar Function
    const toggleSidebar = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        }
    };

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking on a link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Menu Data
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

    // Views
    const views = {
        '/': `
            <div class="text-center animate-fade-in">
                <h1 class="text-4xl font-bold mb-4 font-heading text-brown-900">Hoş Geldiniz</h1>
                <p class="text-lg mb-8">En iyi kahve deneyimi için doğru yerdesiniz.</p>
                <div class="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl mb-8">
                    <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-96">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">Hakkında</h2>
                <p class="mb-4 text-gray-700 leading-relaxed">Biz, kahve tutkusunu kalite ve huzur ile birleştiren modern bir kafeyiz. En iyi kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz.</p>
                <p class="text-gray-700 leading-relaxed">Amacımız, misafirlerimize sıcak, samimi ve minimalist bir ortamda unutulmaz lezzetler sunmaktır.</p>
            </div>
        `,
        '/destek': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">Destek</h2>
                <p class="mb-6 text-gray-700">Her türlü sorunuz veya öneriniz için buradayız. Bize nasıl yardımcı olabileceğimizi söyleyin.</p>
                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız alındı!');">
                    <div>
                        <label class="block text-sm font-bold mb-1 text-brown-800">Adınız</label>
                        <input type="text" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-brown-800 focus:border-transparent outline-none transition" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1 text-brown-800">Mesajınız</label>
                        <textarea class="w-full border border-gray-300 p-2 rounded h-32 focus:ring-2 focus:ring-brown-800 focus:border-transparent outline-none transition" required></textarea>
                    </div>
                    <button type="submit" class="bg-brown-900 text-cream px-6 py-2 rounded hover:bg-brown-800 transition shadow-md font-bold">Gönder</button>
                </form>
            </div>
        `,
        '/iletisim': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">İletişim</h2>
                <ul class="space-y-4 text-gray-700">
                    <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <strong>Telefon:</strong> 0 (212) 555 12 34</li>
                    <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <strong>E-posta:</strong> info@kafe.com</li>
                    <li class="flex items-start"><svg class="w-5 h-5 mr-3 text-brown-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div><strong>Adres:</strong><br>Kahve Sokak No: 1<br>Kadıköy, İstanbul</div></li>
                </ul>
            </div>
        `,
        '/subeler': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">Şube Konumları</h2>
                <div class="space-y-6">
                    <div class="border-l-4 border-brown-900 pl-4">
                        <h3 class="font-bold text-xl mb-1">Kadıköy Merkez Şube</h3>
                        <p class="text-gray-600">Moda Caddesi No:45, Kadıköy</p>
                    </div>
                    <div class="border-l-4 border-brown-900 pl-4">
                        <h3 class="font-bold text-xl mb-1">Beşiktaş Şube</h3>
                        <p class="text-gray-600">Barbaros Bulvarı No:12, Beşiktaş</p>
                    </div>
                    <div class="border-l-4 border-brown-900 pl-4">
                        <h3 class="font-bold text-xl mb-1">Nişantaşı Şube</h3>
                        <p class="text-gray-600">Teşvikiye Caddesi No:88, Şişli</p>
                    </div>
                </div>
            </div>
        `,
        '/menu-icerikleri': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="p-4 bg-cream rounded shadow-sm border border-brown-100 flex items-center">
                            <div class="w-2 h-2 rounded-full bg-brown-900 mr-3"></div>
                            <span class="font-medium">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="animate-fade-in max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brown-100 pb-2">Fiyatlar</h2>
                <ul class="divide-y divide-brown-100">
                    ${menuItems.map(item => `
                        <li class="py-4 flex justify-between items-center hover:bg-gray-50 px-2 transition-colors rounded">
                            <span class="font-medium text-lg">${item.name}</span>
                            <span class="font-bold text-brown-900 text-lg">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `
    };

    // Router
    const router = () => {
        let hash = window.location.hash.slice(1) || '/';
        // Remove trailing slash if present (except for root)
        if (hash !== '/' && hash.endsWith('/')) {
            hash = hash.slice(0, -1);
        }

        const content = views[hash];
        if (content) {
            app.innerHTML = content;
        } else {
            app.innerHTML = `
                <div class="text-center py-10">
                    <h2 class="text-2xl font-bold mb-4 font-heading">Sayfa Bulunamadı</h2>
                    <p>Aradığınız sayfa mevcut değil.</p>
                    <a href="#/" class="inline-block mt-4 text-brown-900 underline font-bold">Ana Sayfaya Dön</a>
                </div>
            `;
        }
        window.scrollTo(0, 0);
    };

    // Initialize Router
    window.addEventListener('hashchange', router);
    router();
});