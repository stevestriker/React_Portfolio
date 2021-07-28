import React from "react";
import { Link } from "react-router-dom";

function LinksItem(props) {
  return (
    <>
      <li className="links__item">
        <Link className="links__item__link" to={props.path}>
          <figure className="links__item__pic-wrap" data-category={props.label}>
            <img
              className="links__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="links__item__info">
            <h5 className="links__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default LinksItem;
