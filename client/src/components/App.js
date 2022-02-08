import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//component imports
import Navigation from "./Navigation";
import OverviewPage from "./pages/OverviewPage";
import BiographicalPage from "./pages/BiographicalPage";
import AssociatesPage from "./pages/AssociatesPage";
import FinancialPage from "./pages/FinancialPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const [query, setQuery] = useState({});

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation setQuery={setQuery} />
                <Routes>
                    <Route index element={<SearchPage query={query} />} />
                    <Route
                        path="/biographical/:forenames/:surname/:dateOfBirth"
                        element={<BiographicalPage />}
                    />
                    <Route
                        path="/associates/:forenames/:surname/:dateOfBirth"
                        element={<AssociatesPage />}
                    />
                    <Route
                        path="/financial/:forenames/:surname/:dateOfBirth"
                        element={<FinancialPage />}
                    />
                    <Route
                        path="/overview/:forenames/:surname/:dateOfBirth"
                        element={<OverviewPage />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
