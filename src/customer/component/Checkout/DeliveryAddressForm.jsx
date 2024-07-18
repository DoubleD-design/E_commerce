import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: "white",
    backgroundColor: "#4f46e5",
  },
}));

const DeliveryAddressForm = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    console.log("address", address);
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      <Grid container>
        <Grid
          xs={12}
          lg={4.75}
          //   className="border rounded-e-md shadow-md h-[30rem] overflow-y-scroll"
          className="border rounded-lg shadow-md h-[31.5rem] overflow-y-scroll"
        >
          <div className="border-b pl-3">
            <AddressCard />
            <StyledButton
              variant="contained"
              sx={{
                bgcolor: "#6366f1",
                // marginTop: "1rem",
                marginBottom: "1rem",
              }}
              size="large"
              type="submit"
            >
              Delivery Here
            </StyledButton>
          </div>
        </Grid>
        <Grid item xs={12} lg={0.25}>
          <span></span>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-lg shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton
                    variant="contained"
                    sx={{
                      mt: 2,
                      px: "0.5rem",
                      py: "0.5rem",
                      bgcolor: "#6366f1",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      width: "100%",
                    }}
                    size="large"
                    type="submit"
                  >
                    Delivery Here
                  </StyledButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
