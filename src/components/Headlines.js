import { React, useState, useEffect } from 'react';
import styles from '../css/Headlines.module.css';
import imageNotFound from '../assets/not-found.png';

function Headlines() {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
      console.log(data.articles);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Top Headines</h2>
      <div className={styles.results}>
        {articles.splice(0, 4).map((article, index) => (
          <a
            href={article.url}
            key={index}
            target="blank"
            className={styles.card}
          >
            <img
              src={article.urlToImage || imageNotFound}
              alt={article.title}
              className={styles.img}
            />
            <h2 className={styles.title}>{article.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Headlines;
