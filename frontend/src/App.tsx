import Layout from "./ui/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./features/pages/Home";
import Error from "./ui/Error/Error";

const App = () => (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Home />} />
        </Route>
        <Route path={'*'} element={<Error />} />
    </Routes>
);

export default App
