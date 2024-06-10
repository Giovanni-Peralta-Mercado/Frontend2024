import React, { useState, useEffect } from 'react';
import { getRecipes } from './api/RecipeApi';
import RecipeList from './components/RecipeList.jsx';
import { showMissingDataAlert } from './components/SweetAlert.js';
import LoadingPlaceholder from './components/Placeholder';
import './assets/css/App.css';
import './assets/css/PlaceholderStyle.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mealTypes, setMealTypes] = useState({
    italian: false,
    mexican: false,
    asian: false,
  });
  const [recentSearches, setRecentSearches] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const fetchRecipes = async () => {
    setLoading(true);
    setError('');
    try {
      const selectedMealTypes = Object.keys(mealTypes).filter(type => mealTypes[type]);
      const response = await getRecipes(query, selectedMealTypes);
      setRecipes(response.hits);
    } catch (err) {
      setError('Error fetching recipes: ' + err.message);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    const selectedMealTypes = Object.keys(mealTypes).filter(type => mealTypes[type]);
    if (!query && selectedMealTypes.length === 0) {
      showMissingDataAlert();
    } else {
      fetchRecipes();
      if (query.trim() && !recentSearches.includes(query)) {
        const updatedSearches = [query, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedSearches);
      }
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleRecentSearchClick = (search) => {
    setQuery(search);
    setShowDropdown(false);
  };

  const handleCheckboxChange = (event) => {
    setMealTypes({
      ...mealTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <div className="App">
      <header className="custom-label">
        <h1>"The Magic of Cooking"</h1>
        <div className="input-group flex-nowrap mb-3" style={{ maxWidth: '450px', margin: '0 auto', position: 'relative' }}>
          <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for recipes"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            value={query}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && recentSearches.length > 0 && (
            <ul className="dropdown-menu show dropdown-menu-custom">
              {recentSearches.map((search, index) => (
                <li key={index} className="dropdown-item" onMouseDown={() => handleRecentSearchClick(search)}>
                  {search}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="checkbox-group mb-3">
          <label className="checkbox-label custom-label">
            <input
              type="checkbox"
              name="italian"
              checked={mealTypes.italian}
              onChange={handleCheckboxChange}
            />
            Italian
          </label>
          <label className="checkbox-label custom-label">
            <input
              type="checkbox"
              name="mexican"
              checked={mealTypes.mexican}
              onChange={handleCheckboxChange}
            />
            Mexican
          </label>
          <label className="checkbox-label custom-label">
            <input
              type="checkbox"
              name="asian"
              checked={mealTypes.asian}
              onChange={handleCheckboxChange}
            />
            Asian
          </label>
        </div>
        <button className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>
        {loading ? (
          <div className="recipe-placeholder-container">
            <LoadingPlaceholder />
            <LoadingPlaceholder />
            <LoadingPlaceholder />
          </div>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </header>
    </div>
  );
};

export default App;