import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionToggle} from "react-bootstrap";
import Icon from "../../components/Icon";

function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            className="accordion-button"
            onClick={decoratedOnClick}
        >
            <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"}/>

        </button>
    );
}

const Faq = () => {
    return (
        <>
            <section className="xprt-banner-ecosystem ecosystem-faq-section" data-aos="fade-up">
                <div className="container">
                    <h1 className="section-title">FAQs</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            What is Terp Network?
                                            </p>
                                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Terp Network  is a Tendermint based layer-1 chain, with a goal to
                                                build an ecosystem of decentralised applications that together benefit those within the cannabis community.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            What consensus mechanism does Terp-Core use?
                                            </p>
                                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>
                                                Terp-Core uses Tendermint dPOS BFT Consensus Mechanism
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            Is TerpNET an IBC enabled chain?
                                            </p>
                                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p>
                                                Yes, TerpNET is an IBC-enabled chain
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            What is the TerpNET vision?
                                            </p>
                                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p>
                                                The broader vision of TerpNET is to become the self-sovereign defi  of the cannabis space, making transparency and optional privacy the standard we move by.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            What is the inflation rate on the Terp network?
                                            </p>
                                            <ContextAwareToggle eventKey="4">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <p>
                                                This is not yet finalized.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            Where can I buy TERP?
                                            </p>
                                            <ContextAwareToggle eventKey="6">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://glassflow.nft" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Glassflow Dapp Hub</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://terpdao.xyz" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">TerpDAO </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://terp.network" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Add your Project</a>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            Which wallets support $TERP?
                                            </p>
                                            <ContextAwareToggle eventKey="7">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <p>
                                                $TERP is supported by:
                                                </p>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://wallet.keplr.app/" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Keplr</a>
                                                    </li>
                                                    <li>
                                                        <p className="m-0">Ledger</p>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            What Currently, TerpNET ecosystem of projects includes
                                            </p>
                                            <ContextAwareToggle eventKey="8">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://glassflow.io" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Glassflow Minting Hub</a>
                                                    </li>
                                                   
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What was the StakeDrop campaign?
                                            </p>
                                            <ContextAwareToggle eventKey="9">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body>StakeDrop was a token distribution mechanism that allowed token
                                                holders of some of the most prominent Proof-of-Stake networks to get
                                                exposure to XPRT (native Persistence tokens).</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                            Who is a part of the Fairdrop campaign?
                                            </p>
                                            <ContextAwareToggle eventKey="10">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>Various participants within defi will be fairdropped tokens.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;