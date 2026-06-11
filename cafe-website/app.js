document.addEventListener('DOMContentLoaded', () => {
    // Menu and Sidebar Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const contentDiv = document.getElementById('content');

    // Sidebar Toggle Functions
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link inside it
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
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

    // Page Templates
    const pages = {
        '/': `
            <div class="flex flex-col items-center text-center mt-8">
                <div class="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-brown-900 shadow-lg">
                    <img src="./Images/coffee-bg.jpg" alt="Kahve" class="w-full h-full object-cover">
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Kafe Keyfi'ne Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-brown-800 max-w-2xl">
                    En taze kahve çekirdekleri ve enfes tatlılarımızla size sıcak ve huzurlu bir ortam sunuyoruz.
                </p>
            </div>
        `,
        '/hakkinda': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Hakkında</h2>
                <p class="text-lg mb-4 text-gray-700">Kafe Keyfi, 2026 yılında kahve tutkunlarına en iyi deneyimi sunmak amacıyla kurulmuştur. Özenle seçilmiş kahve çekirdeklerimiz ve taze demlenmiş lezzetlerimizle hizmetinizdeyiz.</p>
                <p class="text-lg text-gray-700">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz bir buluşma noktası olmaktır.</p>
            </div>
        `,
        '/destek': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Destek</h2>
                <p class="text-lg mb-4 text-gray-700">Siparişlerinizle veya hizmetlerimizle ilgili bir sorun mu yaşıyorsunuz? Size yardımcı olmaktan mutluluk duyarız.</p>
                <p class="text-lg text-gray-700">Lütfen bize <a href="mailto:destek@kafekeyfi.com" class="text-brown-500 font-bold hover:underline">destek@kafekeyfi.com</a> adresinden ulaşın.</p>
            </div>
        `,
        '/iletisim': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">İletişim</h2>
                <ul class="text-lg space-y-4 text-gray-700">
                    <li class="flex items-center"><span class="font-bold w-24">Adres:</span> Kahve Cad. No:123, İstanbul</li>
                    <li class="flex items-center"><span class="font-bold w-24">Telefon:</span> +90 555 123 45 67</li>
                    <li class="flex items-center"><span class="font-bold w-24">E-posta:</span> info@kafekeyfi.com</li>
                </ul>
            </div>
        `,
        '/sube-konumlari': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-4 border border-gray-200 rounded-md">
                        <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                        <p class="text-gray-700">Kadıköy, İstanbul</p>
                    </div>
                    <div class="p-4 border border-gray-200 rounded-md">
                        <h3 class="text-xl font-bold mb-2">Moda Şubesi</h3>
                        <p class="text-gray-700">Moda Sahili, İstanbul</p>
                    </div>
                    <div class="p-4 border border-gray-200 rounded-md">
                        <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-gray-700">Çarşı İçi, İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        '/menu-icerikleri': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 border-b-2 border-brown-500 pb-2">Fiyat Listesi</h2>
                <ul class="space-y-3">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                            <span class="text-lg font-bold text-brown-500">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `
    };

    // Router Logic
    const router = () => {
        let hash = window.location.hash.slice(1) || '/';

        // Handle trailing slashes or unknown routes
        if (!pages[hash]) {
            hash = '/';
        }

        contentDiv.innerHTML = pages[hash];
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
