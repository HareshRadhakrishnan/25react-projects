import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => HandleStateValue());
  function HandleKeyValueChanges() {
    localStorage.setItem(key, JSON.stringify(value));
  }
  useEffect(() => HandleKeyValueChanges(), [key, value]);

  function HandleStateValue() {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }
    return currentValue;
  }
  return [value, setValue];
}
