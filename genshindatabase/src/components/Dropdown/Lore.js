import React from 'react';
import ReactPlayer from 'react-player';

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

const previewList = {
    "Venti": "https://www.youtube.com/watch?v=uwNXNHazS-I&ab_channel=GenshinImpact",
    "Keqing": "https://www.youtube.com/watch?v=rPLh5QAedUE&ab_channel=GenshinImpact",
    "Qiqi": "https://www.youtube.com/watch?v=Zuk9kbK1mek&ab_channel=GenshinImpact",
    "Jean": "https://www.youtube.com/watch?v=_FOkixTeAaA&ab_channel=GenshinImpact",
    "Klee": "https://www.youtube.com/watch?v=jdq2shrprdU&ab_channel=GenshinImpact",
    "Diluc": "https://www.youtube.com/watch?v=1TfbiDo7N4k&list=PLqWr7dyJNgLKLO-Zpw9muZ9NnC0TyOpij&index=4&ab_channel=GenshinImpact",
    "Mona": "https://www.youtube.com/watch?v=QUioSVENXcI&ab_channel=GenshinImpact",
    "Xiangling": "https://www.youtube.com/watch?v=TvqGRUWm8qE&ab_channel=GenshinImpact",
    "Fischl": "https://www.youtube.com/watch?v=3VtfVPCbNzk&ab_channel=GenshinImpact",
    "Kaeya": "https://www.youtube.com/watch?v=M2blSYJ6hrE&ab_channel=GenshinImpact",
    "Amber": "https://www.youtube.com/watch?v=KZSM0jEZ43I&ab_channel=GenshinImpact",
    "Chongyun": "https://www.youtube.com/watch?v=rpSX9EKwJtk&ab_channel=Enviosity",
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
            <div>
                <h3>Intro Video</h3>
                <ReactPlayer url={previewList[props.character]} />
            </div>
        </div>
    )
    }
}

export default Lore;