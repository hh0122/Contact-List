import React, { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
// import SelectedContact from "./components/SelectedContact.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}