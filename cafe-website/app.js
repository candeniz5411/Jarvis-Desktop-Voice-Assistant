document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const appContent = document.getElementById('app-content');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // --- Sidebar Toggle Logic ---
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }

    openSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when a link is clicked (for mobile friendliness)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
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

    // --- Routing and View Rendering ---

    const views = {
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/subeler': renderBranches,
        '/menu': renderMenu,
        '/fiyatlar': renderPrices
    };

    function renderView() {
        const hash = window.location.hash || '#/';
        const route = hash.substring(1);

        appContent.innerHTML = ''; // Clear current content
        window.scrollTo(0, 0); // Scroll to top

        const renderFunction = views[route];
        if (renderFunction) {
            appContent.appendChild(renderFunction());
        } else {
            appContent.innerHTML = `<h2 class="text-3xl font-serif text-center mt-10">404 - Sayfa Bulunamadı</h2>`;
        }
    }

    // Initial render
    window.addEventListener('hashchange', renderView);
    renderView(); // Call once on load

    // --- View Generators ---

    function createHeading(text) {
        const h2 = document.createElement('h2');
        h2.className = 'text-4xl font-serif text-center mb-8 text-brown-900 font-bold';
        h2.textContent = text;
        return h2;
    }

    function renderHome() {
        const container = document.createElement('div');
        container.className = 'flex flex-col items-center';

        const welcome = document.createElement('h2');
        welcome.className = 'text-4xl font-serif text-center mb-6 text-brown-900 font-bold';
        welcome.textContent = 'Cafe Serenity\'ye Hoş Geldiniz';

        const description = document.createElement('p');
        description.className = 'text-lg text-center mb-8 max-w-2xl text-gray-700';
        description.textContent = 'En taze kahve çekirdekleri ve enfes tatlılarımızla size huzur dolu bir mola sunuyoruz. Kalite ve lezzetin buluştuğu adres.';

        const image = document.createElement('img');
        image.src = './Images/cover.jpg'; // Relative path
        image.alt = 'Güzel bir kahve sunumu';
        image.className = 'w-full h-auto rounded-lg shadow-lg max-w-3xl object-cover';
        // Fallback styling if image fails to load
        image.onerror = function() {
            this.onerror = null;
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23795548%22%20%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22200%22%20font-family%3D%22Arial%22%20font-size%3D%2240%22%20fill%3D%22%23FFFDD0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EKahve G%C3%B6rseli%3C%2Ftext%3E%3C%2Fsvg%3E';
        };

        container.appendChild(welcome);
        container.appendChild(description);
        container.appendChild(image);
        return container;
    }

    function renderAbout() {
        const container = document.createElement('div');
        container.appendChild(createHeading('Hakkımızda'));

        const content = document.createElement('div');
        content.className = 'bg-white p-6 rounded-lg shadow text-gray-700 leading-relaxed max-w-3xl mx-auto';
        content.innerHTML = `
            <p class="mb-4">Cafe Serenity, 2010 yılında kahve tutkusunu bir yaşam tarzına dönüştürmek isteyen bir grup arkadaş tarafından kuruldu. Amacımız sadece kahve satmak değil, insanların günlük koşuşturmaca içinde nefes alabilecekleri sıcak ve samimi bir ortam yaratmaktır.</p>
            <p>Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini, ustalıkla kavurup sizlere sunuyoruz. Yanında sunduğumuz günlük taze tatlılarımız ve atıştırmalıklarımızla kahve deneyiminizi taçlandırıyoruz.</p>
        `;
        container.appendChild(content);
        return container;
    }

    function renderSupport() {
        const container = document.createElement('div');
        container.appendChild(createHeading('Destek'));

        const content = document.createElement('div');
        content.className = 'bg-white p-6 rounded-lg shadow max-w-3xl mx-auto';
        content.innerHTML = `
            <h3 class="text-xl font-bold mb-4 text-brown-900">Nasıl yardımcı olabiliriz?</h3>
            <p class="mb-4 text-gray-700">Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili her türlü sorunuz için buradayız. Sıkça sorulan soruları inceleyebilir veya bizimle iletişime geçebilirsiniz.</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Sipariş takibi</li>
                <li>İade ve değişim koşulları</li>
                <li>Alerjen bilgileri</li>
                <li>Kurumsal işbirlikleri</li>
            </ul>
        `;
        container.appendChild(content);
        return container;
    }

    function renderContact() {
        const container = document.createElement('div');
        container.appendChild(createHeading('İletişim'));

        const content = document.createElement('div');
        content.className = 'bg-white p-6 rounded-lg shadow max-w-3xl mx-auto flex flex-col md:flex-row gap-8';

        content.innerHTML = `
            <div class="flex-1">
                <h3 class="text-xl font-bold mb-4 text-brown-900">Bize Ulaşın</h3>
                <p class="mb-2 text-gray-700"><strong>Adres:</strong> Kahveciler Sokak No:42, Kadıköy / İstanbul</p>
                <p class="mb-2 text-gray-700"><strong>Telefon:</strong> +90 216 123 45 67</p>
                <p class="mb-4 text-gray-700"><strong>E-posta:</strong> info@cafeserenity.com</p>
                <h3 class="text-xl font-bold mb-2 text-brown-900">Çalışma Saatleri</h3>
                <p class="text-gray-700">Pazartesi - Cuma: 08:00 - 22:00</p>
                <p class="text-gray-700">Cumartesi - Pazar: 09:00 - 23:00</p>
            </div>
        `;
        container.appendChild(content);
        return container;
    }

    function renderBranches() {
        const container = document.createElement('div');
        container.appendChild(createHeading('Şube Konumları'));

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto';

        const branches = [
            { name: 'Kadıköy Merkez', desc: 'Kahveciler Sokak No:42, Kadıköy' },
            { name: 'Beşiktaş Çarşı', desc: 'Ihlamurdere Cad. No:15, Beşiktaş' },
            { name: 'Moda Sahil', desc: 'Moda Cad. No:88, Kadıköy' },
            { name: 'Karaköy', desc: 'Kemankeş Cad. No:20, Beyoğlu' }
        ];

        branches.forEach(branch => {
            const card = document.createElement('div');
            card.className = 'bg-white p-6 rounded-lg shadow border-t-4 border-brown-100';
            card.innerHTML = `
                <h3 class="text-xl font-bold mb-2 text-brown-900">${branch.name}</h3>
                <p class="text-gray-700">${branch.desc}</p>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
        return container;
    }

    function renderMenu() {
        const container = document.createElement('div');
        container.appendChild(createHeading('Menü İçerikleri'));

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto';

        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-lg shadow text-center text-lg font-medium text-brown-900';
            card.textContent = item.name;
            grid.appendChild(card);
        });

        container.appendChild(grid);
        return container;
    }

    function renderPrices() {
        const container = document.createElement('div');
        container.appendChild(createHeading('Fiyatlar'));

        const listContainer = document.createElement('div');
        listContainer.className = 'bg-white p-6 rounded-lg shadow max-w-2xl mx-auto';

        const ul = document.createElement('ul');
        ul.className = 'divide-y divide-gray-200';

        menuItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'py-3 flex justify-between items-center';
            li.innerHTML = `
                <span class="text-lg text-gray-800">${item.name}</span>
                <span class="text-lg font-bold text-brown-900">${item.price}₺</span>
            `;
            ul.appendChild(li);
        });

        listContainer.appendChild(ul);
        container.appendChild(listContainer);
        return container;
    }
});