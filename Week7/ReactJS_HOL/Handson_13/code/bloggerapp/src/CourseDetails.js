import React from 'react';

function CourseDetails({ courses, showCourses }) {
  if (!showCourses) {
    return <p>Courses are hidden.</p>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - Duration: {course.duration} months
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
