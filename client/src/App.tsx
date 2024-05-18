import {Fragment} from "react";
import {Toaster} from "react-hot-toast";
import Navigation from "./navigation/Navigation.tsx";

export default function App() {
    return (
        <Fragment>
            <Navigation/>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Fragment>
    );
}