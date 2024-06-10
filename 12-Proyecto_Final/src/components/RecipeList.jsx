import React, { useState } from 'react';
import { showRecipeAlert } from '../components/SweetAlert';
import RecipeModal from './RecipeModal.jsx';
import '../assets/css/ImageMove.css'; 
// //iconos https://fontawesome.com/ 

const RecipeList = ({ recipes }) => {
  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="row justify-content-center">
      {recipes.map((recipeItem, index) => (
        <div key={index} className="col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: '25rem' }}>
            <img
              src={recipeItem.recipe.image}
              className="card-img-top recipe-image"
              alt={recipeItem.recipe.label}
              onClick={() => handleShow(recipeItem.recipe)}
            />
            <div className="card-body">
              <h5 className="card-title">{recipeItem.recipe.label}</h5>
            </div>
          </div>
        </div>
      ))}
      
      {selectedRecipe && (
        <RecipeModal 
          show={show} 
          handleClose={handleClose} 
          selectedRecipe={selectedRecipe} 
          showRecipeAlert={showRecipeAlert} 
        />
      )}
    </div>
  );
};

export default RecipeList;