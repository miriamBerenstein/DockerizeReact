import './App.css';
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import ShowDetails from './FinalProject/Components/Shop'
import store from './Redux/store';
// import { useNavigate } from "react-router-dom"
import ShowCart from './FinalProject/Components/Cart';
import Payment from './FinalProject/Components/Payment';
import About from './FinalProject/Components/About';


function App() {
  return (
    <div >
      <Provider store={store}>

        <BrowserRouter>
          <Routes>

            <Route exact path="/Cart" element={<ShowCart />}></Route>
            <Route exact path="/Shop" element={<ShowDetails />}></Route>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path='/Payment' element={<Payment />}></Route>

          </Routes>
        </BrowserRouter>
      </Provider>

    </div>

  );
}

export default App;
