import React, {useState} from 'react';
import {useAtom} from 'jotai';
import CheckBox from 'react-native-check-box';
import {updateCategories, savedCategories} from '../functions';

export const CategoryCheckbox = ({category, isTrue = false}) => {
  const [categories, setCategories] = useAtom(savedCategories);
  const [checked, setChecked] = useState(
    isTrue ||
      (categories &&
        categories.some(cat => parseInt(cat.id) === parseInt(category.id))),
  );
  return (
    <CheckBox
      uncheckedCheckBoxColor="#b1b1b1"
      checkedCheckBoxColor="#cd3144"
      isChecked={checked}
      onClick={() => {
        setChecked(!checked);
        updateCategories(category, categories, setCategories);
      }}
    />
  );
};
