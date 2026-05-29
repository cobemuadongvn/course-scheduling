# User Stories

## Epic: Tự động tạo lịch học cho khóa học

Là người quản lý lớp, tôi muốn hệ thống tự động tạo các buổi học dựa trên thông tin khóa học và lịch học theo tuần, để không phải nhập từng buổi thủ công.

---

## US-01: Chọn khóa học

**Là** người quản lý lớp,  
**tôi muốn** chọn khóa học từ danh sách có sẵn,  
**để** hệ thống lấy đúng tổng số buổi học mặc định.

### Acceptance Criteria

- Danh sách khóa học hiển thị tên khóa và số buổi.
- Khi chọn khóa học, ô tổng số buổi được tự động điền.
- Nếu khóa học không còn hoạt động, khóa đó không được hiển thị.

---

## US-02: Chọn học viên

**Là** người quản lý lớp,  
**tôi muốn** chọn học viên đã đăng ký,  
**để** tạo lịch học cho đúng người học.

### Acceptance Criteria

- Chỉ hiển thị học viên đang hoạt động.
- Hệ thống lưu liên kết giữa học viên và lịch học.
- Nếu học viên không tồn tại, hệ thống hiển thị thông báo lỗi.

---

## US-03: Chọn giáo viên

**Là** người quản lý lớp,  
**tôi muốn** chọn giáo viên phụ trách khóa học,  
**để** hệ thống kiểm tra lịch rảnh của giáo viên khi sinh lịch.

### Acceptance Criteria

- Chỉ hiển thị giáo viên đang hoạt động.
- Hệ thống kiểm tra lịch rảnh của giáo viên.
- Nếu giáo viên không rảnh, hệ thống đánh dấu xung đột.

---

## US-04: Nhập lịch học theo tuần

**Là** người quản lý lớp,  
**tôi muốn** chọn các ngày học trong tuần và khung giờ học,  
**để** hệ thống biết quy tắc sinh lịch.

### Acceptance Criteria

- Phải chọn ít nhất một ngày học trong tuần.
- Phải nhập giờ bắt đầu và giờ kết thúc.
- Giờ kết thúc phải sau giờ bắt đầu.

---

## US-05: Tự động tạo lịch học

**Là** người quản lý lớp,  
**tôi muốn** bấm nút tạo lịch,  
**để** hệ thống tự sinh danh sách buổi học theo số buổi cần thiết.

### Acceptance Criteria

- Hệ thống tạo đủ số buổi theo khóa học.
- Các ngày sinh ra đúng với lịch học theo tuần.
- Các ngày nghỉ được bỏ qua nếu bật tùy chọn bỏ qua ngày nghỉ.
- Mỗi buổi có số thứ tự, ngày học, giờ học, giáo viên và học viên.

---

## US-06: Xem trước lịch học

**Là** người quản lý lớp,  
**tôi muốn** xem trước danh sách buổi học trước khi lưu,  
**để** kiểm tra lịch có đúng hay không.

### Acceptance Criteria

- Hệ thống hiển thị bảng danh sách buổi học.
- Các buổi có xung đột được đánh dấu rõ ràng.
- Người quản lý có thể quay lại chỉnh thông tin đầu vào.

---

## US-07: Xử lý xung đột lịch

**Là** người quản lý lớp,  
**tôi muốn** biết buổi nào bị trùng lịch giáo viên hoặc học viên,  
**để** điều chỉnh trước khi xác nhận.

### Acceptance Criteria

- Hệ thống phát hiện xung đột giáo viên.
- Hệ thống phát hiện xung đột học viên.
- Lịch có xung đột không được lưu nếu chưa xử lý.

---

## US-08: Xác nhận và lưu lịch

**Là** người quản lý lớp,  
**tôi muốn** xác nhận lịch học đã hợp lệ,  
**để** lưu lịch vào hệ thống.

### Acceptance Criteria

- Nút xác nhận chỉ khả dụng khi lịch hợp lệ.
- Sau khi xác nhận, hệ thống lưu các buổi học vào database.
- Giáo viên và học viên có thể xem lịch đã xác nhận.

---

## US-09: Giáo viên xem lịch dạy

**Là** giáo viên,  
**tôi muốn** xem lịch dạy đã được xác nhận,  
**để** chuẩn bị bài giảng và quản lý thời gian.

### Acceptance Criteria

- Giáo viên chỉ xem các buổi học của mình.
- Lịch hiển thị ngày, giờ, khóa học và học viên.

---

## US-10: Học viên xem lịch học

**Là** học viên,  
**tôi muốn** xem lịch học đã được xác nhận,  
**để** chủ động sắp xếp thời gian.

### Acceptance Criteria

- Học viên chỉ xem lịch của mình.
- Lịch hiển thị ngày, giờ, khóa học và giáo viên.
