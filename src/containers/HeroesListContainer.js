import React, { Component } from "react";
import HeroesList from "../components/HeroesList/HeroesList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHeroesList, clearFilter } from "../store/actions";
import styles from './heroesListContainer.module.css'

class HeroesListContainer extends Component {
  componentDidMount() {
    this.props.getHeroesList();
    this.props.clearFilter()
  }
  render() {
    return (
      this.props.heroesList.length > 0
      ?<HeroesList
        className={styles.heroes_list}
        heroesList={this.props.heroesList}
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
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getHeroesList,
      clearFilter
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesListContainer);
