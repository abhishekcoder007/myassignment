import React, {createContext,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
export  const Context=createContext();


const Globaldata=({children})=>{
  const [userDetails, setuserDetails] = useState(null);
  const [users,setusers]=useState([])
  return(
    <>
    <Context.Provider value={{userDetails, setuserDetails,users,setusers}}>
      {children}
    </Context.Provider>

    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globaldata>
    <App />
    </Globaldata>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
