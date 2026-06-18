const app = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar toggle logic
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

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// Menu Data
const menuItems = [
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

// Views
const views = {
  home: `
    <div class="text-center fade-in">
      <h2 class="text-4xl font-heading font-bold mb-4">Hoş Geldiniz</h2>
      <p class="text-lg mb-8 opacity-80">En taze kahveler ve lezzetli atıştırmalıklar için doğru adrestesiniz.</p>
      <img src="Images/coffee.jpg" alt="Taze Kahve" class="w-full max-w-2xl mx-auto rounded-lg shadow-xl mb-6">
    </div>
  `,
  about: `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Hakkında</h2>
      <p class="text-lg leading-relaxed mt-4">Biz, kahve tutkunları için özel olarak seçilmiş çekirdekleri özenle kavurarak sunan bir butik kafeyiz. Amacımız, misafirlerimize sıcak bir atmosferde unutulmaz tatlar yaşatmaktır.</p>
    </div>
  `,
  support: `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Destek</h2>
      <p class="text-lg leading-relaxed mt-4">Siparişlerinizle ilgili sorun mu yaşıyorsunuz? Sık sorulan soruları inceleyebilir veya müşteri temsilcimizle iletişime geçebilirsiniz.</p>
      <ul class="list-disc list-inside mt-4 opacity-80">
        <li>Sipariş iptali ve iade koşulları</li>
        <li>Kargo ve teslimat süreci</li>
        <li>Ürün içerik bilgileri</li>
      </ul>
    </div>
  `,
  contact: `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">İletişim</h2>
      <p class="text-lg leading-relaxed mt-4">Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
      <div class="mt-4 space-y-2 opacity-80 font-semibold">
        <p>Email: info@kafeportali.com</p>
        <p>Telefon: +90 555 123 45 67</p>
        <p>Adres: Kahve Sokak No:42, Kadıköy, İstanbul</p>
      </div>
    </div>
  `,
  locations: `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Şube Konumları</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div class="p-4 border rounded bg-cafeCream">
          <h3 class="font-bold text-xl mb-2">Kadıköy Merkez</h3>
          <p class="opacity-80">Moda Caddesi, No:12</p>
        </div>
        <div class="p-4 border rounded bg-cafeCream">
          <h3 class="font-bold text-xl mb-2">Beşiktaş Şube</h3>
          <p class="opacity-80">Barbaros Bulvarı, No:84</p>
        </div>
        <div class="p-4 border rounded bg-cafeCream">
          <h3 class="font-bold text-xl mb-2">Karaköy Şube</h3>
          <p class="opacity-80">Kemankeş Caddesi, No:33</p>
        </div>
      </div>
    </div>
  `,
  'menu-contents': `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Menü İçerikleri</h2>
      <p class="mb-6 text-lg opacity-80">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içecek seçenekleri:</p>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${menuItems.map(item => `
          <li class="bg-cafeCream p-4 rounded shadow flex items-center">
            <span class="w-2 h-2 bg-cafeDark rounded-full mr-3"></span>
            <span class="font-semibold text-lg">${item.name}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `,
  prices: `
    <div class="fade-in bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-heading font-bold mb-4 border-b pb-2">Fiyatlar</h2>
      <p class="mb-6 text-lg opacity-80">Güncel menü fiyat listemiz:</p>
      <div class="overflow-hidden rounded-lg shadow">
        <table class="min-w-full bg-white">
          <thead class="bg-cafeDark text-cafeCream">
            <tr>
              <th class="py-3 px-6 text-left">Ürün</th>
              <th class="py-3 px-6 text-right">Fiyat</th>
            </tr>
          </thead>
          <tbody class="text-cafeDark">
            ${menuItems.map((item, index) => `
              <tr class="${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b">
                <td class="py-3 px-6 font-semibold">${item.name}</td>
                <td class="py-3 px-6 text-right font-bold">${item.price}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
};

// Router
function render() {
  let hash = window.location.hash.substring(1);
  if (!hash || !views[hash]) {
    hash = 'home';
  }
  app.innerHTML = views[hash];
  window.scrollTo(0, 0);
}

// Initial render & Hash listener
window.addEventListener('hashchange', render);
render();
