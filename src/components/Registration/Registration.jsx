import React, {  useState } from 'react';

const Registration = () => {
    const [registration,setRegistration] = useState({email:'',password:''})

    const handleChange = (e) =>{
        const name = e.target.name;
    let value = e.target.value;

    if (name === "image") {
      value = e.target.files[0];
    }
       setRegistration({
        ...registration,
        [name]:value,
        
       })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData();

        // Append all form fields to formData
        Object.keys(registration).forEach((key) => {
        formData.append(key, registration[key]);
        });
            // console.log(registration);

        try {
            const response = await fetch(
              "http://127.0.0.1:8000/user/",
              {
                method: "POST",
                body: formData,
              }
            );
      
            if (response.ok) {
              const data = await response.json();
              if (data){
                console.log('register successfull',data)
            }

            } else {
              console.error("Error:", response.status, response.statusText);
            }
          } catch (error) {
            console.error("Error:", error.message);
          }

    }


    return (
        <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col ">
          <div className="  w-full m-auto shadow-2xl bg-base-100">
            <form encType='multipart/form-data' onSubmit={handleSubmit} className="card-body">

            <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input onChange={handleChange} name='first_name' type="text" placeholder="First Name" className="input input-bordered" required />
           </div>

            <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input onChange={handleChange} name='last_name' type="text" placeholder="Last Name" className="input input-bordered" required />
           </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={handleChange} name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={handleChange} name='password' type="password" placeholder="password" className="input input-bordered" required />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input onChange={handleChange} name='confirm_password' type="password" placeholder="Confirm password" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input onChange={handleChange} name='phone' type="number" placeholder="Enter your Phone" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input onChange={handleChange} name='address' type="text" placeholder="Enter your address" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input onChange={handleChange} name='image' type="file" placeholder="Choose an image" className="input input-bordered"  />
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
};

export default Registration;