import "./SellerDetails.css"
import larrowSvg from "../assets/left-arrow.svg";


// Header of the Seller Details page
function SdHeader() {
    const handleclick=()=>{

    };
    return(
        <div className="sd-header">
        <button onClick={handleclick} className="larrow-button">
            <img className="larrow-color" src={larrowSvg} alt="back"/>
        </button>
          Seller Details  
        </div>
    )
}

// Stock image
function SdImage() {
    return(
        <div className="sd-image">
            Image
        </div>
    )
}

// Gives brief description of seller including room and stock description
function SdDetails() {
    return(
        <div className="sd-details">
            Details
        </div>
    )
}

// Goes to Whatsapp of the seller
function SdWhatsapp() {
    return(
        <div className="sd-whatsapp">
            Whatsapp
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

                <SdWhatsapp />
            </div>
        </>
    )
}