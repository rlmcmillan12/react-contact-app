import { useState } from "react";

export default function ContactDetails(props) {
    const [details, setDetails] = useState(false)

    return (
        <><div className="details" style={details ? {display:'flex'} : {display:'none'}}>
        <div className="addressAndZip">
            <div className="address">{props.address}</div>
            <div className="zipCode">{props.zipCode}</div>
        </div>
        <div className="emailAndPhone">
            <div className="email">{props.email}</div>
            <div className="phone">{props.phone}</div>
        </div>
    </div>
    <div className="detailsButtton">
        <button type="submit"
            onClick={() => setDetails(!details)}>{details ? "Hide" : "Details"}</button>
    </div></>
    
    )
}