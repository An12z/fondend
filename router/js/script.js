// script.js
function money(v) {
  return v.toLocaleString('vi-VN') + " ₫";
}

function renderBooks(list, container) {
  container.innerHTML = "";
  list.forEach(b => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${b.cover}" alt="${b.title}">
      <h3>${b.title}</h3>
      <p>Tác giả: ${b.author}</p>
      <p>Giá: ${money(b.price)}</p>
      <button onclick="addToCart(${b.id})">🛒 Thêm vào giỏ</button>
      <a href="${b.pdf}" target="_blank">📖 Xem sách</a>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  alert("Đã thêm sách " + id + " vào giỏ hàng!");
}
