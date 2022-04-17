import React from "react";
import {RatingType} from "../UncontrolledRating/UncontrolledRating";

type RatingPropsType = {
    value: RatingType
    onClick: (value: RatingType) => void
}

export const Rating = (props: RatingPropsType) => {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingType
    onClick: (value: RatingType) => void
}
const Star = (props: StarPropsType) => {
    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}