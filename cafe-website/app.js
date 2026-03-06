// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Sidebar Toggle Logic ---
    const hamburgerMenuBtn = document.getElementById('hamburger-menu');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        // Small timeout to allow display:block to apply before changing opacity
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
        }, 10);
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
        // Wait for transition to finish before hiding the element
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
    }

    // Event Listeners for Sidebar
    if (hamburgerMenuBtn) {
        hamburgerMenuBtn.addEventListener('click', openSidebar);
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Make closeSidebar globally available for the router if needed
    window.closeSidebar = closeSidebar;

    // --- Routing Logic ---
    const mainContent = document.getElementById('main-content');

    // Define routes and their content rendering functions
    const routes = {
        '': renderHome,
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/sube-konumlari': renderLocations,
        '/menu-icerikleri': renderMenu,
        '/fiyatlar': renderPrices
    };

    function router() {
        // Get the current hash, remove the '#' symbol
        let hash = window.location.hash.slice(1);

        // Find the matching route, default to 404 if not found
        let renderFunction = routes[hash] || render404;

        // Execute the rendering function and insert HTML
        mainContent.innerHTML = renderFunction();

        // Scroll to top on page change
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();

    // --- Data Models ---
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'Sıcak Kahveler', description: 'Yoğun ve sert İtalyan klasiği.' },
        { name: 'Cappuccino', price: 55, category: 'Sıcak Kahveler', description: 'Espresso, sıcak süt ve bol süt köpüğü.' },
        { name: 'Latte', price: 60, category: 'Sıcak Kahveler', description: 'Espresso ve bol sıcak süt.' },
        { name: 'Türk Kahvesi', price: 40, category: 'Sıcak Kahveler', description: 'Geleneksel cezvede ağır ateşte pişirilmiş.' },
        { name: 'Çay', price: 25, category: 'Sıcak İçecekler', description: 'Taze demlenmiş ince belli bardakta.' },
        { name: 'Cheesecake', price: 70, category: 'Tatlılar', description: 'Orman meyvesi soslu fırınlanmış cheesecake.' },
        { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar', description: 'Tereyağlı, çıtır çıtır taze kruvasan.' },
        { name: 'Sandviç', price: 80, category: 'Atıştırmalıklar', description: 'Taze ekmek arası peynir ve yeşillikler.' },
        { name: 'Soğuk Kahve', price: 65, category: 'Soğuk Kahveler', description: 'Buzlu, ferahlatıcı kahve.' },
        { name: 'Limonata', price: 35, category: 'Soğuk İçecekler', description: 'Ev yapımı, nane ve taze limonla hazırlanmış.' }
    ];

    // --- Page Rendering Functions ---
    function renderHome() {
        return `
            <div class="flex flex-col items-center text-center">
                <h1 class="text-4xl md:text-6xl font-heading text-coffee-dark mb-4 font-bold">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-xl text-gray-700 mb-8 max-w-2xl">En iyi çekirdeklerden özenle hazırlanan kahvelerimiz ve taze atıştırmalıklarımızla size eşsiz bir deneyim sunuyoruz.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Fincanı" class="rounded-xl shadow-md w-full max-w-3xl object-cover h-64 sm:h-96">
                <a href="#/menu-icerikleri" class="mt-8 bg-coffee-dark text-cream px-6 py-3 rounded-full text-lg font-bold hover:bg-coffee-medium transition shadow-sm">Menümüzü İnceleyin</a>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div>
                <h1 class="page-title">Hakkımızda</h1>
                <div class="card space-y-4 text-gray-700 leading-relaxed text-lg">
                    <p>Kahve Dükkanı olarak, kahveye olan tutkumuzu sizinle paylaşmak için 2010 yılında yola çıktık.</p>
                    <p>Dünyanın dört bir yanından özenle seçilmiş, sürdürülebilir tarım sertifikalı kahve çekirdeklerini kendi kavurma tesisimizde işliyoruz. Amacımız sadece kahve satmak değil, her yudumda size benzersiz bir lezzet ve huzur anı sunmaktır.</p>
                    <p>Modern, minimalist ve sıcak atmosferimizde, dostlarınızla sohbet edebilir, kitabınızı okuyabilir veya sakin bir şekilde çalışabilirsiniz. Sizi de bu ailenin bir parçası olmaya davet ediyoruz.</p>
                </div>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div>
                <h1 class="page-title">Destek Merkezi</h1>
                <div class="card space-y-6">
                    <div>
                        <h2 class="text-2xl font-heading text-coffee-dark mb-2">Sıkça Sorulan Sorular</h2>
                        <div class="space-y-4">
                            <details class="bg-cream-light p-4 rounded cursor-pointer">
                                <summary class="font-bold text-coffee-dark">Siparişlerimi nasıl takip edebilirim?</summary>
                                <p class="mt-2 text-gray-700">Online siparişleriniz için uygulamamız üzerinden "Siparişlerim" sekmesini kullanabilirsiniz.</p>
                            </details>
                            <details class="bg-cream-light p-4 rounded cursor-pointer">
                                <summary class="font-bold text-coffee-dark">Sadakat programınız var mı?</summary>
                                <p class="mt-2 text-gray-700">Evet, Kahve Dükkanı kartınız ile her 10 kahve alımında 1 kahve hediye ediyoruz.</p>
                            </details>
                            <details class="bg-cream-light p-4 rounded cursor-pointer">
                                <summary class="font-bold text-coffee-dark">Vegan süt seçenekleriniz mevcut mu?</summary>
                                <p class="mt-2 text-gray-700">Tüm kahvelerimizde badem sütü, yulaf sütü ve soya sütü alternatiflerimiz bulunmaktadır.</p>
                            </details>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-heading text-coffee-dark mb-2">Bize Ulaşın</h2>
                        <p class="text-gray-700 mb-4">Sorun veya önerileriniz için destek ekibimiz 7/24 hizmetinizdedir.</p>
                        <a href="mailto:destek@kahvedukkani.com" class="text-blue-600 hover:underline">destek@kahvedukkani.com</a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div>
                <h1 class="page-title">İletişim</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="card">
                        <h2 class="text-2xl font-heading text-coffee-dark mb-4">İletişim Bilgileri</h2>
                        <ul class="space-y-4 text-gray-700 text-lg">
                            <li class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Kahve Sokak No: 15, Moda, Kadıköy, İstanbul</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+90 (216) 123 45 67</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>iletisim@kahvedukkani.com</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card">
                        <h2 class="text-2xl font-heading text-coffee-dark mb-4">Mesaj Gönderin</h2>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-gray-700 mb-1" for="name">İsim Soyisim</label>
                                <input class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-coffee-dark" type="text" id="name" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-1" for="email">E-posta</label>
                                <input class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-coffee-dark" type="email" id="email" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-1" for="message">Mesajınız</label>
                                <textarea class="w-full border border-gray-300 rounded p-2 h-24 focus:outline-none focus:border-coffee-dark" id="message" required></textarea>
                            </div>
                            <button class="bg-coffee-dark text-cream px-4 py-2 rounded hover:bg-coffee-medium transition w-full font-bold" type="submit">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLocations() {
        return `
            <div>
                <h1 class="page-title">Şube Konumlarımız</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="card border-l-4 border-coffee-dark">
                        <h2 class="text-xl font-heading text-coffee-dark font-bold mb-2">Moda Merkez Şubesi</h2>
                        <p class="text-gray-700 mb-2">Kahve Sokak No: 15, Moda, Kadıköy, İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 07:00 - 23:00</p>
                    </div>
                    <div class="card border-l-4 border-coffee-dark">
                        <h2 class="text-xl font-heading text-coffee-dark font-bold mb-2">Beşiktaş Şubesi</h2>
                        <p class="text-gray-700 mb-2">Çarşı İçi Cad. No: 42, Beşiktaş, İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 00:00</p>
                    </div>
                    <div class="card border-l-4 border-coffee-dark">
                        <h2 class="text-xl font-heading text-coffee-dark font-bold mb-2">Nişantaşı Şubesi</h2>
                        <p class="text-gray-700 mb-2">Valikonağı Cad. No: 120, Şişli, İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 07:30 - 22:30</p>
                    </div>
                    <div class="card border-l-4 border-coffee-dark">
                        <h2 class="text-xl font-heading text-coffee-dark font-bold mb-2">Alsancak Şubesi</h2>
                        <p class="text-gray-700 mb-2">Kıbrıs Şehitleri Cad. No: 85, Konak, İzmir</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 23:30</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        let menuHtml = `<div><h1 class="page-title">Menü İçerikleri</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

        menuItems.forEach(item => {
            menuHtml += `
                <div class="card flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center border-b border-coffee-light pb-2 mb-2">
                            <h2 class="text-xl font-heading text-coffee-dark font-bold">${item.name}</h2>
                            <span class="text-lg font-bold text-coffee-medium">${item.price}₺</span>
                        </div>
                        <p class="text-sm text-gray-500 uppercase mb-2">${item.category}</p>
                        <p class="text-gray-700">${item.description}</p>
                    </div>
                </div>
            `;
        });

        menuHtml += `</div></div>`;
        return menuHtml;
    }

    function renderPrices() {
        let priceHtml = `
            <div>
                <h1 class="page-title">Fiyatlar</h1>
                <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-coffee-dark text-cream">
                                <th class="py-4 px-6 font-heading text-lg">Ürün</th>
                                <th class="py-4 px-6 font-heading text-lg">Kategori</th>
                                <th class="py-4 px-6 font-heading text-lg text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        menuItems.forEach((item, index) => {
            let rowClass = index % 2 === 0 ? 'bg-cream-light' : 'bg-white';
            priceHtml += `
                <tr class="${rowClass} border-b hover:bg-gray-100 transition">
                    <td class="py-3 px-6 text-coffee-dark font-bold">${item.name}</td>
                    <td class="py-3 px-6 text-gray-600">${item.category}</td>
                    <td class="py-3 px-6 text-right font-bold text-coffee-medium text-lg">${item.price}₺</td>
                </tr>
            `;
        });

        priceHtml += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        return priceHtml;
    }

    function render404() {
        return `
            <div class="text-center py-20">
                <h1 class="text-6xl font-heading text-coffee-dark font-bold mb-4">404</h1>
                <p class="text-2xl text-gray-700 mb-8">Aradığınız sayfa bulunamadı.</p>
                <a href="#/" class="bg-coffee-dark text-cream px-6 py-3 rounded-full hover:bg-coffee-medium transition">Ana Sayfaya Dön</a>
            </div>
        `;
    }

});
