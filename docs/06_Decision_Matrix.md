# Decision Matrix

## 1. Mục tiêu

Tài liệu này so sánh các phương án giải quyết bài toán tạo lịch học thủ công tại trung tâm tiếng Anh.

## 2. Các phương án

| Phương án | Mô tả |
|---|---|
| A. Tiếp tục làm thủ công | Người quản lý vẫn tạo từng buổi học trong hệ thống |
| B. Dùng Excel hỗ trợ | Tạo lịch bằng Excel rồi nhập lại vào hệ thống |
| C. Xây tính năng tự động tạo lịch | Tích hợp chức năng sinh lịch trực tiếp trong hệ thống |
| D. Thuê thêm nhân sự | Tăng người nhập liệu để giảm tải cho quản lý |

## 3. Tiêu chí đánh giá

| Tiêu chí | Trọng số |
|---|---:|
| Giảm thời gian thao tác | 30% |
| Giảm lỗi nhập liệu | 25% |
| Dễ triển khai | 15% |
| Chi phí hợp lý | 15% |
| Khả năng mở rộng | 15% |

## 4. Bảng chấm điểm

Điểm từ 1 đến 5, trong đó 5 là tốt nhất.

| Phương án | Giảm thời gian | Giảm lỗi | Dễ triển khai | Chi phí | Mở rộng | Tổng điểm |
|---|---:|---:|---:|---:|---:|---:|
| A. Thủ công | 1 | 1 | 5 | 3 | 1 | 2.00 |
| B. Excel | 3 | 2 | 4 | 4 | 2 | 2.90 |
| C. Tự động hóa trong hệ thống | 5 | 5 | 3 | 3 | 5 | 4.45 |
| D. Thuê thêm nhân sự | 3 | 2 | 3 | 1 | 2 | 2.25 |

## 5. Kết luận

Phương án **C. Xây tính năng tự động tạo lịch trong hệ thống** được chọn vì có tổng điểm cao nhất. Phương án này giảm thời gian thao tác, giảm lỗi nhập liệu, dễ mở rộng và giúp dữ liệu lịch học được quản lý tập trung.

## 6. Lý do không chọn các phương án khác

### A. Tiếp tục làm thủ công

Không giải quyết được vấn đề gốc. Người quản lý vẫn tốn thời gian và dễ sai sót.

### B. Dùng Excel hỗ trợ

Excel giúp tạo lịch nhanh hơn nhưng vẫn tạo thêm bước nhập lại dữ liệu vào hệ thống. Ngoài ra, dữ liệu dễ bị phân tán và khó kiểm soát phiên bản.

### D. Thuê thêm nhân sự

Có thể giảm tải tạm thời nhưng tăng chi phí vận hành và không cải thiện quy trình hệ thống.

## 7. Khuyến nghị triển khai

- Triển khai tính năng tự động tạo lịch dưới dạng module trong hệ thống hiện có.
- Bắt đầu với rule-based scheduling đơn giản.
- Cho phép người quản lý xem trước và chỉnh sửa trước khi lưu.
- Sau giai đoạn đầu có thể mở rộng thêm tính năng tối ưu lịch nâng cao.
