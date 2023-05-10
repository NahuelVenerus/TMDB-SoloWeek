import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { onChange: onChange, value: value };
}
