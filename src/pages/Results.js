import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/Results.module.css';
import { MdArrowRightAlt } from 'react-icons/md';
import imageNotFound from '../assets/not-found.png';

function Results() {
  const [articles, setArticles] = useState([]);
  let params = useParams();

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${params.query}&from=2022-11-01&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    getNews();
  }, [params.query]);

  return (
    <div className={styles.container}>
      <h2>Searched: {params.query}</h2>
      <div className={styles.results}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <img
                src={article.urlToImage || imageNotFound}
                alt={article.title}
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>{article.title}</h2>
              <p>{article.description || article.content}</p>
              <p className={styles.author}>By: {article.author || 'Unknown'}</p>
              <a href={article.url} target="_blank" className={styles.btnLink}>
                Continue reading <span>{<MdArrowRightAlt />}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
