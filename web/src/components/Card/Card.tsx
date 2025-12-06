import React, { type ReactNode } from "react";
import { Card as RadixCard } from "@radix-ui/themes";

interface CardProps {
  children: ReactNode;
  style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({style, children, ...props}) => {
  return (
    <RadixCard style={style} {...props}>
      {children}
    </RadixCard>
  );
};

export default Card;
