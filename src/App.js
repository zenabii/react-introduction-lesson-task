import React from "react";
import "./sass/style.scss";
import MainHeading from "./components/typography/MainHeading";
import SubHeading from "./components/typography/SubHeading";
import Card from "./components/card/Card";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <MainHeading />
                    <SubHeading />
                    <p>
                        Aliquam interdum nec turpis eget feugiat. Phasellus augue turpis, scelerisque ut risus quis, malesuada sagittis risus. Sed imperdiet venenatis quam, ac laoreet nisl blandit ut.
                        Morbi laoreet vitae dolor ac vulputate.
                    </p>
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
