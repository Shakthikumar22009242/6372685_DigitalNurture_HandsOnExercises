import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe' },
    { id: 2, title: 'Advanced React', author: 'Jane Smith' },
  ];

  const blogs = [
    { id: 1, title: 'Introduction to React', content: 'React is a JS library...' },
    { id: 2, title: 'React Hooks', content: 'Hooks allow you to...' },
  ];

  const courses = [
    { id: 1, name: 'React Bootcamp', duration: 3 },
    { id: 2, name: 'JavaScript Mastery', duration: 4 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blogger App</h1>

      {/* Buttons to toggle visibility */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? 'Hide' : 'Show'} Books
        </button>{' '}
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? 'Hide' : 'Show'} Blogs
        </button>{' '}
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? 'Hide' : 'Show'} Courses
        </button>
      </div>

      {/* Conditional Rendering - Element Variables */}
      {showBooks && <BookDetails books={books} />}

      {/* Conditional Rendering - Ternary operator */}
      {showBlogs ? <BlogDetails blogs={blogs} /> : <p>Blogs are not available now.</p>}

      {/* Conditional Rendering - If inside component */}
      <CourseDetails courses={courses} showCourses={showCourses} />
    </div>
  );
}

export default App;
