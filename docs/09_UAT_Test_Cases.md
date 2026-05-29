# UAT Test Cases

## 1. Mục tiêu

Kiểm thử nghiệm thu người dùng nhằm xác nhận tính năng tự động tạo lịch học đáp ứng đúng nhu cầu nghiệp vụ của trung tâm tiếng Anh.

## 2. Test Cases

| ID | Tình huống kiểm thử | Bước thực hiện | Kết quả mong đợi | Trạng thái |
|---|---|---|---|---|
| UAT-01 | Tạo lịch hợp lệ cho khóa 32 buổi | Chọn khóa, học viên, giáo viên, ngày bắt đầu, T2/T4, 19:00–21:00, bấm Tạo lịch | Hệ thống sinh đủ 32 buổi đúng T2/T4 | Pass/Fail |
| UAT-02 | Không chọn ngày học trong tuần | Bỏ chọn toàn bộ ngày học và bấm Tạo lịch | Hệ thống báo lỗi phải chọn ít nhất một ngày | Pass/Fail |
| UAT-03 | Giờ kết thúc trước giờ bắt đầu | Nhập 21:00–19:00 và bấm Tạo lịch | Hệ thống báo lỗi giờ kết thúc phải sau giờ bắt đầu | Pass/Fail |
| UAT-04 | Bỏ qua ngày nghỉ | Chọn lịch có ngày trùng ngày nghỉ | Hệ thống bỏ qua ngày nghỉ và sinh ngày tiếp theo | Pass/Fail |
| UAT-05 | Xung đột giáo viên | Sinh lịch trùng với thời gian giáo viên bận | Buổi học được đánh dấu xung đột giáo viên | Pass/Fail |
| UAT-06 | Xung đột học viên | Sinh lịch trùng với thời gian học viên có lịch khác | Buổi học được đánh dấu xung đột học viên | Pass/Fail |
| UAT-07 | Xem trước trước khi lưu | Bấm Tạo lịch | Hệ thống hiển thị bảng xem trước | Pass/Fail |
| UAT-08 | Lưu lịch không có xung đột | Sinh lịch hợp lệ và bấm Xác nhận | Hệ thống lưu lịch vào database | Pass/Fail |
| UAT-09 | Không cho lưu khi còn xung đột | Sinh lịch có xung đột | Nút xác nhận bị vô hiệu hóa hoặc hệ thống chặn lưu | Pass/Fail |
| UAT-10 | Giáo viên xem lịch đã xác nhận | Đăng nhập vai trò giáo viên | Giáo viên chỉ thấy lịch của mình | Pass/Fail |

## 3. Tiêu chí nghiệm thu tổng thể

- Người quản lý có thể tạo lịch học tự động mà không nhập từng buổi.
- Lịch được sinh đúng theo số buổi, ngày học trong tuần và khung giờ.
- Hệ thống kiểm tra được ngày nghỉ và xung đột.
- Người dùng có thể xem trước trước khi xác nhận.
- Lịch đã xác nhận hiển thị đúng cho giáo viên và học viên.
