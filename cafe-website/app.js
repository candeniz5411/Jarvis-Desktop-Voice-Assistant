document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Toggle sidebar
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

    // Close sidebar on link click
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Data
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'coffee' },
        { name: 'Cappuccino', price: 55, category: 'coffee' },
        { name: 'Latte', price: 60, category: 'coffee' },
        { name: 'Türk Kahvesi', price: 40, category: 'coffee' },
        { name: 'Çay', price: 25, category: 'hot_drink' },
        { name: 'Cheesecake', price: 70, category: 'dessert' },
        { name: 'Kruvasan', price: 50, category: 'pastry' },
        { name: 'Sandviç', price: 80, category: 'food' },
        { name: 'Soğuk Kahve', price: 65, category: 'cold_drink' },
        { name: 'Limonata', price: 35, category: 'cold_drink' }
    ];

    // Views
    const views = {
        home: `
            <div class="flex flex-col items-center text-center">
                <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4 text-brown-900">Hoş Geldiniz</h1>
                <p class="text-lg mb-8 text-brown-800">Günün yorgunluğunu en taze kahvelerimizle atın.</p>
                <img src="./Images/hero-coffee.jpg" alt="Taze Kahve" class="w-full max-w-2xl rounded-lg shadow-xl object-cover h-64 md:h-96">
            </div>
        `,
        hakkinda: `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Hakkımızda</h2>
                <p class="mb-4 leading-relaxed">Modern, minimalist ve samimi ortamımızla, kahve tutkunlarına hizmet veriyoruz. Dünyanın en iyi çekirdeklerini özenle seçiyor, kendi tarzımızla demliyoruz.</p>
                <p class="leading-relaxed">Amacımız, sadece bir kafe olmak değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı okuyabileceğiniz ya da çalışabileceğiniz huzurlu bir yaşam alanı sunmaktır.</p>
            </div>
        `,
        destek: `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Destek</h2>
                <p class="mb-4">Herhangi bir sorun yaşarsanız veya sorularınız olursa, size yardımcı olmaktan memnuniyet duyarız.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">Sıkça Sorulan Sorular</li>
                    <li class="mb-2">Ürün İadeleri ve Değişimleri</li>
                    <li>Geri Bildirimleriniz</li>
                </ul>
            </div>
        `,
        iletisim: `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">İletişim</h2>
                <div class="mb-4">
                    <p class="font-bold">Adres:</p>
                    <p>Kahve Sk. No: 1, Lezzet Mahallesi, İstanbul</p>
                </div>
                <div class="mb-4">
                    <p class="font-bold">Telefon:</p>
                    <p>+90 555 123 45 67</p>
                </div>
                <div>
                    <p class="font-bold">E-posta:</p>
                    <p>info@kafe.com</p>
                </div>
            </div>
        `,
        subeler: `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border p-4 rounded-lg bg-cream-100">
                        <h3 class="font-bold text-lg mb-2">Merkez Şube</h3>
                        <p>Kadıköy, İstanbul</p>
                    </div>
                    <div class="border p-4 rounded-lg bg-cream-100">
                        <h3 class="font-bold text-lg mb-2">Sahil Şube</h3>
                        <p>Beşiktaş, İstanbul</p>
                    </div>
                    <div class="border p-4 rounded-lg bg-cream-100">
                        <h3 class="font-bold text-lg mb-2">Park Şube</h3>
                        <p>Çankaya, Ankara</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex items-center p-3 border-b border-gray-200">
                            <span class="w-2 h-2 bg-brown-900 rounded-full mr-3"></span>
                            <span class="text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b pb-2">Fiyatlar</h2>
                <div class="flex flex-col space-y-3">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-3 border-b border-gray-200 hover:bg-cream-100 transition rounded">
                            <span class="text-lg font-medium">${item.name}</span>
                            <span class="text-lg font-bold text-brown-900">${item.price}₺</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Router
    const router = () => {
        let hash = window.location.hash.substring(1);

        // Default route
        if (!hash || !views[hash]) {
            hash = 'home';
            window.location.hash = 'home';
        }

        app.innerHTML = views[hash];
        window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});