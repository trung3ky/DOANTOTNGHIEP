import React from "react";
import "./style.scss";

export type TitleProps = {
  title: string;
};
export function TitleTopic(props: TitleProps) {
  const { title } = props;
  return (
    <div className="title-page">
      <h3>{title}</h3>
    </div>
  );
}
