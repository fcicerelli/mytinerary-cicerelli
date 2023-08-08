import Anchor from "./Anchor"

export default function NavBar() {
    let myNavBar = [
        {href:"#", title:"Home"},
        {href:"#", title:"Cities"},
        {href:"#", title:"Login"}
    ]
  return (
    <header className="w-[1291px] h-[64px] mx-auto border-2 border-sky-500 flex flex-row justify-between items-center">
        <h1 className="m-2 font-sans font-bold text-[32px] leading-[42.56px]">My Tinerary</h1>
        <nav className="m-3 flex flex-row gap-4">
              {myNavBar.map((each, key) => <Anchor key={ key} href={each.href} title={ each.title} />)}
        </nav>
    </header>
  )
}
