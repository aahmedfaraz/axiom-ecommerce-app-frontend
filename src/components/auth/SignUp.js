import React, { useState } from "react";

const SignUp = () => {
  const [formUser, setFormUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) =>
    setFormUser({ ...formUser, [e.target.name]: e.target.value });

  return (
    <form action='' className='form'>
      <h2>Register Yourself</h2>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          onChange={onChange}
          value={formUser.name}
          name='name'
          placeholder='Enter Name'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          onChange={onChange}
          value={formUser.email}
          name='email'
          placeholder='Enter Email'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          id='password'
          onChange={onChange}
          value={formUser.password}
          name='password'
          placeholder='Enter Password'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='password2'>Confirm Password</label>
        <input
          type='text'
          id='password2'
          onChange={onChange}
          value={formUser.password2}
          name='password2'
          placeholder='Enter Password Again'
        />
      </div>
    </form>
  );
};

export default SignUp;
