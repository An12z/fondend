// js/books.js


window.BOOKS = [
  { id: 1, title: 'Lập Trình Tối Giản', author: 'N. Dev', price: 59000, type: 'ebook', cover: 'anh/2.jpg', pdf: 'ebooks/book1.pdf', description: 'Hướng dẫn viết code gọn nhẹ và hiệu quả.' },
  { id: 2, title: 'kỹ năng mềm', author: 'T. Soft', price: 79000, type: 'ebook', cover: 'anh/1.png', pdf: 'ebooks/book2.pdf', description: 'Giao tiếp, thuyết trình, làm việc nhóm cho người mới.' },
  { id: 3, title: 'Những đêm mưa', author: 'L. Văn', price: 69000, type: 'ebook', cover: 'anh/4.png', pdf: 'ebooks/book3.pdf', description: 'Tuyển tập truyện ngắn cảm xúc.' },
  { id: 4, title: 'Công nghiệp môi trường', author: 'T. Soft', price: 59000, type: 'ebook', cover: 'anh/3.png', pdf: 'ebooks/book4.pdf', description: 'Giao tiếp, thuyết trình, làm việc nhóm cho người mới.' },
  { id: 5, title: 'The Pragmatic Programme', author: 'L. Văn', price: 69000, type: 'ebook', cover: 'anh/5.png', pdf: 'ebooks/book5.pdf', description: 'Tuyển tập truyện ngắn cảm xúc.' },
  { id: 6, title: 'Clean Code', author: 'T. Soft', price: 59000, type: 'ebook', cover: 'anh/6.png', pdf: 'ebooks/book6.pdf', description: 'Giao tiếp, thuyết trình, làm việc nhóm cho người mới.' },
  { id: 7, title: 'Lập Trình JavaScript Cơ Bản', author: 'N. Code', price: 69000, type: 'ebook', cover: 'anh/7.png', pdf: 'ebooks/book7.pdf', description: 'Học cú pháp, hàm, và cách xây dựng ứng dụng web với JavaScript.' },
  { id: 8, title: 'Artificial Intelligence', author: 'H. Design', price: 75000, type: 'ebook', cover: 'anh/8.png', pdf: 'ebooks/book8.pdf', description: 'Nguyên tắc UI/UX và thực hành với HTML, CSS, Tailwind.' },
  { id: 9, title: 'Phân Tích Dữ Liệu Với Python', author: 'D. Data', price: 85000, type: 'ebook', cover: 'anh/9.png', pdf: 'ebooks/book9.pdf', description: 'Khám phá Pandas, NumPy và trực quan hóa dữ liệu bằng Matplotlib.' },
  { id: 10, title: 'Trí Tuệ Nhân Tạo Ứng Dụng', author: 'A. Smart', price: 99000, type: 'ebook', cover: 'anh/10.png', pdf: 'ebooks/book10.pdf', description: 'Cơ bản về AI, machine learning và cách ứng dụng trong thực tế.' },

  { id: 11, title: 'Kinh Tế Học Vĩ Mô', author: 'P. Samuelson', price: 120000, type: 'ebook', cover: 'anh/11.png', pdf: 'ebooks/econ1.pdf', description: 'Nguyên lý cơ bản về tăng trưởng, lạm phát và thất nghiệp.' },
  { id: 12, title: 'Tư Bản Luận', author: 'Karl Marx', price: 150000, type: 'ebook', cover: 'anh/12. png', pdf: 'ebooks/econ2.pdf', description: 'Phân tích về sản xuất hàng hóa, giá trị thặng dư và kinh tế chính trị.' },
  { id: 13, title: 'Quốc Gia Khởi Nghiệp', author: 'Dan Senor & Saul Singer', price: 135000, type: 'ebook', cover: 'anh/13. png', pdf: 'ebooks/econ3.pdf', description: 'Khám phá mô hình kinh tế và tinh thần khởi nghiệp của Israel.' },
  { id: 14, title: 'Kinh Tế Học Vi Mô', author: 'Hal R. Varian', price: 110000, type: 'ebook', cover: 'a/14.png', pdf: 'ebooks/econ4.pdf', description: 'Cung, cầu, thị trường và hành vi người tiêu dùng.' },
  { id: 15, title: 'Tư Duy Nhanh Và Chậm', author: 'Daniel Kahneman', price: 140000, type: 'ebook', cover: 'anh/15.png', pdf: 'ebooks/econ5.pdf', description: 'Kinh tế học hành vi và cách con người ra quyết định.' },
  { id: 16, title: 'Cha Giàu Cha Nghèo', author: 'Robert T. Kiyosaki', price: 95000, type: 'ebook', cover: 'anh/16.png', pdf: 'ebooks/econ6.pdf', description: 'Bài học tài chính cá nhân và tư duy về tiền bạc.' },
  { id: 17, title: 'Nguyên Lý Kinh Tế Học', author: 'N. Gregory Mankiw', price: 160000, type: 'ebook', cover: 'anh/17.png', pdf: 'ebooks/econ7.pdf', description: 'Giới thiệu toàn diện về các nguyên lý kinh tế học hiện đại.' },
  { id: 18, title: 'Sự Giàu Có Của Các Quốc Gia', author: 'Adam Smith', price: 145000, type: 'ebook', cover: 'anh/18.png', pdf: 'ebooks/econ8.pdf', description: 'Tác phẩm kinh điển khai sinh kinh tế học hiện đại.' },
  { id: 19, title: 'Kinh Tế Học Hành Vi', author: 'Richard H. Thaler', price: 125000, type: 'ebook', cover: 'anh/19.png', pdf: 'ebooks/econ9.pdf', description: 'Phân tích tâm lý trong hành vi kinh tế và thị trường.' },
  { id: 20, title: '21 Bài Học Cho Thế Kỷ 21', author: 'Yuval Noah Harari', price: 135000, type: 'ebook', cover: 'anh/20.png', pdf: 'ebooks/econ10.pdf', description: 'Những vấn đề kinh tế, chính trị và xã hội trong thời đại mới.' },

  { id: 21, title: 'Hoàng Tử Bé', author: 'Antoine de Saint-Exupéry', price: 85000, type: 'ebook', cover: 'anh/t1.png', pdf: 'ebooks/kid1.pdf', description: 'Câu chuyện cổ điển về tình bạn, tình yêu và cái nhìn trẻ thơ.' },
  { id: 22, title: 'Alice Ở Xứ Sở Thần Tiên', author: 'Lewis Carroll', price: 90000, type: 'ebook', cover: 'anh/t2.png', pdf: 'ebooks/kid2.pdf', description: 'Hành trình kỳ ảo của Alice khi rơi vào thế giới thần tiên.' },
  { id: 23, title: 'Harry Potter Và Hòn Đá Phù Thủy', author: 'J.K. Rowling', price: 120000, type: 'ebook', cover: 'anh/t3.png', pdf: 'ebooks/kid3.pdf', description: 'Cuốn đầu tiên trong series Harry Potter nổi tiếng toàn cầu.' },
  { id: 24, title: 'Cậu Bé Peter Pan', author: 'J.M. Barrie', price: 80000, type: 'ebook', cover: 'anh/t4.png', pdf: 'ebooks/kid4.pdf', description: 'Câu chuyện về cậu bé không bao giờ muốn lớn và xứ Neverland.' },
  { id: 25, title: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', price: 75000, type: 'ebook', cover: 'anh/t5.png', pdf: 'ebooks/kid5.pdf', description: 'Tác phẩm thiếu nhi kinh điển Việt Nam, hành trình phiêu lưu đầy ý nghĩa.' },
  { id: 26, title: 'Không Gia Đình', author: 'Hector Malot', price: 95000, type: 'ebook', cover: 'anh/t6.png', pdf: 'ebooks/kid6.pdf', description: 'Hành trình gian nan nhưng cảm động của cậu bé Rémi.' },
  { id: 27, title: 'Bé Hạt Tiêu', author: 'Astrid Lindgren', price: 70000, type: 'ebook', cover: 'anh/t7.png', pdf: 'ebooks/kid7.pdf', description: 'Câu chuyện dễ thương và hài hước về cô bé nhỏ bé nhưng đầy nghị lực.' },
  { id: 28, title: 'Những Tấm Lòng Cao Cả', author: 'Edmondo De Amicis', price: 85000, type: 'ebook', cover: 'anh/t8.png', pdf: 'ebooks/kid8.pdf', description: 'Tập hợp những câu chuyện cảm động về tình bạn, gia đình và lòng nhân ái.' },
  { id: 29, title: 'Hoàng Tử Rừng Xanh', author: 'Rudyard Kipling', price: 90000, type: 'ebook', cover: 'anh/t9.png', pdf: 'ebooks/kid9.pdf', description: 'Cậu bé Mowgli lớn lên giữa rừng già cùng muôn thú.' },
  { id: 30, title: 'Chú Bé Rắc Rối Dennis', author: 'Hank Ketcham', price: 65000, type: 'ebook', cover: 'anh/t10.png', pdf: 'ebooks/kid10.pdf', description: 'Những tình huống hài hước và rắc rối của cậu bé Dennis.' },

  { id: 31, title: 'Chiến Tranh và Hòa Bình', author: 'Lev Tolstoy', price: 150000, type: 'ebook', cover: 'anh/31.png', pdf: 'ebooks/lit1.pdf', description: 'Kiệt tác văn học Nga về chiến tranh, hòa bình và số phận con người.' },
  { id: 32, title: 'Nhà Giả Kim', author: 'Paulo Coelho', price: 95000, type: 'ebook', cover: 'anh/32.png', pdf: 'ebooks/lit2.pdf', description: 'Cuốn tiểu thuyết đầy cảm hứng về hành trình đi tìm ước mơ.' },
  { id: 33, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', price: 80000, type: 'ebook', cover: 'anh/33.png', pdf: 'ebooks/lit3.pdf', description: 'Tác phẩm kinh điển về nghệ thuật giao tiếp và ứng xử.' },
  { id: 34, title: 'Truyện Kiều', author: 'Nguyễn Du', price: 70000, type: 'ebook', cover: 'anh/34.png', pdf: 'ebooks/lit4.pdf', description: 'Kiệt tác thơ Nôm Việt Nam, câu chuyện bi thương của Thúy Kiều.' },
  { id: 35, title: 'Số Đỏ', author: 'Vũ Trọng Phụng', price: 75000, type: 'ebook', cover: 'anh/35.png', pdf: 'ebooks/lit5.pdf', description: 'Tác phẩm trào phúng nổi tiếng, phê phán xã hội thực dân nửa tây nửa ta.' },
  { id: 36, title: 'Chí Phèo', author: 'Nam Cao', price: 60000, type: 'ebook', cover: 'anh/36.png', pdf: 'ebooks/lit6.pdf', description: 'Truyện ngắn kinh điển về bi kịch của người nông dân Việt Nam.' },
  { id: 37, title: 'Tắt Đèn', author: 'Ngô Tất Tố', price: 65000, type: 'ebook', cover: 'anh/37.png', pdf: 'ebooks/lit7.pdf', description: 'Hình ảnh đau khổ và kiên cường của người phụ nữ nông dân trước sưu cao thuế nặng.' },
  { id: 38, title: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', price: 70000, type: 'ebook', cover: 'anh/38.png', pdf: 'ebooks/lit8.pdf', description: 'Tác phẩm nổi tiếng dành cho thiếu nhi nhưng giàu triết lý nhân sinh.' },
  { id: 39, title: 'Nỗi Buồn Chiến Tranh', author: 'Bảo Ninh', price: 90000, type: 'ebook', cover: 'anh/39.png', pdf: 'ebooks/lit9.pdf', description: 'Một tiểu thuyết sâu sắc về chiến tranh Việt Nam và nỗi đau còn lại.' },

];
