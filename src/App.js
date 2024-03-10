import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import ReceipeState from "./context/receipeContext";

function App() {
  return (
    <div className="App">
      <ReceipeState>
        <RouterProvider router={router} />
      </ReceipeState>
    </div>
  );
}

export default App;
