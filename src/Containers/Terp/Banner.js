import React from "react";
import terp_role from "../../assets/images1/terp_role.svg";
import terp_value from "../../assets/images1/terp_value.svg";
import economics from "../../assets/images1/economics.png";
import logo from "../../assets/images1/terpsymbolblack.svg";
import bitcanna from "../../assets/images1/aquire/bitcanna.svg";
import osmosis from "../../assets/images1/aquire/osmosis.svg";
import juno from "../../assets/images1/aquire/juno.svg";
import secret  from "../../assets/images1/aquire/secret.svg";
import regen from "../../assets/images1/aquire/regen.svg";
import akash from "../../assets/images1/aquire/akash.svg";
import axelar from "../../assets/images1/aquire/axelar.svg";

const Banner = () => {
    return (
        <section className="terp-banner-section">
            <div className="container">
                <div className="content row">
                    <div className="left col-md-6">
                    
                        <p className="heading">Modular Blockchain Technology For Adoption</p>
                        <div className="list">
                            <p className="item-heading"><img src={terp_role} alt={terp_role}/> Role of Terp Network </p>
                            <p className="item-text">Terp Network is a sandbox for bootstrapping applications
                                and logic that can power how we grow as a cannabis community. Securing the core infrastructure through staking,
                                Terp stakers participate in governance to contribute to the long-term success of the
                                ecosystem, which is an everexpanding network of interoperable blockchains that create scalable opportunities.
                            </p>
                            <p className="item-heading"><img src={terp_value} alt={terp_value}/> Whos all involved?</p>
                            <p className="item-text"> In order for this to come to fruition, it truly takes a contributor village. From delegators to application builders to validator node operators,  Those who are eager 
                                to build Terp Network are a diverse, and potent community of contributors.
                            </p>
                            <p className="item-heading"><img src={economics} alt={economics}/> Economics </p>
                            <p className="item-text"> Token metrics are all public, verifiable, and mutable via governance consensus. Those who opt-in to governance have the power to propose parameter & protocol changes.    
                            </p>
                            <div className="buttons">
                                <a href="https://docs.terp.network/overview/terp-and-persy"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="primary">
                                    TOKENOMICS
                                </a>

                                <a href="https://docs.terp.network/overview"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="button-secondary">
                                    Learn More
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="right col-md-6">
                        <img src={logo} alt={logo} />
                    </div>
                </div>
                <div className="aquire-content">
                    <p className="title">Interoperable Protocols</p>
                    <div className="logos">
                        <a href="https://scrt.network/" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={secret} alt={secret} className="logo-img" />
                        </a>
                        <a href="https://akash.network" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={akash} alt={akash} className="logo-img" />
                        </a>
                        <a href="https://junonetwork.io" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={juno} alt={juno} className="logo-img" />
                        </a>
                        <a href="https://www.regen.network/" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={regen} alt={regen} className="logo-img" />
                        </a>
                        <a href="https://axelar.network" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={axelar} alt={axelar} className="logo-img" />
                        </a>
                        <a href="https://info.osmosis.zone/" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={osmosis} alt={osmosis} className="logo-img" />
                        </a>
                        <a href="https://bitcanna.io" rel="noopener noreferrer"
                           target="_blank" className="inner-item">
                            <img src={bitcanna} alt={bitcanna} className="logo-img" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
