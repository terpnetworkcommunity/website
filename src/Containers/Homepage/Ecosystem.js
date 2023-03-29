import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import cosmwasm from '../../assets/images1/cosmwasm.svg';
import tendermint from '../../assets/images1/tendermint.svg';
import cosmossdk from '../../assets/images1/cosmossdk.svg';


const Ecosystem = () => {
    return (
        <section className="home-ecosystem-section">
            <div className="container">
                <h3 className="section-title">Infusing Censorship Resistant Technology</h3>
                <p className="sub-heading">TerpNET applications bridge self-soviergnty & interoperability into our community. Utilize any Terp Network logic in your buisness model to integrate censorship-resistant solutions & discover amazing opportunities.</p>
                <div className="card-tiles">
                    <CardGroup>
                        <Card className={'h-100'}>
                            <div className={'card-section'}>
                            <Card.Body >
                                <h3 className='section-title'>What is it?</h3>
                                <Card.Text className={'mb-3 mt-4'}>
                                    <span>A community owned smart contract database for creating solutions to problems that exist in our culture.</span>

                                </Card.Text>
                                <div className={'networks mt-4'}>
                                    <h5><span>Built&nbsp;with&nbsp;</span><img src={cosmossdk} alt="CosmosSDK" title="CosmosSDK"/><img src={tendermint} alt={"Tendermint"} title="Tendermint-core"/><img src={cosmwasm} alt="CosmWasm" title="CosmWasm"/></h5>
                                    <div className={"button-section"}>
                                        <a href="https://app.terp.network/" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            GO TO APP
                                        </a>
                                        <a href="https://docs.terp.network/" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button two">
                                            Explore
                                        </a>
                                    </div>
                                </div>
                            </Card.Body>
                            </div>

                        </Card>

                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;