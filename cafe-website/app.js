document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
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

    // DOM Elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Sidebar Toggle Logic
    const toggleSidebar = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            // Close
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        } else {
            // Open
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
        }
    };

    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleSidebar();
            }
        });
    });

    // Routing Logic
    const routes = {
        '': renderHome,
        '#': renderHome,
        '#hakkinda': renderHakkinda,
        '#destek': renderDestek,
        '#iletisim': renderIletisim,
        '#sube-konumlari': renderSubeKonumlari,
        '#menu-icerikleri': renderMenuIcerikleri,
        '#fiyatlar': renderFiyatlar
    };

    function router() {
        const hash = window.location.hash;
        const renderFunc = routes[hash] || renderHome;
        mainContent.innerHTML = renderFunc();
    }

    // View Renderers
    function renderHome() {
        return `
            <div class="text-center animate-fade-in">
                <h2 class="font-heading text-4xl font-bold mb-4">Kahve Dükkanı'na Hoş Geldiniz!</h2>
                <p class="mb-8 text-lg text-brown opacity-80 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla gününüzü güzelleştirmek için buradayız.</p>
                <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı" class="w-full max-w-4xl mx-auto rounded-xl shadow-2xl object-cover h-64 md:h-96">
            </div>
        `;
    }

    function renderHakkinda() {
        return `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown border-b-2 border-brown pb-2">Hakkımızda</h2>
                <p class="mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri, kahve tutkunlarına en kaliteli kahve deneyimini sunmayı amaçlıyoruz. Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini kendi kavurma tesisimizde işliyor ve taptaze olarak sizlere ulaştırıyoruz.</p>
                <p class="leading-relaxed">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin keyifle vakit geçirebilecekleri, sıcak ve samimi bir ortam yaratmaktır.</p>
            </div>
        `;
    }

    function renderDestek() {
        return `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown border-b-2 border-brown pb-2">Destek</h2>
                <p class="mb-6 leading-relaxed">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa aşağıdaki yollarla destek ekibimize ulaşabilirsiniz.</p>
                <div class="bg-cream p-4 rounded-lg border border-brown border-opacity-20">
                    <h3 class="font-bold text-xl mb-2 font-heading">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Siparişimi nasıl iptal edebilirim?</li>
                        <li>Glutensiz ürünleriniz var mı?</li>
                        <li>Sadakat programı nasıl çalışıyor?</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function renderIletisim() {
        return `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown border-b-2 border-brown pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-bold text-xl mb-4 font-heading">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Kadıköy, İstanbul</p>
                        <p class="mb-2"><strong>Telefon:</strong> 0216 123 45 67</p>
                        <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                        <p class="mt-4 text-sm opacity-80">Çalışma Saatleri: Her gün 08:00 - 22:00</p>
                    </div>
                    <div>
                        <form class="flex flex-col gap-4">
                            <input type="text" placeholder="Adınız" class="p-2 border border-brown border-opacity-30 rounded focus:outline-none focus:border-brown">
                            <input type="email" placeholder="E-posta Adresiniz" class="p-2 border border-brown border-opacity-30 rounded focus:outline-none focus:border-brown">
                            <textarea placeholder="Mesajınız" rows="4" class="p-2 border border-brown border-opacity-30 rounded focus:outline-none focus:border-brown"></textarea>
                            <button type="button" class="bg-brown text-cream py-2 px-4 rounded hover:opacity-90 transition font-bold">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    function renderSubeKonumlari() {
        return `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown border-b-2 border-brown pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-brown border-opacity-20 p-4 rounded-lg hover:shadow-md transition">
                        <h3 class="font-bold text-xl mb-2 font-heading text-brown">Kadıköy Merkez</h3>
                        <p>Caferağa Mah. Moda Cad. No: 1</p>
                    </div>
                    <div class="border border-brown border-opacity-20 p-4 rounded-lg hover:shadow-md transition">
                        <h3 class="font-bold text-xl mb-2 font-heading text-brown">Beşiktaş</h3>
                        <p>Sinanpaşa Mah. Şair Nedim Cad. No: 15</p>
                    </div>
                    <div class="border border-brown border-opacity-20 p-4 rounded-lg hover:shadow-md transition">
                        <h3 class="font-bold text-xl mb-2 font-heading text-brown">Karaköy</h3>
                        <p>Kemankeş Mah. Mumhane Cad. No: 34</p>
                    </div>
                    <div class="border border-brown border-opacity-20 p-4 rounded-lg hover:shadow-md transition">
                        <h3 class="font-bold text-xl mb-2 font-heading text-brown">Nişantaşı</h3>
                        <p>Teşvikiye Mah. Valikonağı Cad. No: 50</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenuIcerikleri() {
        let menuHTML = `
            <div class="max-w-4xl mx-auto animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-8 text-center text-brown">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        `;

        menuItems.forEach(item => {
            menuHTML += `
                <div class="bg-white p-6 rounded-lg shadow flex justify-between items-center border-l-4 border-brown hover:shadow-md transition">
                    <div>
                        <h3 class="font-bold text-xl font-heading text-brown">${item.name}</h3>
                        <p class="text-sm opacity-70 mt-1">Özenle hazırlanmış günlük lezzet.</p>
                    </div>
                    <span class="font-bold text-lg bg-cream px-3 py-1 rounded text-brown">${item.price}₺</span>
                </div>
            `;
        });

        menuHTML += `
                </div>
            </div>
        `;
        return menuHTML;
    }

    function renderFiyatlar() {
        let fiyatlarHTML = `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown border-b-2 border-brown pb-2">Fiyat Listesi</h2>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown text-cream">
                            <th class="p-3 rounded-tl-lg">Ürün Adı</th>
                            <th class="p-3 text-right rounded-tr-lg">Fiyat (₺)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        menuItems.forEach((item, index) => {
            const rowClass = index % 2 === 0 ? 'bg-cream bg-opacity-30' : 'bg-white';
            fiyatlarHTML += `
                <tr class="${rowClass} border-b border-brown border-opacity-10 hover:bg-cream transition">
                    <td class="p-3 font-medium">${item.name}</td>
                    <td class="p-3 text-right font-bold">${item.price}₺</td>
                </tr>
            `;
        });

        fiyatlarHTML += `
                    </tbody>
                </table>
                <p class="mt-4 text-sm opacity-70 text-center">* Fiyatlarımıza KDV dahildir.</p>
            </div>
        `;
        return fiyatlarHTML;
    }

    // Initialize router and listen for hash changes
    window.addEventListener('hashchange', router);
    router(); // Initial render
});