import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../reducers/data";
import {
  averageDataSelector,
  femaleDataSelector,
  maleDataSelector,
  maxDataSelector
} from "../selectors";
import { FancyChart } from "../components.js/fancyChart";

class DemoChart extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { male, female, max, average } = this.props;
    return (
      <div>
        <FancyChart
          dataSet1={male}
          dataSet2={female}
          max={max}
          fbAverage={average}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  average: averageDataSelector(state),
  male: maleDataSelector(state),
  female: femaleDataSelector(state),
  max: maxDataSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoChart);
