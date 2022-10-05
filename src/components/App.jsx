import { Profile } from "./Profile/Profile.jsx";
import user from '../data/user.json';
import { Statistics } from "./Statistics/Statistics.jsx";
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList.jsx'
import { TransactionHistory } from "./Transactions/Transactions.jsx";

const title = "Upload stats"

export const App = () => {
  return (
    <div  className="app_conatiner">
      {Profile(user)}
      {Statistics(title, data)}
      {FriendList}
      {TransactionHistory()}
    </div>
  );
};
