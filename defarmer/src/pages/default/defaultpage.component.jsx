import React from "react";
import MainNav from "../../components/Navigation/navigation";
import "./defaultpage.component.css";
import img1 from "./market1.avif";
function Defaultpage() {
    return (
        <div className="home-container">
            <MainNav
                didPaid={{ address: "", product_name: "", isPaid: false }}
            />
            <img
                className="backgroundImage"
                style={{
                    width: "100vw",
                    height: "100vw",
                    objectFit: "cover",
                }}
                src={img1}
                alt=""
            />
            <div className="home-body">
                {/* image at backgroud of this div */}
                <div className="home-body-content">
                    <h1 className="home-body-content-title">
                        Welcome to Defarmer
                    </h1>
                    <p className="home-body-content-para">
                        We are a blockchain-based platform that allows farmers
                        to list their products, buyers to search for products,
                        and other participants in the supply chain to exchange
                        information and transactions.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Defaultpage;
