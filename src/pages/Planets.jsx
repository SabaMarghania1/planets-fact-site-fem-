import { useParams } from "react-router-dom"
import Header from "../components/Header"

import data from "../data.json"
import Content from "../components/Content"

export default function Planets() {
    const {name} =useParams()
    console.log(data)
    const planet = data.find(p => p.name.toLowerCase() === name.toLowerCase());
    console.log(planet)
  return (
    <div className="app">
      <Header planets={data}/>
      <Content planet={planet} />
    </div>
  )
}
