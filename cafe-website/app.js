document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const appContainer = document.getElementById('app');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- Sidebar Toggle Logic ---
    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a navigation link is clicked (useful for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
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
        { name: 'Limonata', price: 35 },
    ];

    // --- Pages Content ---
    const pages = {
        '': `
            <div class="text-center animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Kafe Logo'ya Hoş Geldiniz</h2>
                <p class="text-lg text-brown-700 mb-8 max-w-2xl mx-auto">Sıcak bir kahve, taze atıştırmalıklar ve huzurlu bir ortam için doğru yerdesiniz. Sizi ağırlamaktan mutluluk duyarız.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-brown-200">
                    <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-[500px]">
                </div>
            </div>
        `,
        '#anasayfa': `
            <div class="text-center animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Kafe Logo'ya Hoş Geldiniz</h2>
                <p class="text-lg text-brown-700 mb-8 max-w-2xl mx-auto">Sıcak bir kahve, taze atıştırmalıklar ve huzurlu bir ortam için doğru yerdesiniz. Sizi ağırlamaktan mutluluk duyarız.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-brown-200">
                    <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-[500px]">
                </div>
            </div>
        `,
        '#hakkinda': `
            <div class="animate-fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="section-title">Hakkımızda</h2>
                <p class="text-brown-800 leading-relaxed mb-4 text-lg">
                    2010 yılından beri şehrin kalbinde, en kaliteli kahve çekirdeklerini özenle kavurarak sizlere sunuyoruz. Amacımız sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz, çalışırken ilham alabileceğiniz sıcak bir yuva olmaktır.
                </p>
                <p class="text-brown-800 leading-relaxed text-lg">
                    Tutkumuz kahve, önceliğimiz ise misafirlerimizin memnuniyetidir. Her fincanda farklı bir hikaye anlatmayı hedefliyoruz.
                </p>
            </div>
        `,
        '#destek': `
            <div class="animate-fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="section-title">Destek</h2>
                <p class="text-brown-800 mb-6 text-lg">Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız, lütfen aşağıdaki formu doldurarak bize ulaşın.</p>
                <form class="space-y-4">
                    <div>
                        <label class="block text-brown-800 font-medium mb-1">Adınız Soyadınız</label>
                        <input type="text" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream">
                    </div>
                    <div>
                        <label class="block text-brown-800 font-medium mb-1">E-posta Adresiniz</label>
                        <input type="email" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream">
                    </div>
                    <div>
                        <label class="block text-brown-800 font-medium mb-1">Mesajınız</label>
                        <textarea rows="4" class="w-full p-3 border border-brown-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 bg-cream"></textarea>
                    </div>
                    <button type="button" class="bg-brown-800 text-cream px-6 py-3 rounded hover:bg-brown-900 transition-colors font-medium">Gönder</button>
                </form>
            </div>
        `,
        '#iletisim': `
            <div class="animate-fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="section-title">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Bize Ulaşın</h3>
                        <p class="text-brown-800 mb-1"><strong>Telefon:</strong> +90 (555) 123 45 67</p>
                        <p class="text-brown-800 mb-1"><strong>E-posta:</strong> info@kafelogo.com.tr</p>
                        <p class="text-brown-800 mt-4"><strong>Çalışma Saatleri:</strong></p>
                        <p class="text-brown-800">Pazartesi - Cuma: 08:00 - 22:00</p>
                        <p class="text-brown-800">Hafta Sonu: 09:00 - 23:00</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Sosyal Medya</h3>
                        <p class="text-brown-800 mb-1"><a href="#" class="hover:text-brown-600 underline">Instagram</a></p>
                        <p class="text-brown-800 mb-1"><a href="#" class="hover:text-brown-600 underline">Twitter (X)</a></p>
                        <p class="text-brown-800"><a href="#" class="hover:text-brown-600 underline">Facebook</a></p>
                    </div>
                </div>
            </div>
        `,
        '#subeler': `
            <div class="animate-fade-in max-w-4xl mx-auto">
                <h2 class="section-title">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-800">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Merkez Şube</h3>
                        <p class="text-brown-700">Atatürk Caddesi No: 45</p>
                        <p class="text-brown-700 mb-4">Kadıköy, İstanbul</p>
                        <button class="text-brown-600 font-medium hover:underline">Haritada Gör</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-800">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Sahil Şube</h3>
                        <p class="text-brown-700">Sahil Yolu Bulvarı No: 12</p>
                        <p class="text-brown-700 mb-4">Beşiktaş, İstanbul</p>
                        <button class="text-brown-600 font-medium hover:underline">Haritada Gör</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-brown-800">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Kampüs Şube</h3>
                        <p class="text-brown-700">Üniversite Mahallesi No: 8</p>
                        <p class="text-brown-700 mb-4">Beşiktaş, İstanbul</p>
                        <button class="text-brown-600 font-medium hover:underline">Haritada Gör</button>
                    </div>
                </div>
            </div>
        `,
        '#menu': `
            <div class="animate-fade-in max-w-4xl mx-auto">
                <h2 class="section-title">Menü İçerikleri</h2>
                <p class="text-brown-800 text-lg mb-8 text-center max-w-2xl mx-auto">Özenle seçilmiş malzemelerle hazırlanan lezzetli yiyecek ve içecek seçeneklerimiz.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-brown-100 hover:shadow-lg transition-shadow">
                            <div class="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <h3 class="text-xl font-bold text-brown-900">${item.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '#fiyatlar': `
            <div class="animate-fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-brown-100">
                <h2 class="section-title">Fiyatlar</h2>
                <div class="mt-6 w-full overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b-2 border-brown-800 text-brown-900">
                                <th class="py-3 px-4 font-bold text-lg">Ürün</th>
                                <th class="py-3 px-4 font-bold text-lg text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${menuItems.map((item, index) => `
                                <tr class="${index % 2 === 0 ? 'bg-cream bg-opacity-30' : ''} border-b border-brown-100 hover:bg-brown-50 transition-colors">
                                    <td class="py-4 px-4 text-brown-800 font-medium text-lg">${item.name}</td>
                                    <td class="py-4 px-4 text-brown-900 font-bold text-right text-lg">${item.price}₺</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // --- Routing ---
    function renderPage() {
        const hash = window.location.hash;

        // Default to home if hash is empty or not found
        const content = pages[hash] || pages[''];

        appContainer.innerHTML = content;

        // Update active state in sidebar
        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash || (hash === '' && link.getAttribute('href') === '#anasayfa')) {
                link.classList.add('bg-brown-200', 'font-bold');
                link.classList.remove('font-medium');
            } else {
                link.classList.remove('bg-brown-200', 'font-bold');
                link.classList.add('font-medium');
            }
        });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', renderPage);

    // Initial render
    renderPage();
});