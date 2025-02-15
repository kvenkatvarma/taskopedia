
import Student from './Student';
import StudentReview from './StudentReview';
function MainBody(){
  const course = "React JS";
  const lectureCount = 3;
  return(
    <div style={{ minHeight: "70vh" }}>
      <p>In this course, we will learn {course} by building Taskopedia <br/>
      Total lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>    

      <div className='container row'>Students Enrolled</div>
          <Student experience ={2} name= "Venkat Varma"  headshot ='https://api.lorem.space/image/movie?w=150&h=220'>
             <StudentReview></StudentReview>
          </Student>
          <Student experience ={1} name= "Durgambica"  headshot ='https://api.lorem.space/image/movie?w=150&h=222'>
            <StudentReview></StudentReview>
          </Student>
          <Student experience ={2} name= "Sri Nitya"  headshot ='https://api.lorem.space/image/movie?w=150&h=224'/>
    </div>
  )
}

export default MainBody;
