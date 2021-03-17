import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDays } from "../actions/fetchDays";
import DayList from "./DayList";
import "./mealplan.css";

class MealPlanContainer extends Component {
  componentDidMount() {
    this.props.fetchDays();
  }

  render() {
    return (
      <div id="meal-plan-container" className="main-container">
        <h2>Your Meal Plan</h2>
        {this.props.days.loading ? <h3>Loading...</h3> : <DayList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: () => dispatch(fetchDays()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanContainer);
