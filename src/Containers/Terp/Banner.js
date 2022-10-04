import React from "react";
import xprt_role from "../../assets/images1/role.png";
import xprt_value from "../../assets/images1/value.png";
import economics from "../../assets/images1/economics.png";
import ecosystem from "../../assets/images1/ecosystem.svg";
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
                      <div className="terp-title-box">
                          <p>X<span>P</span>RT</p>
                      </div>

                        <p className="heading">The Heart Of Terp Ecosystem</p>
                        <div className="list">
                            <p className="item-heading"><img src={xprt_role} alt={xprt_role}/> Role of Terp tokens </p>
                            <p className="item-text">Terp is the work token for the TerpNET ecosystem, bootstrapping ecosystem applications
                                to propel network adoption, and securing the core infrastructure through staking.
                                Terp stakers can participate in governance to contribute to the long-term success of the
                                ecosystem.
                            </p>
                            <p className="item-heading"><img src={xprt_value} alt={xprt_value}/> Whos all involved?</p>
                            <p className="item-text"> In order for this to come to fruition, it truly takes a contributor village. Those who are eager 
                                to build Terp Network are a diverse, and potent group of decision makers within the community. This will be a huge advantage
                                for community members of Terp Network. 
                            </p>
                            <p className="item-heading"><img src={economics} alt={economics}/> Economics </p>
                            <p className="item-text"> A protocol owned treasury can fuel the Terp Ecosystem via grants, incentives, and other various actions to benefit the community. 
                                Various value accrual models can be integrated into the network simotaneously, bringing value to the ecosystem. 
                            </p>
                            <div className="buttons">
                                <a href="https://medium.com/persistence-blog/xprt-tokenomics-and-utility-powering-the-persistence-ecosystem-70fc49e10362"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="primary">
                                    TOKENOMICS
                                </a>

                                <a href="https://medium.com/persistence-blog/the-vision-for-persistence-and-xprt-value-accrual-53fd56619e3d"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="button-secondary">
                                    Learn More
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="right col-md-6">
                        <img src={ecosystem} alt={ecosystem} />
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
