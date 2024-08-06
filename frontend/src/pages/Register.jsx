import { useState } from 'react';
import img from '../assets/image.jpg';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const Register = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/addUser', formData,{ withCredentials: true });
        if(response.data === true){
          const user_data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            role: 'USER'
          };
          setUser(user_data);
          localStorage.setItem("user-data", JSON.stringify(user_data))
        }else{
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.log('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
          <div className='flex flex-col justify-center p-8 md:p-14'>
            <span className='mb-3 text-4xl font-bold'>Create Account</span>
            <span className='font-light text-gray-400 mb-8'>Please enter your details to register</span>
            <form onSubmit={handleSubmit}>
              <div className='py-4'>
                <span className='mb-2 text-md'>First Name</span>
                <input 
                  type='text' 
                  className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                  name='firstName' 
                  id='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              </div>
              <div className='py-4'>
                <span className='mb-2 text-md'>Last Name</span>
                <input 
                  type='text' 
                  className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                  name='lastName' 
                  id='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              </div>
              <div className='py-4'>
                <span className='mb-2 text-md'>Email</span>
                <input 
                  type='text' 
                  className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                  name='email' 
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className='py-4'>
                <span className='mb-2 text-md'>Password</span>
                <input 
                  type='password' 
                  className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                  name='password' 
                  id='password'
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <button type="submit" className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>
                Register
              </button>
            </form>
            <div className='text-center text-gray-400'>
              Already have an account?
              <a href="/login" className='font-bold text-black'>Sign in</a>
            </div>
          </div>
          <div className='relative'>
            <img className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' src={img} alt="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;