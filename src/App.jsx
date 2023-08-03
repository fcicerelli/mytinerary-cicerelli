function App() {

  return (
    <div className="w-full min-h-screen bg-[#ebebeb] flex flex-col ">
      <header className="w-[1291px] h-[64px] mx-auto border-2 border-sky-500 flex flex-row justify-between items-center">
        <h1 className="m-2 font-sans font-bold text-[32px] leading-[42.56px]">My Tinerary</h1>
        <nav className="m-3">
          <ul className=" flex flex-row gap-4">
            <li>Home</li>
            <li>Cities</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main className="m-auto">
        <div className="flex  justify-center items-center w-[1291px] h-[304px]">
          <div className="h-[304px] w-[742px]  border-2 border-sky-500 flex flex-col justify-between">
            <h1 className="font-sans font-bold text-black text-[48px] leading-[63.84px]">Find the perfect destination</h1>
            <p className="font-sans text-2xl text-[#1c1c1c]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className="w-[346px] h-[64px] bg-indigo-600 rounded-lg font-sans text-white text-2xl">View More</button>
          </div>
          <div className="w-[549px] h-[304px] border-2 border-sky-500">carrusel</div>
        </div>
      </main>
      
      
    </div>
  )
}

export default App
