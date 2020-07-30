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
import { BudgetEntryProvider } from './BudgetEntryContext';
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

function App() {

  // const [ entries, setEntries ] = useState([]);

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthConsumer>
						{({ isSignedIn, user, providerId }) => {

							if(isSignedIn) {
								return (
                  <Provider store={store}>
                    <Router>
                      <Index firebase={firebase} user={user} path="/" />
                      <BudgetEntry path="entries/:entryId" />
                    </Router>
                  </Provider>
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
