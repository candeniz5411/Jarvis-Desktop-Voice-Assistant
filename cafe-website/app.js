document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');

    // Sidebar Toggle Logic
    const toggleMenu = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close sidebar when a link is clicked
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleMenu();
            }
        });
    });

    // Content Generators
    const pages = {
        '': () => `
            <div class="text-center w-full max-w-2xl">
                <h2 class="text-4xl font-heading font-bold mb-4">Hoş Geldiniz</h2>
                <p class="mb-8 text-lg">En taze kahveler ve enfes tatlılar için doğru yerdesiniz.</p>
                <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto rounded-lg shadow-lg object-cover max-h-96">
            </div>
        `,
        '#hakkinda': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Hakkında</h2>
                <p class="text-lg leading-relaxed">Biz, kahve tutkusunu kaliteyle buluşturan küçük bir kafe zinciriyiz. Yıllardır en iyi çekirdekleri özenle seçiyor ve sizlere sunuyoruz. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize kendilerini evlerinde hissedecekleri sıcak bir ortam yaratmaktır.</p>
            </div>
        `,
        '#destek': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Destek</h2>
                <p class="text-lg leading-relaxed text-center mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var?</p>
                <p class="text-center">Lütfen <strong>destek@kafe.com</strong> adresine e-posta gönderin veya iletişim sayfasındaki numaramızı arayın. Müşteri hizmetleri ekibimiz en kısa sürede size dönüş yapacaktır.</p>
            </div>
        `,
        '#iletisim': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">İletişim</h2>
                <div class="text-lg space-y-4 text-center">
                    <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                    <p><strong>E-posta:</strong> iletisim@kafe.com</p>
                    <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
                </div>
            </div>
        `,
        '#sube-konumlari': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Şube Konumları</h2>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Merkez Şube:</strong> Atatürk Cad. No: 15, Kadıköy / İstanbul</li>
                    <li><strong>Moda Şubesi:</strong> Moda Sahil Yolu No: 42, Kadıköy / İstanbul</li>
                    <li><strong>Beşiktaş Şubesi:</strong> Barbaros Bulvarı No: 88, Beşiktaş / İstanbul</li>
                </ul>
            </div>
        `,
        '#menu-icerikleri': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Menü İçerikleri</h2>
                <ul class="list-disc pl-6 space-y-2 text-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li>Espresso</li>
                    <li>Cappuccino</li>
                    <li>Latte</li>
                    <li>Türk Kahvesi</li>
                    <li>Çay</li>
                    <li>Cheesecake</li>
                    <li>Kruvasan</li>
                    <li>Sandviç</li>
                    <li>Soğuk Kahve</li>
                    <li>Limonata</li>
                </ul>
            </div>
        `,
        '#fiyatlar': () => `
            <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center">Fiyatlar</h2>
                <div class="space-y-2">
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Espresso</span> <span>45₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Cappuccino</span> <span>55₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Latte</span> <span>60₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Türk Kahvesi</span> <span>40₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Çay</span> <span>25₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Cheesecake</span> <span>70₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Kruvasan</span> <span>50₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Sandviç</span> <span>80₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Soğuk Kahve</span> <span>65₺</span></div>
                    <div class="flex justify-between border-b border-brown-100 py-2"><span class="font-bold">Limonata</span> <span>35₺</span></div>
                </div>
            </div>
        `
    };

    // Routing Logic
    const router = () => {
        const hash = window.location.hash;
        const renderPage = pages[hash] || pages[''];
        app.innerHTML = renderPage();
    };

    window.addEventListener('hashchange', router);

    // Initial load
    router();
});