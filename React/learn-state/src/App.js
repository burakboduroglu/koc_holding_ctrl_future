import './App.css';
import {useState} from "react";
import Course from "./Course";


function getRandomCourse(){
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'Web'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {

  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    console.log(courses)
    setCourses([...courses, getRandomCourse()]); // Spread
  }

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course}/>
  })

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Add Course</button>
      <div className="courseList">
        {courseList}
      </div>
    </div>
  );
}

export default App;
