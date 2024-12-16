import styles from './footer.module.scss'
import mainLogo from '../../assets/icons/main-logo-dark 1.svg'
import estonianPlcIcon from '../../assets/icons/Estonian_Police_and_Border_Guard_Board_coat_of_arms 1.svg'
import euFlagIcon from '../../assets/icons/flag_of_eu 1.svg'
import facebookIcon from '../../assets/icons/Facebook.svg'
import xIcon from '../../assets/icons/twitter.svg'
import youtubeIcon from '../../assets/icons/Youtube.svg'
import telegramIcon from '../../assets/icons/Telegram.svg'
import redditIcon from '../../assets/icons/Telegram (1).svg'
import instagramIcon from '../../assets/icons/Instagram.svg'
import visaIcon from '../../assets/icons/Group.svg'
import mcIcon from '../../assets/icons/Group (1).svg'


const FooterComponent = () => {
    
    return (
        <>
            <div className={styles.footerWrapper}>
                <img className={styles.mainLogo} src={mainLogo} alt="mainLogo" />

                <div className={styles.linkList}>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>Products</h3>
                        <a href="#" className={styles.listItem}>Buy & Sell Crypto</a>
                        <a href="#" className={styles.listItem}>Recurring exchanges</a>
                        <a href="#" className={styles.listItem}>On- and Off-ramp</a>
                        <a href="#" className={styles.listItem}>Exchanges for Business</a>
                        <a href="#" className={styles.listItem}>Crypto card</a>
                    </div>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>For Partners</h3>
                        <a href="#" className={styles.listItem}>Become a partner</a>
                        <a href="#" className={styles.listItem}>API Docs</a>
                        <a href="#" className={styles.listItem}>Integrate us</a>
                        <a href="#" className={styles.listItem}>Subscriptions</a>
                        <a href="#" className={styles.listItem}>Partner login</a>
                    </div>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>Currencies</h3>
                        <a href="#" className={styles.listItem}>Bitcoin</a>
                        <a href="#" className={styles.listItem}>Etherium</a>
                        <a href="#" className={styles.listItem}>Tether</a>
                        <a href="#" className={styles.listItem}>Monero</a>
                        <a href="#" className={styles.listItem}>Cardano</a>
                        <a href="#" className={styles.listItem}>All currencies</a>
                        <a href="#" className={styles.listItem}>List your token</a>
                    </div>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>Support</h3>
                        <a href="#" className={styles.listItem}>Submit a ticket</a>
                        <a href="#" className={styles.listItem}>FAQ</a>
                        <a href="#" className={styles.listItem}>Knowledge base</a>
                        <a href="#" className={styles.listItem}>Contact us</a>
                    </div>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>Company</h3>
                        <a href="#" className={styles.listItem}>Blog</a>
                        <a href="#" className={styles.listItem}>Press & Media </a>
                        <a href="#" className={styles.listItem}>Brand Assets</a>
                    </div>
                    <div className={styles.linksItem}>
                        <h3 className={styles.listTitle}>Legal</h3>
                        <a href="#" className={styles.listItem}>Pricavy Policy</a>
                        <a href="#" className={styles.listItem}>Terms of Service</a>
                        <a href="#" className={styles.listItem}>KYC | AML Policy</a>
                        <a href="#" className={styles.listItem}>Cookies Policy</a>
                    </div>
                </div>

                

                <div>
                    <hr />
                    <div className={styles.iconsWrapper}>
                        <div className={styles.govIcons}>
                            <a href="#"><img src={estonianPlcIcon} alt="estonianPlcIcon" /></a>
                            <a href="#"><img src={euFlagIcon} alt="euFlagIcon" /></a>
                        </div>
                        <div className={styles.otherIcons}>
                            <div className={styles.snIcons}>
                                <a href="#"><img src={facebookIcon} alt="facebookIcon" /></a>
                                <a href="#"><img src={xIcon} alt="xIcon" /></a>
                                <a href="#"><img src={youtubeIcon} alt="youtubeIcon" /></a>
                                <a href="#"><img src={telegramIcon} alt="telegramIcon" /></a>
                                <a href="#"><img src={redditIcon} alt="redditIcon" /></a>
                                <a href="#"><img src={instagramIcon} alt="instagramIcon" /></a>
                            </div>
                            <div className={styles.psIcons}>
                                <a href="#"><img src={visaIcon} alt="visaIcon" /></a>
                                <a href="#"><img src={mcIcon} alt="mcIcon" /></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.footerText}>
                    <strong>© 2023, Guardarian. All rights reserved.</strong>

                    <p>Guardarian OÜ is a company registered in Estonia, registry code: 14320990, address Rotermanni 2-9, Tallinn 10111, Estonia and operating under license FVT000200 for providing a virtual currency exchange services.</p>

                    <p>FinCEN MSB Registration Number: 31000241392664</p>

                    <p>Please examine the terms and conditions of the service and consult an expert if necessary.</p>
                </div>
                
            </div>
        </>
    );
};

export default FooterComponent;