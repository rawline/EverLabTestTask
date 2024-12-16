import styles from './partners.module.scss'
import tapbitIcon from '../../assets/icons/logo tapbit.svg'
import coinexIcon from '../../assets/icons/Coinex.svg'
import atomaticwalletIcon from '../../assets/icons/logo (1) 1.svg'
import eternlIcon from '../../assets/icons/Frame 1261153921.svg'
import infinityWalletIcon from '../../assets/icons/Infinity_main_vertical_white 1.svg'
import probitIcon from '../../assets/icons/Frame.svg'
import leftArrowIcon from '../../assets/icons/bx-arrow-back.svg.svg'
import rightArrowIcon from '../../assets/icons/bx-arrow-back.svg (1).svg'





const PartnersComponent = () => {
    
    return (
        <>
            <div className={styles.partnersWrapper}>
                <h2 className={styles.mainTitle}>Trusted by<span> the best</span></h2>
                <p className={styles.subtitle}>Guardarian powers the leading projects in Web3 industry.</p>

                <div className={styles.partnersIconsWrapper}>

                    <img className={styles.arrowIcon} src={leftArrowIcon} alt="leftArrowIcon" />

                    <div className={styles.item}>
                        <img src={tapbitIcon} alt="tapbitIcon" />
                    </div>
                    <div className={styles.item}>
                        <img src={coinexIcon} alt="coinexIcon" />
                    </div>
                    <div className={styles.item}>
                        <img src={atomaticwalletIcon} alt="atomaticwalletIcon" />
                    </div>
                    <div className={styles.item}>
                        <img src={eternlIcon} alt="eternlIcon" />
                    </div>
                    <div className={styles.item}>
                        <img src={infinityWalletIcon} alt="infinityWalletIcon" />
                    </div>
                    <div className={styles.item}>
                        <img src={probitIcon} alt="probitIcon" />
                    </div>

                    <img className={styles.arrowIcon} src={rightArrowIcon} alt="rightArrowIcon" />

                </div>

                <button className={styles.partnersBtn}>Join our partner family</button>
                
            </div>
        </>
    );
};

export default PartnersComponent;