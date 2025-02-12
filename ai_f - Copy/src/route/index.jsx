import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/home";
import Services from "../pages/Services";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "../layout/User/UserLayout";
export const HomePage = '/';
export const Loginpage = 'login';
export const SignupPage = 'signup';
export const ServicesPage = 'services';


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UserLayout/>}>
                    <Route path={Loginpage} element={<Login/>}/>
                    <Route path={SignupPage} element={<SignUp/>}/>
                    <Route index element={<Home/>}/>
                    <Route path={ServicesPage} element={<Services/>}/>
                    <Route path={Loginpage} element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
// export const router = createBrowserRouter([
//     {
//         element:<UserLayout/>,
//         children:[
//             {
//                 path:HomePage,
//                 element:<Home/>
//             },
//             {
//                 path:Loginpage,
//                 element:<Login/>
//             },
//             {
//                 path:SignupPage,
//                 element:<SignUp/>
//             },
//             {
//                 path:ServicesPage,
//                 element:<Services/>
//             },
//             {
//                 path:'/*',
//                 element:<NotFoud/>
//             }
//         ]
//     }
// ])