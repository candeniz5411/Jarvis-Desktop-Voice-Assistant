document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    // Sidebar Toggle Logic
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Content Data
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

    const pages = {
        '': `
            <div class="text-center">
                <img src="../Images/Cover_pic.jpg" alt="Kafe Fotoğrafı" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-brown-900">Cafe Brew'a Hoş Geldiniz!</h2>
                <p class="text-xl text-brown-700 max-w-2xl mx-auto">Günün stresini atmak, taze kahve kokusuyla güne başlamak veya arkadaşlarınızla keyifli vakit geçirmek için en doğru yerdesiniz.</p>
            </div>
        `,
        'hakkinda': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Hakkımızda</h2>
                <p class="text-lg text-brown-700 leading-relaxed mb-4">Cafe Brew, kahve tutkusunu en taze çekirdeklerle birleştirerek misafirlerine sunmayı amaçlayan bir aile işletmesidir. Yılların verdiği tecrübe ile her fincanda kaliteyi ve samimiyeti hissetmeniz için özenle çalışıyoruz.</p>
                <p class="text-lg text-brown-700 leading-relaxed">Sürdürülebilir tarım uygulamalarını destekliyor, çekirdeklerimizi özenle seçiyor ve usta baristalarımızın ellerinde sanata dönüştürüyoruz.</p>
            </div>
        `,
        'destek': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Destek</h2>
                <p class="text-lg text-brown-700 mb-6">Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız lütfen bizimle iletişime geçin.</p>
                <div class="bg-brown-100 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-2 text-brown-900">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc list-inside text-brown-700 space-y-2 mt-4">
                        <li>Çalışma saatleriniz nedir? <br><span class="ml-5 text-sm">Hafta içi 08:00 - 22:00, Hafta sonu 09:00 - 23:00</span></li>
                        <li>Vegan/Glutensiz seçenekleriniz var mı? <br><span class="ml-5 text-sm">Evet, menümüzde bitkisel süt seçenekleri ve glutensiz tatlılarımız bulunmaktadır.</span></li>
                    </ul>
                </div>
            </div>
        `,
        'iletisim': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg text-brown-700 mb-4">Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz:</p>
                        <ul class="space-y-4 text-brown-700">
                            <li class="flex items-center"><svg class="w-6 h-6 mr-3 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +90 555 123 45 67</li>
                            <li class="flex items-center"><svg class="w-6 h-6 mr-3 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@cafebrew.com.tr</li>
                            <li class="flex items-start"><svg class="w-6 h-6 mr-3 mt-1 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div><strong>Merkez:</strong><br>Kahve Cad. No:1, Beşiktaş, İstanbul</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        'subeler': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-brown-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-900">Beşiktaş (Merkez)</h3>
                        <p class="text-brown-700">Kahve Cad. No:1<br>Beşiktaş, İstanbul</p>
                    </div>
                    <div class="border border-brown-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-900">Kadıköy</h3>
                        <p class="text-brown-700">Moda Sok. No:42<br>Kadıköy, İstanbul</p>
                    </div>
                    <div class="border border-brown-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-900">Çankaya</h3>
                        <p class="text-brown-700">Tunalı Hilmi Cad. No:10<br>Çankaya, Ankara</p>
                    </div>
                    <div class="border border-brown-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-900">Alsancak</h3>
                        <p class="text-brown-700">Kordon Boyu No:5<br>Konak, İzmir</p>
                    </div>
                </div>
            </div>
        `,
        'menu': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-4 border-b border-gray-100 hover:bg-cream transition-colors">
                            <span class="text-xl font-semibold text-brown-900">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        'fiyatlar': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Fiyat Listesi</h2>
                <div class="max-w-2xl mx-auto">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-cream transition-colors">
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                            <span class="text-lg font-bold text-brown-700">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Routing Logic
    function handleRoute() {
        let hash = window.location.hash.substring(1);
        // Default to home if hash is empty or not found
        if (!pages[hash]) {
            hash = '';
        }
        mainContent.innerHTML = pages[hash];
        window.scrollTo(0, 0);
    }

    // Initialize route on load
    handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);
});