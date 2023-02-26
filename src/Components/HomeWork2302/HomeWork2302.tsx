import styles from "./HomeWork2302.module.css";
import { FC } from "react";
import HomeWorkItem from "../HomeWorkItem/HomeWorkItem";

interface IHomeWork2302Props {
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

const HomeWork2302:FC<IHomeWork2302Props> = ({ users }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {users &&
          users.map((user) => (
            <div>
              <HomeWorkItem
                key={user.id}
                user={user}
                users={users}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeWork2302;
