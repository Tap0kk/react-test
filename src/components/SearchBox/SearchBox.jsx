import React from 'react';
import s from './SearchBox.module.css'

const SearchBox = () => {
  return <div className={s.inputContainer}>
    <input className={s.input} type="text" value="Type here" />
    <button className={s.inputBtn}>Search</button>
  </div>;
};

export default SearchBox;
