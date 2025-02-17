import React,{Component} from "react"
class StudentReview extends React.Component{
    render()
    {
     return(
           <div className="p-2">
                   <i class="bi bi-hand-thumbs-up-fill text-success" style={{cursor:"pointer"}}></i> &nbsp;
                   <i class="bi bi-hand-thumbs-down-fill text-danger" style={{cursor:"pointer"}}></i>
           </div>
    )
}
}
export default StudentReview;