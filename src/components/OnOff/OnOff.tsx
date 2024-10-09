import styles from './OnOff.module.css'
import {useState} from "react";

type OnOffPropsType = {
    isOn: boolean
}

const OnOff = ({ isOn }: OnOffPropsType) => {
    const [on, setIsOn] = useState<boolean>(isOn)

    return (
        <div>
            <button className={on ? styles.on : ''} onClick={() => setIsOn(true)}>ON</button>
            <button className={!on ? styles.off : ''} onClick={() => setIsOn(false)}>OFF</button>
            <div className={`${styles.indicator} ${on ? styles.on : styles.off}`}></div>
        </div>
    );
};

export default OnOff;