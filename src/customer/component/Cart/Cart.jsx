import React from "react";
import CartItem from "./CartItem";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: "white",
    backgroundColor: "#4f46e5",
  },
}));

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 mb-10">
          {[1, 1, 1, 1].map((item, index) => (
            <div key={index} className="mb-5">
              {" "}
              {/* Add margin-bottom to each CartItem */}
              <CartItem />
            </div>
          ))}
        </div>
        <div className="px-5 lg:sticky lg:top-0 h-[100vh] mt-5 lg:mt-0">
          {" "}
          {/* Use sticky directly here */}
          <div className="border px-5 py-5" style={{ borderRadius: "5px" }}>
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-2 font-semibold">
              <div className="flex justify-between pt-1 text-black">
                <span>Price</span>
                <span>$1499</span>
              </div>
              <div className="flex justify-between pt-1 text-green-600">
                <span className="text-black">Discount</span>
                <span>- $1000</span>
              </div>
              <div className="flex justify-between pt-1 text-green-600">
                <span className="text-black">Delivery Charge</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold pt-1 text-green-600 pb-5">
                <span className="text-black text-lg">Total Amount</span>
                <span>$499</span>
              </div>
              <StyledButton
                variant="contained"
                sx={{
                  px: "2rem",
                  py: "1rem",
                  bgcolor: "#6366f1",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  width: "100%",
                  fontSize: "100%",
                }}
              >
                Purchase
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
