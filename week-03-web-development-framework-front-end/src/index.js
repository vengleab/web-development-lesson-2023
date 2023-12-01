import React from 'react'
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Josh Perez";	

const printMessage = (msg) => {
    return msg
}

const PasswordInput = () => {
return (
  <div>
    <div>Password</div>
    <input type="password" />
  </div>
);
}

const arr = [
    "App",
    "Banana",
    "Candy"
]

const DisplayItem = () =>{
    return arr.map(function(ele){
        return <h1>{ele}</h1>
    })
}
/*
    <div>Apple</div>
    <div>Banana</div>
    <div>Candy</div>
*/ 



// function PasswordInput() {
//     return <div>
//         <div>Password</div>
//         <input type="password" />
//     </div>
// }

function Div() {
    return (
      <div>
        <div>
          <div>Email</div>
          <input type="email" />
        </div>
        {PasswordInput()}
        <DisplayItem />
      </div>
    );
}

const paragraph = <p>{name.repeat(5)} sdklfjdskljfsdlkjfsdkljfkfdsjfdsiufesj</p>




root.render(<Div />);


reportWebVitals();
