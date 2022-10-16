import React from "react";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <p className="banner-heading"><span>TERPNET: Decentralized Infrastructure for the Cannabis Community  </span></p>
                        <p className="text">
                            Terp Network is a Tendermint-core L1 powering an ecosystem
                            <span> of DeFi dApps focused on full spectrum self-soviergnty.</span>
                        </p>
                        <div className={"button-section text-center d-inline-block"}>
                        <a href="/terp" rel="noopener noreferrer"
                            className="button-initial button one">
                            Learn More
                        </a>
                            <a href="https://docs.terp.network" rel="noopener noreferrer"
                               target="_blank" className="button-initial button">
                                Ecosystem Grants
                            </a>
                    </div>
                        <div className="stats-container text-white">
                            <div className="stats-section">
                                <h2>+50</h2>
                                <h6 className="home-desc">Interoperable Networks</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$0</h2>
                                <h6 className="home-desc">Presale Raised</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$13.9 Billion</h2>
                                <h6 className="home-desc">Cosmos Network Market Cap</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$1.1 Billion</h2>
                                <h6 className="home-desc">IBC Volume (30 Days)</h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
};
export default Banner;
