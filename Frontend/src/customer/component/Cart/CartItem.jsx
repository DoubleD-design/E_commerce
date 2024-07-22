import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: theme.palette[color].main,
    backgroundColor: "white",
  },
}));
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Men Embroidered Jacquard Straight Kurta
          </p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: SG LEMAN</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">$499</p>
            <p className="opacity-50 line-through">$1499</p>
            <p className="text-green-600 font-semibold">66% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span
            className="py-1 px-7 border rounded-sm"
            style={{ borderRadius: "5px", borderColor: "indiogo" }}
          >
            3
          </span>
          <IconButton color="secondary">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button color="secondary">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
