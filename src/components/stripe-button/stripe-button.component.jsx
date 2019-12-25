import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5rN11GjkSP6ayB3NaS4l9EUu00vPNVmQXr";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;