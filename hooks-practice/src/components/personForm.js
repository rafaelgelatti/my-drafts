import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePerson } from '../hooks/usePerson';

export const PersonForm = () => {
  const [person, setPerson] = usePerson();
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.push('/transition')}>
        Transition
      </button>
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setPerson((person) => ({ ...person, firstname: e.target.value }))}
          value={person.firstname}
        >
        </input>
      </div>
      <div>
      <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setPerson((person) => ({ ...person, lastname: e.target.value }))}
          value={person.lastname}
        >
        </input>
      </div>
      <div>
        <p>{JSON.stringify(person)}</p>
      </div>
    </>
  );
}
