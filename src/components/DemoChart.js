import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../reducers/data";
import {
  averageDataSelector,
  femaleDataSelector,
  maleDataSelector
} from "../selectors";

class DemoChart extends Component {
  componentDidMount() {
    console.log("mounted", this.props);
    this.props.fetchData();
  }
  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <div>FakeChart</div>
        average : {this.props.average}
        male : {this.props.male}
        female : {this.props.female}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  average: averageDataSelector(state),
  male: maleDataSelector(state),
  female: femaleDataSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoChart);
