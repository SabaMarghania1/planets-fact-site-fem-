
export default function Tabs({tab,setTab,colors,planet}) {

    const tabStyle = {
        borderBottom: `3px solid ${colors[planet.name]}`,
        cursor: "pointer"
      };
  return (
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
  )
}
