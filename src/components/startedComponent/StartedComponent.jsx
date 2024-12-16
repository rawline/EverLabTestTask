import sepaIcon from '../../assets/icons/SEPAicon.svg'
import swiftIcon from '../../assets/icons/swift-logo-new 1.svg'
import fasterPaymentsIcon from '../../assets/icons/fasterPaymentsIcon.svg'

import styles from './Started.module.scss'

import WidgetComponent from '../wigetComponent/WidgetComponent'

const StartedComponent = () => {
    return (
        <>
        <div className={styles.startedWrapper}>
            <div className={styles.titleBlock}>
                <h1 className={styles.mainTitle}>
                Crypto&lt;&gt;Fiat <br /> <span>exchanges <br />for your business</span> 
                </h1>
                <h3 className={styles.mainSubtitle}>
                Cash out your crypto profits or invest into crypto <br /> with the lowest fees on the market.
                </h3>
                <div className={styles.icons}>
                    <img src={sepaIcon} alt="sepaIcon" className={styles.mainIcon}/>
                    <img src={swiftIcon} alt="swiftIcon" className={styles.mainIcon} />
                    <img src={fasterPaymentsIcon} alt="fasterPaymentsIcon" className={styles.mainIcon} />
                </div>
            </div>
            
            <WidgetComponent />
        </div>
        </>
    )
}

export default StartedComponent;