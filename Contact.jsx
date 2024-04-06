import React, { useState } from "react";
function Contact(){
    const[data,setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
 
    function inputevent(event){
    const {name,value}=event.target;
      setdata((preVal=>{
        return{
            ...preVal,
            [name]:value,
        };
      })) ;
};

function submit(e){
e.preventDefault();
alert(
    `my name is ${data.fullname}.my mobile is ${data.phone}.my email is${data.email}`
)
}  
    
    return(
      <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="conatiner contact-div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
<form action="" onSubmit={submit}>  
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="enter name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="phonenumber" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputevent} placeholder="enter phone number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputevent} rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
            </div>
        </div>
      </div>
      </>
    )
} export default Contact;