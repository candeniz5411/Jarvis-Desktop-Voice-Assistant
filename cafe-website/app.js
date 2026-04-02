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

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');
    const contentDiv = document.getElementById('content');

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

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    function renderView() {
        const hash = window.location.hash || '#';
        let html = '';

        switch (hash) {
            case '#hakkinda':
                html = `
                    <div class="max-w-2xl mx-auto text-center py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6">Hakkında</h2>
                        <p class="text-lg leading-relaxed mb-4">Kahve Dükkanı, 2023 yılında en kaliteli çekirdekleri özenle işleyerek kahve severlerle buluşturmak amacıyla kurulmuştur.</p>
                        <p class="text-lg leading-relaxed">Modern, minimalist ve sıcak atmosferimizde, misafirlerimize unutulmaz bir deneyim sunmayı hedefliyoruz.</p>
                    </div>
                `;
                break;
            case '#destek':
                html = `
                    <div class="max-w-2xl mx-auto py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6 text-center">Destek</h2>
                        <p class="text-lg mb-4">Her türlü soru, görüş ve önerileriniz için buradayız. Sıkça sorulan sorulara göz atabilir veya bizimle doğrudan iletişime geçebilirsiniz.</p>
                        <ul class="list-disc pl-6 space-y-2">
                            <li>Sipariş takibi</li>
                            <li>İade ve değişim politikaları</li>
                            <li>Toptan kahve alımı</li>
                        </ul>
                    </div>
                `;
                break;
            case '#iletisim':
                html = `
                    <div class="max-w-2xl mx-auto text-center py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6">İletişim</h2>
                        <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No:1, Kadıköy, İstanbul</p>
                        <p class="text-lg mb-2"><strong>Telefon:</strong> 0216 123 45 67</p>
                        <p class="text-lg mb-4"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                        <p class="text-lg text-brown-900">Çalışma Saatleri: Her gün 08:00 - 22:00</p>
                    </div>
                `;
                break;
            case '#subeler':
                html = `
                    <div class="max-w-2xl mx-auto py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6 text-center">Şube Konumları</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-cream p-6 rounded shadow border border-brown-900/10">
                                <h3 class="font-bold text-xl mb-2 text-brown-900">Kadıköy Şubesi</h3>
                                <p>Moda Caddesi, No:10</p>
                            </div>
                            <div class="bg-cream p-6 rounded shadow border border-brown-900/10">
                                <h3 class="font-bold text-xl mb-2 text-brown-900">Beşiktaş Şubesi</h3>
                                <p>Barbaros Bulvarı, No:45</p>
                            </div>
                            <div class="bg-cream p-6 rounded shadow border border-brown-900/10">
                                <h3 class="font-bold text-xl mb-2 text-brown-900">Nişantaşı Şubesi</h3>
                                <p>Teşvikiye Caddesi, No:22</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case '#menu':
                html = `
                    <div class="max-w-2xl mx-auto py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6 text-center">Menü İçerikleri</h2>
                        <ul class="bg-cream rounded shadow p-6 border border-brown-900/10 space-y-3">
                            ${menuItems.map(item => `<li class="text-lg border-b border-brown-900/10 pb-2 last:border-0">${item.name}</li>`).join('')}
                        </ul>
                    </div>
                `;
                break;
            case '#fiyatlar':
                html = `
                    <div class="max-w-2xl mx-auto py-8">
                        <h2 class="font-serif text-3xl font-bold text-brown-900 mb-6 text-center">Fiyatlar</h2>
                        <ul class="bg-cream rounded shadow p-6 border border-brown-900/10 space-y-3">
                            ${menuItems.map(item => `
                                <li class="flex justify-between items-center text-lg border-b border-brown-900/10 pb-2 last:border-0">
                                    <span>${item.name}</span>
                                    <span class="font-bold text-brown-900">${item.price}₺</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
                break;
            case '#':
            default:
                // Check if Cover_pic.jpg exists and use it, else fallback
                html = `
                    <div class="max-w-3xl mx-auto flex flex-col items-center justify-center py-12 text-center">
                        <!-- Simple logo icon (coffee cup) -->
                        <div class="mb-6 bg-brown-900 text-cream p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v8l9-11h-7z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <h2 class="font-serif text-4xl font-bold text-brown-900 mb-4">Hoş Geldiniz</h2>
                        <p class="text-xl mb-8">En iyi kahveler, en sıcak atmosfer...</p>

                        <div class="w-full max-w-2xl rounded-lg overflow-hidden shadow-xl">
                            <!-- Visual coffee photo -->
                            <img src="../Images/Cover_pic.jpg" alt="Kahve Fotoğrafı" class="w-full h-auto object-cover max-h-96 fallback-image" onerror="this.src='https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800';">
                        </div>
                    </div>
                `;
                break;
        }

        contentDiv.innerHTML = html;
    }

    // Handle routing
    window.addEventListener('hashchange', renderView);
    // Initial render
    renderView();
});
