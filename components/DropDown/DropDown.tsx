import React from 'react'
import styles from "./styles.module.css"

const DropDown = () => {
    return (
        <div className={styles.dropDownFrame}>
            <div className={styles.options}>
                <div className={styles.listboxBG}>
                    <img src="/Chevron.svg" alt="" />
                    <div className={styles.goalOptions}>
                        <div className={styles.textHolder}>
                            Select Your Goal
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown