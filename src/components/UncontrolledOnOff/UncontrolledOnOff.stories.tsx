import React from 'react';

import {UncontrolledOnOff} from './UncontrolledOnOff';



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={()=>{}}/>;
export const OffMode = () => <UncontrolledOnOff defaultOff={false} onChange={()=>{}}/>;
export const DefaultInputValue=()=><input defaultValue={'yo'}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>



// export const ChangedRating = () => {
//     let[rating,setRating]=useState<RatingType>(3)yar
//     return <Rating value={rating} onClick={setRating}/>
// }

