import React from 'react';
import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem.jsx';
import friends from '../../data/friends.json';
import css from './FriendsStyles.module.css';

export const FriendList =
    <ul className={css.friend_list}>
        {friends.map(friendItem => (
            FriendsListItem(friendItem)
        ))
        }
    </ul>;

