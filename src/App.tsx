import React, {useState} from 'react';
import './App.css';
import {RatingType} from "./components/UncontrolledRating/UncontrolledRating";

import {Select} from "./components/Select/Select";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title={'This is APP component'}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}

            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}


            {/*<OnOff on={switchOn} onClick={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onClick={setSwitchOn}/>{switchOn.toString()}*/}
            <Select value={'1'}
                items={[
                    {title: 'Minsk', id: '1'},
                    {title: 'Moscow', id: '2'},
                    {title: 'Kiev', id: '3'}
                ]}
                onChange={()=>{}}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;