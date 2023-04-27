import Layout from "./ui/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Error from "./ui/Error/Error";
import WrapperHome from "./features/pages/Home/WrapperHome";

const App = () => (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<WrapperHome />} />
        </Route>
        <Route path={'*'} element={<Error />} />
    </Routes>
);

export default App
