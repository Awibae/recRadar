"use client"
import LogoComponent from '../logo/LogoComponent';

const FooterComponent = () => {
    return (
        <footer style={{ background: "linear-gradient(to top, #213a57, #0b647700)" }}>
            <div className="d-flex justify-content-center align-items-center py-3" style={{ gap: "2.5vw" }}>
                <LogoComponent className="px-2" style={{ fill: '#f2f2f2', width: 55, height: 55 }} />
                <span style={{ fontWeight: 400, fontSize: 20 }}> &copy; 2024 RecRadar. All rights reserved.</span>
                <a href="#" className="text-decoration-none gradient-stroke" style={{ fontWeight: 600, fontSize: 20 }}>Privacy Policy</a>
                <a href="#" className="text-decoration-none gradient-stroke" style={{ fontWeight: 600, fontSize: 20 }}>Terms & Conditions</a>
            </div>
        </footer>
    )
};

export default FooterComponent;