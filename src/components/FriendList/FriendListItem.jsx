import React from "react";
import css from './FriendsStyles.module.css';

export const FriendsListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? `${css.online}` : `${css.offline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
        
    )
}