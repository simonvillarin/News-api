import { React, useState, useEffect } from 'react';
import styles from '../css/Articles.module.css';
import { MdArrowRightAlt } from 'react-icons/md';
import imageNotFound from '../assets/not-found.png';

function Articles() {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Latest Articles</h2>
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

export default Articles;
