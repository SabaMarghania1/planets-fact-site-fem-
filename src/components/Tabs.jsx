import React, { useEffect, useState } from 'react';

export default function Tabs({ tab, setTab, colors, planet }) {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getTabStyle = (currentTab) => ({
    cursor: 'pointer',
    backgroundColor: isTabletOrLarger && tab === currentTab ? colors[planet.name] : 'transparent',
    borderBottom: !isTabletOrLarger && tab === currentTab ? `3px solid ${colors[planet.name]}` : 'none'
  });

  return (
    <div className="tabs">
      <span
        className="tab"
        style={getTabStyle('overview')}
        onClick={() => setTab('overview')}
      >
        OVERVIEW
      </span>
      <span
        className="tab"
        style={getTabStyle('structure')}
        onClick={() => setTab('structure')}
      >
        STRUCTURE
      </span>
      <span
        className="tab"
        style={getTabStyle('geology')}
        onClick={() => setTab('geology')}
      >
        SURFACE
      </span>
    </div>
  );
}
