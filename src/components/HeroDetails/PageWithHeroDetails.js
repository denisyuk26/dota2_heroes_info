import React, { Component } from "react";
import styles from './hero_details.module.css'
import {urlApi} from '../../store/index'
import { Link } from "react-router-dom";

export default class PageWithHeroDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getActiveHeroesFromHeroesList = () => {
    const localStorageHeroId = localStorage.getItem("hero");
    return this.props.heroesList.filter(hero => hero.id === +localStorageHeroId);
  };
  renderActiveHeroDetail = () => {
    return this.getActiveHeroesFromHeroesList().map(detail => (
      <li key={detail.id}>
      <img src={`${urlApi}${detail.img}`}></img>
      <div className={styles.hero_detail_text_container}>
        <p> Name: {detail.localized_name}</p>
        <p> Roles: {detail.roles.map(role=>role).join(',   ')}</p>
        <p > Primary attribute:<span className={styles[detail.primary_attr]}  ></span></p>
        <p> Speed: {detail.move_speed}</p>
        <p> Damage: {`${detail.base_attack_min}-${detail.base_attack_max}`}</p>
        <p> Range: {detail.attack_range}</p>
        <p> Attributes: 
        <span className={styles.agi}> {`${detail.base_agi}+${detail.agi_gain} `}</span>
        <span className={styles.str}> {`${detail.base_str}+${detail.str_gain} `}</span>
        <span className={styles.int}> {`${detail.base_int}+${detail.int_gain} `}</span>    
        </p>
      </div>
      
      </li>
    ));
  };
  render() {
    return (
      <div className={styles.hero_details_wrap}>
      <div className={styles.nav_panel}>
      <Link to='/'>Home</Link>
      <h1>Hero details</h1>
      </div>
        <ul>{this.renderActiveHeroDetail()}</ul>
      </div>
    );
  }
}
