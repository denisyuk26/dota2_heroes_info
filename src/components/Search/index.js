// Core
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserInput, clearFilter } from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Instruments
import styles from "./styles.module.css";
import "../animations.css";
import { MdCancel, MdSearch } from "react-icons/md";
import { CSSTransition } from "react-transition-group";

const Search = props => {
  const [appear, setAppear] = useState(true);
  const regexp = new RegExp(props.filter, "gi");
  const filterHeroes = props.heroesList.filter(hero =>
    regexp.test(hero.localized_name)
  );

  
  useEffect(() => {
    setAppear(false);
  });
//JSX for result
  const heroesJSX = filterHeroes.map(hero => {
    const name = hero.localized_name.replace(
      regexp,
      `<span class=${styles.highlight}>${props.filter}</span>`
    );

    return (
      <Link key={hero.id} to={`/hero/${hero.id}`}>
        <li onClick={() => localStorage.setItem("hero", hero.id)}>
          <img src={`https://api.opendota.com${hero.img}`} alt="hero icon" />
          <div>
            <span
              dangerouslySetInnerHTML={{
                __html: `${name}`
              }}
            />
          </div>
        </li>
      </Link>
    );
  });

  //JSX for empty result
  const emptyResult = <li className={styles.no_result}>No results</li>;

  return (
    <section className={styles.search}>
      <div className={styles.search_wrap}>
        <input
          className={styles.hide}
          autoFocus
          placeholder="Hero name"
          type="text"
          value={props.filter}
          onChange={event => props.getUserInput(event.target.value)}
        />
        {props.filter !== "" ? (
          <MdCancel
            className={styles.cancelButton}
            onClick={() => props.clearFilter()}
          />
        ) : (
          <MdSearch className={styles.cancelButton} />
        )}
      </div>
      <CSSTransition in={appear} appear={true} timeout={1200} classNames="fade">
        {<ul>{filterHeroes.length > 0 ? heroesJSX : emptyResult}</ul>}
      </CSSTransition>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    heroesList: state.heroesList,
    filter: state.filter
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
