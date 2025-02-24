

function App() {
  const articoli = [
    "come usare word",
    "come usare excel",
    "come sconffiggere la morte nera"
  ]
  return (
    <>
      <div>
        <h1>lista articoli </h1>
        <ul>
          {articoli.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
