import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {database} from './fire'
import {ref,push,child,update} from "firebase/database";
import {useState} from "react"

const Register = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit = () =>{
    let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}
  return(
    <div className="form-reg">
        <div className="form-body">
            <div className="username">
                <input className="form__input" type="text" id="firstName" value={firstName} onChange = {(e) => handleInputChange(e)} placeholder="First Name"/>
            </div>
            <div className="lastname">
                <input  type="text" name="" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName"  className="form__input" placeholder="LastName"/>
            </div>
            <div className="email">
                <input  type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" className="form__input" placeholder="Email"/>
            </div>
            <div className="password">
                <input className="form__input" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <input className="form__input" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="footer">
            <button onClick={()=>handleSubmit()} type="submit">Register</button>
        </div>
    </div>      
  )       
  }

export default Register;