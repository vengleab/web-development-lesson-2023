import React from 'react'
import './login.scss'

class Login extends React.Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        {JSON.stringify(this.state)}
        <div id="formContent">

          <div className="fadeIn first">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" id="icon" alt="User Icon" />
          </div>

          <form onSubmit={this.onSubmit.bind(this)}>
            <input onChange={this.handleOnChange} type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
            <input onChange={this.handleOnChange} type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>
    )
  }
}

export default Login;
