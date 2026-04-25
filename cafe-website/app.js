// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const appContainer = document.getElementById('app');

// Menu Data
const menuData = [
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

// Sidebar Toggle Logic
function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Handle clicks on sidebar links
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar();
  });
});

// View Templates
const views = {
  home: () => `
    <div class="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in mt-8">
      <h1 class="text-4xl md:text-5xl font-heading font-bold text-brand-brown">Kahve Dükkanına Hoş Geldiniz</h1>
      <p class="text-lg md:text-xl font-body text-brand-brownLight">En taze kahve çekirdekleri ve enfes tatlılar ile hizmetinizdeyiz.</p>

      <div class="w-full max-w-2xl mx-auto mt-6 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        <!-- Try a local image first, or fallback to an unsplash image for a generic coffee shop -->
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı Görseli" class="w-full h-auto object-cover max-h-[500px]">
      </div>
    </div>
  `,

  hakkinda: () => `
    <div class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">Hakkımızda</h2>
      <p class="text-lg leading-relaxed">Kahve Dükkanı olarak 2015 yılından bu yana en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize kendilerini evlerinde hissedecekleri sıcak ve samimi bir ortam sunmaktır.</p>
      <p class="text-lg leading-relaxed">Modern ve minimalist tasarım anlayışımızla tasarladığımız mekanlarımızda, kahvenizi yudumlarken günün yorgunluğunu atabilir, sevdiklerinizle keyifli vakit geçirebilirsiniz.</p>
    </div>
  `,

  destek: () => `
    <div class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">Destek</h2>
      <p class="text-lg">Herhangi bir sorunuz, öneriniz veya şikayetiniz mi var? Müşteri hizmetleri ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.</p>
      <div class="bg-white p-6 rounded-xl shadow-md mt-6">
        <h3 class="text-xl font-bold mb-4">Sıkça Sorulan Sorular</h3>
        <ul class="list-disc pl-6 space-y-2 text-brand-brownLight">
          <li>Çalışma saatleriniz nedir? (Her gün 08:00 - 23:00)</li>
          <li>Toplu sipariş veriyor musunuz? (Evet, iletişim bölümünden ulaşabilirsiniz.)</li>
          <li>Vegan seçenekleriniz var mı? (Evet, menümüzde vegan yiyecek ve içecek seçenekleri bulunmaktadır.)</li>
        </ul>
      </div>
    </div>
  `,

  iletisim: () => `
    <div class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">İletişim</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Bize Ulaşın</h3>
          <p><strong>Telefon:</strong> 0 (212) 555 12 34</p>
          <p><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
          <p><strong>Adres:</strong> Kahve Sokak, No:42, Kadıköy / İstanbul</p>
        </div>
        <form class="space-y-4 bg-white p-6 rounded-xl shadow-md" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
          <div>
            <label class="block text-sm font-bold mb-1">Adınız</label>
            <input type="text" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-brand-brown" required>
          </div>
          <div>
            <label class="block text-sm font-bold mb-1">Mesajınız</label>
            <textarea class="w-full border border-gray-300 rounded p-2 h-24 focus:outline-none focus:border-brand-brown" required></textarea>
          </div>
          <button type="submit" class="bg-brand-brown text-brand-cream px-4 py-2 rounded hover:bg-brand-brownLight transition-colors w-full font-bold">Gönder</button>
        </form>
      </div>
    </div>
  `,

  'sube-konumlari': () => `
    <div class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">Şube Konumları</h2>
      <p class="text-lg mb-6">Sizlere daha yakın olabilmek için farklı noktalarda hizmetinizdeyiz.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
          <h3 class="text-xl font-bold font-heading mb-2">Kadıköy Merkez</h3>
          <p class="text-brand-brownLight">Caferağa Mah. Moda Cad. No:123<br>Kadıköy / İstanbul</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
          <h3 class="text-xl font-bold font-heading mb-2">Beşiktaş Şube</h3>
          <p class="text-brand-brownLight">Sinanpaşa Mah. Barbaros Bulvarı No:45<br>Beşiktaş / İstanbul</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
          <h3 class="text-xl font-bold font-heading mb-2">Nişantaşı Şube</h3>
          <p class="text-brand-brownLight">Teşvikiye Mah. Valikonağı Cad. No:88<br>Şişli / İstanbul</p>
        </div>
      </div>
    </div>
  `,

  'menu-icerikleri': () => `
    <div class="max-w-4xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">Menü İçerikleri</h2>
      <p class="text-lg text-center mb-8">Özenle hazırladığımız kahve ve tatlı çeşitlerimizi keşfedin.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${menuData.map(item => `
          <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold font-heading mb-2">${item.name}</h3>
            <p class="text-brand-brownLight text-sm mt-2">Kaliteli içerik, eşsiz lezzet.</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  fiyatlar: () => `
    <div class="max-w-3xl mx-auto space-y-6">
      <h2 class="text-3xl font-heading font-bold border-b-2 border-brand-brown pb-2 mb-6">Fiyatlar</h2>

      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <ul class="divide-y divide-gray-200">
          ${menuData.map(item => `
            <li class="flex items-center justify-between p-4 hover:bg-brand-cream/30 transition-colors">
              <span class="text-lg font-medium">${item.name}</span>
              <span class="text-lg font-bold font-heading">${item.price}₺</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `,

  'not-found': () => `
    <div class="flex flex-col items-center justify-center text-center space-y-4 py-20">
      <h2 class="text-4xl font-heading font-bold text-brand-brown">404</h2>
      <p class="text-xl text-brand-brownLight">Sayfa bulunamadı.</p>
      <a href="#" class="mt-4 inline-block bg-brand-brown text-brand-cream px-6 py-2 rounded-lg hover:bg-brand-brownLight transition-colors font-bold">Ana Sayfaya Dön</a>
    </div>
  `
};

// Router Logic
function router() {
  // Get current hash, default to empty string (home)
  let hash = window.location.hash.slice(1);

  // Default to home if no hash
  if (!hash) {
    hash = 'home';
  }

  // Find the matching view template, or use not-found
  const viewRenderer = views[hash] || views['not-found'];

  // Render content
  appContainer.innerHTML = viewRenderer();

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
