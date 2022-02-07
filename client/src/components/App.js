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
   
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation setQuery={setQuery} />
                <Routes>
                    <Route index element={<SearchPage query={query}/>} />
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
