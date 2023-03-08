import React, { useEffect } from 'react';
import osmo from "../../assets/images1/osmo.svg";
import juno_swap from "../../assets/images1/juno_swap.svg";
const Opportunities = () => {
    useEffect(() => {
        


    }, []);
    return (
        <section className="opportunities-section">
            <div className="container">
                <div className="content">
                    <p className="title">Opportunities With TERP</p>
                    <div className="staking-boxes">
                        <p className="heading">Develop</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Censorship-Resistant Applications </p>
                                <p className="apr"></p>
                                <p className="sub-title"> Upload CosmWasm code to Terp Network for building your applications </p>
                                <div className="buttons">
                                    <a href="https://docs.terp.network/frontend/"
                                       className="primary"
                                       target="_blank" rel="noopener noreferrer">Docs</a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://daodao.terp.network"
                                       className="button-secondary">View example</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Create Core Logic</p>
                                <p className="apr"></p>
                                <p className="sub-title">Thanks to CosmosSDK, additional logic can be added directly to Terp-Core </p>
                                <div className="buttons">
                                    <a href="https://docs.terp.network/terp-core/modules" target="_blank" rel="noopener noreferrer" className="primary">
                                        Learn More
                                    </a>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staking-boxes defi">
                        <p className="heading">Participate</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                    Self-Govern
                                    </p>
                                    <p className="sub-title">Participate in on-chain consensus to be a part of molding Terp Network </p>
                                    <div className="buttons">
                                        <a href="https://docs.terp.network" target="_blank" rel="noopener noreferrer" className="primary">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                    Validate
                                    </p>
                                    <p className="sub-title">Secure the network & get rewarded by running your own validator.</p>

                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/" target="_blank" rel="noopener noreferrer" className="primary">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                    Collaborate
                                    </p>
                                    <p className="sub-title">Meet community members and collaborate on opportunities within the ecosystem.</p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/" target="_blank" rel="noopener noreferrer" className="primary">
                                            Explore More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                    Learn & Teach
                                    </p>
                                    <p className="sub-title">Gain the experience nessesary to navigate defi safely by participating in various on-chain activities</p>
                                    <p className="apr"><span className="apr-text"></span></p>
                                    <div className="buttons">
                                        <a href="https://junoswap.com/pools/" target="_blank" rel="noopener noreferrer" className="primary">
                                            Explore More
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
