import React, { useState, useEffect } from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  );
}

export default App