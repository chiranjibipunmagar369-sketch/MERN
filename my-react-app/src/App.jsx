// function App() {
//         const name="chiran";
//         const age=12;

//   return (
//     <div>
//       <h1>My Shopping List</h1>
//       <p>welcome to {name}app!!!</p>
//       <p>i am {age} years.</p>
//       <button>add items!</button>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {

  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>🛒 My Shopping List</h1>

      <input placeholder="Enter item" />

      <button>Add</button>

      <h2>Items</h2>
    </div>
  );
}

export default App;