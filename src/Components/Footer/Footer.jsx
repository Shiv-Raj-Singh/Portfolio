import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container py-5">
                <div className="footer-parent container">
                    <div className="row">
                        {/* Social Links */}
                        <div className="col-md-6">
                            <div className="colz d-flex justify-content-start">
                                <a href="https://www.facebook.com/profile.php?id=100026079350746" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-facebook-square social-icon" aria-hidden="true"></i>
                                    <span className="social-name">Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/mangalthakur00/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-instagram social-icon" aria-hidden="true"></i>
                                    <span className="social-name">Instagram</span>
                                </a>
                                <a href="https://www.linkedin.com/in/shiv-raj-singh-6a7883224/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-linkedin social-icon" aria-hidden="true"></i>
                                    <span className="social-name">LinkedIn</span>
                                </a>
                                <a href="https://github.com/Shiv-Raj-Singh/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-github social-icon" aria-hidden="true"></i>
                                    <span className="social-name">GitHub</span>
                                </a>
                                <a href="https://leetcode.com/mt932747/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-code social-icon" aria-hidden="true"></i>
                                    <span className="social-name">LeetCode</span>
                                </a>
                                <a href="https://www.hackerrank.com/Shiv_Raj_Singh?hr_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa fa-code social-icon" aria-hidden="true"></i>
                                    <span className="social-name">HackerRank</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-md-6 text-md-end text-center">
                            <div className="foot">
                                <div className="contact-item">
                                    <i className="fa fa-envelope"></i>
                                    <span className="span">mt932747@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-whatsapp"></i>
                                    <span className="span">+91-9627347143</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-phone"></i>
                                    <span className="span">+91-9627347143</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row text-center mt-4">
                        <div className="col">
                            <p className="footer-text">© 2024 Shiv Raj Singh. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
