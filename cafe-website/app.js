document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sidebar Toggling Logic
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent background scrolling
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Auto-close sidebar on link click (especially useful for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Content Definitions
    const pages = {
        '': `
            <div class="text-center">
                <img src="./Images/coffee.jpg" alt="Kafe Mocha Hoşgeldiniz" class="w-full max-w-lg mx-auto rounded-xl shadow-md mb-6 object-cover h-64 md:h-80">
                <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-brown-900">Kafe Mocha'ya Hoş Geldiniz</h1>
                <p class="text-lg text-brown-700 max-w-2xl mx-auto leading-relaxed">
                    Günün yorgunluğunu atmak, taze kavrulmuş kahvelerimizin kokusuyla huzur bulmak ve lezzetli tatlılarımızla kendinizi şımartmak için doğru yerdesiniz.
                </p>
            </div>
        `,
        '#hakkinda': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">Hakkımızda</h1>
            <p class="mb-4 text-lg text-brown-800 leading-relaxed">Kafe Mocha olarak, 2010 yılından bu yana kahve tutkumuzla siz değerli misafirlerimize en iyi deneyimi sunmak için çalışıyoruz. Özenle seçilmiş çekirdekler ve yetenekli baristalarımızla her fincanda kaliteyi garanti ediyoruz.</p>
            <p class="text-lg text-brown-800 leading-relaxed">Misyonumuz, sadece kahve satmak değil, aynı zamanda dostane bir ortamda unutulmaz anılar biriktirmenizi sağlamaktır.</p>
        `,
        '#destek': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">Destek</h1>
            <p class="mb-4 text-lg text-brown-800">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorununuz veya geri bildiriminiz varsa, size yardımcı olmaktan memnuniyet duyarız.</p>
            <ul class="list-disc pl-6 space-y-2 text-brown-800">
                <li>Sıkça Sorulan Sorular (SSS)</li>
                <li>İade ve Değişim Politikası</li>
                <li>Geri Bildirim Formu</li>
            </ul>
        `,
        '#iletisim': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">İletişim</h1>
            <div class="space-y-4 text-lg text-brown-800">
                <p><strong>Adres:</strong> Kahve Mahallesi, Lezzet Caddesi No:42, İstanbul</p>
                <p><strong>Telefon:</strong> +90 212 555 12 34</p>
                <p><strong>E-posta:</strong> info@kafemocha.com</p>
                <p><strong>Çalışma Saatleri:</strong></p>
                <ul class="pl-6 text-brown-700">
                    <li>Hafta içi: 07:00 - 22:00</li>
                    <li>Hafta sonu: 08:00 - 23:00</li>
                </ul>
            </div>
        `,
        '#subeler': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">Şube Konumları</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-brown-50 p-4 rounded border border-brown-100 shadow-sm">
                    <h2 class="text-xl font-bold mb-2 font-serif">Kadıköy Merkez</h2>
                    <p class="text-brown-700">Moda Caddesi, Kadıköy</p>
                </div>
                <div class="bg-brown-50 p-4 rounded border border-brown-100 shadow-sm">
                    <h2 class="text-xl font-bold mb-2 font-serif">Beşiktaş Şubesi</h2>
                    <p class="text-brown-700">Barbaros Bulvarı, Beşiktaş</p>
                </div>
                <div class="bg-brown-50 p-4 rounded border border-brown-100 shadow-sm">
                    <h2 class="text-xl font-bold mb-2 font-serif">Karaköy Şubesi</h2>
                    <p class="text-brown-700">Kemankeş Caddesi, Beyoğlu</p>
                </div>
            </div>
        `,
        '#menu': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">Menü İçerikleri</h1>
            <p class="mb-6 text-lg text-brown-800">Özenle hazırladığımız kahve ve tatlı çeşitlerimizi keşfedin.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-2xl font-serif font-bold mb-4 text-brown-900">Sıcak İçecekler</h2>
                    <ul class="space-y-2 text-brown-800">
                        <li>Espresso</li>
                        <li>Cappuccino</li>
                        <li>Latte</li>
                        <li>Türk Kahvesi</li>
                        <li>Çay</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-serif font-bold mb-4 text-brown-900">Soğuk İçecekler & Yiyecekler</h2>
                    <ul class="space-y-2 text-brown-800">
                        <li>Soğuk Kahve</li>
                        <li>Limonata</li>
                        <li>Cheesecake</li>
                        <li>Kruvasan</li>
                        <li>Sandviç</li>
                    </ul>
                </div>
            </div>
        `,
        '#fiyatlar': `
            <h1 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-200 pb-2 text-brown-900">Fiyatlar</h1>
            <div class="bg-brown-50 rounded-lg p-6 shadow-sm border border-brown-100 max-w-2xl mx-auto">
                <ul class="divide-y divide-brown-200">
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Espresso</span><span class="font-bold text-brown-900">45₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Cappuccino</span><span class="font-bold text-brown-900">55₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Latte</span><span class="font-bold text-brown-900">60₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Türk Kahvesi</span><span class="font-bold text-brown-900">40₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Çay</span><span class="font-bold text-brown-900">25₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Soğuk Kahve</span><span class="font-bold text-brown-900">65₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Limonata</span><span class="font-bold text-brown-900">35₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Cheesecake</span><span class="font-bold text-brown-900">70₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Kruvasan</span><span class="font-bold text-brown-900">50₺</span></li>
                    <li class="py-3 flex justify-between items-center"><span class="text-lg">Sandviç</span><span class="font-bold text-brown-900">80₺</span></li>
                </ul>
            </div>
        `
    };

    // Routing Logic
    function renderPage() {
        let hash = window.location.hash;

        // Default to home if hash is invalid or empty
        if (!pages.hasOwnProperty(hash)) {
            hash = '';
            window.history.replaceState(null, null, ' '); // Clean URL if invalid
        }

        contentDiv.innerHTML = pages[hash];
        window.scrollTo(0, 0); // Scroll to top on page change
    }

    // Listen for hash changes
    window.addEventListener('hashchange', renderPage);

    // Initial render
    renderPage();
});