# ERD và Mô hình dữ liệu

## 1. Mục đích

Tài liệu này mô tả các thực thể dữ liệu chính phục vụ tính năng tự động tạo lịch học.

## 2. Các thực thể chính

| Entity | Mô tả |
|---|---|
| students | Lưu thông tin học viên |
| teachers | Lưu thông tin giáo viên |
| courses | Lưu thông tin khóa học và tổng số buổi |
| enrollments | Lưu thông tin học viên đăng ký khóa học |
| teacher_availability | Lưu lịch rảnh của giáo viên |
| student_availability | Lưu lịch rảnh của học viên |
| holidays | Lưu danh sách ngày nghỉ |
| sessions | Lưu các buổi học đã được tạo |

## 3. Sơ đồ ERD dạng text

```text
students 1 --- n enrollments n --- 1 courses

enrollments 1 --- n sessions n --- 1 teachers

teachers 1 --- n teacher_availability
students 1 --- n student_availability

holidays được dùng để kiểm tra khi sinh lịch học
```

## 4. Giải thích bảng

### students

Lưu thông tin cơ bản của học viên.

| Trường | Mô tả |
|---|---|
| student_id | Khóa chính |
| full_name | Họ tên học viên |
| phone | Số điện thoại |
| email | Email |
| status | Trạng thái hoạt động |

### teachers

Lưu thông tin giáo viên.

| Trường | Mô tả |
|---|---|
| teacher_id | Khóa chính |
| full_name | Họ tên giáo viên |
| phone | Số điện thoại |
| email | Email |
| status | Trạng thái hoạt động |

### courses

Lưu thông tin khóa học.

| Trường | Mô tả |
|---|---|
| course_id | Khóa chính |
| course_name | Tên khóa học |
| level | Cấp độ |
| total_sessions | Tổng số buổi |
| default_duration_minutes | Thời lượng mặc định mỗi buổi |

### enrollments

Lưu thông tin đăng ký khóa học của học viên.

| Trường | Mô tả |
|---|---|
| enrollment_id | Khóa chính |
| student_id | Học viên đăng ký |
| course_id | Khóa học được đăng ký |
| enrollment_date | Ngày đăng ký |
| status | Trạng thái đăng ký |

### teacher_availability / student_availability

Lưu lịch rảnh theo ngày trong tuần và khung giờ.

| Trường | Mô tả |
|---|---|
| availability_id | Khóa chính |
| teacher_id / student_id | Người tương ứng |
| weekday | Ngày trong tuần, 0 = Chủ nhật, 1 = Thứ hai |
| start_time | Giờ bắt đầu rảnh |
| end_time | Giờ kết thúc rảnh |

### holidays

Lưu danh sách ngày nghỉ để hệ thống bỏ qua khi sinh lịch.

### sessions

Lưu các buổi học đã được tạo.

| Trường | Mô tả |
|---|---|
| session_id | Khóa chính |
| enrollment_id | Đăng ký khóa học liên quan |
| teacher_id | Giáo viên phụ trách |
| session_number | Số thứ tự buổi học |
| session_date | Ngày học |
| start_time | Giờ bắt đầu |
| end_time | Giờ kết thúc |
| status | Trạng thái buổi học |
| conflict_note | Ghi chú xung đột nếu có |
| created_by | Người tạo lịch |
| created_at | Thời điểm tạo |

## 5. Ghi chú thiết kế dữ liệu

- `sessions` có ràng buộc duy nhất theo `enrollment_id` và `session_number` để tránh tạo trùng số buổi.
- `holidays` có ràng buộc unique theo `holiday_date` để tránh trùng ngày nghỉ.
- Có thể mở rộng thêm bảng `branches` nếu trung tâm có nhiều chi nhánh.
