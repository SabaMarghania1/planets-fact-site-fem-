import { useState } from "react";
import TextInfo from "./TextInfo";
import Tabs from "./Tabs";
import AdditionalImage from "./AdditionalImage";
import InformationList from "./InformationList";
export default function Content({ planet }) {
  const [tab, setTab] = useState("overview");

  const colors = {
    Mercury: "#DEF4FC",
    Venus: "#F7CC7F",
    Earth: "#545BFE",
    Mars: "#FF6A45",
    Jupiter: "#ECAD7A",
    Saturn: "#FCCB6B",
    Uranus: "#65F0D5",
    Neptune: "#497EFA"
  };


  return (
    <main className="planet__container">
      <Tabs tab={tab} setTab={setTab} colors ={colors} planet={planet}/>
        <img className="main-img" src={tab === "structure" ? planet.images.internal : planet.images.planet } alt={planet.name} />
        <AdditionalImage planet = {planet} tab={tab}/>
        <TextInfo planet={planet} tab={tab}/>
       <InformationList planet = {planet}/>
    </main>
  );
}
