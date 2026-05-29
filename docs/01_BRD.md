# Tài liệu Yêu cầu Nghiệp vụ (BRD)

## 1. Tên dự án

Hệ thống Tự động Tạo Lịch Học

## 2. Bối cảnh

Trung tâm tiếng Anh hiện đang sử dụng hệ thống nội bộ để quản lý học viên, giáo viên, khóa học và thông tin lớp. Mỗi khóa học có số buổi cố định, ví dụ 16, 24 hoặc 32 buổi.

Khi học viên đăng ký khóa học, người quản lý thường đã biết lịch rảnh của học viên, lịch rảnh của giáo viên và khung giờ học theo tuần. Tuy nhiên, người quản lý vẫn phải tạo từng buổi học thủ công trong hệ thống.

Ví dụ, nếu học viên đăng ký khóa 32 buổi và học 2 buổi/tuần, người quản lý phải nhập 32 bản ghi buổi học.

## 3. Vấn đề nghiệp vụ

Quy trình tạo lịch thủ công hiện tại gây ra:

- Nhập liệu lặp lại nhiều lần
- Tốn thời gian cho người quản lý lớp
- Dễ sai ngày, sai giờ hoặc tạo trùng buổi học
- Khó kiểm tra xung đột lịch giáo viên/học viên
- Chậm quá trình mở lớp sau khi học viên đăng ký
- Dữ liệu lịch học không nhất quán giữa quản lý, giáo viên và học viên

## 4. Mục tiêu nghiệp vụ

| ID | Mục tiêu |
|---|---|
| BO-01 | Giảm thao tác thủ công khi tạo lịch học |
| BO-02 | Tự động sinh buổi học dựa trên khóa học và lịch học theo tuần |
| BO-03 | Kiểm tra lịch rảnh của giáo viên và học viên trước khi xác nhận |
| BO-04 | Giảm lỗi tạo lịch và dữ liệu trùng lặp |
| BO-05 | Tập trung dữ liệu lịch học trong một hệ thống |
| BO-06 | Giúp quản lý, giáo viên và học viên dễ xem lịch học sắp tới |

## 5. Stakeholders

| Stakeholder | Nhu cầu / kỳ vọng |
|---|---|
| Người quản lý lớp | Tạo lịch nhanh, giảm nhập liệu lặp lại, quản lý buổi học dễ hơn |
| Giáo viên | Cập nhật lịch rảnh, xem lịch dạy, tránh trùng lịch |
| Học viên | Cung cấp lịch rảnh, xem lịch học sắp tới |
| Chủ trung tâm / Quản lý vận hành | Giảm chi phí vận hành, tăng hiệu quả, kiểm soát ngân sách triển khai |
| Developer | Nhận yêu cầu chức năng và business rules rõ ràng |
| Tester / QA | Có acceptance criteria và test scenarios rõ ràng |

## 6. Quy trình hiện tại

1. Học viên đăng ký khóa học.
2. Người quản lý kiểm tra thông tin khóa học và tổng số buổi.
3. Người quản lý kiểm tra lịch rảnh của giáo viên.
4. Người quản lý kiểm tra lịch rảnh của học viên.
5. Người quản lý tạo từng buổi học thủ công trên hệ thống.
6. Giáo viên và học viên xem các buổi học đã được tạo.

## 7. Pain Points

| Pain point | Tác động |
|---|---|
| Tạo nhiều buổi học thủ công | Tốn nhiều thời gian cho mỗi khóa |
| Nhập liệu lặp lại | Tăng nguy cơ lỗi do con người |
| Không tự động kiểm tra xung đột | Có thể xảy ra trùng lịch giáo viên/học viên |
| Khó xử lý ngày nghỉ | Người quản lý phải tự bỏ qua hoặc điều chỉnh ngày |
| Phụ thuộc vào một người xử lý | Dễ chậm khi người quản lý bận |

## 8. Giải pháp nghiệp vụ đề xuất

Xây dựng tính năng **Tự động tạo lịch học** trong hệ thống hiện có.

Người quản lý nhập:

- Khóa học
- Học viên
- Giáo viên
- Ngày bắt đầu
- Ngày học trong tuần
- Khung giờ học
- Tổng số buổi
- Tùy chọn xử lý ngày nghỉ

Hệ thống tự động sinh danh sách buổi học, kiểm tra xung đột, hiển thị kết quả xem trước và lưu các buổi đã xác nhận vào database.

## 9. Phạm vi trong dự án

- Tự động sinh buổi học theo lịch học trong tuần
- Xem trước lịch trước khi lưu
- Kiểm tra lịch rảnh của giáo viên
- Kiểm tra lịch rảnh của học viên
- Bỏ qua ngày nghỉ nếu được cấu hình
- Lưu các buổi học đã xác nhận
- Cho phép giáo viên và học viên xem lịch đã xác nhận
- Cung cấp UAT test cases và user guide

## 10. Ngoài phạm vi

- Tích hợp thanh toán online
- Điểm danh học viên
- Quản lý tài liệu học tập
- Tối ưu lịch bằng AI nâng cao
- Ứng dụng mobile
- Tính lương giáo viên

## 11. Chỉ số thành công

| Chỉ số | Hiện tại | Mục tiêu |
|---|---|---|
| Thời gian tạo 32 buổi | 15–30 phút | 1–3 phút |
| Số thao tác nhập liệu | 32+ thao tác | 1 luồng tạo lịch |
| Tỷ lệ lỗi tạo lịch | Trung bình | Thấp |
| Tạo trùng buổi học | Có thể xảy ra | Được ngăn bằng validation |
| Mức hài lòng người dùng | Chưa đo | Nhận phản hồi tích cực từ quản lý |

## 12. Rủi ro và giả định

### Rủi ro

- Dữ liệu lịch rảnh của giáo viên có thể không được cập nhật thường xuyên.
- Lịch rảnh của học viên có thể thay đổi sau khi đã sinh lịch.
- Dữ liệu ngày nghỉ có thể chưa đầy đủ.
- Người dùng vẫn muốn chỉnh tay trong các trường hợp đặc biệt.

### Giả định

- Dữ liệu khóa học, giáo viên và học viên đã có trong hệ thống.
- Hệ thống có thể lưu lịch rảnh của giáo viên/học viên.
- Người quản lý có quyền tạo và xác nhận lịch học.
- Chi phí phát triển phù hợp với khả năng của trung tâm.

## 13. Tiêu chí phê duyệt

Tính năng được xem là thành công khi:

- Người quản lý có thể tạo toàn bộ buổi học cho một khóa mà không cần nhập từng buổi.
- Lịch được sinh đúng ngày học trong tuần và khung giờ đã chọn.
- Hệ thống phát hiện được xung đột lịch giáo viên/học viên.
- Người quản lý có thể xem trước và xác nhận lịch.
- Giáo viên và học viên có thể xem các buổi học đã xác nhận.
