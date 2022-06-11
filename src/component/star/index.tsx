import classNames from "classnames";
import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export function Star(props: { star: number; isNumberStar?: boolean }) {
  const { star, isNumberStar = true } = props;

  function handleNumberStar(numberStar: number) {
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((val) => {
      if (val <= Math.round(numberStar)) {
        return <StarFilled style={{ color: "yellow" }} />;
      } else {
        return <StarOutlined style={{ color: "#d2d2d2" }} />;
      }
    });

    return newArr;
  }

  return (
    <div className="number-star">
      {isNumberStar && <span>{star}</span>}
      <div className={classNames({ "star-sm": !isNumberStar })}>
        {handleNumberStar(star)}
      </div>
    </div>
  );
}
