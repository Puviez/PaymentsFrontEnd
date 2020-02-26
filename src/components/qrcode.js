import React from 'react';
import QRCode from 'qrcode.react'
import moment from 'react-moment';
import 'moment-timezone';



class QR extends React.Component {
    render () {
        return (
            <React.Fragment>
                <QRCode value={"http://192.168.174.195:3001/payment"}/>
            </React.Fragment>
        )
    }
}

export default QR;

// Add merchant id prop as a url param