import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";

const Paypal = props => {
  const move = ({ history }) => {
    history.push("/");
  };
  return (
    <div className="container">
      <h1>{props.Informacion}</h1>
      <p>{props.contenido}</p>
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: props.amount
                }
              }
            ]
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function(details) {
            // Show a success message to your buyer
            alert(
              "Transaction Procesada correctamente " +
                details.payer.name.given_name
            );
            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          });
        }}
        options={{
          clientId:
            "Af5yDCEtWpKPqIxrWoBumV1WovEHltcq6f1YbCO2KCjbST-zGxeCtXp-hG3JC6WJ8NX0BcVR1_LZ5sjp"
        }}
      />

      <Link className="waves-effect waves-light btn" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Paypal;
