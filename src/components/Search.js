import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Search.module.css';
import { MdSearch, MdClose } from 'react-icons/md';

function Search() {
  const [search, setSearch] = useState('');
  let navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    navigate(`/search/${search}`);
    setSearch('');
  };

  const handleClear = () => {
    setSearch('');
    navigate('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <MdSearch className={styles.search} />
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        value={search}
        onChange={handleChange}
      />
      {search && <MdClose className={styles.close} onClick={handleClear} />}
    </form>
  );
}

export default Search;
