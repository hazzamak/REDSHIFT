import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//component imports
import Navigation from "./Navigation";
import OverviewPage from "./pages/OverviewPage";
import BiographicalPage from "./pages/BiographicalPage";
import AssociatesPage from "./pages/AssociatesPage";
import FinancialPage from "./pages/FinancialPage";
import SearchPage from "./pages/SearchPage";

function App() {
    const [query, setQuery] = useState({});
    const [data, setData] = useState([]);
    
    useEffect((event) => {
        console.log(query);
        axios.get(`http://localhost:3300/get/name/${query.forenames}/${query.surname}`)
             .then(response => setData(response.data.data))
             .catch(error => console.log(error));
        },[query]);
        
        console.log(data)

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation setQuery={setQuery} />
                <Routes>
                    <Route index element={<SearchPage data={data}/>} />
                    <Route
                        path="/biographical"
                        element={<BiographicalPage />}
                    />
                    <Route path="/associates" element={<AssociatesPage />} />
                    <Route path="/financial" element={<FinancialPage />} />
                    <Route path="/overview" element={<OverviewPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
