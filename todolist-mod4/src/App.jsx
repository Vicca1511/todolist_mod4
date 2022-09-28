import "./App.css";
import { Form } from "./components/Form/Form";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="App__card">
        <Form />
        <Home />
      </div>
    </div>
  );
}

export default App;
