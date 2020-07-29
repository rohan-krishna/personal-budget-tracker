import React, { useState, useEffect } from 'react';
import './App.css';
import { firebaseConfig } from "./firebase";
import firebase from "firebase";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import Index from "./components/Index";
import { Router } from "@reach/router"
import BudgetEntry from './components/BudgetEntry';
import moment from 'moment';

function App() {

  const [ entries, setEntries ] = useState([]);

  useEffect( () => {
    const entriesArray = [];

    for (let i = 0; i <= 10; i++) {
      const entry = { "id" : i+1, "entry_date" : moment().add(1, "day").format(), "total_income" : 30000, "total_expenses" : 25000 };
      entriesArray.push(entry);
    }

    setEntries(entriesArray);

  }, []);

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthConsumer>
						{({ isSignedIn, user, providerId }) => {

							if(isSignedIn) {
								return (
                  <Router>
                    <Index firebase={firebase} user={user} path="/" entries={entries} /> 
                    <BudgetEntry path="entries/:entryId" entries={entries} />
                  </Router>
								);
							} else {
								return (
									<button
										onClick={() => {
											const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
											firebase.auth().signInWithPopup(googleAuthProvider);
										}}
										className="btn btn-sm btn-success"
									>
										Sign In with Google
                  </button>
                );
							}
						}}
					</FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

export default App;
