import React, { Component } from "react";
import { urlApi } from "../../store/index";
import { Link } from "react-router-dom";
import styles from "./heroes_list.module.css";
import Search from "../Search";
export default class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeroesList = () => {
    return this.props.heroesList.map(hero => {
      return (
        <Link key={hero.id} to={`/hero/${hero.id}`}>
          <li onClick={() => this.props.getActiveHero(hero)}>
            <img src={`${urlApi}${hero.img}`} alt="hero icon" />
            <div>{hero.localized_name}</div>
          </li>
        </Link>
      );
    });
  };
  render() {
    return (
      <div className={styles.heroes_list}>
        <Search />
        <div>
        
        <h1>Hero List</h1>
        </div>
        <ul>{this.renderHeroesList()}</ul>
      </div>
    );
  }
}
