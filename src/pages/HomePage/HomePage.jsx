import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/SearchBox/SearchBox';
import Filters from '../../components/Filters/Filters';
// import RecipesList from '../../components/RecipesList/RecipesList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
// import { fetchRecipes } from '../../../redux/recipes/operations';
// import {
//   selectRecipes,
//   selectTotal,
//   selectIsLoading,
//   selectError,
// } from '../../../redux/recipes/selectors';
import s from './HomePage.module.css';
import clsx from 'clsx';

const RECIPES_PER_PAGE = 12;

const HomePage = () => {
  // const dispatch = useDispatch();
  // const recipes = useSelector(selectRecipes);
  // const total = useSelector(selectTotal);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', ingredient: '' });
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   dispatch(
  //     fetchRecipes({
  //       page,
  //       search: searchQuery,
  //       category: filters.category,
  //       ingredient: filters.ingredient,
  //     })
  //   );
  // }, [dispatch, page, searchQuery, filters]);

  const handleSearch = useCallback(query => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  const handleFiltersChange = useCallback(newFilters => {
    setFilters(newFilters);
    setPage(1);
  }, []);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  // const handlePageChange = (newPage) => {
  //   setPage(newPage);
  // };

  // const showNoRecipes = !isLoading && recipes.length === 0;

  return (
    <main className={s.main}>
      <section className={clsx(s.hero, s.container)}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>
            Plan, Cook, and
            <br />
            Share Your Flavors
          </h1>
          <SearchBox onSearch={handleSearch} />
        </div>
      </section>
      <section className={s.recipesection}>
        <div className={s.recipesHeader}>
          <h2 className={s.recipesTitle}>Recepies</h2>
          <div className={s.filterContainer}>
          <span className={s.recipesCount}>12 recipes</span>
          <Filters onChange={handleFiltersChange} />
          </div>
        </div>
        {/* {error && <div className={s.error}>{error}</div>}
        {showNoRecipes && (
          <div className={s.noRecipes}>
            No recipes found for your query.
          </div>
        )} */}
        {/* <RecipesList /> */}

        <LoadMoreBtn onClick={handleLoadMore} />
      </section>
    </main>
  );
};

export default HomePage;
