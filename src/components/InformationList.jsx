
export default function InformationList({planet}) {
  return (
    <ul className="info-list">
        <li className="info-list__item">
            <span>ROTATION TIME</span>
            <p>{planet.rotation}</p>
        </li>
        <li className="info-list__item">
            <span>REVOLUTION TIME</span>
            <p>{planet.revolution}</p>
        </li>

        <li className="info-list__item">
            <span>RADIUS</span>
            <p>{planet.radius}</p>
        </li>

        <li className="info-list__item">
            <span>AVERAGE TEMP</span>
            <p>{planet.temperature}</p>
        </li>
    </ul>
  )
}
