document.addEventListener('DOMContentLoaded', () => {
    // Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContainer = document.getElementById('app');

    // Toggle Sidebar
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    });

    // Close Sidebar when clicking outside
    overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });

    // Content Database
    const content = {
        home: `
            <div class="text-center fade-in">
                <h2 class="text-4xl font-heading text-coffee-dark mb-4">Hoş Geldiniz!</h2>
                <p class="text-xl mb-8">En taze kahve çekirdekleri ve lezzetli tatlılarımızla sizleri bekliyoruz.</p>
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kahve" class="rounded-lg shadow-xl mx-auto max-w-full md:max-w-lg">
                <div class="mt-8">
                    <a href="#menu" class="bg-coffee-dark text-white py-2 px-6 rounded hover:bg-coffee-light transition duration-300">Menüyü İncele</a>
                </div>
            </div>
        `,
        about: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">Hakkımızda</h2>
                <p class="text-lg leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçip kavuruyoruz. Misyonumuz, her yudumda size benzersiz bir deneyim sunmaktır. Sıcak atmosferimiz ve güler yüzlü ekibimizle kendinizi evinizde hissedeceksiniz.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cafe Interior" class="mt-6 rounded shadow-md mx-auto w-full md:w-3/4">
            </div>
        `,
        support: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">Destek</h2>
                <p class="text-lg">Bir sorunuz mu var veya geri bildirimde bulunmak mı istiyorsunuz? Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyar.</p>
                <div class="mt-6 bg-white p-6 rounded shadow-md">
                    <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Rezervasyon yapıyor musunuz?</strong> Evet, telefonla arayarak rezervasyon yapabilirsiniz.</li>
                        <li><strong>Glutensiz seçenekleriniz var mı?</strong> Evet, menümüzde glutensiz tatlı seçenekleri mevcuttur.</li>
                        <li><strong>Wi-Fi hizmetiniz var mı?</strong> Evet, müşterilerimiz için ücretsiz yüksek hızlı Wi-Fi sunuyoruz.</li>
                    </ul>
                </div>
            </div>
        `,
        contact: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">İletişim</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Bize Ulaşın</h3>
                        <p class="mb-2"><i class="fas fa-phone mr-2"></i> +90 212 123 45 67</p>
                        <p class="mb-2"><i class="fas fa-envelope mr-2"></i> info@kahvedukkani.com</p>
                        <p class="mb-2"><i class="fas fa-map-marker-alt mr-2"></i> İstiklal Caddesi No: 123, Beyoğlu, İstanbul</p>
                        <div class="flex space-x-4 mt-4">
                            <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-2xl text-coffee-dark hover:text-coffee-light"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div>
                        <form class="bg-white p-6 rounded shadow-md">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Adınız</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Adınız">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">E-posta</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-posta Adresiniz">
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mesajınız</label>
                                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Mesajınız..."></textarea>
                            </div>
                            <button class="bg-coffee-dark hover:bg-coffee-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `,
        locations: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">Şube Konumları</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
                        <h3 class="text-xl font-bold mb-2">Beyoğlu Şubesi</h3>
                        <p class="text-gray-600">İstiklal Caddesi No: 123</p>
                        <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 23:00</p>
                        <p class="text-sm text-gray-500">Hafta sonu: 09:00 - 00:00</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
                        <h3 class="text-xl font-bold mb-2">Kadıköy Şubesi</h3>
                        <p class="text-gray-600">Bahariye Caddesi No: 45</p>
                        <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 22:00</p>
                        <p class="text-sm text-gray-500">Hafta sonu: 09:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
                        <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-gray-600">Çarşı İçi No: 12</p>
                        <p class="text-sm text-gray-500 mt-2">Hafta içi: 07:30 - 22:30</p>
                        <p class="text-sm text-gray-500">Hafta sonu: 08:30 - 23:30</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">Menü İçerikleri</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-2xl font-bold text-coffee-dark mb-3">Sıcak İçecekler</h3>
                        <ul class="bg-white rounded shadow-md divide-y divide-gray-200">
                            <li class="p-4 flex justify-between"><span>Espresso</span> <span class="font-bold">45₺</span></li>
                            <li class="p-4 flex justify-between"><span>Cappuccino</span> <span class="font-bold">55₺</span></li>
                            <li class="p-4 flex justify-between"><span>Latte</span> <span class="font-bold">60₺</span></li>
                            <li class="p-4 flex justify-between"><span>Türk Kahvesi</span> <span class="font-bold">40₺</span></li>
                            <li class="p-4 flex justify-between"><span>Çay</span> <span class="font-bold">25₺</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-coffee-dark mb-3">Soğuk İçecekler</h3>
                        <ul class="bg-white rounded shadow-md divide-y divide-gray-200">
                            <li class="p-4 flex justify-between"><span>Soğuk Kahve</span> <span class="font-bold">65₺</span></li>
                            <li class="p-4 flex justify-between"><span>Limonata</span> <span class="font-bold">35₺</span></li>
                        </ul>
                    </div>
                    <div class="md:col-span-2">
                        <h3 class="text-2xl font-bold text-coffee-dark mb-3">Yiyecekler</h3>
                        <ul class="bg-white rounded shadow-md divide-y divide-gray-200">
                            <li class="p-4 flex justify-between"><span>Cheesecake</span> <span class="font-bold">70₺</span></li>
                            <li class="p-4 flex justify-between"><span>Kruvasan</span> <span class="font-bold">50₺</span></li>
                            <li class="p-4 flex justify-between"><span>Sandviç</span> <span class="font-bold">80₺</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        prices: `
            <div class="fade-in">
                <h2 class="text-3xl font-heading border-b-2 border-coffee-light pb-2 mb-4">Fiyat Listesi</h2>
                <p class="mb-4 text-lg">Tüm ürünlerimizin güncel fiyat listesi aşağıdadır.</p>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead class="bg-coffee-dark text-white">
                            <tr>
                                <th class="py-3 px-4 text-left">Ürün</th>
                                <th class="py-3 px-4 text-left">Kategori</th>
                                <th class="py-3 px-4 text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr><td class="py-3 px-4">Espresso</td><td class="py-3 px-4">Sıcak İçecek</td><td class="py-3 px-4 text-right">45₺</td></tr>
                            <tr><td class="py-3 px-4">Cappuccino</td><td class="py-3 px-4">Sıcak İçecek</td><td class="py-3 px-4 text-right">55₺</td></tr>
                            <tr><td class="py-3 px-4">Latte</td><td class="py-3 px-4">Sıcak İçecek</td><td class="py-3 px-4 text-right">60₺</td></tr>
                            <tr><td class="py-3 px-4">Türk Kahvesi</td><td class="py-3 px-4">Sıcak İçecek</td><td class="py-3 px-4 text-right">40₺</td></tr>
                            <tr><td class="py-3 px-4">Çay</td><td class="py-3 px-4">Sıcak İçecek</td><td class="py-3 px-4 text-right">25₺</td></tr>
                            <tr><td class="py-3 px-4">Soğuk Kahve</td><td class="py-3 px-4">Soğuk İçecek</td><td class="py-3 px-4 text-right">65₺</td></tr>
                            <tr><td class="py-3 px-4">Limonata</td><td class="py-3 px-4">Soğuk İçecek</td><td class="py-3 px-4 text-right">35₺</td></tr>
                            <tr><td class="py-3 px-4">Cheesecake</td><td class="py-3 px-4">Tatlı</td><td class="py-3 px-4 text-right">70₺</td></tr>
                            <tr><td class="py-3 px-4">Kruvasan</td><td class="py-3 px-4">Hamur İşi</td><td class="py-3 px-4 text-right">50₺</td></tr>
                            <tr><td class="py-3 px-4">Sandviç</td><td class="py-3 px-4">Atıştırmalık</td><td class="py-3 px-4 text-right">80₺</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router Logic
    const loadContent = () => {
        const hash = window.location.hash.substring(1) || 'home';
        if (content[hash]) {
            appContainer.innerHTML = content[hash];

            // Close sidebar on mobile after clicking a link
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        } else {
            appContainer.innerHTML = '<h2 class="text-2xl text-center mt-10">Sayfa bulunamadı.</h2>';
        }
    };

    window.addEventListener('hashchange', loadContent);

    // Initial Load
    loadContent();
});
