import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  label: string;
  placeholder: string;
  value: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder,
  value,
  onClick,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <TextField.Root
        placeholder={placeholder}
        aria-label={label}
        variant="soft"
        color="iris"
        radius="medium"
        onChange={onChange}
        value={value}
      ></TextField.Root>

      <Button style={{ cursor: "pointer" }} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

export default SearchInput;
