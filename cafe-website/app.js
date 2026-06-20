document.addEventListener('DOMContentLoaded', () => {
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

    // Sidebar Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Sidebar Logic
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Routing Logic
    const app = document.getElementById('app');

    const routes = {
        '/': `
            <div class="text-center mt-8">
                <h1 class="text-4xl font-heading font-bold mb-4">Kafe Keyfi'ne Hoş Geldiniz</h1>
                <p class="text-lg mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla size özel bir deneyim sunuyoruz.</p>
                <img src="./Images/coffee.jpg" alt="Kahve" class="rounded-lg shadow-xl mb-8 object-cover w-full h-64 md:h-96">
            </div>
        `,
        '/hakkinda': `
            <div>
                <h2 class="text-3xl font-heading mb-6">Hakkında</h2>
                <p class="text-lg mb-4">Kafe Keyfi, 2010 yılından beri şehrin en iyi kahvesini sunma tutkusuyla hizmet vermektedir. Özenle seçilmiş kahve çekirdeklerimiz ve taptaze hamur işlerimizle, misafirlerimize sıcak ve samimi bir ortam yaratmayı hedefliyoruz.</p>
                <p class="text-lg mb-4">Amacımız, her yudumda kaliteyi hissettirmek ve günlük telaşınızın arasında size huzurlu bir mola sunmaktır.</p>
            </div>
        `,
        '/destek': `
            <div>
                <h2 class="text-3xl font-heading mb-6">Destek</h2>
                <p class="text-lg mb-4">Müşteri memnuniyeti bizim için en öncelikli konudur. Herhangi bir sorunuz, öneriniz veya şikayetiniz için bize ulaşabilirsiniz.</p>
                <p class="text-lg">Sıkça sorulan sorulara göz atmak veya doğrudan ekibimizle iletişime geçmek için iletişim sayfamızı kullanabilirsiniz.</p>
            </div>
        `,
        '/iletisim': `
            <div>
                <h2 class="text-3xl font-heading mb-6">İletişim</h2>
                <div class="bg-white p-6 shadow-md rounded-lg text-coffee-dark">
                    <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No:12, Lezzet Mahallesi, İstanbul</p>
                    <p class="text-lg mb-2"><strong>Telefon:</strong> 0212 555 12 34</p>
                    <p class="text-lg mb-2"><strong>E-posta:</strong> info@kafekeyfi.com</p>
                    <p class="text-lg"><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 23:00</p>
                </div>
            </div>
        `,
        '/subeler': `
            <div>
                <h2 class="text-3xl font-heading mb-6">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 shadow-md rounded-lg text-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                        <p>Kahve Sokak No:12, Lezzet Mahallesi, İstanbul</p>
                    </div>
                    <div class="bg-white p-6 shadow-md rounded-lg text-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Moda Şubesi</h3>
                        <p>Moda Caddesi No:45, Kadıköy, İstanbul</p>
                    </div>
                    <div class="bg-white p-6 shadow-md rounded-lg text-coffee-dark">
                        <h3 class="text-xl font-bold mb-2">Karaköy Şubesi</h3>
                        <p>Kemankeş Caddesi No:18, Beyoğlu, İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
            <div>
                <h2 class="text-3xl font-heading mb-6">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 shadow-md rounded-lg text-coffee-dark flex justify-between items-center">
                            <span class="text-xl font-bold">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div>
                <h2 class="text-3xl font-heading mb-6">Fiyatlar</h2>
                <div class="bg-white shadow-md rounded-lg text-coffee-dark overflow-hidden">
                    ${menuItems.map((item, index) => `
                        <div class="flex justify-between items-center p-4 ${index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''}">
                            <span class="text-lg font-bold">${item.name}</span>
                            <span class="text-xl font-bold text-gray-600">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    const render = () => {
        let path = window.location.hash.slice(1) || '/';

        // Handle routes that might end with a trailing slash or just be an exact match
        if(path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        app.innerHTML = routes[path] || `
            <div class="text-center mt-8">
                <h2 class="text-3xl font-heading mb-6">Sayfa Bulunamadı</h2>
                <p class="text-lg mb-4">Aradığınız sayfa mevcut değil.</p>
                <a href="#/" class="inline-block bg-coffee-dark text-coffee-light rounded px-4 py-2 hover:bg-opacity-90">Ana Sayfaya Dön</a>
            </div>
        `;
    };

    window.addEventListener('hashchange', render);
    render(); // Initial load
});
