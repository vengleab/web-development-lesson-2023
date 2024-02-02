import React, { useContext, useState } from 'react'
import './login.scss'
import axios from 'axios'
import UserContext from '../../context/user-token'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const [state, setState] = useState();
  
  const handleOnChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    console.log({ name, value})
    setState((oldState) => ({ ...oldState , [name]: value }))
  }

  const handleSummit = async (e) => {
    e.preventDefault();

    // reques to api
    const { username, password } = state;
    const credentials = { username, password }

    try {
      const response = await axios.post("http://localhost:8080/login", credentials);
      const token = response.data.reuslt;
      // console.log(response.data.reuslt);
      localStorage.setItem("token", token);
      if(context.setLogin instanceof Function) {
        context.setLogin(true)
      } else {
        navigate("/")
      }
    } catch (error) {
      console.log("Request fail",error);
    }
  }

  return (
    <div className="wrapper fadeInDown">
      {JSON.stringify(state)}
      <div id="formContent">

        <div className="fadeIn first">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" id="icon" alt="User Icon" />
        </div>

        <form onSubmit={handleSummit} >
          <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="username" placeholder="login"/>
          <input onChange={handleOnChange} type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>

      </div>
    </div>
  )
}


// class Login extends React.Component {
//   static contextType = UserContext;

  

//   render() {
//     return (
//       <div className="wrapper fadeInDown">
//         {JSON.stringify(this.state)}
//         <div id="formContent">

//           <div className="fadeIn first">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" id="icon" alt="User Icon" />
//           </div>

//           <form onSubmit={this.handleSummit} >
//             <input onChange={this.handleOnChange} type="text" id="login" className="fadeIn second" name="username" placeholder="login"/>
//             <input onChange={this.handleOnChange} type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
//             <input type="submit" className="fadeIn fourth" value="Log In"/>
//           </form>

//           <div id="formFooter">
//             <a className="underlineHover" href="#">Forgot Password?</a>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

export default Login;
