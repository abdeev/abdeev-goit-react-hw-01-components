import PropTypes from 'prop-types';
import { Profile } from "./Profile/Profile.jsx";
import user from '../data/user.json';
import { Statistics } from "./Statistics/Statistics.jsx";
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList.jsx'
import { TransactionHistory } from "./Transactions/Transactions.jsx";
import transactions from '../data/transactions.json';

const title = "Upload stats"

export const App = () => {
  return (
    <div  className="app_conatiner">
      {Profile(user)}
      {Statistics(title, data)}
      {FriendList}
      {TransactionHistory(transactions)}
    </div>
  );
};

transactions.propTypes = {
id: PropTypes.string,
type: PropTypes.string,
amount: PropTypes.number,
currency: PropTypes.string
}
user.propTypes = {
username: PropTypes.string,
tag: PropTypes.string,
location: PropTypes.string,
  avatar: PropTypes.string,
stats: PropTypes.shape({
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
})
}