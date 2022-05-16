import React from "react";
import "./App.css";

const Index = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-left">
            <span>
              <img className="logo" src="/Images/logo.png" alt="#" />
             <h3> Kundan Kumar Sharma</h3>
            </span>
          </div>
          
          <div className="footer-right">
            <img src="/Icons/f.png" alt="" />
            <img src="/Icons/i.png" alt="" />
            <img src="/Icons/t.png" alt="" />
            <img src="/Icons/l.png" alt="" />
            <img src="/Icons/yt.png" alt="" />
            <img src="/Icons/tu.png" alt="" />
          </div>
          <div className="footer-center">
            <p>Copyright © 2022 All rights reserved KundanKumarSharma.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
