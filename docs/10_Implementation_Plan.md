# Kế hoạch Triển khai

## 1. Mục tiêu triển khai

Triển khai tính năng tự động tạo lịch học vào hệ thống quản lý trung tâm tiếng Anh nhằm giảm thời gian tạo lịch, giảm lỗi nhập liệu và cải thiện trải nghiệm của người quản lý lớp.

## 2. Phạm vi triển khai giai đoạn đầu

- Tạo lịch học tự động theo ngày học trong tuần.
- Bỏ qua ngày nghỉ.
- Kiểm tra xung đột giáo viên và học viên.
- Xem trước lịch trước khi lưu.
- Lưu lịch đã xác nhận vào database.
- Cho phép giáo viên và học viên xem lịch đã xác nhận.

## 3. Các giai đoạn triển khai

### Giai đoạn 1: Chuẩn bị yêu cầu

- Làm rõ quy trình hiện tại với người quản lý lớp.
- Xác nhận business rules về ngày nghỉ, lịch rảnh và xung đột.
- Chốt phạm vi MVP.
- Hoàn thiện BRD, SRS, User Stories và UAT Test Cases.

### Giai đoạn 2: Thiết kế

- Thiết kế wireframe màn hình tạo lịch và xem trước lịch.
- Thiết kế database schema cho sessions, availability và holidays.
- Xác định API cần thiết cho frontend/backend.

### Giai đoạn 3: Phát triển

- Developer xây dựng backend logic sinh lịch.
- Developer xây dựng UI cho người quản lý.
- Tích hợp kiểm tra ngày nghỉ và xung đột.
- Lưu dữ liệu lịch học sau khi xác nhận.

### Giai đoạn 4: Kiểm thử nội bộ

- QA kiểm thử functional test.
- BA hỗ trợ làm rõ business rules.
- Kiểm thử các edge cases như ngày nghỉ, trùng lịch, thiếu dữ liệu.

### Giai đoạn 5: UAT

- Người quản lý lớp kiểm thử trên dữ liệu mẫu.
- Thu thập phản hồi về giao diện và luồng thao tác.
- Xác nhận tính năng đáp ứng nghiệp vụ.

### Giai đoạn 6: Go-live

- Triển khai tính năng cho một nhóm người dùng nhỏ trước.
- Theo dõi lỗi và phản hồi.
- Mở rộng cho toàn bộ trung tâm sau khi ổn định.

## 4. Dữ liệu cần chuẩn bị

- Danh sách khóa học và tổng số buổi.
- Danh sách giáo viên đang hoạt động.
- Danh sách học viên đang hoạt động.
- Lịch rảnh giáo viên.
- Lịch rảnh học viên.
- Danh sách ngày nghỉ.

## 5. Rủi ro triển khai

| Rủi ro | Cách xử lý |
|---|---|
| Lịch rảnh giáo viên không cập nhật | Yêu cầu giáo viên xác nhận lịch rảnh định kỳ |
| Người dùng chưa quen thao tác mới | Cung cấp user guide và hướng dẫn trực tiếp |
| Dữ liệu ngày nghỉ thiếu | Admin cập nhật trước khi tạo lịch |
| Logic xung đột chưa bao phủ hết trường hợp | Bổ sung test case và cải tiến theo feedback |

## 6. Đánh giá sau triển khai

Sau 2–4 tuần, đánh giá:

- Thời gian trung bình để tạo lịch cho một khóa.
- Số lỗi tạo lịch phát sinh.
- Mức độ hài lòng của người quản lý.
- Số trường hợp phải chỉnh tay sau khi sinh lịch.
- Feedback từ giáo viên và học viên.
