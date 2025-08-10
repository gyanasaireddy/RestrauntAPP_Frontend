import React from "react";

const Contact = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center p-2"
      style={{ height: "90vh" }}
    >
      <div className="container text-light ">
        <div className="row ">
          {/* Text & Contact Info */}
          <div className="col-md-6 mb-4">
            <h2 className="pb-2 border-bottom">Contact Us</h2>
            <p className="mb-4">
              Have questions, suggestions, or want to make a reservation? We're
              happy to hear from you. Reach out using the details below.
            </p>

            <ul className="list-unstyled ">
              <li>
                <strong>📍 Address:</strong> 123 Main Street, Hyderabad, India
              </li>
              <li>
                <strong>📞 Phone:</strong> +91 98765 9999
              </li>
              <li>
                <strong>✉️ Email:</strong> theclaypotkitchen@portfolio.com
              </li>
              <li>
                <strong>🕒 Hours:</strong> 8:00 AM – 10:00 PM (All Days)
              </li>
            </ul>
          </div>

          {/* QR Code Section */}
          <div className="col-md-6 text-center">
            <h4 className="mb-3">Scan to View Menu / Feedback</h4>
            <div className="bg-light rounded p-3 d-inline-block">
              {/* Replace with actual QR code */}
              <a href="https://web-dev-portofolio.vercel.app/" target="_blank">
                    <img
                src="/bing_generated_qrcode.png"
                alt="QR Code"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              </a>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
