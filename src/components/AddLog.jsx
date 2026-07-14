import axios from 'axios'
import React, { useState } from 'react'

const AddLog = () => {
    const [input, changeInput] = useState(
        {
            name: "",
            dept: "",
            course: "",
            systemnumber: "",
            loginTime: "",
            logoutTime: "",
            date: ""
        }
    )

const inputHandler=()=>{
    changeInput({...input,[event.target.name]:event.target.value})
}


const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:3000/lab-entry").then(
        (response)=>{
            alert("lab login added")
        }
    ).catch(
        (error)=>{
            console.error("error adding login",error)
            alert("failed to add login")
        }
    )
}

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input
                                name="name"
                                value={input.name}
                                onChange={inputHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Department</label>
                                <input 

                                name="dept"
                                value={input.dept}
                                onChange={inputHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course</label>
                                <input 
                                
                                name="course"
                                value={input.course}
                                onChange={inputHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">System Number</label>
                                <input
                                
                                name="systemnumber"
                                value={input.systemnumber}
                                onChange={inputHandler}
                                
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Login Time</label>
                                <input 
                                
                                name="loginTime"
                                value={input.loginTime}
                                onChange={inputHandler}
                                
                                type="time" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Logout Time</label>
                                <input 

                                name="logoutTime"
                                value={input.logoutTime}
                                onChange={inputHandler}
                                
                                type="time" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date</label>
                                <input
                                
                                name="date"
                                value={input.date}
                                onChange={inputHandler}
                                
                                type="date" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddLog