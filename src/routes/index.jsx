import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomeView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;