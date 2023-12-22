import React, { useRef, useState } from "react";
import Item from './Item';
import Button from "@mui/material/Button";
import MyButton from './Button';	




const items = [
  { id: 1, name: "item 1", status: "completed" },
  { id: 2, name: "item 2", status: "completed" },
  { id: 3, name: "item 3", status: "incompleted" },
];



function App() {
  // let selectedItem = undefined;
  let val = undefined
  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem("saveSated")
  );
  
  console.log("selected Item: ", selectedItem);
  console.log("val: ", val);
  // const handleItemClick = (displayText) => {
  //   alert(displayText);
  // };

  return (
    <div>
      {items.map((ele) => {
        // if(ele.status === "completed"){
        //   return <div className="item green" key={ele.id}>name: {ele.name} - id: {ele.id} - status: {ele.status}</div>
        // }
        // return <div className="item red" key={ele.id}>name: {ele.name} - id: {ele.id}</div>

        return (
          <Item
            onClick={() => {
              // selectedItem = ele.name;
              val = ele.name;
              setSelectedItem(ele.name);
              localStorage.setItem("saveSated", ele.name);
            }}
            id={ele.id}
            displayText={ele.name}
            textColor={ele.status === "completed" ? "green" : "red"}
          />
        );
      })}
      Selected item: {selectedItem}
      {/* <MyButton text="Submit" /> */}
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </div>
  );
}

export default App;
