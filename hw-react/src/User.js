import "./App.css";
function User(props) {
  return (
    <div className="tweet">
      <b>User name: {props.name}</b>
      <br />
      <img width="100px" height="100px" src={props.imageSrc} />
      <br />
      <b>Tweets:</b>

      <ul>
        {props.tweets.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default User;
