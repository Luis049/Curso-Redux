import { Provider } from "react-redux";
import "./App.css";
import ComponentRedux1 from './components/Redux/ComponentRedux1';
import Gentleman from "./pages/Gentleman/Gentleman";
import GentlemanStore from "./redux/store";
import Component1 from "./components/RxJS/Component1";
import Component2 from "./components/RxJS/Component2";

const App = () => {
  return (
    <>
      <div className="App">
        <Provider store={GentlemanStore}>
          <h2>RxJS</h2>
          <Component1 />
          <Component2 />
          <h2>context</h2>
          <Gentleman />
          <h2>Redux</h2>
          <ComponentRedux1 />          
        </Provider>
      </div>
    </>
  );
}

export default App;
