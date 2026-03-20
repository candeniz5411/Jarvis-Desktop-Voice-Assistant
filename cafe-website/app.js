document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Sidebar Functions
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        // Small delay to allow display:block to apply before changing opacity
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for transition
        document.body.style.overflow = '';
    };

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Update active state
            navLinks.forEach(l => l.classList.remove('active', 'border-l-4', 'border-cafeBrown', 'font-bold'));
            link.classList.add('active', 'border-l-4', 'border-cafeBrown', 'font-bold');
            closeSidebar();
        });
    });

    // --- Data ---
    const menuItems = [
        { name: 'Espresso', price: 45 },
        { name: 'Cappuccino', price: 55 },
        { name: 'Latte', price: 60 },
        { name: 'Türk Kahvesi', price: 40 },
        { name: 'Çay', price: 25 },
        { name: 'Cheesecake', price: 70 },
        { name: 'Kruvasan', price: 50 },
        { name: 'Sandviç', price: 80 },
        { name: 'Soğuk Kahve', price: 65 },
        { name: 'Limonata', price: 35 }
    ];

    // --- Page Templates ---
    const pages = {
        '#/ana-sayfa': () => `
            <div class="flex flex-col items-center justify-center space-y-8 animate-fade-in text-center">
                <h1 class="text-4xl md:text-5xl font-serif font-bold text-cafeBrown">Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-gray-700 max-w-2xl">
                    Şehrin en iyi kahvesini yudumlamak, taze atıştırmalıklarımızın tadını çıkarmak ve
                    sıcak atmosferimizde dinlenmek için doğru yerdesiniz. Kahve Dükkanı'na hoş geldiniz!
                </p>

                <!-- Placeholder Image (Using Unsplash source since no local image was found in cafe project) -->
                <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl mt-8">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200"
                         alt="Görsel bir kahve fotoğrafı"
                         class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                         loading="lazy">
                </div>
            </div>
        `,
        '#/hakkinda': () => `
            <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">Hakkımızda</h2>
                <div class="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-4">
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Kahve Dükkanı olarak 2010 yılından beri sizlere en kaliteli kahve çekirdeklerini sunmak için dünyanın dört bir yanından özenle seçilmiş ürünleri getiriyoruz.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Misyonumuz, sadece kahve satmak değil, her yudumda size bir deneyim yaşatmaktır. Modern ve minimalist yaklaşımımızla, karmaşadan uzak, huzurlu bir mola vermenizi sağlamayı amaçlıyoruz.
                    </p>
                </div>
            </div>
        `,
        '#/destek': () => `
            <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">Destek</h2>
                <div class="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <h3 class="text-xl font-bold mb-4 font-serif">Sıkça Sorulan Sorular</h3>
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-lg mb-1">Wi-Fi hizmetiniz var mı?</h4>
                            <p class="text-gray-600">Evet, tüm şubelerimizde misafirlerimize ücretsiz ve hızlı Wi-Fi hizmeti sunmaktayız.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-1">Vegan seçenekleriniz bulunuyor mu?</h4>
                            <p class="text-gray-600">Kesinlikle! Menümüzde bitkisel süt seçenekleri ve vegan atıştırmalıklar mevcuttur.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-1">Evcil hayvan getirebilir miyiz?</h4>
                            <p class="text-gray-600">Dış mekan oturma alanlarımızda evcil dostlarınızı ağırlamaktan memnuniyet duyarız.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '#/iletisim': () => `
            <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">İletişim</h2>
                <div class="bg-white p-6 md:p-8 rounded-xl shadow-md grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 font-serif">Bize Ulaşın</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-cafeBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                0 (212) 555 01 23
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-cafeBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                merhaba@kahvedukkani.com
                            </li>
                            <li class="flex items-start gap-3 mt-4">
                                <svg class="w-5 h-5 text-cafeBrown mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Kahve Meydanı Sokak No: 42<br>Kadıköy, İstanbul</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-sm font-medium mb-1">Adınız</label>
                                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafeBrown focus:border-cafeBrown" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Mesajınız</label>
                                <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafeBrown focus:border-cafeBrown" required></textarea>
                            </div>
                            <button type="submit" class="w-full bg-cafeBrown text-cafeCream py-2 rounded-md font-bold hover:bg-opacity-90 transition-colors">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `,
        '#/sube-konumlari': () => `
            <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">Şube Konumları</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="h-40 bg-gray-200 flex items-center justify-center">
                            <span class="text-gray-500 font-serif">Kadıköy Şubesi (Merkez)</span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-lg mb-2">Moda Cad.</h3>
                            <p class="text-sm text-gray-600 mb-3">Moda Caddesi No: 42, Kadıköy / İstanbul</p>
                            <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-bold">Açık</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="h-40 bg-gray-200 flex items-center justify-center">
                            <span class="text-gray-500 font-serif">Beşiktaş Şubesi</span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-lg mb-2">Çarşı İçi</h3>
                            <p class="text-sm text-gray-600 mb-3">Köyiçi Meydanı Sok. No: 12, Beşiktaş / İstanbul</p>
                            <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-bold">Açık</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="h-40 bg-gray-200 flex items-center justify-center">
                            <span class="text-gray-500 font-serif">Karaköy Şubesi</span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-lg mb-2">Kemankeş Mah.</h3>
                            <p class="text-sm text-gray-600 mb-3">Rıhtım Cad. No: 8, Beyoğlu / İstanbul</p>
                            <span class="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-bold">Yakında</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '#/menu-icerikleri': () => {
            const listItemsHtml = menuItems.map(item => `
                <div class="flex justify-between items-center p-4 border-b border-gray-100 hover:bg-cafeCream/30 transition-colors">
                    <span class="text-lg font-medium">${item.name}</span>
                    <span class="text-cafeBrown/50 text-sm italic">İçerik detayı yakında...</span>
                </div>
            `).join('');

            return `
                <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
                    <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">Menü İçerikleri</h2>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="p-6 bg-cafeBrown text-cafeCream text-center">
                            <p class="font-serif italic text-lg">Özenle seçilmiş malzemelerle hazırlanan lezzetlerimiz</p>
                        </div>
                        <div class="flex flex-col">
                            ${listItemsHtml}
                        </div>
                    </div>
                </div>
            `;
        },
        '#/fiyatlar': () => {
            const priceItemsHtml = menuItems.map(item => `
                <div class="flex justify-between items-center p-4 border-b border-gray-100 hover:bg-cafeCream/30 transition-colors group">
                    <span class="text-lg font-medium">${item.name}</span>
                    <div class="flex items-center gap-4">
                        <div class="h-[1px] w-12 sm:w-32 bg-gray-300 group-hover:bg-cafeBrown/50 transition-colors hidden sm:block"></div>
                        <span class="text-xl font-bold font-serif bg-cafeCream px-3 py-1 rounded-md text-cafeBrown shadow-sm">
                            ${item.price}₺
                        </span>
                    </div>
                </div>
            `).join('');

            return `
                <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
                    <h2 class="text-3xl font-serif font-bold border-b-2 border-cafeBrown/20 pb-4">Fiyat Listesi</h2>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="flex flex-col p-2">
                            ${priceItemsHtml}
                        </div>
                        <div class="p-4 bg-gray-50 text-sm text-center text-gray-500 border-t border-gray-200">
                            Fiyatlarımıza KDV dahildir. Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}
                        </div>
                    </div>
                </div>
            `;
        }
    };

    // --- Router Logic ---
    const router = () => {
        // Default route
        let path = window.location.hash;
        if (!path || path === '' || path === '#/') {
            path = '#/ana-sayfa';
            window.location.hash = path;
            return; // router will be called again by the hashchange event
        }

        // Render Page
        const render = pages[path];
        if (render) {
            // Add a small fade out effect before swapping content
            appContent.style.opacity = '0';

            setTimeout(() => {
                appContent.innerHTML = render();
                // Add fade-in animation class to new content
                appContent.firstElementChild?.classList.add('transition-opacity', 'duration-500', 'opacity-100');
                appContent.style.opacity = '1';
            }, 150);

            // Update Active Link State on Initial Load / Browser Navigation
            navLinks.forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('active', 'border-l-4', 'border-cafeBrown', 'font-bold');
                } else {
                    link.classList.remove('active', 'border-l-4', 'border-cafeBrown', 'font-bold');
                }
            });

        } else {
            // 404
            appContent.innerHTML = `
                <div class="text-center py-20">
                    <h2 class="text-4xl font-serif font-bold text-cafeBrown mb-4">404</h2>
                    <p class="text-xl">Sayfa bulunamadı.</p>
                    <a href="#/ana-sayfa" class="inline-block mt-6 px-6 py-2 bg-cafeBrown text-cafeCream rounded-md hover:bg-opacity-90 transition-colors">Ana Sayfaya Dön</a>
                </div>
            `;
        }
    };

    // Initialize router
    window.addEventListener('hashchange', router);

    // Slight delay to ensure DOM is fully ready before initial render
    setTimeout(router, 50);

    // Initial Active link setup based on hash (or lack thereof)
    let currentHash = window.location.hash || '#/ana-sayfa';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active', 'border-l-4', 'border-cafeBrown', 'font-bold');
        }
    });
});