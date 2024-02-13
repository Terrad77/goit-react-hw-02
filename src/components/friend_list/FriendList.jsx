import css from "./FriendList.module.css";
import FriendListItem from "../friend_list_item/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendList}>
        
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
