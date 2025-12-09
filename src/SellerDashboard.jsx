import "./SellerDashboard.css"
import exitSvg from "./assets/exit.svg"
import thumb from "./assets/chips.png"
import uploadSvg from "./assets/upload.svg"
import saveSvg from "./assets/save.svg"
import { use, useState } from "react"

function SdbHeader(){
    const email = "rahul.kumar@college.edu"
    return(
        <div className="sdb-header"> 
            <div className="sdb-content">
                <h3 className="sdb-title">Seller Dashboard</h3>
                <p className="sdb-mail">{email}</p> 
            </div>
            
            <a className="sdb-exit" href="#">
                <img src={exitSvg} alt="exit" />
            </a>
        </div>
    )
}

function SdbStatus(){
    const [isOpen, setIsOpen] = useState(false);
    let isOpenText = isOpen ? "Open" : "Closed";
    return (
        <div className="sdb-status">
            <h4 className="sdb-status-title">Shop Status</h4>
            
            <div className="sdb-status-option">
                <p className="sdb-details-subtitle">Toggle to open or close your shop</p>
                <div className={`sdb-status-button ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`sdb-status-knob ${isOpen ? "active" : ""}`}></div>
                </div>
            </div>

            <div className="sdb-status-view">

                <div className="sdb-status-circle"
                style={{backgroundColor: isOpen? "green": "#b13333"}}/>

                <p className="sdb-status-text"
                style={{color: isOpen? "green": "#b13333"}}>
                    Your shop is {isOpenText}</p>

            </div>
        </div>
    );
}

function SdbDetails(){
    const roomNumber = 204;
    const phoneNumber = "+91 98765 43210";
    const block = "A"
    return (
        <div className="sdb-details">
            <h4 className="sdb-details-title">Location Detials</h4>
            <p className="sdb-details-subtitle">Hostel Block</p>
            <p className="sdb-details-value">Block {block}</p>
            <p className="sdb-details-subtitle">Room Number</p>
            <p className="sdb-details-value">{roomNumber}</p>
            <p className="sdb-details-subtitle">Whatsapp Number</p>
            <p className="sdb-details-value">{phoneNumber}</p>
        </div>
    )
}

function SdbImage(){
    return (
        <div className="sdb-image-container">
            <div className="sdb-image-title"><h4>Stock Image</h4></div>
            <img className="sdb-image" src={thumb} alt="thumbnail"/>

            <button className="sdb-upload-button">
                <div className="sdb-upload-container">
                    <img className="sdb-upload-img" src={uploadSvg} alt="plus" />
                    <p>Upload New Image</p>
                </div>
            </button>
        </div>
    )
}

function SdbSave(){
    return (
   
        <button className="sdb-save-button">
            <div className="sdb-save-container">
                <img className="sdb-save-img" src={saveSvg} alt="plus" />
                <p>Save Changes</p>
            </div>
        </button>
        
    )
}

export default function SellerDashboard(){
    
    return (
        <>
            <div className="sdb-container">
                <SdbHeader/>

                <SdbStatus/>

                <SdbDetails/>

                <SdbImage/>

                <SdbSave/>
    
            </div>
        
        </>
    );
}