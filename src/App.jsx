import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Route import
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import HomeServices from "./components/HomeServices";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
     
      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <HomeServices/>
            
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./Pages/Home";
// import HomeServices from "./components/HomeServices"; // ✅ Import HomeServices component

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
      
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Home /> 
//             <HomeServices /> {/* ✅ HomeServices added here */}
//           </>
//         } />
//       </Routes>
//     </BrowserRouter>
//   );
// }
