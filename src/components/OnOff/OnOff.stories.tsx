import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";
import {useState} from "react";

export default  {
    component: OnOff,
    title: 'OnOff'
};

const actionCallBack = action('SetIsOn')

export const OnMode = () => <OnOff isOn={true} setIsOn={actionCallBack} />
export const OffMode = () => <OnOff isOn={false} setIsOn={actionCallBack} />
export const ModeChanging = () => {
    const [isOn, setIsOn] = useState<boolean>(false);

    return <OnOff isOn={isOn} setIsOn={setIsOn} />
}