CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(150) NOT NULL,
    level VARCHAR(50),
    total_sessions INT NOT NULL,
    default_duration_minutes INT DEFAULT 120
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE teacher_availability (
    availability_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT NOT NULL,
    weekday TINYINT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);

CREATE TABLE student_availability (
    availability_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    weekday TINYINT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE holidays (
    holiday_id INT PRIMARY KEY AUTO_INCREMENT,
    holiday_date DATE NOT NULL UNIQUE,
    holiday_name VARCHAR(150) NOT NULL
);

CREATE TABLE sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    enrollment_id INT NOT NULL,
    teacher_id INT NOT NULL,
    session_number INT NOT NULL,
    session_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status VARCHAR(30) DEFAULT 'confirmed',
    conflict_note VARCHAR(255),
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
    UNIQUE KEY unique_enrollment_session (enrollment_id, session_number)
);
