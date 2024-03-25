# Chọn Database và Tạo Database


## Chọn Cơ Sở Dữ Liệu

1. **Hiểu nhu cầu của dự án:** Có các loại cơ sở dữ liệu phổ biến như Relational Database (SQL), NoSQL, và NewSQL, mỗi loại có ưu và nhược điểm riêng.

2. **Xác định quy mô dữ liệu:** Dự án có lượng dữ liệu lớn hay nhỏ, có cần tính toán nhanh chóng không? Câu trả lời cho những câu hỏi này sẽ giúp xác định cơ sở dữ liệu phù hợp.

3. **Xem xét tính linh hoạt và mở rộng:** Dự án có thể mở rộng trong tương lai không? Cơ sở dữ liệu có thể mở rộng dễ dàng không? Đây là những yếu tố quan trọng cần xem xét để tránh gặp khó khăn trong quá trình phát triển.
### Đặc Điểm Chính của Google BigQuery:  
  - **Phân Tích Dữ Liệu Lớn (Big Data Analysis)**: Google BigQuery được xây dựng để xử lý và phân tích dữ liệu lớn một cách hiệu quả. 
  - **Serverless Computing:** BigQuery là một dịch vụ serverless, không cần phải quản lý hoặc cấu hình các máy chủ. 
  - **Hỗ Trợ SQL:** Mặc dù BigQuery là một dịch vụ cơ sở dữ liệu NoSQL, nhưng nó hỗ trợ SQL để truy vấn dữ liệu.
## Tạo Cơ Sở Dữ Liệu Sử Dụng SQL

Sau khi đã chọn được cơ sở dữ liệu phù hợp, việc tạo cơ sở dữ liệu sử dụng SQL là bước tiếp theo.

1. **Chọn Hệ Quản Trị Cơ Sở Dữ Liệu (DBMS):** Tùy vào dự án cần chọn hệ quản trị cơ sở dữ liệu phù hợp như MySQL, PostgreSQL, hoặc SQLite cho cơ sở dữ liệu SQL.
	**BigQuery**: là một service của Google Cloud Platform tạo ra như 1 kho chứa dữ liệu (data warehouse).
	 

2. **Cài Đặt và Cấu Hình DBMS:** BigQuery là một dịch vụ serverless, không cần phải quản lý hoặc cấu hình các máy chủ. 

3. **Tạo Database và Bảng:** Sử dụng câu lệnh SQL để tạo cơ sở dữ liệu và các bảng cần thiết. Câu lệnh `CREATE DATABASE` sẽ tạo ra cơ sở dữ liệu, sau đó sử dụng câu lệnh `CREATE TABLE` để tạo các bảng và xác định cấu trúc dữ liệu cho mỗi bảng.
![](/CreatDB/1.png)

	**Navtive và External**: Table của dataset gồm 2 loại: Native và External. Native table sẽ import data vào BigQuery và cho phép bạn query từ đó, dung lượng lưu trữ được sử dụng nhưng bù lại cho sự tối ưu về thời gian query. Trong khi đó, data trong các External tables được lưu trên các sources khác như Cloud Storage, Google Sheets,… lúc này BigQuery đọc data trực tiếp từ các sources nên không tốn dung lượng lưu trữ, bù lại thời gian query lâu.
	

1. **Kiểm Tra và Tối Ưu Hóa:** Kiểm tra cơ sở dữ liệu để đảm bảo mọi thứ hoạt động đúng như mong đợi và tối ưu hóa cơ sở dữ liệu nếu cần thiết để đảm bảo hiệu suất cao nhất.

    `SELECT Count(Email_) FROM clear-talent-418323.DevFest.FlatData LIMIT 1000`


	`SELECT * FROM clear-talent-418323.DevFest.FlatData LIMIT 10`
    


