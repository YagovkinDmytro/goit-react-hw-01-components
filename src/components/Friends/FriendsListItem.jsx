import friendsStyle from './friends.module.css';

export const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={friendsStyle.item}>
      <span
        className={`${friendsStyle.status} ${
          friendsStyle[`${isOnline ? 'online' : 'offline'}`]
        }`}
      ></span>
      <img
        className={friendsStyle.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendsStyle.name}>{name}</p>
    </li>
  );
};
