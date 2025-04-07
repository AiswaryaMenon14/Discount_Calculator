import { useState } from "react";

import "./App.css";
import { Button, TextField } from "@mui/material";

function App() {
  const [amount, setAmount] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [discountAmount, setDiscountAmount] = useState(null);
  const [finalAmount, setFinalAmount] = useState(null);

  const calculateDiscount = () => {
    const amt = parseFloat(amount);
    const discount = parseFloat(discountPercent);

    if (!isNaN(amt) && !isNaN(discount)) {
      const discountAmt = (amt * discount) / 100;
      const finalAmt = amt - discountAmt;

      setDiscountAmount(discountAmt.toFixed(2));
      setFinalAmount(finalAmt.toFixed(2));
    }
  };

  const reset = () => {
    setAmount("");
    setDiscountPercent("");
    setDiscountAmount(null);
    setFinalAmount(null);
  };

  return (
    <div className="cover">
      <div
        style={{
          width: "50%",
          textAlign: "center",
        }}
      >
        <h1>Discount Calculator</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiX4fSKAG8RT_r3GI5ZizU-yvYxmMPW5Tog&s"
          alt=""
          width="10%"
        />
        <div style={{}}>
          <TextField
            id="standard-basic"
            label="Enter Amount"
            variant="standard"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="standard-basic"
            label="Enter Discount"
            variant="standard"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
          />
        </div>
        <div className="button">
          <Button variant="contained" onClick={(e) => calculateDiscount(e)}>
            Calculate
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        {discountAmount !== null && (
          <div className="mt-6">
            <p>
              <strong>Discount Amount:</strong> ₹{discountAmount}
            </p>
            <p>
              <strong>Final Amount:</strong> ₹{finalAmount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
