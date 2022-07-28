import React from "react";
import classnames from "classnames";

type Props = {
  title: string;
  size: "base" | "large";
  price: string;
};

const Pricing = ({ title, size, price }: Props) => {
  return (
    <div
      className={classnames(
        "flex flex-col w-64 py-2 bg-white rounded-lg shadow-lg justify-start items-center",
        "my-auto",
        {
          "h-80": size === "base",
          "h-96": size === "large",
        }
      )}
    >
      <h4 className="font-medium text-sm">{title}</h4>
      <h3 className="font-bold text-xl my-2">{price}</h3>
    </div>
  );
};

export default Pricing;
