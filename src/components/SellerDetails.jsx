import "./SellerDetails.css"
import larrowSvg from "../assets/left-arrow.svg";
import thumb from "../assets/chips.png"
// import thumb from "../assets/example.png"
import clockSvg from "../assets/clock.svg"
import locationSvg from "../assets/location.svg";
import whatsappSvg from "../assets/whatsapp.svg";

// Header of the Seller Details page
function SdHeader() {
    const handleclick=()=>{

    };
    return(
        <div className="sd-header">
        <button onClick={handleclick} className="larrow-button">
            <img className="larrow-color" src={larrowSvg} alt="back"/>
        </button>          
          <p className="sd-header-text">Seller Details</p>
        </div>
    )
}

// Stock image
function SdImage() {
    return(
        <div className="sd-image-container">
            <img className="sd-image" src={thumb} alt="thumbnail"/>
            <div className="sd-lastupdated">
                <img className="sd-lastupdated-clock" src={clockSvg} alt="clock"/>
                <p className="sd-lastupdated-text">Updated 67 minutes ago.</p>
            </div>
        </div>
    )
}

// Gives brief description of seller including room and stock description
function SdDetails() {
    // Dummy variable for open/closed status
    // Change to props later
    // Change true to false to test closed status
    let isOpen = true;
    let isOpenText = isOpen? "Open": "Closed";


    return(
        <div className="sd-details">
            <div className="sd-details-header">
                <div className="sd-details-header-info" style={{width: "50%"}}>
                    <div className="sd-details-name">Rahul Kumar</div>
                    <div className="sd-details-loc" style={{gap: "0.5em"}}>
                        <img className="sd-details-loc-symbol" src={locationSvg}></img>
                        <p className="sd-details-loc-block" style={{margin: 0}}>Block A</p>
                        <p className="sd-details-loc-room" style={{margin: 0}}>Room 203</p>

                    </div>
                </div>

                <div className="sd-details-open-closed" style={{border: isOpen? "#25d366 3px solid": "#b13333 3px solid", backgroundColor: isOpen? "rgba(0, 128, 0, 0.1)": "rgba(177, 51, 51, 0.1)"}}>
                    <div className="sd-details-status-circle" style={{backgroundColor: isOpen? "#25d366": "#b13333"}}>
                    </div>
                    <p className="sd-details-status-text" style={{color: isOpen? "#25d366": "#b13333"}}>{isOpenText} Now</p>
                </div>
            </div>

            <div className="sd-details-about">
                <p className="sd-details-about-header">About</p>
                <p className="sd-details-about-text">Fresh, hygienic snacks delivered right to your room. Chips, biscuits, cold drinks, and instant noodles available daily. Fast delivery within Block A. Reliable service. Payments accepted via UPI or cash.</p>
            </div>

            <SdWhatsapp />
        </div>
    )
}

// Goes to Whatsapp of the seller
function SdWhatsapp() {
    let whatsappNumber = "123456789"; // Dummy number, change later

    const handleWhatsappClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return(
        <div className="sd-whatsapp">
            <button type="button" className="sd-press-button" onClick={handleWhatsappClick}>
                <div className="sd-press-top" style={{gap: "1em"}}>
                    <img className="sd-press-whatsapp" style={{width: "1.5em", height: "1.5em"}} src={whatsappSvg} alt="whatsapp"/>
                    <p className="sd-press-text" style={{fontWeight: "bold", fontSize: "1.2em", margin: 0}}>Chat on WhatsApp</p>
                </div>
                <div className="sd-press-bottom"></div>
            </button>
        </div>

    )
}

export default function SellerDetails() {
    return (
        <>
            <div className="sd-container">
                <SdHeader />

                <SdImage />

                <SdDetails />
            </div>
        </>
    )
}