import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="text-xl font-semibold pl-3 py-3">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-x-5" container>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-5">
              <img
                className="w-[8rem] h-[8rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold text-lg">
                  Men Embroidered Jacquard Straight Kurta
                </p>
                <p className="space-x-5 opacity-60">
                  <span>Color: Yellow</span> <span>Size: M</span>
                </p>
                <p>Seller: Duy</p>
                <p className="text-green-600 font-semibold">$499</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
