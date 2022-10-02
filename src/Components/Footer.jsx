import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-3 border-t fixed bottom-0 bg-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center justify-center">
          <p>© 2022 Airbnb, Inc.</p>&nbsp; &nbsp;
          <p>· &nbsp;Privacy</p>&nbsp; &nbsp;
          <p>· &nbsp;Terms</p>&nbsp; &nbsp;
          <p>· &nbsp;Sitemap</p>&nbsp; &nbsp;
          <p>· &nbsp;Destinations</p>
        </div>
        <div className="flex font-medium items-center">
          <p className="flex items-center">
            <svg
              style={{ width: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            &nbsp; English(US)
          </p>
          &nbsp; &nbsp; &nbsp;
          <p>$ USD</p>&nbsp; &nbsp; &nbsp;
          <p className="flex">
            Support & Resources &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
