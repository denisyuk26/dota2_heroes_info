import React, { Component } from "react";
import styles from "./hero_details.module.css";
import { urlApi } from "../../store/index";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../animations.css";

export default class PageWithHeroDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appear: true
    };
  }
  componentDidMount() {
    this.setState({ appear: !this.state.appear });
  }

  getActiveHeroesFromHeroesList = () => {
    const localStorageHeroId = localStorage.getItem("hero");
    return this.props.heroesList.filter(
      hero => hero.id === +localStorageHeroId
    );
  };
  renderActiveHeroDetail = () => {
    return this.getActiveHeroesFromHeroesList().map(detail => (
      <li key={detail.id}>
        <CSSTransition
          in={this.state.appear}
          appear={false}
          timeout={1200}
          classNames="fade-ava"
        >
          <img src={`${urlApi}${detail.img}`} />
        </CSSTransition>
        <div className={styles.hero_detail_text_container}>
          <p> Name: {detail.localized_name}</p>
          <p> Roles: {detail.roles.map(role => role).join(",   ")}</p>
          <p>
            {" "}
            Primary attribute:
            <span className={styles[detail.primary_attr]} />
          </p>
          <p> Speed: {detail.move_speed}</p>
          <p>
            {" "}
            Damage: {`${detail.base_attack_min}-${detail.base_attack_max}`}
          </p>
          <p> Range: {detail.attack_range}</p>
          <p>
            {" "}
            Attributes:
            <span className={styles.agi}>
              {" "}
              {`${detail.base_agi}+${detail.agi_gain} `}
            </span>
            <span className={styles.str}>
              {" "}
              {`${detail.base_str}+${detail.str_gain} `}
            </span>
            <span className={styles.int}>
              {" "}
              {`${detail.base_int}+${detail.int_gain} `}
            </span>
          </p>
        </div>
      </li>
    ));
  };
  render() {
    return (
      <div className={styles.hero_details_wrap}>
        <div className={styles.nav_panel}>
          <Link to="/">Home</Link>
          <h1>Hero details</h1>
        </div>
        <ul>{this.renderActiveHeroDetail()}</ul>
      </div>
    );
  }
}
