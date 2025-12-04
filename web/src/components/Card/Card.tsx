import React, { type ReactNode } from "react";
import { Card as RadixCard } from "@radix-ui/themes";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
  return (
    <RadixCard>
      {children}
    </RadixCard>
  );
};

export default Card;
