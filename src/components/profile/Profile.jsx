//імпорт CSS-модуля
import css from "./Profile.module.css";


const Profile = ({ name, tag, location, image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats: { followers, views, likes } } ) => {
    return (
        <div className={css.card}>
            <div className={css.userCardContent}>
                <img className={css.userImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{" " }{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>
            <ul className={css.userStatsList}>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsTitle}>Followers</span>
                    <span className={css.userStatsAmount}>{followers}</span>
                </li>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsTitle}>Views</span>
                    <span className={css.userStatsAmount}>{views}</span>
                </li>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsTitle}>Likes</span>
                    <span className={css.userStatsAmount}>{likes}</span>
                </li>
            </ul>
        </div>        

    );
};
export default Profile;