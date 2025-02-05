
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
    </div>
  )
}

export default MainBody;
