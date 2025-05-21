const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>location:{props.location}</h3>
    </div>
  );
};
export default User;
