// Core
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActiveHero } from "../../store/actions";
import { bindActionCreators } from "redux";

// Instruments
import styles from "./styles.module.css";
import { connect } from "react-redux";

const Search = props => {
  const [filter, setFilter] = useState("");
  const regexp = new RegExp(filter, "gi");
  const filterHeroes = props.heroesList.filter(hero =>
    regexp.test(hero.localized_name)
  );
  console.log(filterHeroes)
 
    const heroesJSX =  filterHeroes.map(hero => {
      
      const name = hero.localized_name.replace(
        regexp,
        `<span class=${styles.highlight}>${filter}</span>`
      ) ;
  
        return (
        
          <li key={hero.id} onClick={() => localStorage.setItem("hero", hero.id)}>
            <Link to={`/hero/${hero.id}`}>
              <span
                className="country"
                dangerouslySetInnerHTML={{
                  __html: `${name}`
                }}
              />
              <img
                src={`https://api.opendota.com${hero.icon}`}
                className={styles.hero_icon}
                alt="icon"
              />
            </Link>
          </li>
        );
   
  
      
    });
    const emptyResult =  <li className={styles.no_result}>No results</li>
 

  return (
    <section className={styles.search}>
      <input
        placeholder="Hero name"
        type="text"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      { filter !== '' ? (
        <ul className={styles.hero_search_result}> {filterHeroes.length > 0 ? heroesJSX : emptyResult}</ul>
      ) : null}
    </section>
  );
};

function mapStateToProps(state) {
  return {
    heroesList: state.heroesList,
    activeHero: state.activeHero
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getActiveHero
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
