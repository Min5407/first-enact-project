import Button from "@enact/sandstone/Button";
import Bt from "@enact/ui/Button";

import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/sandstone/Panels";
import { useState } from "react";
import css from "../App/App.module.less";
import test from "../views/App.module.less";
import Btn from "../components/Button";
import {
  forKey,
  forward,
  handle,
  preventDefault,
  adaptEvent,
} from "@enact/core/handle";

const PanelTest = () => {
  const [show, setShow] = useState(false);

  const logEnter = handle(
    forward("onChange"), // forwards the event to the function passed in the onKeyDown prop
    forKey("enter", { test: 123 }), // if the event.keyCode maps to the enter key, allows event processing to continue
    preventDefault, // calls event.preventDefault() to prevent the `keypress` event
    (ev, props) => {
      // custom event handler -- in this case, logging some text
      // since it doesn't return `true`, no further input functions would be called after this one
      // console.log(ev);
      // console.log(props);
      console.log("The Enter key was pressed down");
      setShow((prev) => !prev);
    }
  ).finally(() => {
    console.log(
      "This will log at the end no matter what happens within the handler above"
    );
  });

  const handleClick = handle(forKey("enter"), preventDefault, () => {
    console.log("The Enter key show");
    setShow((prev) => !prev);
  });
  //   const handleInputChange = handle(forKey("onChange"), preventDefault, () => {
  //     console.log("Tyes");
  //     setShow((prev) => !prev);
  //   });

  // calls the onChange callback with an event payload containing a type and value member
  const handleInputChange = adaptEvent((ev, props) => {
    console.log(ev);
    console.log(props);
    // return (
    //   {
    //     type: "onChange",
    //     value: ev.target.value,
    //   },
    //   () => {
    //     console.log(123);
    //   }
    // );
  }, forward("onChange"));

  const testClick = () => {
    setShow((prev) => !prev);
  };

  const forwardAndLog = handle(forward("onClick"), (ev) =>
    console.log("event forwarded to onClick from props", ev)
  );

  return (
    <Panel>
      <Header title="Hello asdf!" />
      <Bt className={test.button} onClick={logEnter}>
        asdf meaa
      </Bt>
      <Button className={test.button} onClick={logEnter}>
        asdf me
      </Button>
      <Button className={test.button} onClick={forwardAndLog}>
        ffff
      </Button>
      <button className={test.button}>asdf me 2</button>
      {show && <button className={test.button}>show</button>}
      <button className={test.button} onClick={testClick}>
        dontShow
      </button>
      <input
        type="text"
        placeholder="whats up"
        onChange={handleInputChange}
      ></input>
    </Panel>
  );
};

const MainPanel = kind({
  name: "MainPanel",

  render: (props) => {
    // const [show, setShow] = useState(false);
    const handleClick = () => {
      console.log(123);
    };
    const logEnter = handle(
      forward("onKeyDown"), // forwards the event to the function passed in the onKeyDown prop
      forKey("enter", { test: 123 }), // if the event.keyCode maps to the enter key, allows event processing to continue
      preventDefault, // calls event.preventDefault() to prevent the `keypress` event
      (ev, props) => {
        // custom event handler -- in this case, logging some text
        // since it doesn't return `true`, no further input functions would be called after this one
        // console.log(ev);
        // console.log(props);
        console.log("The Enter key was pressed down");
      }
    ).finally(() => {
      console.log(
        "This will log at the end no matter what happens within the handler above"
      );
    });
    return (
      <>
        <Panel {...props}>
          <Header title="Hello world!" />
          <Button className={test.button} onClick={logEnter}>
            Clicdk me
          </Button>
          <button className={test.button}>click me 2</button>
          <Btn />
        </Panel>
      </>
    );
  },
});

export default PanelTest;
