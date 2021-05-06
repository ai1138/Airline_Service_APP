import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import FlightManagement from './FlightManagement';
import CustomerPortal from './CustomerPortal';

function CustomerInfo(){
    const [PaymentInformation, setPaymentInformation] = useState(false);
    const [PassportInformation, setPassportInformation] = useState(false);
    const [paymentID, setPaymentID] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cardType, setCardType] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [passportExpiration, setPassportExiration] = useState("");
    const [passportCountry, setPassportCountry] = useState("");

    const PaymentRender = (props) => {
        setPaymentInformation(!PaymentInformation)
        setPassportInformation(false);
        console.log("payment");
    }
    const PassportRender = (props) => {
        setPaymentInformation(false)
        setPassportInformation(!PassportInformation);
        console.log("passport");
    }

    const submitPaymentForm = () =>
   {
      if(paymentID !=="")
         if(cardNumber !== "")
            if(nameOnCard !== "")
                if(expirationDate != "")
                    if (cardType != "")
                    {
                        console.log("yeee")
                    }
                    else
                    {
                        console.log("naw")
                    }
   }

   const submitPassportForm = () =>
   {
      if(passportNumber !=="")
         if(passportCountry !== "")
            if(passportExpiration !== "")
            {
               console.log("yeee")
            }
            else
            {
               console.log("naw")
            }
   }


    const information = {
        

    }

    const PaymentForm = (
        <div>
           <form>
              <p>Paymet ID:
              <input
              type='text'
              name='paymentid'
              value={paymentID}
              onChange={(e) => setPaymentID(e.target.value)}
              />
              </p>
              <p>Card Number:
              <input
              type='text'
              name='cardnumber'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              />
              </p>
              <p>Name on Card:
              <input
              type='text'
              name='nameoncard'
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              />
              </p>
              <p>Expiration Date:
              <input
              type='text'
              name='expirationdate'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              />
              </p>
              <p>Card Type:
              <input
              type='text'
              name='cardtype'
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              />
              </p>
           </form>
           <Button variant="contained" color="blue" onClick = {submitPaymentForm}>submit</Button>
        </div>
     );
     const PassportForm = (
        <div>
           <form>
              <p>Passport Number:
              <input
              type='text'
              name='passportnumber'
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              />
              </p>
              <p>Passport Expiration:
              <input
              type='text'
              name='passportexpiration'
              value={passportExpiration}
              onChange={(e) => setPassportExiration(e.target.value)}
              />
              </p>
              <p>Passport Country:
              <input
              type='text'
              name='passportcountry'
              value={passportCountry}
              onChange={(e) => setPassportCountry(e.target.value)}
              />
              </p>
           </form>
           <Button variant="contained" color="blue" onClick = {submitPassportForm}>submit</Button>
        </div>
     );

    return(

    <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <img src = {logo} alt = "Logo" height="200" width="200" />
      <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
      <div style = {{display: 'flex', width: `${PaymentInformation || PassportInformation ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {PaymentRender}> Add/Update Payment Information </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {PassportRender}> Add/Update Passport Information </Button> 
      </div>
      
      <div style = {{display: 'flex', width: `${PaymentInformation || PassportInformation ? '50%' : '0px'}`, alignItems: 'center'}}>
        {PaymentInformation ? PaymentForm: null}
        {PassportInformation ? PassportForm: null}
      </div>
      </div> 
      </div>
    );
}

export default CustomerInfo;