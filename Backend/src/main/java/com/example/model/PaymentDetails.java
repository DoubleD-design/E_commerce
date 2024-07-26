package com.example.model;


public class PaymentDetails {
    private String paymentMethod;
    private String status;
    private String paymentld;
    private String razorpayPaymentLinkld;
    private String razorpayPaymentLinkReferenceld;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentld;

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPaymentld() {
        return paymentld;
    }

    public void setPaymentld(String paymentld) {
        this.paymentld = paymentld;
    }

    public String getRazorpayPaymentLinkld() {
        return razorpayPaymentLinkld;
    }

    public void setRazorpayPaymentLinkld(String razorpayPaymentLinkld) {
        this.razorpayPaymentLinkld = razorpayPaymentLinkld;
    }

    public String getRazorpayPaymentLinkReferenceld() {
        return razorpayPaymentLinkReferenceld;
    }

    public void setRazorpayPaymentLinkReferenceld(String razorpayPaymentLinkReferenceld) {
        this.razorpayPaymentLinkReferenceld = razorpayPaymentLinkReferenceld;
    }

    public String getRazorpayPaymentLinkStatus() {
        return razorpayPaymentLinkStatus;
    }

    public void setRazorpayPaymentLinkStatus(String razorpayPaymentLinkStatus) {
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
    }

    public String getRazorpayPaymentld() {
        return razorpayPaymentld;
    }

    public void setRazorpayPaymentld(String razorpayPaymentld) {
        this.razorpayPaymentld = razorpayPaymentld;
    }
    public PaymentDetails() {
    }

    public PaymentDetails(String paymentMethod, String status, String paymentld, String razorpayPaymentLinkld, String razorpayPaymentLinkReferenceld, String razorpayPaymentLinkStatus, String razorpayPaymentld) {
        super();
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.paymentld = paymentld;
        this.razorpayPaymentLinkld = razorpayPaymentLinkld;
        this.razorpayPaymentLinkReferenceld = razorpayPaymentLinkReferenceld;
        this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
        this.razorpayPaymentld = razorpayPaymentld;
    }
}

