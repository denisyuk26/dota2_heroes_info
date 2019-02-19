import React, { Component } from "react";
import PageWithHeroDetails from "../components/HeroDetails/PageWithHeroDetails";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHeroesList, getActiveHero } from "../store/actions";

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
    activeHero: state.activeHero
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getHeroesList,
      getActiveHero
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroPageContainer);
