import "./App.css";
import User from "./User.js";

const users = [
  {
    name: "Max",
    imageSrc:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
    tweets: ["Be a game-changer. The world is already full of players"],
  },
  {
    name: "ماجد",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcqYO-YzWmxJ53jcq5cqQ0NcxzdsFL6rCfI7CsAE7CYCFT7V6aIWPfCuxmWVcWwiYtYk&usqp=CAU",
    tweets: [
      "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    ],
  },
  {
    name: "joudy",
    imageSrc:
      "https://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png",
    tweets: [
      "look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
      "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
    ],
  },
];

function App() {
  return (
    <div>
      {users.map((el) => (
        <User name={el.name} imageSrc={el.imageSrc} tweets={el.tweets} />
      ))}
    </div>
  );
}

export default App;
