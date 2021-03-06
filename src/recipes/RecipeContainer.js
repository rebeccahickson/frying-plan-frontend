import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeList from "./RecipeList";
import "./recipe.css";

class RecipeContainer extends Component {
  render() {
    return (
      <div id="recipe-container" className="main-container">
        <h2>All Recipes</h2>
        {this.props.recipes.loading ? <h3>Loading...</h3> : <RecipeList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(RecipeContainer);

