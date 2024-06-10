export const getRecipes = async (query, mealTypes) => {
    const appId = "751562d4"; 
    const appKey = "06cf8316e0e583c3a16d489dc322a8fa"; 
    let url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  
    if (mealTypes.length > 0) {
      const mealTypeParams = mealTypes.map(type => `cuisineType=${type}`).join('&');
      url += `&${mealTypeParams}`;
    }
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const recipes = await response.json();
  
    return recipes;
  };