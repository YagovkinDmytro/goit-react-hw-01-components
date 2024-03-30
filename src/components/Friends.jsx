const FriendList = ({ friends }) => {
  const friendsListItem = friends =>
    friends.map(({ id, isOnline, avatar, name }) => (
      <li className="item" key={id}>
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    ));

  return <ul className="friend-list">{friendsListItem(friends)}</ul>;
};

export default FriendList;
