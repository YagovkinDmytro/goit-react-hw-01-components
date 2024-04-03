import { FriendsListItem } from './FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
