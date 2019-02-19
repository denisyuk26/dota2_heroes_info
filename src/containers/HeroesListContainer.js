import React, { Component } from "react";
import HeroesList from "../components/HeroesList/HeroesList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHeroesList, getActiveHero } from "../store/actions";
import styles from './heroesListContainer.module.css'
import "../App.css";

class HeroesListContainer extends Component {
  componentDidMount() {
    this.props.getHeroesList();
  }
  render() {
    return (
      this.props.heroesList.length > 0
      ?<HeroesList
        className={styles.heroes_list}
        heroesList={this.props.heroesList}
        getActiveHero={this.props.getActiveHero}
      />
      : (<div className={styles.wrap}>
      <h1>Loading...</h1>
      <div className={styles.loader} />
      </div>)
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
)(HeroesListContainer);
