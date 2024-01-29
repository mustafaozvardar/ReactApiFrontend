import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import Loading from '../components/Loading.js'

function StudentEdit(){

    let { id } = useParams();   

    const navigate = useNavigate();   

    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    const [student,setStudent] = useState({})

    useEffect(() => {
       
        axios.get(`http://localhost:8000/api/students/${id}/edit`).then(res=>{
            console.log(res)
            setStudent(res.data.student);
            setLoading(false);
        })
        .catch(function(error){
            if(error.response){
               
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });
       
    }, [id])

    const handleInput=(e) =>{
        e.persist();
        setStudent({...student,[e.target.name]: e.target.value});
    }

    const updateStudent = (e) => {
        e.preventDefault();

        setLoading(true);

        const data = {
            name:student.name,
            email:student.email,
            phone:student.phone,
            course:student.course,
        }

        axios.put(`http://localhost:8000/api/students/${id}/edit`, data)
        .then(res =>{
            alert(res.data.message);
            navigate('/students');
            setLoading(false);
        })
        .catch(function(error){
            if(error.response){
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });
    }

    if(loading){
        return(
            
            <Loading/>
        )
    }

    if(Object.keys(student).length===0){
        return(
            <div className="container">
                <h4>No Student ID Found...</h4>
            </div>
        )
    }

    return (
        <div>
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4> Edit Student
                                   
                                    <Link to="/students" className="btn btn-danger float-end">
                                        Back
                                    </Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateStudent}>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.name}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.email}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Phone</label>
                                    <input type="text" name="phone" value={student.phone} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.phone}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Course</label>
                                    <input type="text" name="course" value={student.course} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.course}</span>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" class="btn btn-primary">Update Student</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default StudentEdit;