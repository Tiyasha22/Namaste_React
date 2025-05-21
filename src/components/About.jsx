import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
        <h2>This is namaste react series</h2>
        <UserClass name={"Tiyasha class"} location={"Delhi"} />
      </div>
    );
  }
}
export default AboutClass;
