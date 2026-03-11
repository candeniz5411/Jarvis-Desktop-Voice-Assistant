// Application Logic for Kahve Dükkanı

// 1. Sidebar Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('#sidebar a');

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


// 2. Data
const menuItems = [
    { name: 'Espresso', price: 45, category: 'İçecekler', desc: 'Sert ve yoğun bir kahve deneyimi.' },
    { name: 'Cappuccino', price: 55, category: 'İçecekler', desc: 'Espresso üzerine yoğun süt köpüğü.' },
    { name: 'Latte', price: 60, category: 'İçecekler', desc: 'Espresso ve bol sıcak süt.' },
    { name: 'Türk Kahvesi', price: 40, category: 'İçecekler', desc: 'Geleneksel lezzet, lokum ile servis edilir.' },
    { name: 'Çay', price: 25, category: 'İçecekler', desc: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: 65, category: 'İçecekler', desc: 'Buzlu, ferahlatıcı kahve keyfi.' },
    { name: 'Limonata', price: 35, category: 'İçecekler', desc: 'Ev yapımı, nane ve buz ile serinletici limonata.' },
    { name: 'Cheesecake', price: 70, category: 'Tatlılar', desc: 'Özel frambuaz soslu enfes peynir keki.' },
    { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar', desc: 'Taze, tereyağlı çıtır Fransız klasiği.' },
    { name: 'Sandviç', price: 80, category: 'Yiyecekler', desc: 'Özel soslar ve taze yeşilliklerle hazırlanmış doyurucu sandviç.' }
];

// 3. Routing and Rendering Functions
const appContainer = document.getElementById('app');

const views = {
    home: () => `
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-[#FFFDD0] p-6 text-center">
            <h1 class="text-4xl md:text-6xl font-bold font-heading text-[#3E2723] mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-[#3E2723] max-w-2xl mb-8 font-body">Günün yorgunluğunu atmak, güzel bir sohbet etmek ve en kaliteli kahve çekirdeklerinin tadına varmak için doğru yerdesiniz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full border-4 border-[#3E2723]">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Taze Kahve ve Çekirdekler" class="w-full h-auto object-cover max-h-[500px]" />
            </div>
            <a href="#menu-icerikleri" class="mt-8 bg-[#3E2723] text-[#FFFDD0] px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">Menümüzü İnceleyin</a>
        </div>
    `,
    hakkinda: () => `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">Hakkında</h1>
            <div class="bg-[#FFFDD0] p-8 rounded-lg shadow-md border border-[#3E2723] border-opacity-20">
                <p class="text-lg mb-4 text-justify">Kahve Dükkanı, 2010 yılından beri kahve tutkunlarına en iyi deneyimi sunmayı hedefleyen bir aile işletmesidir. Dünyanın farklı bölgelerinden özenle seçilmiş, en kaliteli kahve çekirdeklerini kendi kavurmahanemizde kavurarak taptaze bir şekilde fincanınıza taşıyoruz.</p>
                <p class="text-lg mb-4 text-justify">Amacımız sadece bir içecek sunmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak ve samimi bir atmosfer yaratmaktır.</p>
                <p class="text-lg text-justify">Güler yüzlü ekibimiz ve rahatlatıcı ortamımızla, her gününüzü biraz daha özel kılmak için buradayız.</p>
            </div>
        </div>
    `,
    destek: () => `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">Destek SSS</h1>
            <div class="space-y-4">
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold font-heading mb-2">Çalışma Saatleriniz Nelerdir?</h2>
                    <p>Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </div>
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold font-heading mb-2">Vegan ve Glütensiz Seçenekleriniz Var Mı?</h2>
                    <p>Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve glütensiz atıştırmalık alternatiflerimiz bulunmaktadır.</p>
                </div>
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold font-heading mb-2">Paket Servisiniz Mevcut Mu?</h2>
                    <p>Gel-al servisimiz ve belirli bölgelere kurye ile gönderim hizmetimiz bulunmaktadır.</p>
                </div>
            </div>
        </div>
    `,
    iletisim: () => `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">İletişim</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-[#FFFDD0] p-8 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold font-heading mb-4 border-b border-[#3E2723] pb-2">Bize Ulaşın</h2>
                    <ul class="space-y-4 text-lg">
                        <li class="flex items-start">
                            <span class="font-bold w-24 inline-block">Adres:</span>
                            <span>Kahve Sokak No: 42, Moda, Kadıköy, İstanbul</span>
                        </li>
                        <li class="flex items-center">
                            <span class="font-bold w-24 inline-block">Telefon:</span>
                            <span>+90 216 123 45 67</span>
                        </li>
                        <li class="flex items-center">
                            <span class="font-bold w-24 inline-block">E-posta:</span>
                            <span>merhaba@kahvedukkani.com</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-gray-100 p-8 rounded-lg shadow-md flex items-center justify-center border-2 border-dashed border-[#3E2723]">
                    <p class="text-center font-bold text-xl text-[#3E2723] opacity-50">Google Haritalar Görseli<br>(Temsili)</p>
                </div>
            </div>
        </div>
    `,
    'sube-konumlari': () => `
        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">Şube Konumları</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md border-t-4 border-[#3E2723]">
                    <h2 class="text-2xl font-bold font-heading mb-2">Merkez Şube - Kadıköy</h2>
                    <p class="mb-2">Moda Caddesi, Kahve Sokak No: 42, İstanbul</p>
                    <p class="text-sm opacity-75">Tarihi dokusu ve bahçesi ile en geniş şubemiz.</p>
                </div>
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md border-t-4 border-[#3E2723]">
                    <h2 class="text-2xl font-bold font-heading mb-2">Beşiktaş Şube</h2>
                    <p class="mb-2">Akaretler Yokuşu No: 15, İstanbul</p>
                    <p class="text-sm opacity-75">Hızlı ve enerjik, öğrenciler için ideal çalışma ortamı.</p>
                </div>
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md border-t-4 border-[#3E2723]">
                    <h2 class="text-2xl font-bold font-heading mb-2">Karaköy Şube</h2>
                    <p class="mb-2">Kemankeş Caddesi No: 88, İstanbul</p>
                    <p class="text-sm opacity-75">Modern tasarımı ve deniz manzarası ile butik deneyim.</p>
                </div>
                <div class="bg-[#FFFDD0] p-6 rounded-lg shadow-md border-t-4 border-[#3E2723]">
                    <h2 class="text-2xl font-bold font-heading mb-2">İzmir Şube</h2>
                    <p class="mb-2">Alsancak, Kıbrıs Şehitleri Caddesi No: 120, İzmir</p>
                    <p class="text-sm opacity-75">Ege esintisi eşliğinde açık hava terasımız.</p>
                </div>
            </div>
        </div>
    `,
    'menu-icerikleri': () => `
        <div class="container mx-auto px-4 py-12 max-w-5xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">Menü İçerikleri</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-[#FFFDD0] hover:shadow-xl transition-shadow flex flex-col h-full">
                        <div class="bg-[#3E2723] p-3 text-center">
                            <span class="text-[#FFFDD0] font-bold text-sm uppercase tracking-wider">${item.category}</span>
                        </div>
                        <div class="p-6 flex-grow flex flex-col">
                            <h2 class="text-2xl font-bold font-heading text-[#3E2723] mb-2">${item.name}</h2>
                            <p class="text-gray-600 mb-4 flex-grow">${item.desc}</p>
                            <div class="text-right mt-auto">
                                <span class="inline-block bg-[#FFFDD0] text-[#3E2723] px-4 py-2 rounded-full font-bold text-lg">${item.price}₺</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: () => `
        <div class="container mx-auto px-4 py-12 max-w-3xl">
            <h1 class="text-4xl font-bold font-heading text-[#3E2723] mb-6 border-b-2 border-[#3E2723] pb-2">Fiyat Listesi</h1>
            <div class="bg-[#FFFDD0] rounded-lg shadow-lg p-6 md:p-10">
                <ul class="divide-y divide-[#3E2723] divide-opacity-20">
                    ${menuItems.map(item => `
                        <li class="py-4 flex justify-between items-center hover:bg-white hover:bg-opacity-50 px-4 -mx-4 rounded transition-colors">
                            <span class="text-xl font-bold font-heading text-[#3E2723]">${item.name}</span>
                            <span class="text-xl font-bold text-[#3E2723] whitespace-nowrap">${item.price}₺</span>
                        </li>
                    `).join('')}
                </ul>
                <div class="mt-8 pt-6 border-t border-[#3E2723] text-center text-sm opacity-75">
                    * Tüm fiyatlarımıza KDV dâhildir.<br>
                    * Paket servis fiyatları farklılık gösterebilir.
                </div>
            </div>
        </div>
    `,
    notfound: () => `
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4">
            <h1 class="text-6xl font-bold font-heading text-[#3E2723] mb-4">404</h1>
            <p class="text-2xl text-[#3E2723] mb-8">Sayfa bulunamadı.</p>
            <a href="#" class="bg-[#3E2723] text-[#FFFDD0] px-6 py-2 rounded font-bold hover:opacity-90 transition-opacity">Ana Sayfaya Dön</a>
        </div>
    `
};

function render() {
    // Get hash, remove '#' and default to 'home' if empty
    const hash = window.location.hash.slice(1) || 'home';

    // Check if view exists, otherwise render 404
    const view = views[hash] || views.notfound;

    appContainer.innerHTML = view();

    // Scroll to top on page change
    window.scrollTo(0, 0);
}

// Event Listeners for Routing
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
