import {useEffect} from 'react';
import {
  nearerCategories,
  savedCategories,
  getNearerCategories,
  getUserCategories,
} from '../functions';
import {useAtom} from 'jotai';

export const StateSetters = () => {
  const [userCategories, setUserCategories] = useAtom(savedCategories);
  const [categories, setCategories] = useAtom(nearerCategories);
  useEffect(() => {
    if (!userCategories) {
      getUserCategories(setUserCategories);
    }
  }, [userCategories, setUserCategories]);
  useEffect(() => {
    if (!categories) {
      getNearerCategories(setCategories);
    }
  }, [categories, setCategories]);
  return null;
};
