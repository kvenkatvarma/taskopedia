import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Students from './Students';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  const course = "React JS";
  const lectureCount = 3;
  return(
    <div>
      <p>In this course, we will learn {course} by building Taskopedia <br/>
      Total lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>    
    </div>
  )
}


function Footer(){
  return(
    <p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>
  )
}
root.render(
 <div>
  <Header />
    <MainBody/>
    <Students />
    <Footer />
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

