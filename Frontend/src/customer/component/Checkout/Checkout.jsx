import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

// Tạo các thành phần tùy chỉnh bằng styled API
const CustomStepper = styled(Stepper)(({ theme }) => ({
  backgroundColor: "transparent", // bỏ màu nền
}));

const CustomStep = styled(Step)(({ theme }) => ({
  "& .MuiStepIcon-root": {
    color: "#708090", // Màu của biểu tượng chưa hoàn thành
    "&.Mui-active": {
      color: "#4CAF50", // Màu của biểu tượng đang hoạt động
    },
    "&.Mui-completed": {
      color: "#4f46e5", // Màu của biểu tượng đã hoàn thành
    },
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: "#000000", // Màu chữ
    "&.Mui-active": {
      color: "#4CAF50", // Màu chữ đang hoạt động
    },
    "&.Mui-completed": {
      color: "#9C27B0", // Màu chữ đã hoàn thành
    },
  },
}));

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);

  const initialStep = parseInt(querySearch.get("step")) || 0;
  const [activeStep, setActiveStep] = React.useState(initialStep);

  React.useEffect(() => {
    const step = parseInt(querySearch.get("step")) || 0;
    setActiveStep(step);
  }, [location.search]);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    navigate(`/?step=${nextStep}`);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    navigate(`/?step=${prevStep}`);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <div>Login Form Content</div>;
      case 1:
        return <DeliveryAddressForm />;
      case 2:
        return <OrderSummary />;
      case 3:
        return <div>Payment Form Content</div>;
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%", mb: 4 }}>
        <CustomStepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <CustomStep key={label}>
              <CustomStepLabel>{label}</CustomStepLabel>
            </CustomStep>
          ))}
        </CustomStepper>
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>{getStepContent(activeStep)}</div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              style={{ color: "#4f46e5", font: "bold" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </div>
  );
}
