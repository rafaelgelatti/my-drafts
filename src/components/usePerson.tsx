import { useState, useEffect  } from "react";
import localforage from "localforage";

import type { Person } from '../types/person';

function savePerson(person: Person | null): void {
    console.log('Saving', person);
    localforage.setItem('person', person);
}

export function usePerson(initialPerson: Person) {
    const [person, setPerson] = useState<Person | null>(initialPerson);

    // useEffect(() => {
    //   const handle = setInterval(() => {
    //     setPerson({ ...person!, firstname: 'Rafael' });
    //   }, 5000);
  
    //   return () => clearInterval(handle);
    // }, [person]);
  
    useEffect(() => {
      const getPerson = async () => {
        const person = await localforage.getItem<Person>('person')
        setPerson(person ?? initialPerson);
      }
  
      getPerson();
    }, [initialPerson]);
    
    useEffect(() => savePerson(person), [person]);

    return [person, setPerson] as const;
}