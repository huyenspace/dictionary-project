import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="row">
        <div className="col-7">
          <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>
                  » {definition.definition}
                  <br />
                  <em>⁍ {definition.example}</em>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
