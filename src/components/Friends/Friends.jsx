import friendsStyle from './friends.module.css';

const FriendList = ({ friends }) => {
  const friendsListItem = friends =>
    friends.map(({ id, isOnline, avatar, name }) => (
      <li className={friendsStyle.item} key={id}>
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
    ));

  return (
    <ul className={friendsStyle['friend-list']}>{friendsListItem(friends)}</ul>
  );
};

export default FriendList;
