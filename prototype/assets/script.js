const holidayDates = new Set(['2026-06-17', '2026-09-02']);
const mockTeacherConflictDates = new Set(['2026-06-08']);
const mockStudentConflictDates = new Set(['2026-06-15']);

const weekdayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

function toDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getSelectedWeekdays() {
  return [...document.querySelectorAll('input[name="weekday"]:checked')].map(el => Number(el.value));
}

function validateInput(totalSessions, startDate, startTime, endTime, weekdays) {
  const errors = [];
  if (!startDate) errors.push('Vui lòng nhập ngày bắt đầu.');
  if (!totalSessions || totalSessions <= 0) errors.push('Tổng số buổi phải lớn hơn 0.');
  if (!startTime || !endTime) errors.push('Vui lòng nhập giờ bắt đầu và giờ kết thúc.');
  if (startTime >= endTime) errors.push('Giờ kết thúc phải sau giờ bắt đầu.');
  if (weekdays.length === 0) errors.push('Vui lòng chọn ít nhất một ngày học trong tuần.');
  return errors;
}

function generateSchedule() {
  const courseRaw = document.getElementById('course').value;
  const [courseName, defaultSessions] = courseRaw.split('|');
  const teacher = document.getElementById('teacher').value;
  const student = document.getElementById('student').value;
  const startDateValue = document.getElementById('startDate').value;
  const totalSessions = Number(document.getElementById('totalSessions').value || defaultSessions);
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;
  const skipHolidays = document.getElementById('skipHolidays').checked;
  const weekdays = getSelectedWeekdays();
  const errors = validateInput(totalSessions, startDateValue, startTime, endTime, weekdays);

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  const sessions = [];
  let currentDate = new Date(`${startDateValue}T00:00:00`);
  let guard = 0;

  while (sessions.length < totalSessions && guard < 500) {
    const weekday = currentDate.getDay();
    const dateString = toDateString(currentDate);

    if (weekdays.includes(weekday)) {
      if (skipHolidays && holidayDates.has(dateString)) {
        // Bỏ qua ngày nghỉ và không tính là một buổi học.
      } else {
        let status = 'Hợp lệ';
        let note = '-';

        if (mockTeacherConflictDates.has(dateString)) {
          status = 'Xung đột';
          note = 'Giáo viên bận / đã có lịch';
        } else if (mockStudentConflictDates.has(dateString)) {
          status = 'Xung đột';
          note = 'Học viên đã có buổi học khác';
        }

        sessions.push({
          number: sessions.length + 1,
          date: dateString,
          weekday: weekdayNames[weekday],
          time: `${startTime}-${endTime}`,
          teacher,
          student,
          status,
          note
        });
      }
    }

    currentDate = addDays(currentDate, 1);
    guard++;
  }

  renderSchedule(courseName, sessions);
}

function renderSchedule(courseName, sessions) {
  const tbody = document.getElementById('scheduleBody');
  const summary = document.getElementById('resultSummary');
  const confirmBtn = document.getElementById('confirmBtn');
  const conflictCount = sessions.filter(s => s.status === 'Xung đột').length;

  tbody.innerHTML = sessions.map(session => {
    const badgeClass = session.status === 'Hợp lệ' ? 'ok' : 'conflict';
    return `
      <tr>
        <td>${session.number}</td>
        <td>${session.date}</td>
        <td>${session.weekday}</td>
        <td>${session.time}</td>
        <td>${session.teacher}</td>
        <td>${session.student}</td>
        <td><span class="badge ${badgeClass}">${session.status}</span></td>
        <td>${session.note}</td>
      </tr>
    `;
  }).join('');

  summary.textContent = `${courseName}: đã tạo ${sessions.length} buổi học. Phát hiện ${conflictCount} xung đột.`;
  confirmBtn.disabled = sessions.length === 0 || conflictCount > 0;
}

function resetForm() {
  document.getElementById('scheduleBody').innerHTML = '<tr><td colspan="8" class="empty">Chưa có buổi học nào được tạo.</td></tr>';
  document.getElementById('resultSummary').textContent = 'Bấm Tạo lịch học để xem danh sách buổi học.';
  document.getElementById('confirmBtn').disabled = true;
}

document.getElementById('generateBtn').addEventListener('click', generateSchedule);
document.getElementById('resetBtn').addEventListener('click', resetForm);
document.getElementById('confirmBtn').addEventListener('click', () => {
  alert('Đây là prototype: trong hệ thống thực tế, các buổi học đã xác nhận sẽ được lưu vào database.');
});
