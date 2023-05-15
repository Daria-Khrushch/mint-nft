import React from "react";
import Header from "./header";
import Preloader from "./preloader";
import Footer from "./footer";


const Layout:  React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="main-wrapper">
            <Header/>
            {children}
            <Preloader />
            <Footer/>
        </div>
    );
};

export default Layout;