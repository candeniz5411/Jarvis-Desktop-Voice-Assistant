document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('#nav-links a');

    // Menu Data
    const menuData = [
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

    // Toggle Sidebar
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

    // Close sidebar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Routing
    const routes = {
        '': renderHome,
        '#about': renderAbout,
        '#support': renderSupport,
        '#contact': renderContact,
        '#locations': renderLocations,
        '#menu-items': renderMenuItems,
        '#prices': renderPrices
    };

    function router() {
        const hash = window.location.hash;
        const renderFunction = routes[hash] || renderHome;
        app.innerHTML = '';
        app.appendChild(renderFunction());
    }

    window.addEventListener('hashchange', router);

    // Initial Render
    router();

    // Pages
    function renderHome() {
        const div = document.createElement('div');
        div.className = 'text-center animate-fade-in-up';
        div.innerHTML = `
            <h2 class="text-3xl md:text-5xl mb-6">Kafe Keyfi'ne Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">En iyi kahve çekirdekleri ve taptaze atıştırmalıklarla dolu sıcacık ortamımıza davetlisiniz.</p>
            <div class="relative w-full max-w-2xl mx-auto h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-full object-cover">
            </div>
        `;
        return div;
    }

    function renderAbout() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';
        div.innerHTML = `
            <h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">Hakkında</h2>
            <p class="text-lg text-gray-800 leading-relaxed mb-4">Kafe Keyfi olarak 2010 yılından beri sizlere en kaliteli kahve deneyimini sunmak için çalışıyoruz. Özenle seçilmiş kahve çekirdeklerimiz ve günlük taze hazırlanan atıştırmalıklarımızla, gününüzü güzelleştirmeyi amaçlıyoruz.</p>
            <p class="text-lg text-gray-800 leading-relaxed">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde hissedebilecekleri sıcak ve samimi bir ortam yaratmaktır.</p>
        `;
        return div;
    }

    function renderSupport() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';
        div.innerHTML = `
            <h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">Destek</h2>
            <p class="text-lg text-gray-800 leading-relaxed mb-4">Siparişlerinizle veya deneyiminizle ilgili bir sorun mu yaşıyorsunuz? Size yardımcı olmak için buradayız.</p>
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ödeme seçenekleri nelerdir?</li>
                    <li>Vegan/Glutensiz ürünleriniz var mı?</li>
                    <li>Rezervasyon yaptırabilir miyim?</li>
                </ul>
                <p class="mt-4 text-sm text-gray-600">Daha fazla yardım için lütfen İletişim sayfasından bize ulaşın.</p>
            </div>
        `;
        return div;
    }

    function renderContact() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';
        div.innerHTML = `
            <h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><span class="font-bold">Adres:</span> Kahveciler Sok. No:1, İstanbul</p>
                    <p class="mb-2"><span class="font-bold">Telefon:</span> +90 212 555 0123</p>
                    <p class="mb-2"><span class="font-bold">E-posta:</span> info@kafekeyfi.com</p>
                    <div class="mt-6">
                        <h4 class="font-bold mb-2">Çalışma Saatleri</h4>
                        <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                        <p>Hafta Sonu: 09:00 - 23:00</p>
                    </div>
                </div>
                <form class="bg-white p-6 rounded-lg shadow-md border border-gray-200" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">İsim</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cafe-dark" id="name" type="text" placeholder="İsminiz">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mesaj</label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cafe-dark" id="message" rows="4" placeholder="Mesajınız"></textarea>
                    </div>
                    <button class="bg-cafe-dark hover:bg-opacity-90 text-cafe-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors" type="submit">
                        Gönder
                    </button>
                </form>
            </div>
        `;
        return div;
    }

    function renderLocations() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';
        div.innerHTML = `
            <h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">Şube Konumları</h2>
            <div class="grid sm:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 class="text-xl font-bold mb-2 text-cafe-dark">Merkez Şube</h3>
                    <p class="text-gray-700 mb-1">Kahveciler Sok. No:1</p>
                    <p class="text-gray-700">Kadıköy, İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 class="text-xl font-bold mb-2 text-cafe-dark">Sahil Şubesi</h3>
                    <p class="text-gray-700 mb-1">Deniz Yolu Cad. No:45</p>
                    <p class="text-gray-700">Beşiktaş, İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 class="text-xl font-bold mb-2 text-cafe-dark">AVM Şubesi</h3>
                    <p class="text-gray-700 mb-1">Büyük AVM 2. Kat</p>
                    <p class="text-gray-700">Şişli, İstanbul</p>
                </div>
            </div>
        `;
        return div;
    }

    function renderMenuItems() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';

        let itemsHTML = '<h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">Menü İçerikleri</h2><div class="grid sm:grid-cols-2 gap-4">';
        menuData.forEach(item => {
            itemsHTML += `
                <div class="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-center">
                    <div class="w-2 h-2 rounded-full bg-cafe-dark mr-3"></div>
                    <span class="text-lg font-medium text-gray-800">${item.name}</span>
                </div>
            `;
        });
        itemsHTML += '</div>';

        div.innerHTML = itemsHTML;
        return div;
    }

    function renderPrices() {
        const div = document.createElement('div');
        div.className = 'animate-fade-in-up max-w-3xl mx-auto';

        let pricesHTML = '<h2 class="text-3xl border-b-2 border-cafe-dark pb-2 mb-6">Fiyatlar</h2><div class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"><ul class="divide-y divide-gray-200">';
        menuData.forEach(item => {
            pricesHTML += `
                <li class="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span class="text-lg font-medium text-gray-800">${item.name}</span>
                    <span class="text-xl font-bold text-cafe-dark">${item.price}</span>
                </li>
            `;
        });
        pricesHTML += '</ul></div>';

        div.innerHTML = pricesHTML;
        return div;
    }

    // Add simple animation styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.4s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
});
