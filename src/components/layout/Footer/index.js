import React from 'react';
import icon from '../../../assets/images1/terpsymbolblack.svg'
import Mailchimp from "./MailChimp";
import ReactGa from 'react-ga';
import Icon from "../../Icon";

import {
   TERPNET_DISCORD_URL,
   TERPNET_TWITTER_URL,
   TERPNET_ELEMENT_URL,
   TERPNET_REDDIT_URL,
   TERPNET_YOUTUBE_URL,
   TERPNET_MEDIUM_URL,
   
} from "../../../constants/config";


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
        url: TERPNET_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url:TERPNET_REDDIT_URL ,
        iconName: 'reddit-round',
        tooltip: 'reddit'
    }, {
        url: TERPNET_YOUTUBE_URL ,
        iconName: 'youtube',
        tooltip: 'youtube'
    }, {
        url: TERPNET_MEDIUM_URL ,
        iconName: 'mediumlink',
        tooltip: 'medium'
    }, 
];

const Footer = (props) => {
   

    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })
    }

    return (
        <>


            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20 ">
                                    <h6>{("General")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href="/terp"
                                                   rel="noopener noreferrer">TERP</a></li>
                                            <li><a href="/ecosystem"
                                                   rel="noopener noreferrer">Ecosystem</a></li>
                                            <li><a href="https://angel.co/company/terpNET" target="_blank"
                                                rel="noopener noreferrer">Careers</a></li>
                                            <li><a href="https://drive.google.com/drive/folders/19JZsrnyMZDamjNMJCVxxYOvYPRO3dkUp?usp=sharing" target="_blank"
                                                   rel="noopener noreferrer">Press & Brand</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>{("Community")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href="?usp=sharing" rel="noopener noreferrer" target="_blank">{("Grants ")}</a></li>
                                            <li><a href="https://forms.gle/Jujc3wxfEU22iChTA" rel="noopener noreferrer" target="_blank">{("TerpTEAM Program")}</a></li>
                                            <li><a href="https://terp.network" rel="noopener noreferrer" target="_blank">{("Foundation Delegation")}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>Connect With Us</h6>
                                    <div className="contact-us">
                                        <div>
                                            <div className="contact-box">
                                                <div className="form-container mt-30">
                                                    <p className="footer-text">{"Sign up to get emails on importand developments by the community!"}</p>
                                                    <Mailchimp />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 m-0 row">
                            <div className="contact-us">
                                <div>
                                    <div className="contact-box">
                                        <h6 className="title"> {"Keep Updated"}</h6>

                                    </div>
                                    <div className="social-links-section">
                                        <ul className="list-unstyled footer-list">
                                            {
                                                socialList.map((item, index) => (
                                                    <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                        target="_blank"><Icon viewClass="social_icon_imgg"
                                                            icon={item.iconName} /></a>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom-section">
                    <div className="col-lg-6 footer-logo-section container ">
                        <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />&emsp;
                        {/*<span className="copy-rights mb-sm-0">{new Date().getFullYear()} © {t("terp.network | Privacy | Security")}</span>*/}

                    </div>
                    <div className={'col-lg-6 text-right'}>
                        {/*<p className="copy-rights mb-sm-0">Built with <Icon viewClass="social_icon_imgg"*/}
                        {/*                                                    icon={'love'} /></p>*/}
                    </div>
                </div>
            </footer>
        </>
    )
};


export default Footer;
