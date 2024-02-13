//імпорт CSS-модуля
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <div className={css.friendCard}>
          <img className={css.avatarImg} src={avatar} alt="Users avatar" width="48" />
      <p className={css.name}>{name}</p>
          <p className={`${ css.status } ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
 