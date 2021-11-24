import React from 'react'
import HomeSection from './HomeSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeData'
import Tions from './Answer'
import Post from './Post'
import Postq from './Postq'
import Qions from './Question.'



function Home() {
    return (
        <>
            <HomeSection {...homeObjOne} />
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
            <HomeSection {...homeObjFour} /> 
            <Postq/>
            <Qions/>
            <Post/>
            <Tions/> 
        </>
    )
}

export default Home