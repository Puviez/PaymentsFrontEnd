// Add Stripe Elements
// import React from 'react';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement} from '@stripe/react-stripe-js';
// import {ElementsConsumer} from '@stripe/react-stripe-js';


// const stripePromise = loadStripe("pk_test_c6ticSNZgRWokBFo6iYJWwvR00SHRdlRMp");

// const CARD_ELEMENT_OPTIONS = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#aab7c4",
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };

// class CardSection extends React.Component {
//   render () {
//       return (
//           <label>
//               Card details
//               <CardElement options={CARD_ELEMENT_OPTIONS} />
//           </label>
//       )
//   }
// }

// class CheckoutForm extends React.Component {
//     handleSubmit = async (event) => {
//       console.log("clicked");
//       // We don't want to let default form submission happen here,
//       // which would refresh the page.
//       event.preventDefault();
  
//       const {stripe, elements} = this.props

//       console.log("props",this.props);
  
//         if (!stripe || !elements) {
//           // Stripe.js has not yet loaded.
//           // Make  sure to disable form submission until Stripe.js has loaded.
//           return;
//         }

//       const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             name: 'Jenny Rosen',
//           },
//         }
//       });
  
//       if (result.error) {
//         // Show error to your customer (e.g., insufficient funds)
//         console.log(result.error.message);
//       } else {
//         // The payment has been processed!
//         if (result.paymentIntent.status === 'succeeded') {
//           // Show a success message to your customer
//           // There's a risk of the customer closing the window before callback
//           // execution. Set up a webhook or plugin to listen for the
//           // payment_intent.succeeded event that handles any business critical
//           // post-payment actions.
//         }
//       }
//     };
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <CardSection />
//           <button>Confirm order</button>
//         </form>
//       );
//     }
//   }
  
//   function injectedCheckoutForm() {
//     return (
//       <ElementsConsumer>
//         {({stripe, elements}) => (
//           <CheckoutForm  stripe={stripe} elements={elements} />
//         )}
//       </ElementsConsumer>
//     );
//   }

//   class Payment extends React.Component {
//     render () {
//         return (
//           <Elements stripe={stripePromise}>
//             <ElementsConsumer>
//               {({stripe, elements}) => (
//                 <CheckoutForm  stripe={stripe} elements={elements} />
//               )}
//             </ElementsConsumer>
//           </Elements>
//         )
//     }
// }

// export default Payment;

import React from 'react';
import queryString from 'query-string'

class Payment extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      owner: this.props.currentUser._id,
      merchant: queryString.parse(this.props.location.search).id,
      description: "",
      category: "",
      amount: "",
      date: "",
      card_number: "",
      expiry_month: "",
      expiry_year: "",
      cvv: ""
    }
  }

  componentDidMount() {
    const value = queryString.parse(this.props.location.search)
    
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    
  }

  render () {
    return (
      <React.Fragment>
        <h1>{"Hello World"}</h1>
      </React.Fragment>
    )
  }
}

export default Payment;