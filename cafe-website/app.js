document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const content = document.getElementById('content');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Content Pages
    const pages = {
        'home': `
            <div class="flex flex-col items-center text-center">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full max-w-2xl h-auto rounded-lg shadow-md mb-8 object-cover max-h-96">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-4">Kafe Rustique'e Hoş Geldiniz</h2>
                <p class="text-xl font-body text-brown-700 max-w-2xl">
                    Şehrin kalbinde, taze kavrulmuş kahve çekirdeklerinin kokusuyla güne başlamak için en iyi adres. Sizi de bekleriz!
                </p>
            </div>
        `,
        'hakkinda': `
            <div class="max-w-2xl mx-auto bg-brown-100 p-6 md:p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b-2 border-brown-300 pb-2">Hakkımızda</h2>
                <p class="text-lg font-body text-brown-700 mb-4">
                    2015 yılından bu yana kaliteli kahve ve sıcak bir atmosfer sunuyoruz. Misyonumuz, misafirlerimize en taze kahveleri en iyi şekilde hazırlamak ve keyifli anlar yaşatmaktır.
                </p>
                <p class="text-lg font-body text-brown-700">
                    Özenle seçilmiş kahve çekirdeklerimiz ve kendi fırınımızdan çıkan taze lezzetlerimizle hizmetinizdeyiz.
                </p>
            </div>
        `,
        'destek': `
            <div class="max-w-2xl mx-auto bg-brown-100 p-6 md:p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b-2 border-brown-300 pb-2">Destek</h2>
                <p class="text-lg font-body text-brown-700 mb-4">
                    Siparişlerinizle veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorulara göz atabilir veya destek ekibimizle iletişime geçebilirsiniz.
                </p>
                <ul class="list-disc pl-5 text-brown-700 space-y-2 mt-4 font-body text-lg">
                    <li>Sipariş takibi</li>
                    <li>İade ve iptal koşulları</li>
                    <li>Geri bildirim ve şikayetler</li>
                </ul>
            </div>
        `,
        'iletisim': `
            <div class="max-w-2xl mx-auto bg-brown-100 p-6 md:p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b-2 border-brown-300 pb-2">İletişim</h2>
                <div class="space-y-4 font-body text-lg text-brown-700">
                    <p><strong>Telefon:</strong> +90 (555) 123 45 67</p>
                    <p><strong>E-posta:</strong> info@kaferustique.com</p>
                    <p><strong>Adres:</strong> Kahve Mahallesi, Çekirdek Sokak No:42, Kadıköy/İstanbul</p>
                    <p class="mt-6 font-bold text-brown-900">Çalışma Saatleri:</p>
                    <p>Pazartesi - Cuma: 07:00 - 22:00</p>
                    <p>Hafta Sonu: 08:00 - 23:00</p>
                </div>
            </div>
        `,
        'subeler': `
            <div class="max-w-2xl mx-auto bg-brown-100 p-6 md:p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-6 border-b-2 border-brown-300 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-brown-700">
                    <div class="bg-cream p-4 rounded border border-brown-300">
                        <h3 class="font-bold text-xl text-brown-900 mb-2">Kadıköy Merkez</h3>
                        <p>Kahve Mah., Çekirdek Sok. No:42</p>
                    </div>
                    <div class="bg-cream p-4 rounded border border-brown-300">
                        <h3 class="font-bold text-xl text-brown-900 mb-2">Beşiktaş Şubesi</h3>
                        <p>Latte Cad., Sütlü Sok. No:15</p>
                    </div>
                    <div class="bg-cream p-4 rounded border border-brown-300">
                        <h3 class="font-bold text-xl text-brown-900 mb-2">Karaköy Şubesi</h3>
                        <p>Espresso Meydanı, No:3</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': `
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-8 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- İçecekler -->
                    <div class="bg-brown-100 p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b-2 border-brown-300 pb-2">İçecekler</h3>
                        <ul class="space-y-3 text-lg font-body text-brown-700">
                            <li><strong>Espresso:</strong> Yoğun kahve aroması.</li>
                            <li><strong>Cappuccino:</strong> Espresso, sıcak süt ve bol süt köpüğü.</li>
                            <li><strong>Latte:</strong> Espresso ve bol sıcak süt.</li>
                            <li><strong>Türk Kahvesi:</strong> Geleneksel yöntemle pişirilmiş, telveli.</li>
                            <li><strong>Çay:</strong> Taze demlenmiş siyah çay.</li>
                            <li><strong>Soğuk Kahve:</strong> Buzlu ve serinletici espresso bazlı kahve.</li>
                            <li><strong>Limonata:</strong> Ev yapımı taze naneli limonata.</li>
                        </ul>
                    </div>
                    <!-- Yiyecekler -->
                    <div class="bg-brown-100 p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b-2 border-brown-300 pb-2">Yiyecekler</h3>
                        <ul class="space-y-3 text-lg font-body text-brown-700">
                            <li><strong>Cheesecake:</strong> Günlük taze frambuazlı cheesecake.</li>
                            <li><strong>Kruvasan:</strong> Tereyağlı çıtır kruvasan.</li>
                            <li><strong>Sandviç:</strong> Taze ekmek arasına peynir, füme et ve yeşillik.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        'fiyatlar': `
            <div class="max-w-3xl mx-auto bg-brown-100 p-6 md:p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold text-brown-900 mb-8 text-center border-b-2 border-brown-300 pb-2">Fiyatlar</h2>
                <div class="space-y-2">
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Espresso</span>
                        <span class="text-xl font-body text-brown-700">45₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Cappuccino</span>
                        <span class="text-xl font-body text-brown-700">55₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Latte</span>
                        <span class="text-xl font-body text-brown-700">60₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Türk Kahvesi</span>
                        <span class="text-xl font-body text-brown-700">40₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Çay</span>
                        <span class="text-xl font-body text-brown-700">25₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Cheesecake</span>
                        <span class="text-xl font-body text-brown-700">70₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Kruvasan</span>
                        <span class="text-xl font-body text-brown-700">50₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Sandviç</span>
                        <span class="text-xl font-body text-brown-700">80₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-brown-300">
                        <span class="text-xl font-heading font-bold text-brown-900">Soğuk Kahve</span>
                        <span class="text-xl font-body text-brown-700">65₺</span>
                    </div>
                    <div class="flex justify-between items-center py-2">
                        <span class="text-xl font-heading font-bold text-brown-900">Limonata</span>
                        <span class="text-xl font-body text-brown-700">35₺</span>
                    </div>
                </div>
            </div>
        `
    };

    // Router
    function router() {
        // Get the hash from the URL
        let hash = window.location.hash.slice(1); // Remove the '#'

        // Default to 'home' if no hash or invalid hash
        if (!hash || !pages[hash]) {
            hash = 'home';
        }

        // Render the content
        content.innerHTML = pages[hash];
        window.scrollTo(0, 0); // Scroll to top on page change
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});
