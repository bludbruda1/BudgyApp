import "./../App.css";
import { Button, Stack } from "@mui/material";
import Expense from "./../components/Expense";
import Frequency from "./../components/Frequency";
import React from "react";
import SaveButton from "./../components/SaveButton";
import TotalPay from "./../components/TotalPay";

const totalAdd = (e) => {
  // Grab all inputs that are named 'expense'
  let inputs = document.querySelectorAll('[name="expense"]');

  // Trying to loop through the values and get the sum of all inputs
  let totalVal = 0;
  for (var i = 0; i < inputs.length; i++) {
    totalVal += isNaN(parseFloat(inputs[i].value))
      ? 0
      : parseFloat(inputs[i].value);
  }
  // Grabs the value entered in the totalPay component and calculates that value minus the total value of all inputs
  const totalPayInput = document.getElementById("total-pay").value;
  const totalRemaining =
    Math.round((totalPayInput - totalVal) * 100 + Number.EPSILON) / 100;

  // Trying to grab total values of all expense amount fields and put in the total amount label
  document.getElementById("total-amount").innerHTML =
    "Total pay remaining: $" + totalRemaining;
};

function Homepage() {
  return (
    <div className="App">
      <React.Fragment>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TotalPay id="total-pay" label={"Total Pay: "} name={"totalpay"} />
            <Frequency />
          </Stack>
          <Expense />
          <Stack direction="row" spacing={2}>
            <SaveButton />
            <Button onClick={totalAdd} disableElevation>
              Calculate
            </Button>
          </Stack>
          <label
            style={{ paddingLeft: "20px", fontWeight: "bold" }}
            id="total-amount"
          >
            Total pay remaining: $0
          </label>
        </Stack>
      </React.Fragment>
    </div>
  );
}

export default Homepage;
