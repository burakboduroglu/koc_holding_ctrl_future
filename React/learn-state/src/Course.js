import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Web from './images/kompleweb.jpg'
import './Course.css';

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    Web
}

function Course({ courseName }) {
    console.log(courseMap[courseName])
    return (
        <div className="course">
            <img className="courseImg" src={courseMap[courseName]} alt="course"/>
        </div>
    );
}


export default Course;