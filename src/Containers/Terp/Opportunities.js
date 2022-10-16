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
                        <p className="heading">Staking</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Staking</p>
                                <p className="apr">TBD</p>
                                <p className="sub-title">Staking Rewards</p>
                                <div className="buttons">
                                    <a href="https://wallet.keplr.app/#/core/stake"
                                       className="primary"
                                       target="_blank" rel="noopener noreferrer">
                                        Stake
                                    </a>

                                    <a target="_blank" rel="noopener noreferrer" href="https://docs.terp.network"
                                       className="button-secondary">
                                        TUTORIAL
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Liquid Staking</p>
                                <p className="apr">TBD</p>
                                <p className="sub-title">Staking Rewards + DeFi yields</p>
                                <div className="buttons">
                                    <a href="https://app.terp.network/" target="_blank" rel="noopener noreferrer" className="primary">
                                        LIQUID STAKING
                                    </a>

                                    <a href="https://www.youtube.com/watch?v=9B1ktY5BS8o" target="_blank" rel="noopener noreferrer" className="button-secondary">
                                        TUTORIAL
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staking-boxes defi">
                        <p className="heading">DeFi</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">TERP/USDC Pool</p>
                                    <p className="apr"> TBD <span className="apr-text">APR</span></p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/pool/719" target="_blank" rel="noopener noreferrer" className="primary">
                                            Explore More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">TERP/ATOM Pool</p>

                                    <p className="apr">TBD<span className="apr-text">APR</span></p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/" target="_blank" rel="noopener noreferrer" className="primary">
                                            Explore More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">TERP/OSMO Pool</p>
                                    <p className="apr">TBD <span className="apr-text">APR</span></p>
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
                                        <img src={juno_swap} alt="juno" />
                                    </p>
                                    <p className="sub-title">TERP/JUNO Pool</p>
                                    <p className="apr"><span className="apr-text">(Rewards Coming Soon)</span></p>
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
