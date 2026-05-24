document.addEventListener('DOMContentLoaded', () => {
    // --- UI Logic (Sidebar) ---
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

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

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // --- Data ---
    const menuItems = [
        { name: "Espresso", price: "45₺" },
        { name: "Cappuccino", price: "55₺" },
        { name: "Latte", price: "60₺" },
        { name: "Türk Kahvesi", price: "40₺" },
        { name: "Çay", price: "25₺" },
        { name: "Cheesecake", price: "70₺" },
        { name: "Kruvasan", price: "50₺" },
        { name: "Sandviç", price: "80₺" },
        { name: "Soğuk Kahve", price: "65₺" },
        { name: "Limonata", price: "35₺" },
    ];


    // --- Routing & Views ---
    const contentDiv = document.getElementById('content');

    const views = {
        '/': `
            <div class="flex flex-col items-center justify-center text-center animate-fade-in">
                <div class="mb-8 w-32 h-32 bg-brown-900 rounded-full flex items-center justify-center shadow-lg border-4 border-cream-100">
                    <svg class="w-16 h-16 text-cream-100" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3 12.3c-.6-.6-1.5-.6-2.1 0L15 13.5l-1.2-1.2c-.6-.6-1.5-.6-2.1 0l-1.2 1.2-1.2-1.2c-.6-.6-1.5-.6-2.1 0L6 13.5l-1.2-1.2c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l2.3 2.3c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l1.2-1.2 1.2 1.2c.6.6 1.5.6 2.1 0l1.2-1.2 1.2 1.2c.3.3.7.4 1.1.4s.8-.1 1.1-.4l2.3-2.3c.6-.6.6-1.5 0-2.1zM20 4H4C2.9 4 2 4.9 2 6v6c0 1.1.9 2 2 2h1v3.5c0 1.9 1.6 3.5 3.5 3.5h7c1.9 0 3.5-1.6 3.5-3.5V14h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 8h-1V6h1v6zm-5 5.5c0 .8-.7 1.5-1.5 1.5h-7C4.7 19 4 18.3 4 17.5V14h10v3.5zM7 8h6v2H7V8z"/>
                    </svg>
                </div>
                <h1 class="heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Kafe Moka'ya Hoş Geldiniz</h1>
                <p class="body-text text-lg md:text-xl max-w-2xl mx-auto mb-8 text-brown-700">Günün yorgunluğunu atmak ve en taze kahvelerimizi tatmak için doğru yerdesiniz.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full">
                    <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
                <p class="body-text text-lg mb-4 leading-relaxed">Kafe Moka olarak, 2010 yılından beri sizlere en iyi kahve deneyimini sunmak için çalışıyoruz. Özenle seçilmiş kahve çekirdeklerimiz ve usta baristalarımızla her yudumda kaliteyi hissedeceksiniz.</p>
                <p class="body-text text-lg leading-relaxed">Misyonumuz, sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak, samimi ve huzurlu bir ortam sağlamaktır.</p>
            </div>
        `,
        '/destek': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Destek</h2>
                <p class="body-text text-lg mb-4">Herhangi bir sorunuz veya öneriniz mi var? Size yardımcı olmaktan memnuniyet duyarız.</p>
                <ul class="list-disc pl-6 space-y-2 body-text text-lg">
                    <li>Sipariş takibi</li>
                    <li>Geri bildirim ve şikayetler</li>
                    <li>Sıkça sorulan sorular</li>
                </ul>
            </div>
        `,
        '/iletisim': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-6 border-b-2 border-brown-200 pb-2">İletişim</h2>
                <div class="space-y-4 body-text text-lg">
                    <p><strong class="font-bold text-brown-900">Adres:</strong> Kahve Sokak No: 42, Lezzet Mahallesi, İstanbul</p>
                    <p><strong class="font-bold text-brown-900">Telefon:</strong> +90 212 555 01 23</p>
                    <p><strong class="font-bold text-brown-900">E-posta:</strong> merhaba@kafemoka.com</p>
                    <p><strong class="font-bold text-brown-900">Çalışma Saatleri:</strong> Her gün 08:00 - 23:00</p>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-6 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
                <div class="grid gap-6 md:grid-cols-2">
                    <div class="bg-brown-50 p-4 rounded-lg border border-brown-100">
                        <h3 class="heading text-xl font-bold mb-2">Merkez Şube (Kadıköy)</h3>
                        <p class="body-text">Moda Caddesi No: 15<br>Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-brown-50 p-4 rounded-lg border border-brown-100">
                        <h3 class="heading text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p class="body-text">Barbaros Bulvarı No: 88<br>Beşiktaş / İstanbul</p>
                    </div>
                    <div class="bg-brown-50 p-4 rounded-lg border border-brown-100">
                        <h3 class="heading text-xl font-bold mb-2">Karşıyaka Şubesi</h3>
                        <p class="body-text">Cemal Gürsel Caddesi No: 102<br>Karşıyaka / İzmir</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
            <div class="max-w-4xl mx-auto animate-fade-in">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-8 text-center">Menü İçerikleri</h2>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-brown-100 flex flex-col items-center justify-center text-center group">
                            <h3 class="heading text-xl font-bold group-hover:text-brown-700 transition-colors">${item.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="heading text-3xl md:text-4xl font-bold mb-8 text-center border-b-2 border-brown-200 pb-4">Fiyat Listesi</h2>
                <div class="space-y-0 divide-y divide-brown-200">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center py-4 hover:bg-brown-50 transition-colors px-4 rounded">
                            <span class="heading text-lg md:text-xl font-semibold">${item.name}</span>
                            <span class="body-text text-lg md:text-xl font-bold text-brown-900">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    function router() {
        // Get the hash part of the URL, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Render the view, default to 404 if not found
        contentDiv.innerHTML = views[hash] || `
            <div class="text-center py-20">
                <h2 class="heading text-4xl font-bold mb-4">404 - Sayfa Bulunamadı</h2>
                <p class="body-text text-lg">Aradığınız sayfa mevcut değil.</p>
                <a href="#/" class="inline-block mt-6 px-6 py-2 bg-brown-900 text-cream-100 rounded hover:bg-brown-800 transition-colors">Ana Sayfaya Dön</a>
            </div>
        `;
    }

    // Add simple fade-in animation style
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});