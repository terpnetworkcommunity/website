import React, { useState, useEffect } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images1/terpsymbolblack.svg'
import logotwo from '../../assets/images1/logo.svg'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";


import Icon from "../Icon";
import {
    TERPNET_GITHUB_URL,
   TERPNET_ELEMENT_URL,
   TERPNET_TWITTER_URL,
   TERPNET_MEDIUM_URL,
   TERPNET_REDDIT_URL

} from "../../constants/config";
import ReactGa from "react-ga";

const socialList = [
    {
        url:TERPNET_TWITTER_URL,
        iconName: 'twitter-logo',
        tooltip: 'twitter'
    },
    {
        url:TERPNET_ELEMENT_URL,
        iconName: 'telegram-plane',
        tooltip: 'telegram'
    },
     {
        url:  TERPNET_GITHUB_URL ,
        iconName: 'github',
        tooltip: 'github'
    }, {
        url:TERPNET_REDDIT_URL ,
        iconName: 'reddit-round',
        tooltip: 'reddit'
    },{
        url: TERPNET_MEDIUM_URL ,
        iconName: 'mediumlink',
        tooltip: 'medium'
    }
];

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.body.classList = "";
        window.addEventListener("scroll", scrollNavigation, true);
        setIsActive(current => !current);


    }, []);

    const toggleMenu = () => {
        // setIsOPen(!isOpen);
        setMobileMenu(!mobileMenu);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
    };
    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 50) {
            document.getElementById('nav-bar').classList.add('sticky-light');
        }
        else {

            document.getElementById('nav-bar').classList.remove('sticky-light');
        }
    }

    const learnTitle = (
        <span>
            Build
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )



    const ecoSystemTitle = (
        <span>
            Ecosystem
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const communityTitle = (
        <span>
            Community
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })

    }

    return (
        <React.Fragment>
            <Navbar className="navbar-custom fixed-top" expand="lg" expanded={mobileMenu} id="nav-bar">
                <div className="container p-0">
                <Navbar.Brand href="#home">
                    <NavLink to="/">
                        <img src={logotwo} alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-toggler x" id="nab-bar-toggle"  onClick={toggleMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">


                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={learnTitle} id="learn-dropdown">
                          <div className="container nav-dropdown-items learn-items pr-0 pl-0">
                              <div className="nav-dropdown-item">
                                <p className="header">Developers</p>
                                  <div className="inner-items">
                                      <div className="inner-item-container">
                                      <a href="https://docs.terp.network" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Documentation <Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                          <a href="https://get.terp.network" rel="noopener noreferrer"
                                             target="_blank" className="inner-item">Terp-Core Installer<Icon viewClass="social_icon_imgg"
                                                                                                          icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://github.com/orgs/terpnetwork/repositories" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Github  <Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://discord.gg/SYEjMwAac7" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Developer Discord Channel <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                      </div>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">Validators</p>
                                  <div className="inner-items">
                                      <div className="inner-item-container">
                                      <a href="https://docs.terp.network/"
                                         target="_blank" rel="noopener noreferrer" className="inner-item">Validate Terp Network<Icon viewClass="social_icon_imgg"
                                                                                                         icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://docs.terp.network"
                                         className="inner-item" target="_blank" rel="noopener noreferrer">Foundation Delegation Program <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://github.com/terpnetwork/test-net" target="_blank" rel="noopener noreferrer" className="inner-item">TestNET Resources <Icon viewClass="social_icon_imgg"                                                                                                                            icon={'exlink'} /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={ecoSystemTitle} id="ecosystem-dropdown">
                            <div className="container nav-dropdown-items ecosystem-items pl-0 pr-0">
                                <div className="nav-dropdown-item">
                                    <div className="inner-items firstone">
                                   
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">EXPLORER</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://terp.zenscan.io/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">ZenScan Explorer <Icon viewClass="social_icon_imgg"
                                                                                                  icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                            <a href="https://explorer.kjnodes.com/terp-testnet/" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">KjNodes Explorer <Icon viewClass="social_icon_imgg"
                                                                                                    icon={'exlink'} /></a>
                                        </div>
                                    </div>
                                </div> 
                               
                                <div className="nav-dropdown-item">
                                    <p className="header">WALLETS</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Keplr <Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">

                                        <a href="https://www.leapwallet.io/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Leap Wallet <Icon viewClass="social_icon_imgg"
                                                                                                     icon={'exlink'} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item buttoneco">
<div className={'mt-2 mb-2'}>
    <a href="/ecosystem" rel="noopener noreferrer"
       className="inner-item">Explore All Apps </a>
</div>

                                    <div className={'mt-2 mb-2'}>
                                        <a href="/terp" rel="noopener noreferrer"
                                           className="inner-item">$TERP </a>
                                    </div>
                                </div>

                            </div>
                        </NavDropdown>
                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={communityTitle} id="community-dropdown">
                            <div className="container nav-dropdown-items community-items pl-0 pr-0">
                                <div className="nav-dropdown-item">

                                    <p className="header">PROGRAM</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://forms.gle/Jujc3wxfEU22iChTA" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Terp OG Foundation Member Program<Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container m-none">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>
                                        <div className="inner-item-container m-none">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>


                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Tutorials</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://regen-network.medium.com/setting-up-keplr-wallet-and-best-practices-for-keeping-your-crypto-safe-cfe5f924692d" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Set Up Keplr Wallet<Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://help.keplr.app/" rel="noopener noreferrer"
                                            className="inner-item">Community FAQs <Icon viewClass="social_icon_imgg"
                                                                                                       icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>
                                    </div>   
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Forum</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://terp.network" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Community Forum (Soon)<Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="/faq" rel="noopener noreferrer"
                                            className="inner-item">Community FAQs <Icon viewClass="social_icon_imgg"
                                                                                                       icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <Nav.Link className="nav-link dropdown-toggle" rel="noopener noreferrer"
                                  target="_blank" href="https://terpnetwork.medium.com/"
                                 data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">
                            {("BLOG")}
                        </Nav.Link>
                    </Nav>
                    <div className="nav-dropdown-item">
                        <div className="inner-items">
                            <div className="links">
                                {
                                    socialList.map((item, index) => (
                                            <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg"
                                                                     icon={item.iconName} /></a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
};

export default withRouter(Header);
