import {useRef} from "react";

const items = [
  {id: 1, name: "item 1", status: "completed"},
  {id: 2, name: "item 2", status: "completed"},
  {id: 3, name: "item 3", status: "incompleted"},
]


function App() {
  const inputPasswordRef = useRef(null);

  const handleItemClick = (ele) => {
    alert(ele.name)
    // console.log(id)
  }

  let passwordValue = undefined;


  console.log("Password var:", passwordValue);

  function showPassword() {
    alert(passwordValue)
    // console.log(inputPasswordRef.current);
    // inputPasswordRef.current.focus();
    // alert(`Password: ${inputPasswordRef.current.value}`);
  }

  return (
    <div>
      {/* {items.map((ele)=> {
        // if(ele.status === "completed"){
        //   return <div className="item green" key={ele.id}>name: {ele.name} - id: {ele.id} - status: {ele.status}</div>
        // }
        // return <div className="item red" key={ele.id}>name: {ele.name} - id: {ele.id}</div>   
      
        const colorClass = ele.status === "completed" ? "green" : "red" ;

        
        return (
          <div
            onClick={() => handleItemClick(ele)}
            className={"item " + colorClass}
            key={ele.id}
          >
            name: {ele.name} - id: {ele.id}
          </div>
        );   
      })} */}
      <input
        onChange={(evt) => {
          console.log(evt.target.value);
          passwordValue = evt.target.value;
        }}
        ref={inputPasswordRef}
        type="password"
      />
      <input onClick={showPassword} type="button" value="show password" />
      <br />
      Password: {passwordValue}
    </div>
  );
}

export default App;
