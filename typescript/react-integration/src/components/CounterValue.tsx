import React from "react";

interface ICounterValueProps {
  counter: number;
}

export default (props: ICounterValueProps) => <p>{props.counter}</p>;
