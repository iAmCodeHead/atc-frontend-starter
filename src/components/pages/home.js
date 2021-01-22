import { Container } from 'reactstrap';
import whatsappSvg from "../../whatsapp.svg";
import linkSvg from "../../link.svg";
import helpSvg from "../../help.svg";
import emailSvg from "../../email.svg";
import switchSvg from "../../switch.svg";
import resetSvg from "../../reset.svg";


const Home = (props) => {
    return (
        <Container>
            <div class="overlay">
                <div class="modal--container">
                    <div class="modal">
                        <h3>Access Customer Calendar</h3>
                        <div class="nav">
                            <span class="active">Send to customer</span>
                            <span>Reach More Customers</span>
                        </div>
                        <div class="plan-section">
                            <div class="section-one">
                                <div class="access">
                                    <div>Access Plan:<span>FREE</span></div>
                                    <button class="grey-btn">Upgrade Plan</button>
                                </div>
                                <ul>
                                    <li>$0 month Free</li>
                                    <li>1 free calendar</li>
                                    <li>10 free travel jinni token</li>
                                </ul>
                            </div>
                            <div class="section-two">
                                <div class="token">
                                    <div>Available Token: <span> 10 </span></div>
                                    <button class="grey-btn">Upgrade Plan</button>
                                </div>
                            </div>
                        </div>
                        <div class="payment-section">
                            <div class="switch">
                                <img src={switchSvg} alt="switch"/>
                            </div>
                            <div class="text">
                                <h6>Payment for main product price disabled</h6>
                                <p>Select this if your customer has already
                                     paid for the main product and you want to display
                                      the main product for information only without the price.
                                </p>
                            </div>
                            <button class="yellow-btn">Product Info</button>
                        </div>
                        <div class="actions"> 
                            <span>Send By</span>
                            <button class="btn active">
                                <img src={linkSvg} alt="link"/>
                                <span>Link</span>
                            </button>
                            <button class="btn inactive">
                                <img src={whatsappSvg} alt="whatsapp" />
                                <span>whatsapp</span>
                            </button>
                            <button class="btn inactive">
                                <img src={emailSvg} alt="email" />
                                <span>Email</span>
                            </button>
                        </div>
                        <div class="message">
                            <div class="header">
                                <span>Edit Mesage</span>
                                <div class="reset">
                                    <img src={resetSvg} alt="reset" />
                                    <span>Reset</span>
                                </div>
                            </div>
                            <textarea></textarea>
                        </div>
                        <div class="btn-group">
                            <div class="btn-flex">
                                <button class="btn active bold">Send Using Link</button>
                                <button class="grey-btn bold">Cancel</button>
                            </div>
                            <button class="grey-btn bold">
                                <img src={helpSvg} alt="help" />
                                <span>Help</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default (Home);