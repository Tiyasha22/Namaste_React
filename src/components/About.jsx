import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react series</h2>

//       <UserClass name={"Tiyasha class"} location={"Delhi"} />
//     </div>
//   );
// };
// export default About;
class AboutClass extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn:
          <UserContext.Consumer>
            {(data) => <h1 className="text-xl">{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react series</h2>
        <UserClass name={"Tiyasha class"} location={"Delhi"} />
      </div>
    );
  }
}
export default AboutClass;
