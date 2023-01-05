import React, { useEffect, useState } from "react";
import "./Inputboxes.css";
import TextField from "@mui/material/TextField";

const ContainerLayout = () => {
  const [Color, setColor] = useState(0);
  const [boxx, setGrid] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [color, setcolor] = useState("");

  const fillCount = userInput ? Math.pow(userInput, 2) : 0;
  useEffect(() => {
    createGrid();
  }, [Color]);
  const mainbox = {
    width: 300 * Color,
    display: "grid",
    gridTemplateColumns: ` repeat(${Color}, 30px)`,
  };

  const Grid = {
    height: "40px",
    border: "1px solid black",
  };
  const createGrid = () => {
    let arr = [];
    for (let i = 0; i < Color; i++) {
      let temp = [];
      for (let j = 0; j < Color; j++) {
        temp.push(<div style={Grid}></div>);
      }
      arr.push(temp);
    }
    setGrid(arr);
  };
  const changeColor = () => {
    const random = Math.floor(Math.random() * Color * Color);
    const findidx = Math.floor(random / Color);
    const indexx = random - Color * findidx;

    setGrid((prev) => {
      return prev.map((items, index) => {
        if (index == findidx) {
          return items.map((item, idx) => {
            if (idx == indexx) {
              return <div style={{ ...Grid, backgroundColor: color }}></div>;
            }
            return item;
          });
        } else {
          return items;
        }
      });
    });
  };

  return (
    <div>
      <div className="form-field">
        <div className="services"></div>
      </div>

      <div>
        <TextField
          className="text"
          label="Number"
          type="number"
          // value={userInput}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <TextField
        className="red"
        type="text"
        label="Text"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />

      <button className="button" onClick={changeColor}>
        Add color
      </button>
      <div className="box" style={mainbox}>
        {boxx}
      </div>
      <div
        className="container"
        style={{ gridTemplateColumns: `repeat(${userInput}, 50px)` }}
      >
        {Array(fillCount)
          .fill(null)
          .map((_) => {
            return (
              <div
                className="item"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
export default ContainerLayout;
