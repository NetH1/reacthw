import styles from "./TennisCardList.module.css";
import { FC } from "react";
import TennisCardItem from "../TennisCardItem/TennisCardItem";

interface ITennisCardListProps {
  users: {
    id: number;
    name: string;
    profession: string;
    website: string;
    abouttext: string;
    interesttext: string;
    image: string;
  }[];
}

const TennisCardList:FC<ITennisCardListProps> = ({ users }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {users &&
          users.map((user) => (
              <TennisCardItem
                key={user.id}
                user={user}
                users={users}
              />
          ))}
      </div>
    </>
  );
};

export default TennisCardList;
