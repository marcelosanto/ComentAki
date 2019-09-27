import React, { useState, useEffect } from 'react'
import './App.css'
import NewComment from './NewComment'
import Comments from './Comments'

// firebase
//   .auth()
//   .createUserWithEmailAndPassword('rocha.mer21@gmail.com', 'abc123')
//   .then( user => {
//       user.displayName = 'Marcelo Santos'
//       firebase.auth().updateCurrentUser(user)
//   })
// firebase.auth().onAuthStateChanged(user => {
//   if(user){
//     console.log(user.displayName)
//     user.updateProfile({ displayName: 'Marcello Santos' })
//   }
// })

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  );
}

export default App