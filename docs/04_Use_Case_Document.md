# Use Case Document

## 1. Danh sách use case

| ID | Use Case | Actor chính |
|---|---|---|
| UC-01 | Tạo lịch học tự động | Người quản lý lớp |
| UC-02 | Xem trước lịch học | Người quản lý lớp |
| UC-03 | Xác nhận và lưu lịch | Người quản lý lớp |
| UC-04 | Xem lịch dạy | Giáo viên |
| UC-05 | Xem lịch học | Học viên |
| UC-06 | Quản lý ngày nghỉ | Admin |

---

## UC-01: Tạo lịch học tự động

### Actor chính

Người quản lý lớp

### Mục tiêu

Tạo danh sách buổi học tự động dựa trên khóa học, giáo viên, học viên và lịch học theo tuần.

### Tiền điều kiện

- Người quản lý đã đăng nhập.
- Khóa học, học viên và giáo viên đã tồn tại trong hệ thống.
- Người quản lý có quyền tạo lịch học.

### Luồng chính

1. Người quản lý mở màn hình tạo lịch học.
2. Người quản lý chọn khóa học.
3. Hệ thống tự điền tổng số buổi học.
4. Người quản lý chọn học viên và giáo viên.
5. Người quản lý nhập ngày bắt đầu.
6. Người quản lý chọn ngày học trong tuần và khung giờ học.
7. Người quản lý chọn tùy chọn xử lý ngày nghỉ.
8. Người quản lý bấm **Tạo lịch học**.
9. Hệ thống kiểm tra dữ liệu đầu vào.
10. Hệ thống sinh danh sách buổi học.
11. Hệ thống kiểm tra ngày nghỉ và xung đột lịch.
12. Hệ thống hiển thị màn hình xem trước.

### Luồng thay thế

- A1: Thiếu thông tin bắt buộc → hệ thống hiển thị lỗi validation.
- A2: Không chọn ngày học trong tuần → hệ thống yêu cầu chọn ít nhất một ngày.
- A3: Giờ kết thúc nhỏ hơn hoặc bằng giờ bắt đầu → hệ thống báo lỗi.

### Hậu điều kiện

Danh sách buổi học được sinh ra và sẵn sàng để xem trước.

---

## UC-02: Xem trước lịch học

### Actor chính

Người quản lý lớp

### Mục tiêu

Kiểm tra danh sách buổi học trước khi lưu.

### Luồng chính

1. Hệ thống hiển thị bảng lịch học được sinh ra.
2. Người quản lý kiểm tra ngày, giờ, giáo viên và học viên.
3. Hệ thống đánh dấu các buổi có xung đột.
4. Người quản lý quyết định xác nhận hoặc chỉnh lại thông tin.

### Hậu điều kiện

Người quản lý biết lịch có hợp lệ hay cần chỉnh sửa.

---

## UC-03: Xác nhận và lưu lịch

### Actor chính

Người quản lý lớp

### Tiền điều kiện

- Lịch đã được tạo và xem trước.
- Không còn xung đột nghiêm trọng.

### Luồng chính

1. Người quản lý bấm **Xác nhận và lưu**.
2. Hệ thống lưu các buổi học vào database.
3. Hệ thống cập nhật trạng thái lịch là đã xác nhận.
4. Hệ thống hiển thị thông báo lưu thành công.
5. Giáo viên và học viên có thể xem lịch.

### Ngoại lệ

- Nếu database lỗi, hệ thống hiển thị thông báo và không lưu một phần dữ liệu.

---

## UC-04: Giáo viên xem lịch dạy

Giáo viên đăng nhập và xem các buổi dạy đã được xác nhận của mình. Giáo viên không được xem lịch của giáo viên khác.

## UC-05: Học viên xem lịch học

Học viên đăng nhập và xem lịch học đã được xác nhận của mình. Học viên không được xem lịch của người khác.

## UC-06: Quản lý ngày nghỉ

Admin thêm, sửa hoặc xóa ngày nghỉ để hệ thống bỏ qua khi tự động sinh lịch học.
