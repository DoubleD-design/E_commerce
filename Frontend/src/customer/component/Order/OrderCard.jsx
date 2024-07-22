import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Height } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl border mr-5">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
              alt="Product"
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Embroidered Jacquard Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Yellow</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$499</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-500 mr-1"
                />
                <span className="font-semibold">Delivered On March 03</span>
              </p>
              <p className="text-xs mr-2">Your item has been deliveried!</p>
            </div>
          )}
          {false && (
            <p>
              <span className="font-semibold">
                Expected Delivered On March 03
              </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
