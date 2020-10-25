import React from 'react';

const loreList = {
    "Venti": {
        "Lore": "A bard that seems to have arrived on some unknown wind - sometimes sings songs as old as the hills, and other times sings poems fresh and new. Likes apples and lively places, but is not a fan of cheese or anything sticky. When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy."
    },
    "Keqing": {
        "Lore": "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot. She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else."
    }
    
}

const pictureList = {
    "Venti": "img/Genshin-Impact_2019_11-22-19_Top.jpg",
    "Keqing": "img/keqing-genshin-wiki-guide.png"
}

const Lore = (props) => {
    if(loreList[props.character] === undefined){
        return (<div></div>)
    } else {
    return(
        <div>
            <header>
                <h1>{props.character}</h1>
            </header>
            <div>
                {JSON.stringify(loreList[props.character]["Lore"])};
            </div>
            <div>
                <img src={pictureList[props.character]} ></img>
            </div>
        </div>
    )
    }
}

export default Lore;