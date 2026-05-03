document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle Logic ---
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }

    hamburgerMenu.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close sidebar automatically when a link is clicked on mobile/smaller screens
            if (window.innerWidth < 1024) {
                closeSidebar();
            }
        });
    });

    // --- Data ---
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

    // --- Routing and Rendering Logic ---
    const appContainer = document.getElementById('app');

    const renderPage = () => {
        let hash = window.location.hash.substring(1) || '/';
        appContainer.innerHTML = ''; // Clear current content

        switch (hash) {
            case '/':
                renderHome();
                break;
            case '/hakkinda':
                renderHakkinda();
                break;
            case '/destek':
                renderDestek();
                break;
            case '/iletisim':
                renderIletisim();
                break;
            case '/subeler':
                renderSubeler();
                break;
            case '/menu':
                renderMenu();
                break;
            case '/fiyatlar':
                renderFiyatlar();
                break;
            default:
                renderNotFound();
        }
    };

    function renderHome() {
        appContainer.innerHTML = `
            <div class="max-w-4xl mx-auto text-center mt-8">
                <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-brown">Cafe Serenity'e Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl mb-8">Günün yorgunluğunu mükemmel bir kahve ile atın. Minimalist mekanımızda sıcak bir atmosfer sizi bekliyor.</p>
                <div class="rounded-lg overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf" alt="Taze çekilmiş kahve" class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500">
                </div>
                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div class="bg-white bg-opacity-60 p-6 rounded-lg shadow">
                        <h3 class="text-xl font-bold font-heading mb-2">Taze Çekirdekler</h3>
                        <p>Dünyanın dört bir yanından özenle seçilmiş kahve çekirdekleri.</p>
                    </div>
                    <div class="bg-white bg-opacity-60 p-6 rounded-lg shadow">
                        <h3 class="text-xl font-bold font-heading mb-2">Huzurlu Ortam</h3>
                        <p>Çalışmak, okumak veya dinlenmek için sakin ve minimalist bir alan.</p>
                    </div>
                    <div class="bg-white bg-opacity-60 p-6 rounded-lg shadow">
                        <h3 class="text-xl font-bold font-heading mb-2">Lezzetli Atıştırmalıklar</h3>
                        <p>Kahvenizin yanına eşlik edecek taze günlük tatlı ve tuzlular.</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderHakkinda() {
        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brand-lightBrown pb-2">Hakkımızda</h2>
                <p class="mb-4 text-lg leading-relaxed">Cafe Serenity, kahve tutkusunu sadelik ve kalite ile buluşturan bir mekandır. Amacımız, şehrin karmaşasından uzaklaşıp kendinize vakit ayırabileceğiniz huzurlu bir ortam sunmaktır.</p>
                <p class="mb-4 text-lg leading-relaxed">Her bir fincan kahvemiz, usta baristalarımız tarafından özenle hazırlanır. Sadece kahve değil, aynı zamanda dostluklar ve güzel anılar biriktirebileceğiniz bir buluşma noktasıyız.</p>
            </div>
        `;
    }

    function renderDestek() {
        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brand-lightBrown pb-2">Destek</h2>
                <p class="mb-6">Müşteri memnuniyeti bizim için önceliktir. Karşılaştığınız herhangi bir sorun veya geri bildiriminiz için aşağıdaki yollardan bize ulaşabilirsiniz.</p>
                <div class="space-y-4">
                    <div class="p-4 bg-brand-cream rounded border border-brand-lightBrown">
                        <h3 class="font-bold text-lg mb-1">Sıkça Sorulan Sorular</h3>
                        <p class="text-sm">Glutensiz seçenekleriniz var mı? Çalışma saatleriniz neler? Tüm sorularınızın cevabı yakında burada.</p>
                    </div>
                    <div class="p-4 bg-brand-cream rounded border border-brand-lightBrown">
                        <h3 class="font-bold text-lg mb-1">Şikayet ve Öneriler</h3>
                        <p class="text-sm">Deneyiminizi iyileştirmemiz için bize destek@cafeserenity.com adresinden yazabilirsiniz.</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderIletisim() {
        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brand-lightBrown pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <ul class="space-y-3">
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brand-lightBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Kahve Caddesi No:12, Kadıköy, İstanbul</li>
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brand-lightBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +90 (212) 555 01 23</li>
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brand-lightBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> merhaba@cafeserenity.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                        <p class="mb-2">Pazartesi - Cuma: <br>08:00 - 22:00</p>
                        <p>Cumartesi - Pazar: <br>09:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderSubeler() {
        appContainer.innerHTML = `
            <div class="max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-8 text-center text-brand-brown">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-heading font-bold mb-2">Kadıköy Merkez</h3>
                        <p class="text-gray-700 mb-4">Caferağa Mah. Moda Cad. No: 45 Kadıköy / İstanbul</p>
                        <button class="bg-brand-brown text-brand-cream px-4 py-2 rounded hover:bg-brand-lightBrown transition-colors">Haritada Gör</button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-heading font-bold mb-2">Beşiktaş</h3>
                        <p class="text-gray-700 mb-4">Sinanpaşa Mah. Barbaros Blv. No: 12 Beşiktaş / İstanbul</p>
                        <button class="bg-brand-brown text-brand-cream px-4 py-2 rounded hover:bg-brand-lightBrown transition-colors">Haritada Gör</button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 class="text-2xl font-heading font-bold mb-2">Nişantaşı</h3>
                        <p class="text-gray-700 mb-4">Teşvikiye Mah. Vali Konağı Cad. No: 78 Şişli / İstanbul</p>
                        <button class="bg-brand-brown text-brand-cream px-4 py-2 rounded hover:bg-brand-lightBrown transition-colors">Haritada Gör</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        const itemsHtml = menuItems.map(item => `
            <div class="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:bg-brand-cream transition-colors duration-200">
                <span class="text-lg font-bold">${item.name}</span>
            </div>
        `).join('');

        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-8 text-center text-brand-brown">Menü İçerikleri</h2>
                <div class="space-y-4">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }

    function renderFiyatlar() {
        const itemsHtml = menuItems.map(item => `
            <div class="flex justify-between items-center border-b border-brand-lightBrown border-opacity-30 py-3 last:border-0">
                <span class="text-lg">${item.name}</span>
                <span class="text-lg font-bold text-brand-brown">${item.price}</span>
            </div>
        `).join('');

        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center text-brand-brown border-b border-brand-lightBrown pb-4">Fiyat Listesi</h2>
                <div class="flex flex-col">
                    ${itemsHtml}
                </div>
                <div class="mt-8 text-sm text-center text-gray-600">
                    <p>* Fiyatlarımıza KDV dahildir.</p>
                </div>
            </div>
        `;
    }

    function renderNotFound() {
        appContainer.innerHTML = `
            <div class="text-center mt-20">
                <h2 class="text-4xl font-heading font-bold text-brand-brown mb-4">404</h2>
                <p class="text-xl">Sayfa bulunamadı.</p>
                <a href="#/" class="inline-block mt-6 px-6 py-2 bg-brand-brown text-brand-cream rounded hover:bg-brand-lightBrown transition-colors">Ana Sayfaya Dön</a>
            </div>
        `;
    }

    // Initialize
    window.addEventListener('hashchange', renderPage);
    renderPage(); // Initial render
});