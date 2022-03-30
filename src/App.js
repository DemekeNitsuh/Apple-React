  // import React,{Component} from 'react';
import './App.css';
import Header from './commonResource/code/Header/Header';
import Alert from './commonResource/code/Main/Alert/Alert';
import FirstSec from './commonResource/code/Main/FirstSec/FirstSec';
import FourthSection from './commonResource/code/Main/FourthSection/FourthSection';
import FifthSection from './commonResource/code/Main/FifthSection/FifthSection';
import SixthSection from './commonResource/code/Main/SixthSection/SixthSection';
import FooterSec from './commonResource/code/FooterSec/FooterSec';
import User from './commonResource/User';
import "./commonResource/code/Header/Header.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//page
import Iphone from "./Pages/Iphones/Iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";







// class App extends Component {

//   render(){
//     return (
//       <div className="App">
//         <Header/>
//         <Alert/>
//         <FirstSec/>
//         <FourthSection/>
//         <FifthSection/>
//         <SixthSection/>
//          {/* <User/>  */}
//         <FooterSec/>
//       </div>
//     );
//   }
  
// }

// export default App;




import React from 'react';
function App() {
  return (
    <Router>
      
      <Header/>
     
        <Routes>
          <Route path="/" element={<>
          
            <Alert/>
            <FirstSec/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        
          </>} /> 
           <Route path="/mac" element={<Mac/>} />
            <Route path="/iphone" element={<Iphone/>} /> 
         <Route path="/iphone/:pid" element={<Productpage/>} />
          <Route path="/" element={<Four04/>} /> 
        </Routes>
        <FooterSec/>
      
   </Router>

  );
}

export default App;


//Hosting URL: https://apple-react-1372b.web.app






























//Hosting URL: https://apple-react-e77df.web.app