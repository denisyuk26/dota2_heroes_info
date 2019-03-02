import React, { Component } from "react";
import PageWithHeroDetails from "../components/HeroDetails/PageWithHeroDetails";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHeroesList } from "../store/actions";

class HeroPageContainer extends Component {
  componentDidMount() {
    this.props.getHeroesList();
  }
  render() {
    return (
      <PageWithHeroDetails
        heroesList={this.props.heroesList}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    heroesList: state.heroesList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getHeroesList,
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroPageContainer);
