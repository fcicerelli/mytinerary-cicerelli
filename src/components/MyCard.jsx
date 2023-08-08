export default function MyCard({ id, city, photo }) {
/* export default function MyCard() { */
    { console.log(city + "  " + photo + "  " + id) }
    {/* console.log(city) */}
    {/* console.log(props) */}
  return (
            <article key={id} className="w-2/6 flex flex-col items-center p-1 m-1 bg-blue-100">
              <img src={photo} als={city }  />
              <h3 >{city }</h3>
            </article>
)
}
