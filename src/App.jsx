import NavBar from "./components/NavBar"
import MyCard from "./components/MyCard"


let data = [
    { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
    { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
    { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
    { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
]

function App() {

  return (
    <div className="w-full min-h-screen bg-[#ebebeb] flex flex-col ">
      <NavBar />
      <main className="m-auto">
        <div className="flex  justify-center items-center w-[1291px] h-[304px]">
          <div className="w-[742px] h-[304px] border-2 border-sky-500 flex flex-col justify-between">
            <h1 className="font-sans font-bold text-black text-[48px] leading-[63.84px]">Find the perfect destination</h1>
            <p className="w-[628px] h-24 font-sans text-2xl text-[#1c1c1c]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className="w-[346px] h-[64px] bg-indigo-600 rounded-lg font-sans text-white text-2xl">View More</button>
          </div>
          <div className="w-[549px] h-[304px] border-2 border-sky-500">
            <div className="flex flex-wrap justify-center ">
              {data.slice(0, 4).map((card, i) => (
              
                <MyCard id={i} city={card.city} photo={card.photo} />
                
              
              ))}
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  )
}

export default App
