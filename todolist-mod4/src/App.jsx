
import "./App.css";
import {Form} from "./components/Form/Form"
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App__card">
        <Header/>
        <Form />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
