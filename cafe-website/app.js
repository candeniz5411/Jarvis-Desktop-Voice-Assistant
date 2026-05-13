document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Toggle Sidebar
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

    // Close sidebar on link click
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // App Container
    const app = document.getElementById('app');

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

    // Page Components
    const pages = {
        home: `
            <div class="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
                <div class="w-32 h-32 bg-coffee-dark text-white rounded-full flex items-center justify-center text-4xl font-heading shadow-lg">
                    CE
                </div>
                <h1 class="text-4xl md:text-5xl font-heading font-bold text-coffee-dark">Cafe Espresso'ya Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-coffee-medium max-w-2xl">En taze kahve çekirdekleri ve enfes tatlılarımızla sizleri bekliyoruz. Sıcak bir ortamda keyifli vakit geçirin.</p>
                <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl">
                    <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover object-center max-h-[500px]">
                </div>
            </div>
        `,
        about: `
            <div class="max-w-3xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">Hakkında</h1>
                <p class="text-lg">Cafe Espresso, 2010 yılından bu yana kahve tutkunlarına en iyi deneyimi sunmak için hizmet vermektedir. Özenle seçilmiş kahve çekirdeklerimiz ve usta baristalarımızla her yudumda kaliteyi hissedeceksiniz.</p>
                <p class="text-lg">Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak, samimi ve huzurlu bir ortam sunmaktır.</p>
            </div>
        `,
        support: `
            <div class="max-w-3xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">Destek</h1>
                <p class="text-lg">Müşteri memnuniyeti bizim için önceliktir. Her türlü soru, görüş ve öneriniz için destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Nasıl sipariş verebilirim?</li>
                        <li>Vegan seçenekleriniz var mı?</li>
                        <li>Toplu sipariş alıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `,
        contact: `
            <div class="max-w-3xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">İletişim</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                        <p class="mb-2"><strong>E-posta:</strong> info@cafeespresso.com</p>
                        <p class="mb-2"><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 23:00</p>
                    </div>
                    <form class="space-y-4">
                        <input type="text" placeholder="Adınız Soyadınız" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                        <input type="email" placeholder="E-posta Adresiniz" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark"></textarea>
                        <button type="button" class="bg-coffee-dark text-white px-6 py-2 rounded hover:bg-coffee-medium transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        branches: `
            <div class="max-w-4xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Kadıköy Şubesi</h3>
                        <p class="text-coffee-medium mb-2">Moda Caddesi No: 45</p>
                        <p class="text-sm">Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-coffee-medium mb-2">Barbaros Bulvarı No: 12</p>
                        <p class="text-sm">Beşiktaş / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Karaköy Şubesi</h3>
                        <p class="text-coffee-medium mb-2">Kemankeş Caddesi No: 78</p>
                        <p class="text-sm">Beyoğlu / İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        'menu-contents': `
            <div class="max-w-3xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">Menü İçerikleri</h1>
                <p class="text-lg mb-6">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-between border-l-4 border-coffee-medium">
                            <span class="font-bold text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        prices: `
            <div class="max-w-3xl mx-auto space-y-6">
                <h1 class="text-3xl font-heading font-bold text-coffee-dark border-b-2 border-coffee-light pb-2">Fiyatlar</h1>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-coffee-dark text-white">
                                <th class="p-4 font-bold">Ürün</th>
                                <th class="p-4 font-bold text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${menuItems.map((item, index) => `
                                <tr class="${index % 2 === 0 ? 'bg-cream' : 'bg-white'} border-b border-coffee-light/20 last:border-0 hover:bg-coffee-light hover:text-white transition-colors">
                                    <td class="p-4 font-medium">${item.name}</td>
                                    <td class="p-4 text-right font-bold">${item.price}₺</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router
    function router() {
        // Get hash, default to 'home'
        let hash = window.location.hash.substring(1) || 'home';

        // Render content
        if (pages[hash]) {
            app.innerHTML = pages[hash];
        } else {
            app.innerHTML = pages['home'];
        }

        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});