# Hệ thống Tự động Tạo Lịch Học 

## 1. Tổng quan dự án

Đây là dự án mô phỏng một bài toán thực tế tại trung tâm tiếng Anh.

Hệ thống hiện tại đã quản lý học viên, giáo viên, khóa học, lớp học và tổng số buổi học. Tuy nhiên, khi một học viên đăng ký khóa học 32 buổi, người quản lý lớp vẫn phải tạo từng buổi học thủ công trên hệ thống. Công việc này lặp lại nhiều lần, tốn thời gian và dễ sai sót, dù lịch học theo tuần thường đã được biết trước.

Giải pháp đề xuất là xây dựng tính năng **tự động tạo lịch học**. Người quản lý chỉ cần nhập thông tin khóa học, học viên, giáo viên, ngày bắt đầu, số buổi học, lịch học theo tuần và khung giờ. Hệ thống sẽ tự sinh danh sách buổi học, bỏ qua ngày nghỉ, kiểm tra xung đột lịch và cho phép người quản lý xem trước trước khi lưu.

---

## 2. Bài toán nghiệp vụ

Trong quy trình hiện tại, khi học viên đăng ký một khóa học, người quản lý lớp phải tạo từng buổi học trong hệ thống.

Ví dụ:

- Khóa học: IELTS Foundation
- Tổng số buổi: 32
- Lịch học: Thứ 3 và Thứ 5, 19:00–21:00
- Giáo viên: Cô An
- Học viên: Nguyễn Văn A

Người quản lý phải nhập thủ công 32 buổi học. Việc này gây ra:

- Tốn nhiều thời gian nhập liệu
- Dễ nhập sai ngày, sai giờ hoặc tạo trùng buổi học
- Khó kiểm tra xung đột lịch giáo viên/học viên
- Chậm quá trình mở lớp sau khi học viên đăng ký
- Dữ liệu lịch học không nhất quán giữa quản lý, giáo viên và học viên

---

## 3. Giải pháp đề xuất

Xây dựng tính năng **Tự động tạo lịch học cho khóa học**.

Người quản lý nhập:

- Khóa học
- Học viên
- Giáo viên
- Ngày bắt đầu
- Các ngày học trong tuần
- Khung giờ học
- Tổng số buổi học
- Quy tắc xử lý ngày nghỉ

Hệ thống sẽ:

1. Tự động sinh danh sách buổi học.
2. Bỏ qua ngày nghỉ hoặc ngày không hợp lệ.
3. Kiểm tra xung đột lịch giáo viên và học viên.
4. Hiển thị màn hình xem trước.
5. Cho phép người quản lý xác nhận và lưu.
6. Hiển thị lịch đã xác nhận cho giáo viên và học viên.

---

## 4. Cấu trúc thư mục

```text
course-scheduling-ba/
├── README.md
├── docs/
│   ├── 01_BRD.md
│   ├── 02_SRS.md
│   ├── 03_User_Stories.md
│   ├── 04_Use_Case_Document.md
│   ├── 05_Business_Flow.md
│   ├── 06_Decision_Matrix.md
│   ├── 07_ERD.md
│   ├── 08_Wireframes.md
│   ├── 09_UAT_Test_Cases.md
│   ├── 10_Implementation_Plan.md
│   ├── 11_User_Guide.md
├── prototype/
│   ├── index.html
│   └── assets/
│       ├── style.css
│       └── script.js
├── database/
│   └── schema.sql
├── sample_data/
│   ├── courses.csv
│   ├── students.csv
│   ├── teachers.csv
│   ├── teacher_availability.csv
│   └── holidays.csv
└── .gitignore
```

---

## 5. Tài liệu chính

| Tài liệu | Mục đích |
|---|---|
| [BRD](docs/01_BRD.md) | Mục tiêu nghiệp vụ, stakeholder, phạm vi và chỉ số thành công |
| [SRS](docs/02_SRS.md) | Yêu cầu chức năng và phi chức năng chi tiết |
| [User Stories](docs/03_User_Stories.md) | Yêu cầu theo dạng Agile kèm acceptance criteria |
| [Use Case Document](docs/04_Use_Case_Document.md) | Các use case chính và luồng xử lý |
| [Business Flow](docs/05_Business_Flow.md) | Quy trình hiện tại và quy trình đề xuất |
| [Decision Matrix](docs/06_Decision_Matrix.md) | So sánh các phương án giải quyết |
| [ERD](docs/07_ERD.md) | Mô hình dữ liệu và các thực thể chính |
| [Wireframes](docs/08_Wireframes.md) | Thiết kế giao diện mức thấp |
| [UAT Test Cases](docs/09_UAT_Test_Cases.md) | Kịch bản kiểm thử nghiệm thu người dùng |
| [Implementation Plan](docs/10_Implementation_Plan.md) | Kế hoạch triển khai và đánh giá sau triển khai |
| [User Guide](docs/11_User_Guide.md) | Hướng dẫn sử dụng cho người quản lý lớp |

---

## 6. Prototype

Prototype giao diện đơn giản nằm trong thư mục `prototype/`.

Cách chạy:

1. Mở file `prototype/index.html` bằng trình duyệt.
2. Nhập khóa học, giáo viên, học viên, ngày bắt đầu, số buổi và lịch học theo tuần.
3. Bấm **Tạo lịch học**.
4. Xem danh sách buổi học được tự động sinh ra.

Prototype này dùng để minh họa logic nghiệp vụ và tư duy BA, không phải hệ thống production hoàn chỉnh.

---

## 7. Business Rules chính

- Hệ thống sinh lịch cho đến khi đủ số buổi học yêu cầu.
- Buổi học được sinh dựa trên ngày học trong tuần và khung giờ đã chọn.
- Nếu ngày được sinh ra là ngày nghỉ, hệ thống bỏ qua và tiếp tục tìm ngày hợp lệ tiếp theo.
- Nếu giáo viên bận, buổi học được đánh dấu là xung đột.
- Nếu học viên bận, buổi học được đánh dấu là xung đột.
- Người quản lý phải xem trước và xác nhận trước khi lưu.
- Chỉ các buổi học đã xác nhận mới hiển thị cho giáo viên và học viên.

---

## Project được thực hiện với mục đích phục vụ bài tập lớn môn học "Phân tích và thiết kế hệ thống thông tin"
