import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>{
      data.dateSubmitted = new Date();
      fetch('https://morning-stream-12781.herokuapp.com/addRegistration', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              })
      .then(response => response.json()) 
      .then(data => {

          history.push('/welcome')
        //   console.log('posted')
        }
          )
          .catch(error => console.log(error))
    //   console.log(data)
  
  } 
  
    return (
        <div className="App mx-auto">
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <label for="full name">Full Name</label>
                     <input type="text" name="name" ref={register} class="form-control" id="" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" ref={register} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" ref={register} class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group">
                    <label for="date-of-birth">Date of Birth</label>
                    <input type="date" name="dob" ref={register} class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-check">
                    <input class="form-check-input" ref={register} type="radio" name="gender" id="exampleRadios1" value="male" checked/>
                    <label class="form-check-label" for="exampleRadios1">
                         Male
                    </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" ref={register} type="radio" name="gender" id="exampleRadios2" value="female"/>
                <label class="form-check-label" for="exampleRadios2">
                     Female
                </label>
                </div>
    
                <input type="submit" class="btn btn-primary"/>
            </form>
      </div>
    );
};

export default Home;