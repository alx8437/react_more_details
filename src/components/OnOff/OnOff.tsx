import {FC} from "react";

type TOnOffPropsType = {
    isOn: boolean
    setIsOn: (state: boolean) => void
}

const OnOff: FC<TOnOffPropsType> = ({isOn, setIsOn}) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: isOn ? 'green' : 'white',
        cursor: 'pointer'
    };

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: isOn ? 'white' : 'red',
        cursor: 'pointer'
    };

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: isOn ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => setIsOn(true)} style={onStyle}>on</div>
            <div onClick={() => setIsOn(false)} style={offStyle}>of</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;