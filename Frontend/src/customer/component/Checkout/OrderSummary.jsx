import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: "white",
    backgroundColor: "#4f46e5",
  },
}));

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>
      <div className="min-h-screen pt-5 w-full">
        <div className="lg:grid grid-cols-3 justify-around relative">
          <div className="col-span-2 mb-10">
            {[1, 1, 1, 1].map((item, index) => (
              <div key={index} className="mb-4">
                <CartItem />
              </div>
            ))}
          </div>
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 h-fit">
            <div className="border px-5 py-5" style={{ borderRadius: "5px" }}>
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
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
    </div>
  );
};

export default OrderSummary;
