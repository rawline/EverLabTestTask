import styles from './benefits.module.scss'
import medalIcon from '../../assets/icons/icon.svg'
import clockIcon from '../../assets/icons/clcockicon.jpg'
import headphonesIcon from '../../assets/icons/icon (2).svg'
import handshakeIcon from '../../assets/icons/icon (3).svg'


import { useEffect, useRef } from "react";

const BenefitsComponent = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardsRef.current.forEach((card) => {
                if (card) {
                    const cardPosition = card.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (cardPosition < windowHeight - 100) {
                        card.classList.add(styles.animate);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={styles.benefitWrapper}>
                <h2 className={styles.mainTitle}>Our <span>benefits</span></h2>
                <div className={styles.cardsWrapper}>
                    <div 
                        className={`${styles.card} ${styles.cardLeft} ${styles.hiddenRight}`} 
                        ref={(el) => cardsRef.current[0] = el}
                    >
                        <img src={medalIcon} alt="medalIcon" className={styles.cardIcon} />
                        <div className={styles.textBlock}>
                            <h3 className={styles.title}>Best conditions you can get</h3>
                            <ul className={styles.benefitsList}>
                                <li className={styles.listItem}>30 different cryptocurrencies to exchange</li>
                                <li className={styles.listItem}>Secure, non-custodial exchanges</li>
                                <li className={styles.listItem}>Lowest fees on the market</li>
                            </ul>
                        </div>
                    </div>

                    <div 
                        className={`${styles.card} ${styles.cardRight} ${styles.hidden}`} 
                        ref={(el) => cardsRef.current[1] = el}
                    >
                        <img src={clockIcon} alt="clockIcon" className={styles.cardIcon} />
                        <div className={styles.textBlock}>
                            <h3 className={styles.title}>Fast & easy onboarding</h3>
                            <ul className={styles.benefitsList}>
                                <li className={styles.listItem}>Fast & seamless onboarding</li>
                                <li className={styles.listItem}>Easy-to-use partner’s cabinet</li>
                                <li className={styles.listItem}>Instant invoices</li>
                            </ul>
                        </div>
                    </div>

                    <div 
                        className={`${styles.card} ${styles.cardLeft} ${styles.hiddenRight}`} 
                        ref={(el) => cardsRef.current[2] = el}
                    >
                        <img src={headphonesIcon} alt="headphonesIcon" className={styles.cardIcon} />
                        <div className={styles.textBlock}>
                            <h3 className={styles.title}>A service you can trust</h3>
                            <ul className={styles.benefitsList}>
                                <li className={styles.listItem}>5 years of successful service</li>
                                <li className={styles.listItem}>Fully licensed, EU-based company</li>
                                <li className={styles.listItem}>Trusted by over 400 businesses</li>
                            </ul>
                        </div>
                    </div>

                    <div 
                        className={`${styles.card} ${styles.cardRight} ${styles.hidden}`} 
                        ref={(el) => cardsRef.current[3] = el}
                    >
                        <img src={handshakeIcon} alt="handshakeIcon" className={styles.cardIcon} />
                        <div className={styles.textBlock}>
                            <h3 className={styles.title}>Personal customer care</h3>
                            <ul className={styles.benefitsList}>
                                <li className={styles.listItem}>Personal account manager</li>
                                <li className={styles.listItem}>Dedicated support staff</li>
                                <li className={styles.listItem}>Fully guided onboarding process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BenefitsComponent;