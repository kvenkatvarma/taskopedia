import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layout/Header';
import Student from './Student';
import Footer from './Layout/Footer';
import MainBody from './MainBody';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <div style={{ backgroundColor: "black", color: "grey" }}>
  <Header />
    <MainBody/>
    <div className='container row'>Students Enrolled</div>
    <Student experience ={2} name= "Venkat Varma"  headshot ='https://api.lorem.space/image/movie?w=150&h=220'/>
    <Student experience ={1} name= "Durgambica"  headshot ='https://api.lorem.space/image/movie?w=150&h=222'/>
    <Student experience ={2} name= "Sri Nitya"  headshot ='https://api.lorem.space/image/movie?w=150&h=224'/>

    <Footer />
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

