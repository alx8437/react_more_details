import { action } from '@storybook/addon-actions';
import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

export default  {
    component: Rating,
};

export const EmptyStars = () =>  <Rating value={0} setValueRating={action('Run action')} />
export const Rating1 = () => <Rating value={1} setValueRating={() => {}} />
export const Rating2 = () => <Rating value={2} setValueRating={() => {}} />
export const Rating3 = () => <Rating value={3} setValueRating={() => {}} />
export const Rating4 = () => <Rating value={4} setValueRating={() => {}} />
export const Rating5 = () => <Rating value={5} setValueRating={() => {}} />

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)

    return <Rating value={rating} setValueRating={setRating} />
}
