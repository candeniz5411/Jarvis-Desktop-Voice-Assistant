// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const mainContent = document.getElementById('main-content');
const sidebarLinks = document.querySelectorAll('#sidebar a');

// Menu Data
const menuData = [
  { name: 'Espresso', price: '45₺', desc: 'Sert ve yoğun kahve deneyimi.' },
  { name: 'Cappuccino', price: '55₺', desc: 'Bol köpüklü sıcak kahve.' },
  { name: 'Latte', price: '60₺', desc: 'Sütlü ve yumuşak içimli kahve.' },
  { name: 'Türk Kahvesi', price: '40₺', desc: 'Geleneksel lezzet.' },
  { name: 'Çay', price: '25₺', desc: 'Taze demlenmiş Türk çayı.' },
  { name: 'Cheesecake', price: '70₺', desc: 'Frambuazlı veya limonlu taze cheesecake.' },
  { name: 'Kruvasan', price: '50₺', desc: 'Tereyağlı çıtır kruvasan.' },
  { name: 'Sandviç', price: '80₺', desc: 'Özel peynirli ve yeşillikli soğuk sandviç.' },
  { name: 'Soğuk Kahve', price: '65₺', desc: 'Buz gibi serinletici kahve.' },
  { name: 'Limonata', price: '35₺', desc: 'Ev yapımı nane ferahlığında limonata.' }
];

// Sidebar Toggle Logic
function toggleSidebar() {
  const isClosed = sidebar.classList.contains('-translate-x-full');
  if (isClosed) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    closeSidebar();
  }
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// Routing Logic
const routes = {
  home: () => `
    <div class="text-center animate-fade-in">
      <h1 class="font-heading text-4xl md:text-5xl font-bold mb-4 text-brand-brown">Kafe Biz'e Hoş Geldiniz</h1>
      <p class="text-lg md:text-xl text-brand-brown mb-8 font-body max-w-2xl mx-auto">En taze kahveler ve enfes tatlılar için doğru yerdesiniz. Gelin, gününüze lezzet katalım.</p>

      <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
        <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000" alt="Kahve ve Kafe Atmosferi" class="w-full h-auto object-cover max-h-96">
      </div>
    </div>
  `,
  hakkinda: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Hakkımızda</h2>
      <p class="mb-4 text-lg leading-relaxed">2015 yılından bu yana, kahve tutkunlarına en iyi çekirdekleri en doğru demlenme yöntemleriyle sunuyoruz. Amacımız, sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, sıcak ve samimi bir atmosfer yaratmaktır.</p>
      <p class="text-lg leading-relaxed">Modern ve minimalist tasarımımızla şehrin kalabalığından uzaklaşıp huzur bulabileceğiniz bir ortam sunuyoruz. Sizi de ailemizin bir parçası olmaya davet ediyoruz.</p>
    </div>
  `,
  destek: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Destek</h2>
      <p class="mb-6 text-lg">Soru, görüş ve önerileriniz bizim için çok değerli. Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyacaktır.</p>

      <div class="space-y-4">
        <div class="p-4 bg-brand-cream/50 rounded-lg">
          <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Çalışma saatleriniz nedir?</strong> Haftanın her günü 08:00 - 23:00 saatleri arasında açığız.</li>
            <li><strong>Paket servisiniz var mı?</strong> Evet, belirli bölgelere paket servisimiz mevcuttur.</li>
            <li><strong>Glutensiz ürünleriniz var mı?</strong> Evet, menümüzde glutensiz seçenekler bulunmaktadır.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  iletisim: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">İletişim</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
          <ul class="space-y-4 text-lg">
            <li class="flex items-start">
              <span class="mr-3 mt-1 text-brand-accent">📍</span>
              <span>Kahve Sokak, No: 42, Kadıköy / İstanbul</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3 mt-1 text-brand-accent">📞</span>
              <span>+90 (212) 555 01 23</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3 mt-1 text-brand-accent">✉️</span>
              <span>iletisim@kafebiz.com.tr</span>
            </li>
          </ul>
        </div>
        <div class="bg-brand-cream/30 p-6 rounded-lg">
          <h3 class="font-bold text-xl mb-4">Mesaj Gönderin</h3>
          <form class="space-y-3" onsubmit="event.preventDefault(); alert('Mesajınız alındı. Teşekkürler!');">
            <input type="text" placeholder="Adınız" class="w-full p-2 border border-brand-brown/30 rounded bg-white focus:outline-none focus:border-brand-brown">
            <input type="email" placeholder="E-posta" class="w-full p-2 border border-brand-brown/30 rounded bg-white focus:outline-none focus:border-brand-brown">
            <textarea placeholder="Mesajınız" rows="3" class="w-full p-2 border border-brand-brown/30 rounded bg-white focus:outline-none focus:border-brand-brown"></textarea>
            <button type="submit" class="bg-brand-brown text-white px-6 py-2 rounded hover:bg-brand-lightbrown transition-colors w-full font-bold">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  `,
  subeler: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Şube Konumları</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="border border-brand-brown/20 p-5 rounded-lg hover:shadow-md transition-shadow bg-brand-cream/10">
          <h3 class="font-heading text-xl font-bold mb-2">Kadıköy Merkez Şube</h3>
          <p class="text-sm text-gray-600 mb-3">Tarihi doku ve kahve kokusu bir arada.</p>
          <p class="font-medium">📍 Moda Caddesi, No: 12</p>
          <p class="text-sm mt-2 text-brand-accent">08:00 - 23:00</p>
        </div>

        <div class="border border-brand-brown/20 p-5 rounded-lg hover:shadow-md transition-shadow bg-brand-cream/10">
          <h3 class="font-heading text-xl font-bold mb-2">Beşiktaş Şube</h3>
          <p class="text-sm text-gray-600 mb-3">Boğaz havası eşliğinde lezzet.</p>
          <p class="font-medium">📍 Çarşı İçi, No: 45</p>
          <p class="text-sm mt-2 text-brand-accent">08:30 - 22:30</p>
        </div>

        <div class="border border-brand-brown/20 p-5 rounded-lg hover:shadow-md transition-shadow bg-brand-cream/10">
          <h3 class="font-heading text-xl font-bold mb-2">Nişantaşı Şube</h3>
          <p class="text-sm text-gray-600 mb-3">Şehrin kalbinde şık bir mola.</p>
          <p class="font-medium">📍 Teşvikiye Mah, No: 88</p>
          <p class="text-sm mt-2 text-brand-accent">09:00 - 22:00</p>
        </div>

      </div>
    </div>
  `,
  icerikler: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Menü İçerikleri</h2>
      <p class="mb-6 text-lg">Özenle seçilmiş malzemelerle hazırlanan lezzetlerimiz:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${menuData.map(item => `
          <div class="flex items-start p-4 border-l-4 border-brand-brown bg-brand-cream/20 rounded-r-lg">
            <div>
              <h3 class="font-bold text-xl text-brand-brown mb-1">${item.name}</h3>
              <p class="text-gray-700">${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
  fiyatlar: () => `
    <div class="bg-white p-8 rounded-xl shadow-lg border border-brand-brown/10 animate-fade-in max-w-2xl mx-auto">
      <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2 text-center">Fiyat Listesi</h2>

      <div class="space-y-4 mt-8">
        ${menuData.map(item => `
          <div class="flex justify-between items-center border-b border-brand-brown/10 pb-3 hover:bg-brand-cream/10 p-2 rounded transition-colors">
            <span class="font-bold text-lg text-brand-brown">${item.name}</span>
            <span class="font-heading text-xl font-bold text-brand-accent bg-brand-cream px-3 py-1 rounded-full shadow-sm border border-brand-brown/5">${item.price}</span>
          </div>
        `).join('')}
      </div>
      <div class="mt-8 text-center text-sm text-gray-500">
        * Fiyatlarımıza KDV dahildir.
      </div>
    </div>
  `
};

function renderContent() {
  // Get the hash without the '#'
  let hash = window.location.hash.substring(1);

  // Default to home if no hash or invalid hash
  if (!hash || !routes[hash]) {
    hash = 'home';
    window.location.hash = hash;
    return; // Will trigger hashchange event
  }

  // Inject content
  mainContent.innerHTML = routes[hash]();

  // Update active state in sidebar
  sidebarLinks.forEach(link => {
    if (link.getAttribute('href') === `#${hash}`) {
      link.classList.add('bg-brand-brown', 'text-brand-cream');
      link.classList.remove('text-brand-brown');
    } else {
      link.classList.remove('bg-brand-brown', 'text-brand-cream');
      link.classList.add('text-brand-brown');
    }
  });
}

// Event listener for hash changes
window.addEventListener('hashchange', renderContent);

// Initial render
window.addEventListener('DOMContentLoaded', renderContent);
