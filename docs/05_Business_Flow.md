# Business Flow

## 1. Quy trình hiện tại

```text
Học viên đăng ký khóa học
        ↓
Người quản lý kiểm tra khóa học và số buổi
        ↓
Người quản lý kiểm tra lịch giáo viên
        ↓
Người quản lý kiểm tra lịch học viên
        ↓
Người quản lý tạo từng buổi học thủ công
        ↓
Giáo viên/học viên xem lịch
```

## 2. Vấn đề trong quy trình hiện tại

- Người quản lý phải nhập nhiều bản ghi giống nhau.
- Mỗi lần tạo lịch tốn 15–30 phút nếu khóa có nhiều buổi.
- Dễ xảy ra sai sót khi nhập ngày/giờ.
- Không có bước kiểm tra xung đột tự động.
- Việc xử lý ngày nghỉ phụ thuộc vào người quản lý.

## 3. Quy trình đề xuất

```text
Học viên đăng ký khóa học
        ↓
Người quản lý chọn khóa học, học viên, giáo viên
        ↓
Người quản lý nhập ngày bắt đầu, ngày học trong tuần, khung giờ
        ↓
Hệ thống tự động sinh danh sách buổi học
        ↓
Hệ thống bỏ qua ngày nghỉ và kiểm tra xung đột
        ↓
Người quản lý xem trước lịch học
        ↓
Không có xung đột? ── Không ──> Chỉnh thông tin đầu vào
        ↓ Có
Người quản lý xác nhận và lưu lịch
        ↓
Giáo viên/học viên xem lịch đã xác nhận
```

## 4. Luồng hệ thống chi tiết

1. Người quản lý nhập dữ liệu đầu vào.
2. Hệ thống validate dữ liệu bắt buộc.
3. Hệ thống lấy tổng số buổi từ khóa học.
4. Hệ thống duyệt từng ngày kể từ ngày bắt đầu.
5. Nếu ngày đó thuộc ngày học trong tuần, hệ thống tạo một buổi học.
6. Nếu ngày đó là ngày nghỉ và cấu hình bỏ qua ngày nghỉ được bật, hệ thống không tính buổi đó.
7. Hệ thống kiểm tra lịch rảnh của giáo viên.
8. Hệ thống kiểm tra lịch rảnh của học viên.
9. Hệ thống gắn trạng thái hợp lệ hoặc xung đột.
10. Hệ thống hiển thị danh sách xem trước.
11. Người quản lý xác nhận lịch hợp lệ.
12. Hệ thống lưu các buổi học vào database.

## 5. Giá trị nghiệp vụ sau cải tiến

| Trước cải tiến | Sau cải tiến |
|---|---|
| Nhập từng buổi học thủ công | Tự động sinh toàn bộ lịch học |
| Khó kiểm tra trùng lịch | Hệ thống đánh dấu xung đột |
| Dễ quên ngày nghỉ | Hệ thống bỏ qua ngày nghỉ |
| Mất 15–30 phút | Còn khoảng 1–3 phút |
| Dữ liệu phụ thuộc người nhập | Dữ liệu nhất quán hơn |
