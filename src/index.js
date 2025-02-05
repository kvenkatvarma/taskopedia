import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  return(
    <div>
      <p>In this course, we will learn react js by building Taskopedia</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  )
}

function MainHeader(){
  return(
    <h1>REACT COURSE</h1>
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

