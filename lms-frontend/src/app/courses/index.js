// pages/courses/index.js

import { useEffect, useState } from 'react';
import firebase from '../../firebase/clientApp';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('courses').get().then((snapshot) => {
      const coursesData = [];
      snapshot.forEach((doc) => coursesData.push({ id: doc.id, ...doc.data() }));
      setCourses(coursesData);
    });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <a href={`/courses/${course.id}`}>{course.title}</a>
        </div>
      ))}
    </div>
  );
}
