// Core
import React from "react";
import { Link } from "react-router-dom";
import { getUserInput, clearFilter } from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Instruments
import styles from "./styles.module.css";
import {MdCancel} from "react-icons/md"

const Search = props => {

  const regexp = new RegExp(props.filter, "gi");
  const filterHeroes = props.heroesList.filter(hero =>
    regexp.test(hero.localized_name)
  );
  //JSX for result
  const heroesJSX = filterHeroes.map(hero => {
    return (
      <Link key={hero.id} to={`/hero/${hero.id}`}>
      <li onClick={() => localStorage.setItem('hero', hero.id)}>
        <img src={`https://api.opendota.com${hero.img}`} alt="hero icon" />
        <div>{hero.localized_name}</div>
      </li>
    </Link>
    );
  });
  
  //JSX for empty result
  const emptyResult = <li className={styles.no_result}>No results</li>;


  return (
    <section className={styles.search}>
      <div className ={styles.search_wrap}>
      <input
        placeholder="Hero name"
        type="text"
        value={props.filter}
        onChange={event => props.getUserInput(event.target.value)}
      />
      {props.filter !== ''? <MdCancel className = {styles.cancelButton} onClick={()=> props.clearFilter()} />:null}
      </div>
      {
        <ul className={styles.hero_search_result}>
          {filterHeroes.length > 0 ? heroesJSX : emptyResult}
        </ul>
     }
    </section>
  );
};

function mapStateToProps(state) {
  return {
    heroesList: state.heroesList,
    filter: state.filter,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserInput,
      clearFilter
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
