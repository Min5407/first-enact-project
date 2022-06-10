import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/sandstone/Panels";
import Style from "./Button.module.less";
import { forKey, handle } from "@enact/core/handle";

const logForEnterKey = handle(forKey("enter"), (ev) =>
  console.log("Enter key pressed down", ev)
);

const Btn = kind({
  name: "btn",

  render: (props) => (
    <>
      <button className={Style.btn} onClick={logForEnterKey}>
        click me 2333
      </button>
    </>
  ),
});

export default Btn;
