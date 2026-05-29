# Tài liệu Đặc tả Yêu cầu Phần mềm (SRS)

## 1. Mục đích

Tài liệu này mô tả yêu cầu chức năng và phi chức năng cho tính năng **Tự động tạo lịch học** trong hệ thống quản lý trung tâm tiếng Anh.

Mục tiêu là giúp Developer, Tester, QA và Business Stakeholder hiểu rõ phạm vi, luồng xử lý, dữ liệu đầu vào, dữ liệu đầu ra và tiêu chí nghiệm thu.

## 2. Phạm vi hệ thống

Tính năng cho phép người quản lý tạo lịch học tự động cho một học viên đã đăng ký khóa học. Hệ thống sinh danh sách buổi học dựa trên:

- Khóa học và tổng số buổi
- Giáo viên
- Học viên
- Ngày bắt đầu
- Ngày học trong tuần
- Khung giờ học
- Lịch rảnh giáo viên
- Lịch rảnh học viên
- Danh sách ngày nghỉ

## 3. Vai trò người dùng

| Vai trò | Mô tả |
|---|---|
| Người quản lý lớp | Tạo, xem trước, xác nhận và chỉnh sửa lịch học |
| Giáo viên | Xem lịch dạy đã xác nhận, cập nhật lịch rảnh |
| Học viên | Xem lịch học đã xác nhận, cung cấp lịch rảnh |
| Admin | Quản lý dữ liệu nền như khóa học, người dùng, ngày nghỉ |

## 4. Yêu cầu chức năng

### FR-01: Chọn thông tin khóa học

Người quản lý có thể chọn khóa học từ danh sách có sẵn. Hệ thống tự động lấy tổng số buổi mặc định của khóa học.

**Acceptance Criteria:**

- Danh sách khóa học hiển thị tên khóa, cấp độ và số buổi.
- Khi chọn khóa học, tổng số buổi được tự động điền.
- Người quản lý có thể điều chỉnh số buổi nếu được phân quyền.

### FR-02: Chọn học viên và giáo viên

Người quản lý có thể chọn học viên và giáo viên cho lịch học.

**Acceptance Criteria:**

- Chỉ hiển thị học viên đang hoạt động.
- Chỉ hiển thị giáo viên đang hoạt động.
- Hệ thống dùng dữ liệu lịch rảnh để kiểm tra xung đột.

### FR-03: Nhập thông tin lịch học

Người quản lý nhập ngày bắt đầu, ngày học trong tuần và khung giờ học.

**Acceptance Criteria:**

- Ngày bắt đầu là bắt buộc.
- Phải chọn ít nhất một ngày học trong tuần.
- Giờ kết thúc phải lớn hơn giờ bắt đầu.
- Khung giờ không được để trống.

### FR-04: Tự động sinh danh sách buổi học

Hệ thống sinh danh sách buổi học cho đến khi đủ tổng số buổi yêu cầu.

**Acceptance Criteria:**

- Số buổi được sinh ra bằng tổng số buổi yêu cầu.
- Các buổi học đúng ngày trong tuần đã chọn.
- Mỗi buổi có số thứ tự, ngày học, giờ học, giáo viên, học viên và trạng thái.

### FR-05: Xử lý ngày nghỉ

Nếu ngày được sinh ra trùng với ngày nghỉ, hệ thống bỏ qua ngày đó và tiếp tục sinh ngày tiếp theo.

**Acceptance Criteria:**

- Ngày nghỉ không được tính là buổi học.
- Hệ thống tiếp tục sinh cho đến khi đủ số buổi.
- Người quản lý có thể xem ghi chú về ngày bị bỏ qua nếu cần.

### FR-06: Kiểm tra xung đột giáo viên

Hệ thống kiểm tra xem giáo viên có rảnh trong ngày và khung giờ được sinh ra hay không.

**Acceptance Criteria:**

- Nếu giáo viên không rảnh, buổi học được đánh dấu xung đột.
- Lịch có xung đột không được xác nhận cho đến khi xử lý.
- Ghi chú xung đột nêu rõ nguyên nhân.

### FR-07: Kiểm tra xung đột học viên

Hệ thống kiểm tra xem học viên có bị trùng lịch hay không.

**Acceptance Criteria:**

- Nếu học viên đã có buổi học khác trong cùng thời gian, hệ thống đánh dấu xung đột.
- Người quản lý phải chỉnh lịch hoặc chọn khung giờ khác.

### FR-08: Xem trước lịch học

Sau khi sinh lịch, hệ thống hiển thị màn hình xem trước.

**Acceptance Criteria:**

- Bảng xem trước hiển thị đầy đủ danh sách buổi học.
- Các buổi có xung đột được làm nổi bật.
- Người quản lý có thể quay lại chỉnh thông tin đầu vào.

### FR-09: Xác nhận và lưu lịch

Người quản lý xác nhận lịch hợp lệ để lưu vào database.

**Acceptance Criteria:**

- Chỉ lưu lịch khi không còn xung đột nghiêm trọng.
- Hệ thống lưu từng buổi học vào bảng `sessions`.
- Sau khi lưu, lịch hiển thị cho giáo viên và học viên.

### FR-10: Xem lịch đã xác nhận

Giáo viên và học viên có thể xem lịch học/dạy đã được xác nhận.

**Acceptance Criteria:**

- Giáo viên chỉ xem lịch dạy của mình.
- Học viên chỉ xem lịch học của mình.
- Lịch hiển thị ngày, giờ, khóa học và trạng thái.

## 5. Yêu cầu phi chức năng

| ID | Yêu cầu |
|---|---|
| NFR-01 | Giao diện dễ sử dụng với người quản lý không chuyên kỹ thuật |
| NFR-02 | Thời gian sinh lịch cho khóa 32 buổi dưới 3 giây |
| NFR-03 | Dữ liệu lịch học phải nhất quán sau khi xác nhận |
| NFR-04 | Chỉ người có quyền mới được tạo hoặc xác nhận lịch |
| NFR-05 | Hệ thống cần lưu log thao tác tạo lịch để truy vết |
| NFR-06 | Thiết kế dễ mở rộng cho nhiều khóa học và nhiều chi nhánh |

## 6. Business Rules

| ID | Quy tắc |
|---|---|
| BR-01 | Hệ thống chỉ sinh lịch sau ngày bắt đầu được chọn |
| BR-02 | Chỉ sinh lịch vào các ngày trong tuần được chọn |
| BR-03 | Ngày nghỉ bị bỏ qua nếu bật tùy chọn bỏ qua ngày nghỉ |
| BR-04 | Một giáo viên không được dạy hai buổi trùng thời gian |
| BR-05 | Một học viên không được học hai buổi trùng thời gian |
| BR-06 | Người quản lý phải xem trước lịch trước khi lưu |
| BR-07 | Lịch có xung đột phải được xử lý trước khi xác nhận |
| BR-08 | Chỉ lịch đã xác nhận mới hiển thị cho giáo viên/học viên |

## 7. Dữ liệu đầu vào

- Mã khóa học
- Mã học viên
- Mã giáo viên
- Ngày bắt đầu
- Danh sách ngày học trong tuần
- Giờ bắt đầu
- Giờ kết thúc
- Tổng số buổi
- Tùy chọn bỏ qua ngày nghỉ

## 8. Dữ liệu đầu ra

- Danh sách buổi học được sinh tự động
- Trạng thái từng buổi: hợp lệ hoặc xung đột
- Ghi chú xung đột nếu có
- Lịch đã xác nhận được lưu vào database

## 9. Giả định kỹ thuật

- Hệ thống có database quan hệ như MySQL.
- Các bảng học viên, giáo viên, khóa học và ngày nghỉ đã tồn tại hoặc có thể tạo mới.
- Frontend có thể gọi API để tạo lịch và lưu lịch.
- Prototype hiện tại chỉ mô phỏng logic bằng HTML/CSS/JavaScript.
