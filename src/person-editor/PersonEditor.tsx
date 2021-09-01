/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactElement, useEffect, useRef } from "react";

import { LabeledInput, Loading } from "../components"
import { initialPerson } from "../utils"
import { usePerson } from "../components/usePerson";

export function PersonEditor(): ReactElement {
  const [person, setPerson] = usePerson(initialPerson);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      input.current?.focus();
    }, 1000);
  });

  if (!person) {
    <Loading />
  }

  return (
    <form
      className="person-editor"
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Submitting\n${JSON.stringify(person, null, 2)}`)
      }}
    >
      <h2>Person Editor</h2>
      <LabeledInput
        ref={input}
        label="Firstname:"
        value={person?.firstname}
        onChange={(e) => {
          setPerson((person) => ({ ...person!, firstname: e.target.value }))

          if (e.target.value === "Ford") {
            setPerson((person) => ({
              ...person!,
              surname: "Prefect",
              addres: "Outer space",
              email: "",
              phone: "",
            }))
          }
        }}
      />
      <LabeledInput
        label="Surname:"
        value={person?.surname}
        onChange={(e) => {
          setPerson((person) => ({ ...person!, surname: e.target.value }));
        }}
      />
      <LabeledInput
        label="Email:"
        value={person?.email}
        onChange={(e) => {
          setPerson((person) => ({ ...person!, email: e.target.value }));
        }}
      />
      <LabeledInput
        label="Address:"
        value={person?.address}
        onChange={(e) => {
          setPerson((person) => ({ ...person!, address: e.target.value }));
        }}
      />
      <LabeledInput
        label="Phone:"
        value={person?.phone}
        onChange={(e) => {
          setPerson((person) => ({ ...person!, phone: e.target.value }));
        }}
      />
      <hr />
      <div className="btn-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <hr />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </form>
  )
}
