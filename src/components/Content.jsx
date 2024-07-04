import { useState } from "react";
import TextInfo from "./TextInfo";

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

  const tabStyle = {
    borderBottom: `3px solid ${colors[planet.name]}`,
    cursor: "pointer"
  };

  return (
    <main className="planet__container">
      <div className="tabs">
        <span
          className="tab"
          style={tab === "overview" ? tabStyle : {}}
          onClick={() => setTab("overview")}
        >
          OVERVIEW
        </span>
        <span
          className="tab"
          style={tab === "structure" ? tabStyle : {}}
          onClick={() => setTab("structure")}
        >
          STRUCTURE
        </span>
        <span
          className="tab"
          style={tab === "geology" ? tabStyle : {}}
          onClick={() => setTab("geology")}
        >
          SURFACE
        </span>
      </div>
        <img src={planet.images.planet} alt={planet.name} />
        {}
        {}
        <TextInfo planet={planet} tab={tab}/>
    </main>
  );
}
