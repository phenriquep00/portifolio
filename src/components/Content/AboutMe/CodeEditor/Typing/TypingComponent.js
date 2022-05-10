import React, { useEffect } from "react";
import TypingEffectScript from "./TypingEffectScript";
import "./typing-component.css";

export function TypingComponent(props) {
  useEffect(() => TypingEffectScript(props));
  return (
    <>
      <div
        className={props.classString + " typing_effect_cursor"}
        id={props.typingContentElementId}
        style={props.styles}
      >
      </div>
    </>
  );
}

export function TypingComponentTitle(props) {
    useEffect(() => TypingEffectScript(props));
    return (
      <>
        <div
          className={props.classString + " typing_effect_cursor_title"}
          id={props.typingContentElementId}
          style={props.styles}
        >
        </div>
      </>
    );
  }