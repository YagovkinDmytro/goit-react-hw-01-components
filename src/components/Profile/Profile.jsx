const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item followers">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item views">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-item likes">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
