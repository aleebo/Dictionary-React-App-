import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech} </h3>
      {props.meaning.defintion.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.examples}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
