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


	**Navtive và External**: Table của dataset gồm 2 loại: Native và External. Native table sẽ import data vào BigQuery và cho phép bạn query từ đó, dung lượng lưu trữ được sử dụng nhưng bù lại cho sự tối ưu về thời gian query. Trong khi đó, data trong các External tables được lưu trên các sources khác như Cloud Storage, Google Sheets,… lúc này BigQuery đọc data trực tiếp từ các sources nên không tốn dung lượng lưu trữ, bù lại thời gian query lâu.
  - Step 1: Tạo Project
  - Step 2: Import source Data bằng file CSV
  - Step 3: Tạo bảng "FlatData"
	![](/CreatDB/iamge/1.png)

4. **Kiểm Tra và Tối Ưu Hóa:** Kiểm tra cơ sở dữ liệu để đảm bảo mọi thứ hoạt động đúng như mong đợi và tối ưu hóa cơ sở dữ liệu nếu cần thiết để đảm bảo hiệu suất cao nhất.

`SELECT * FROM clear-talent-418323.DevFest.FlatData LIMIT 10`

![](/CreatDB/image/q2.png)


Đếm số lượng tổng "Email" trong bảng 
`SELECT Count(Email_) AS Count_email FROM clear-talent-418323.DevFest.FlatData LIMIT 1000`

  
![](/CreatDB/image/quey.png)
    
| Row | Count_email   |
|-----|------|
| 1   | 1319 |

# Chọn Firebase làm Cơ Sở Dữ Liệu

Firebase là một nền tảng phát triển ứng dụng di động và web phổ biến, cung cấp nhiều dịch vụ như cơ sở dữ liệu thời gian thực, lưu trữ dữ liệu, xác thực người dùng và nhiều tính năng khác. Ví dụ một số lợi ích và trường hợp sử dụng của Firebase:

## Đặc Điểm Chính của Firebase:

- **Cơ Sở Dữ Liệu Thời Gian Thực (Real-time Database):** Firebase cung cấp một cơ sở dữ liệu thời gian thực, cho phép đồng bộ dữ liệu ngay lập tức giữa các thiết bị và người dùng.
  
- **Tích Hợp Sẵn với Các Dịch Vụ Firebase Khác:** Firebase cung cấp tích hợp sẵn với các dịch vụ khác như lưu trữ dữ liệu, xác thực người dùng, phân tích, thông báo đẩy và nhiều tính năng khác.
  
- **Phát Triển Ứng Dụng Di Động và Web:** Firebase hỗ trợ phát triển ứng dụng cho cả di động và web, với SDK được cung cấp cho nhiều nền tảng khác nhau.

## Các Trường Hợp Sử Dụng Phổ Biến:

- **Ứng Dụng Xã Hội và Chat Thời Gian Thực:** Firebase thường được sử dụng cho việc xây dựng ứng dụng xã hội, chat và các ứng dụng đòi hỏi tính thời gian thực.
  
- **Ứng Dụng Thương Mại Điện Tử (E-commerce):** Do tính linh hoạt của cơ sở dữ liệu thời gian thực, Firebase là một lựa chọn phổ biến cho các ứng dụng thương mại điện tử để theo dõi đơn hàng và cập nhật dữ liệu sản phẩm.
  
- **Ứng Dụng Thời Tiết và Định Vị:** Firebase cũng được sử dụng cho việc phát triển các ứng dụng thời tiết, định vị và các ứng dụng sử dụng dữ liệu vị trí thời gian thực.

## Tạo Firebase Database

Các bước để tạo cơ sở dữ liệu Firebase:

### 1. Tạo Dự Án Firebase:

- Đăng nhập vào [Firebase Console](https://console.firebase.google.com/).
- Nhấn vào nút "Add project" để tạo một dự án mới hoặc chọn một dự án hiện có nếu đã có sẵn.

### 2. Cấu Hình Firebase Database:

- Trong trang dự án Firebase của bạn, chọn mục "Database" từ menu bên trái.
- Nhấn vào nút "Create Database" để bắt đầu quy trình tạo cơ sở dữ liệu.
- Firebase cung cấp hai loại cơ sở dữ liệu: Realtime Database và Cloud Firestore. 


### 3. Kết Nối Firebase với Ứng Dụng:

- Thêm mã SDK Firebase vào ứng dụng để kết nối ứng dụng với cơ sở dữ liệu Firebase.
- Step 1: Cài đặt phân quyền và thiết lập SDK

![](/CreatDB/image/2.png)
- Step 2: Push dữ liệu lên DB: chạy script Python
  - Dữ liệu Firebase lưu trữ là NoSQL, trả về qua JSON
  `python3 pushRDB.py`
![](/CreatDB/image/fb.png)
- Step3: Hiển thị dữ liệu
  Tạo 1 Website JS cơ bản query và fetch toàn bộ dữ liệu: https://data.gdsc.page/
  ![](/CreatDB/image/web.png)
