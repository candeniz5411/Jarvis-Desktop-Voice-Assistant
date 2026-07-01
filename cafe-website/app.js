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

const views = {
    '/': `
        <div class="text-center flex flex-col items-center justify-center min-h-[60vh]">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 font-heading">Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl mb-8 max-w-2xl text-brand-brown/80">En iyi kahve deneyimini yaşamanız için buradayız. Özenle seçilmiş çekirdeklerimiz ve taze atıştırmalıklarımızla keyifli bir mola verin.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full">
                <img src="./Images/coffee-hero.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    '/about': `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">Hakkımızda</h2>
            <p class="text-lg leading-relaxed mb-4">Şehrin kalbinde, samimi ve sıcak bir atmosferde misafirlerimizi ağırlıyoruz. Amacımız sadece kahve sunmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği bir buluşma noktası olmaktır.</p>
            <p class="text-lg leading-relaxed">Kaliteli kahve çekirdekleri, taze günlük atıştırmalıklar ve güler yüzlü ekibimizle her zaman hizmetinizdeyiz.</p>
        </div>
    `,
    '/support': `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">Destek</h2>
            <p class="text-lg leading-relaxed mb-4">Herhangi bir sorunuz, öneriniz veya şikayetiniz için destek ekibimizle iletişime geçebilirsiniz. Müşteri memnuniyeti bizim için her şeyden önemlidir.</p>
            <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown/10 mt-6">
                <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2 text-brand-brown/80">
                    <li>Çalışma saatleriniz nedir? (08:00 - 22:00)</li>
                    <li>Vegan seçenekleriniz var mı? (Evet, menümüzde mevcuttur.)</li>
                    <li>Rezervasyon alıyor musunuz? (Sadece özel etkinlikler için.)</li>
                </ul>
            </div>
        </div>
    `,
    '/contact': `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak, No: 42, Merkez/Şehir</p>
                    <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                    <p class="text-lg mb-4"><strong>E-posta:</strong> info@ornekkafe.com</p>
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="text-brand-brown hover:text-brand-brown/70 transition-colors">Instagram</a>
                        <a href="#" class="text-brand-brown hover:text-brand-brown/70 transition-colors">Twitter</a>
                        <a href="#" class="text-brand-brown hover:text-brand-brown/70 transition-colors">Facebook</a>
                    </div>
                </div>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold mb-1" for="name">İsim</label>
                        <input class="w-full px-3 py-2 border border-brand-brown/30 rounded focus:outline-none focus:border-brand-brown bg-white" type="text" id="name" placeholder="Adınız">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1" for="message">Mesajınız</label>
                        <textarea class="w-full px-3 py-2 border border-brand-brown/30 rounded focus:outline-none focus:border-brand-brown bg-white h-24" id="message" placeholder="Bize yazın..."></textarea>
                    </div>
                    <button type="button" class="bg-brand-brown text-brand-cream px-6 py-2 rounded font-bold hover:bg-brand-brown/90 transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `,
    '/locations': `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">Şube Konumları</h2>
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown/10">
                    <h3 class="text-xl font-bold mb-2 font-heading">Merkez Şube</h3>
                    <p class="text-brand-brown/80 mb-1">Kahve Sokak, No: 42, Merkez</p>
                    <p class="text-sm text-brand-brown/60">Açık: 08:00 - 22:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown/10">
                    <h3 class="text-xl font-bold mb-2 font-heading">Sahil Şube</h3>
                    <p class="text-brand-brown/80 mb-1">Deniz Yolu Cad. No: 15, Sahil</p>
                    <p class="text-sm text-brand-brown/60">Açık: 09:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown/10">
                    <h3 class="text-xl font-bold mb-2 font-heading">Kampüs Şube</h3>
                    <p class="text-brand-brown/80 mb-1">Üniversite Mah. Öğrenci Sk. No: 3</p>
                    <p class="text-sm text-brand-brown/60">Açık: 07:30 - 20:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu': `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                ${menuData.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-brand-brown/10 flex items-center justify-center h-24 text-center">
                        <span class="text-lg font-bold">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '/pricing': `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 font-heading border-b-2 border-brand-brown/20 pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-lg shadow-md border border-brand-brown/10 overflow-hidden">
                <ul class="divide-y divide-brand-brown/10">
                    ${menuData.map(item => `
                        <li class="p-4 flex justify-between items-center hover:bg-brand-cream/30 transition-colors">
                            <span class="text-lg font-medium">${item.name}</span>
                            <span class="text-lg font-bold text-brand-brown">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const appContainer = document.getElementById('app');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    openMenuBtn.addEventListener('click', openSidebar);
    closeMenuBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));

    function router() {
        const hash = window.location.hash || '#/';
        const route = hash.replace('#', '');

        const content = views[route] || views['/'];
        appContainer.innerHTML = content;
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', router);
    router();
});
