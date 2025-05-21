import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy ",
        location: "dummy location",
      },
      //   formy: 0,
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + " didMount");
    const data = await fetch("https://api.github.com/users/tiyasha22");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }
  render() {
    // console.log(this.props.name + "  render");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button> */}
        {/* <h1>formy:{formy}</h1> */}
        <h2>Name:{name} </h2>
        <h3>location:{location}</h3>
      </div>
    );
  }
}
export default UserClass;
