
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
  const handleDelete = (index) => {
    setArticles(articles.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">lista articoli </h1>
        <form onSubmit={handleSubmit} className="mb-3 d-flex">
          <input
            type="text"
            value={newArticle}
            onChange={(e) => setNewarticle(e.target.value)}
            placeholder="aggiungi un articolo" />
          <button type="submit" className="btn btn-primary">aggiungi articolo</button>
        </form>
        <ul className="list-group">
          {articles.map((title, index) => (
            <li key={index} className="list-group-item">{title}
              <button className="btn btn-danger btn-sm ms-auto px-2 py-0 d-flex justify-content-end"
                style={{ fontSize: "0.75rem" }} onClick={() => handleDelete(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
