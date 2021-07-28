import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className='bb-card'>
      <div className='bb-card-inner'>
        <div className='bb-card-front'>
          <img className='bb-card-img' src={item.img} alt='' />
        </div>
        <div className='bb-card-back'>
          <h1 className='bb-card-h1'>{item.name}</h1>
          <ul>
            <li className='bb-card-li'>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
