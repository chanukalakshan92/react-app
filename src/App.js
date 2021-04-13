import { Contact } from "./components/contacts/Contact"
import { Navbar } from "./components/Navbar"
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


const App =() => {
  return (
    <Provider store={store}>
    <div className="App">
     
        <h1>
          <Navbar/>    
          <Contact/>
        </h1>
  
    </div>
    </Provider>
  );
}

export default App;
