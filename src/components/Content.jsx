import { useState } from "react"

export default function Content({planet}) {
const [tabs,setTabs] = useState("overview")
console.log(planet)
console.log(planet.images.planet);





  return (
    <main className="planet__container">
        <div className="tabs">
            <span className="tab">OVERVIEW</span>
            <span className="tab">STRUCTURE</span>
            <span className="tab">SURFACE</span>
        </div>
        <div className="image"><img  src={planet.images.planet} alt="" /></div>
    </main>
  )
}
