
import { useState } from "react"

const App = () => {
  const [articles, setArticles] = useState([
    "come usare word",
    "come usare excel",
    "come sconffiggere la morte nera"
  ]);
  const [newArticle, setNewarticle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newArticle.trim()) {
      setArticles([...articles, newArticle]);
      setNewarticle("");
    }
  }


  return (
    <>
      <div className="container mt-5">
        <h1>lista articoli </h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={newArticle}
            onChange={(e) => setNewarticle(e.target.value)}
            placeholder="aggiungi un articolo" />
          <button type="submit">aggiungi articolo</button>
        </form>
        <ul>
          {articles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
