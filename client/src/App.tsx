import {Toaster} from "react-hot-toast";

// Components
import Navigation from "./navigation/Navigation.tsx";
import {Fragment} from "react";

export default function App() {
    return (
        <Fragment>
            <Navigation/>
            <Toaster position="top-center" reverseOrder={false}/>
        </Fragment>
    );
}