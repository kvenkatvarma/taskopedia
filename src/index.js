import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  const course = "React JS";
  return(
    <div>
      <p>In this course, we will learn {course} by building Taskopedia</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
    </div>
  )
}


function MainHeader(){
  return(
    <h1 className='heading1'>REACT COURSE</h1>
  )
}

function Header(){
  return(
    <div>
          <MainHeader />
          <SubHeader />
    </div>
 
  )
}

const subHeaderStyle ={
  color:"blueviolet",
  backgroundColor:"lightgray"
}
function SubHeader(){
  return(
    <p style={subHeaderStyle}>This will be an exciting course</p>
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
    <Footer />
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

