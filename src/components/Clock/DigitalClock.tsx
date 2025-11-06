import {ClockViewPropsType} from "./Clock";

const get2DigitString = (num: number) => {
    return num < 10 ? "0" + num : num
}

export const DigitalClock = (props: ClockViewPropsType) => {
    const {hours, minutes, seconds} = props

    return (
        <div>
            <span>{get2DigitString(hours)}</span>:
            <span>{get2DigitString(minutes)}</span>:
            <span>{get2DigitString(seconds)}</span>
        </div>
    );
};

export default DigitalClock;