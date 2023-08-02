function App() {

  const nombre1 = 'My Tinerary'
  const nombre2 = 'My'
  const nombre3 = 'Tinerary'
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
      <header className="h-[87px] bg-red-100 flex justify-center items-center">esto va a ser la barra de navegación</header>
      <main className="grow">{nombre1}</main>
      {console.log(nombre2)}
      { /* Esto es un comentario */ }
      <footer className="h-[49px] bg-pink-200">{`Este es el footer de ${nombre2} ${nombre3}`}</footer>
    </div>
  )
}

export default App
