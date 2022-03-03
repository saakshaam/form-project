import React from 'react'
import { useState } from "react"
import './myStyles.css'
function FeedbackForm() {
          //States
          const  [name,setName]=useState("")
          const  [email,setEmail]=useState("")
          const  [contact,setCon]=useState("")
          const  [message,setMessage]=useState("")
          const  [gender,setGender]=useState("")


          //Handlers
          const nameHandler = (e) => setName(e.target.value);
          const mailhandler = (e) => setEmail(e.target.value);
          const conHandler = (e) => setCon(e.target.value);
          const messageHandler = (e) => setMessage(e.target.value);
          const genderHandler = (e) => setGender(e.target.value);
          const submitHandler = (e) => {
                    e.preventDefault();
                    const info = {
                              name,
                              email,
                              contact,
                              message,
                              gender,
                    };
                    setName("")
                    setEmail("")
                    setCon("")
                    setMessage("")
                    setGender("")
                    console.log(info.name)
                    console.log(info.email)
                    console.log(info.contact)
                    console.log(info.message)
                    console.log(info.gender)
          };

          //setState

          return (
                    <div className='form-main'>
                              <form onSubmit={submitHandler}>
                                        <h1 className='header'>Feedback Form</h1>
                                        <div class="mb-1">
  <label for="exampleFormControlInput1" class="form-label">Name: </label>
  <input type="text" class="form-control" size="50" id="name" placeholder="Enter your name" onChange={nameHandler} value={name} />
</div>
                                        

                                        <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Email: </label>
  <input type="text" class="form-control" id="email" size="50" placeholder="Enter your email" onChange={mailhandler} value={email} />
</div>
                                        

                                        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact Us: </label>
  <input type="text" class="form-control" id="contact" size="50" placeholder="Enter your phone number" onChange={conHandler} value={contact} />
</div>

                                        <div class="mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Message:  </label>
  <textarea class="form-control" name="message" id="message" size="50" rows="3" cols="50" onChange={messageHandler} value={message}></textarea>
</div><br />

                                        <div class="mb-5">
                                        <label>Gender: </label>
                                          <input class="form-check-input" type="radio" name="gender" value="female" onChange={genderHandler} id="female" />
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>



  <input class="form-check-input" type="radio" name="gender" value="male" onChange={genderHandler} id="male" />
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>

                                        <button type="submit" class="btn ">Submit</button><br></br>
                                        <div className='footer'>
                    Created by Saksham Shrivastava
                                        </div>
                              </form>
                    </div>
          )
}

export default FeedbackForm