import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { useIsMounted } from './useIsMounted';
import { useWillUnmount } from './useWillUnmount';

const initialPerson = {
  id: 4,
  firstname: '',
  lastname: '',
};

function savePerson(person) {
  console.log('Saving', person);
  localStorage.setItem('person', JSON.stringify(person));
}

export function usePerson() {
  const [person, setPerson] = useState(initialPerson);
  const isMounted = useIsMounted();

  useEffect(() => {
    const getPerson = () => {
      const person = JSON.parse(localStorage.getItem('person'));
      if (isMounted.current) {
        setPerson(person || initialPerson);
      }
    };

    getPerson();
  }, [isMounted]);

  // const [, setNow] = useState(new Date());
  // useEffect(() => {
  //   const handle = setInterval(() => setNow(new Date()), 500);
  //   return () => clearInterval(handle);
  // });

  const saveFn = useCallback(() => {
    savePerson(person);
  }, [person]);

  useDebounce(saveFn, 10000);
  useWillUnmount(saveFn);

  return [person, setPerson];
}
