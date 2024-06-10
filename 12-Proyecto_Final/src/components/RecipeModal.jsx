import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RecipeModal = ({ show, handleClose, selectedRecipe, showRecipeAlert }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-scrollable">
      <Modal.Header closeButton>
        <Modal.Title>{selectedRecipe.label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="card-text"><i className="bi bi-person-circle icon-margin"></i> Source: {selectedRecipe.source}</p>
        <p className="card-text"><i className="fa-solid fa-scale-unbalanced-flip icon-margin"></i>Calories: {Math.round(selectedRecipe.calories)}</p>
        <p className="card-text"><i className="bi bi-stopwatch-fill icon-margin"></i>Time: {selectedRecipe.totalTime} minutes</p>
        <p className="card-text"><i className="fa-solid fa-drumstick-bite icon-margin"></i>Yield: {selectedRecipe.yield} servings</p>
        <p className="card-text"><i className="fa-solid fa-tag icon-margin"></i>Diet Labels: {selectedRecipe.dietLabels.join(', ')}</p>
        <p className="card-text"><i className="fa-solid fa-tags icon-margin"></i>Health Labels: {selectedRecipe.healthLabels.join(', ')}</p>
        <p className="card-text"><i className="fa-solid fa-earth-americas icon-margin"></i>Cuisine Type: {selectedRecipe.cuisineType.join(', ')}</p>
        <p className="card-text"><i className="fa-solid fa-utensils icon-margin"></i>Meal Type: {selectedRecipe.mealType.join(', ')}</p>
        <p className="card-text"><i className="fa-solid fa-weight-scale icon-margin"></i>Total Weight: {Math.round(selectedRecipe.totalWeight)} grams</p>
        <p className="card-text"><i className="fa-solid fa-seedling icon-margin"></i>Nutrients:</p>
        <ul>
          <li>Protein: {Math.round(selectedRecipe.totalNutrients.PROCNT.quantity)}g</li>
          <li>Fat: {Math.round(selectedRecipe.totalNutrients.FAT.quantity)}g</li>
          <li>Carbs: {Math.round(selectedRecipe.totalNutrients.CHOCDF.quantity)}g</li>
          <li>Fiber: {Math.round(selectedRecipe.totalNutrients.FIBTG.quantity)}g</li>
        </ul>
        <p className="card-text"><i className="fa-solid fa-carrot icon-margin"></i>Ingredients:</p>
        <ul>
          {selectedRecipe.ingredientLines.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <div className="view-recipe-button-container">
          <a
            href="#"
            onClick={() => showRecipeAlert(selectedRecipe.url)} 
            className="btn btn-primary view-recipe-button"
          >
            View Recipe
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;