// js/cart.js
(() => {
  const load = (k, def) => { 
    try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } 
  };
  const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  window.state = {
    cart: load('cart', []),        // [{id, qty}]
    purchases: load('purchases', []) // [id]
  };

  // Đồng bộ
  window.sync = function () {
    save('cart', state.cart);
    save('purchases', state.purchases);
    updateCartCount();
  };

  // Đếm số lượng
  window.updateCartCount = function () {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    const el = document.querySelector('#cart-count');
    if (el) el.textContent = count;
  };

  // Thêm sách
  window.addToCart = function (id) {
    const item = state.cart.find(i => i.id === id);
    if (item) item.qty++;
    else state.cart.push({ id, qty: 1 });
    sync();
    alert('📚 Đã thêm vào giỏ hàng');
  };

  // Xóa sách
  window.removeFromCart = function (id) {
    let title = "Sách";
    if (typeof BOOKS !== 'undefined') {
      const b = BOOKS.find(x => x.id === id);
      if (b) title = b.title;
    }
    state.cart = state.cart.filter(i => i.id !== id);
    sync();
    alert(`❌ Đã xóa "${title}" khỏi giỏ hàng`);
    renderCart();
  };

  // Thanh toán
  window.checkout = function () {
    if (state.cart.length === 0) { 
      alert('⚠️ Giỏ hàng trống'); 
      return; 
    }
    state.cart.forEach(i => { 
      if (!state.purchases.includes(i.id)) {
        state.purchases.push(i.id); 
      }
    });
    state.cart = [];
    sync();
    alert('✅ Thanh toán thành công! Bạn có thể đọc ebook trong mục chi tiết sách.');
    location.hash = '#/home';
  };

  // 🛒 Hiển thị giỏ hàng
  window.renderCart = function () {
    const list = document.querySelector('#cart-list');
    const totalBox = document.querySelector('#cart-total');
    if (!list) return;

    list.innerHTML = '';
    let total = 0;

    if (state.cart.length === 0) {
      list.innerHTML = '<p class="empty">Giỏ hàng trống</p>';
      if (totalBox) totalBox.textContent = '';
      return;
    }

    state.cart.forEach(item => {
      let book = (typeof BOOKS !== 'undefined') 
        ? BOOKS.find(b => b.id === item.id) 
        : { title: "Sách chưa rõ", price: 0, cover: "" };

      const price = book.price * item.qty;
      total += price;

      const li = document.createElement('div');
      li.className = "panel row";
      li.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" 
             style="width:60px;height:80px;object-fit:cover;border-radius:6px;">
        <div style="flex:1">
          <h4>${book.title}</h4>
          <p class="muted">
            SL: 
            <button class="btn small" onclick="changeQty(${item.id}, -1)">➖</button>
            <span id="qty-${item.id}">${item.qty}</span>
            <button class="btn small" onclick="changeQty(${item.id}, 1)">➕</button>
            × ${book.price.toLocaleString()}đ
          </p>
          <p class="price">${price.toLocaleString()}đ</p>
        </div>
        <button class="btn danger" onclick="removeFromCart(${item.id})">Xóa</button>
      `;
      list.appendChild(li);
    });

    // Tổng tiền
    if (totalBox) {
      totalBox.textContent = "Tổng: " + total.toLocaleString() + "đ";
    }
  };

  // Tăng/giảm số lượng
  window.changeQty = function (id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    
    item.qty += delta;
    if (item.qty <= 0) {
      // Nếu số lượng về 0 thì xóa luôn
      state.cart = state.cart.filter(i => i.id !== id);
    }
    sync();
    renderCart();
  };

  // Khởi chạy
  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();
  });
})();