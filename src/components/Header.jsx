import AppNav from "./Appnav"

export default function Header({planets}) {
  return (
    <header className="header">
      <span className="logo">The Planets</span>
      <AppNav planets={planets}/>
    </header>
  )
}
