
import styles from "./styles.module.css"

const Frame138 = (props) => {
    return (
        <div className={styles.bigFrame1}>
            <div className={styles.bigFrame2}>
                {props.logoList.map(logo => (
                    <div className={styles.bigFrame3} style={{ '--url': `url(${logo})` }}>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Frame138