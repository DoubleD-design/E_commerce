package com.example.response;

public class ApiResponse {
        private String message;
        private boolean status;

        // Constructor
        public ApiResponse() {}

        // Getter và Setter
        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public boolean isStatus() {
            return status;
        }

        public void setStatus(boolean status) {
            this.status = status;
        }
}
