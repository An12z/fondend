// js/app.js
(() => {
  // Helpers
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const money = v => v.toLocaleString('vi-VN') + '₫';

  // --- Views ---
  function renderHome() {
    const view = $('#view');
    view.innerHTML = `<div class="row" style="justify-content:space-between; align-items: end; margin-bottom: 14px;">
        <div>
          <h2 style="margin:6px 0 4px">Mới cập nhật</h2>
          <div class="muted">Danh sách ebook có thể đọc online</div>
        </div>
      </div>
      <div class="grid">${BOOKS.map(b => `
        <div class="card">
          <img src="${b.cover}" alt="${b.title}" />
          <div class="title">${b.title}</div>
          <div class="muted">${b.author}</div>
          <div class="row" style="justify-content:space-between; margin-top:6px;">
            <div class="price">${money(b.price)}</div>
            <span class="tag">${b.type.toUpperCase()}</span>
          </div>
          <div class="row" style="margin-top:10px;">
            <a class="btn secondary" href="#/detail/${b.id}">Xem chi tiết</a>
          </div>
        </div>
      `).join('')}</div>`;
    setActive('#/home');
  }

  function renderDetail(id) {
    const view = $('#view');
    const b = BOOKS.find(x => x.id == id);
    if (!b) {
      view.innerHTML = `<div class="empty panel">Không tìm thấy sách.</div>`;
      return;
    }

    const owned = state.purchases.includes(b.id);
    view.innerHTML = `
      <div class="panel detail">
        <div><img src="${b.cover}" alt="${b.title}" style="width:100%; border-radius:16px;"></div>
        <div>
          <h2 style="margin:0 0 6px">${b.title}</h2>
          <div class="muted" style="margin-bottom:10px;">Tác giả: ${b.author}</div>
          <p class="muted" style="line-height:1.6">${b.description}</p>

          <div class="row" style="margin:14px 0 8px; align-items: center;">
            <div class="price" style="font-size:18px;">${money(b.price)}</div>
            <span class="tag">${b.type.toUpperCase()}</span>
          </div>

          <div class="row" style="margin-top:10px;">
            ${owned
        ? `<a class="btn secondary" href="#/reader/${b.id}">Đọc ngay</a>`
        : `<button class="btn secondary" onclick="alert('Mua sách để đọc online nhé!');">Đọc thử (khóa)</button>`}
            <a class="btn secondary" href="#/home">← Quay lại</a>
          </div>
        </div>
      </div>
    `;
    setActive();
  }

  function renderReader(id) {
    const view = $('#view');
    const b = BOOKS.find(x => x.id == id);
    if (!b) {
      view.innerHTML = `<div class="panel empty">Không tìm thấy sách.</div>`;
      return;
    }
    const owned = state.purchases.includes(b.id);
    if (!owned) {
      view.innerHTML = `<div class="panel empty">Bạn chưa sở hữu ebook này. <a href="#/detail/${b.id}">Mua ngay</a></div>`;
      return;
    }
    view.innerHTML = `
      <div class="panel">
        <div class="row" style="justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div>
            <div class="muted" style="font-size:12px;">Đang đọc</div>
            <h2 style="margin:2px 0 0">${b.title}</h2>
          </div>
          <a class="btn secondary" href="#/detail/${b.id}">← Quay lại chi tiết</a>
        </div>
        <embed class="reader" src="${b.pdf}" type="application/pdf" />
        <div class="muted" style="margin-top:8px; font-size:12px;">Nếu PDF không hiển thị, hãy đảm bảo bạn đã đặt file tại <code>${b.pdf}</code>.</div>
      </div>
    `;
    setActive();
  }

  // Expose ra window
  window.renderHome = renderHome;
  window.renderDetail = renderDetail;
  window.renderReader = renderReader;
})();









function searchBooks() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const view = document.getElementById('view');

  const results = BOOKS.filter(b =>
    b.title.toLowerCase().includes(keyword) ||
    b.author.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    view.innerHTML = `<div class="panel empty">Không tìm thấy sách nào với từ khóa "${keyword}".</div>`;
    return;
  }

  view.innerHTML = `<div class="grid">
    ${results.map(b => `
      <div class="card">
        <img src="${b.cover}" alt="${b.title}" />
        <div class="title">${b.title}</div>
        <div class="muted">${b.author}</div>
        <div class="price">${money(b.price)}</div>
      </div>
    `).join('')}
  </div>`;
}

// lọc từ toàn bộ BOOKS
const results = window.BOOKS.filter(book =>
  book.title.toLowerCase().includes(keyword) ||
  book.author.toLowerCase().includes(keyword) ||
  book.category.toLowerCase().includes(keyword)
);


// lưu kết quả vào localStorage để hiển thị trên trang kết quả
localStorage.setItem("searchResults", JSON.stringify(results));


