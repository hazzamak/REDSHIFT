import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";

//component imports
import Navigation from "./Navigation";
import OverviewPage from "./pages/OverviewPage";
import BiographicalPage from "./pages/BiographicalPage";
import AssociatesPage from "./pages/AssociatesPage";
import FinancialPage from "./pages/FinancialPage";

function App() {

    const [data, setData]=useState([]);
    useEffect((event)=> {
        // event.preventDefault();
        console.log(data);
    }, [data])


    return (
        <div className="App">
            <BrowserRouter> 
                <Navigation setData={setData}/>
                <Routes>
                    <Route index element={<OverviewPage />} />
                    <Route path="/biographical" element={<BiographicalPage/>}/>
                    <Route path="/associates" element={<AssociatesPage/>}/>
                    <Route path="/financial" element={<FinancialPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
