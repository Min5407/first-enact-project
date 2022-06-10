import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Panels from "@enact/sandstone/Panels";

import MainPanel from "../views/MainPanel";

import "./attachErrorHandler";

import css from "./App.module.less";
import Button from "../components/Button.js";

const App = kind({
  name: "test",

  styles: {
    css,
    className: "app",
  },

  render: (props) => {
    console.log(props);
    return (
      <Panels {...props}>
        <MainPanel />
      </Panels>
    );
  },
});
// const App = () => {
//   return (
//     <div>
//       {"dsdf "}
//       <Button />
//       <MainPanel />
//     </div>
//   );
// };
// //   render: (props) => {
// //     console.log(props);
// //     return (
// //       <Panels {...props}>
// //         <MainPanel />
// //       </Panels>
// //     );
// //   },
// // });

export default ThemeDecorator(App);
