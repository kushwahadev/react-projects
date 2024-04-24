import { useState } from "react";

function App() {
  const [color, setcolor] = useState("#252525");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className=" fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2
        "
        >
          <div
            className="flex flex-wrap justify-center gap-3 
          shadow-lg bg-white rounded-3xl px-3 py-2 text-white"
          >
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "red" }}
              onClick={() => setcolor("red")}
            >
              red
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => setcolor("blue")}
            >
              blue
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              green
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "olive" }}
              onClick={() => setcolor("olive")}
            >
              olive
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "gray" }}
              onClick={() => setcolor("gray")}
            >
              gray
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setcolor("yellow")}
            >
              yellow
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "pink" }}
              onClick={() => setcolor("pink")}
            >
              pink
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Purple" }}
              onClick={() => setcolor("purple")}
            >
              Purple
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Lavender" }}
              onClick={() => setcolor("lavender")}
            >
              Lavender
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "teal" }}
              onClick={() => setcolor("teal")}
            >
              teal
            </button>
            <button
              className=" outline-none px-4 rounded-xl"
              style={{ backgroundColor: "orange" }}
              onClick={() => setcolor("orange")}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
