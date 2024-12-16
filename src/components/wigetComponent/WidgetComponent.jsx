import styles from './Widget.module.scss'
import euroIcon from '../../assets/icons/coins.svg'
import btcIcon from '../../assets/icons/bitcoin-btc-logo.svg'
import arrowBack from '../../assets/icons/arrowBack.svg'
import dotsIcon from '../../assets/icons/dots.svg'


const WidgetComponent = () => {
    return(
        <>
        <div className={styles.widgetWrapper}>
            <div className={styles.widgetHeader}>
                <h2 className={styles.tab}>Buy</h2>
                <h2 className={styles.tab}>Sell</h2>
                <h2 className={styles.tab}>Swap</h2>
            </div>

            <div className={styles.widgetBody}>
                <div className={styles.inputsWrapper}>
                    <div className={styles.currencyInput}>

                    <div className={styles.textInputWrapper}>
                        <label className={styles.labelInput} htmlFor="amount">You send</label>
                        <input id="amount" type="number" className={styles.textInput} value={300} />
                    </div>

                    <div className={styles.currensySelect}>
                        <img src={euroIcon} alt="euroIcon" />
                        <div className={styles.ticker}>EUR</div>
                        <img src={arrowBack} alt="arrowBack" />
                    </div>
                    </div>

                    <div className={styles.textBetweenInputs}>
                    <img src={dotsIcon} alt="dotsIcon" className={styles.dots} />
                    <div className={styles.text}>
                        <p className={styles.text}><span>Estimated rate:</span> 1 BTC ~ 14.865901 EUR</p>
                        <p className={styles.text}><span>Total to pay:</span> 300 EUR (2 EUR fees included)</p>
                    </div>
                    </div>

                    <div className={styles.currencyInput}>
                    <div className={styles.textInputWrapper}>
                        <label className={styles.labelInput} htmlFor="amount">You get</label>
                        <input id="amount" className={styles.textInput} value={"~0.02935551"} />
                    </div>
                    <div className={styles.currensySelect}>
                        <img src={btcIcon} alt="btcIcon" />
                        <div className={styles.ticker}>BTC</div>
                        <img src={arrowBack} alt="arrowBack" />
                    </div>
                    </div>
                </div>

                <div className={styles.checkboxWrapper}>
                    <p className={styles.checkboxLabel}>Repeat payment</p>
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                </div>
            </div>

            <button className={styles.widgetBtn}>Become a partner</button>
        </div>
        </>
    )
}

export default WidgetComponent;