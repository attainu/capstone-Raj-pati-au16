import { useState } from "react";
import Header from "../../components/header/header";
// import * as yup from 'yup';
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
// import { PATHS } from "../../config";
import { user_address } from "../../Redux/actions/addressAction";
import "./index.css";

const Address = () => {
  const userid = useSelector((state) => state.auth.userData._id);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [location, setlocation] = useState("");
  // const [Err , setErr] = useState()

  // const checkoutAddressSchema =yup.object().shape({
  //   name:yup.string().required("name is required"),
  //   phone:yup.number().required("contact number is Required")
  //   .min(10,"numbers should be 10 character long")
  //   .max(10,"numbers must be only 10 character"),
  //   city:yup.string().required("City is required"),
  //   address:yup.string().required("Address is required"),
  //   state:yup.string().required("State is required"),
  // })
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(user_address(userid,name,phone,city,address,state,location))
    setname("")
    setphone("")
    setcity("")
    setaddress("")
    setstate("")
    setlocation("")

    // checkoutAddressSchema.validate({name,phone,city,address,state})
    // .then(()=>{})
    // .catch(err =>{
        
    //     setErr(err.errors);
    // })
  }

  return (
    <>
      <Header />
      <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h3>Address</h3>
          <br />
          <div className="input">
            <div className="inputBox">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter your name"
                name="name"
              />
            </div>
          </div>
          {/* {Err && <p>{Err.Name}</p>} */}
          <div className="input">
            <div className="inputBox">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="Enter your mobile number"
                name="phone"
              />
            </div>
          </div>
          {/* {Err && <p>{Err.Phone}</p>} */}
          <div className="input">
            <div className="inputBox">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder="Enter your Address"
                name="address"
              />
            </div>
          </div>
          {/* {Err && <p>{Err.City}</p>} */}
          <div className="input">
            <div className="inputBox">
              <label htmlFor="exampleInputPassword1" className="form-label">
                city
              </label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Enter your city"
                name="city"
              />
            </div>
          </div>
          {/* {Err && <p>{Err.address}</p>} */}
          <div className="input">
            <div className="inputBox">
              <select
                value={state}
                onChange={(e) => setstate(e.target.value)}
                name="state"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="" disabled="" selected>
                  --Select State--
                </option>
                <option value="Andaman &amp; Nicobar Islands">
                  Andaman &amp; Nicobar Islands
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">
                  Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          {/* {Err && <p>{Err.state}</p>} */}
          <div>
            <label>Home </label>
            <input 
                id="home" 
                value={location}  
                onClick={()=>setlocation("home")}
                checked={location === "home"} 
                onChange={(e)=>setlocation(e.currentTarget.value)}
                type="radio" 
                name="locationType" 
            />
            <label>Work</label>
            <input 
                id="work" 
                value={location} 
                onClick={()=>setlocation("work")}
                checked={location === "work"}
                onChange={(e)=>setlocation(e.currentTarget.value)}
                type="radio" 
                name="locationType" 
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
