import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
import rightarrow from "../../assets/images1/right-arrow.svg";
import close from "../../assets/images1/close_icon.png";


const BannerTop = () => {
    const [banner, setBanner] = useState(true);

    const closeBanner = () => {
        setBanner(false);
    }
    return (
        <div className="container-fluid bannernav-section">
            {banner ?
                <div className="container">
                    <Alert className="nav-banner alert-dismissible">          
                        <img src={close} alt="close" className="close" onClick={closeBanner}/>
                    </Alert>
                </div>
                : null}


        </div>

    );
};

export default BannerTop;
