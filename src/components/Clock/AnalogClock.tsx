import React from 'react';
import {ClockViewPropsType} from "./Clock";
import styles from './AnalogClock.module.css'

const AnalogClock = (props: ClockViewPropsType) => {
    const {seconds, minutes, hours} = props

    const hourStyles = {
        transform: `rotateZ(${hours * 30}deg)`
    }

    const minutesStyle = {
        transform: `rotateZ(${minutes * 6}deg)`
    }

    const secondsStyle = {
        transform: `rotateZ(${seconds * 6}deg)`
    }

    return (
        <>
            <div className={styles.clock}>
                <div
                    className={styles.hour_hand}
                    style={hourStyles}
                />
                <div
                    className={styles.min_hand}
                    style={minutesStyle}
                />
                <div
                    className={styles.sec_hand}
                    style={secondsStyle}
                />
                <span className={styles.twelve}>12</span>
                <span className={styles.one}>1</span>
                <span className={styles.two}>2</span>
                <span className={styles.three}>3</span>
                <span className={styles.four}>4</span>
                <span className={styles.five}>5</span>
                <span className={styles.six}>6</span>
                <span className={styles.seven}>7</span>
                <span className={styles.eight}>8</span>
                <span className={styles.nine}>9</span>
                <span className={styles.ten}>10</span>
                <span className={styles.eleven}>11</span>
            </div>
        </>
    );
};

export default AnalogClock;