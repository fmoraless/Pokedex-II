import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebounsedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounsedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
