import React from 'react'

export default function AdditionalImage({tab,planet}) {
if(tab ==="geology"){
    return <img className='geology-image' src = {planet.images.geology}/>
}
    

}
