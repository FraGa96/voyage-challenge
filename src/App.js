import React from 'react'
import './App.css'
import VoyageForm from './containers/VoyageForm'
import { FormProvider } from './contexts/FormContext/FormContext'

const App = () => {
  return (
    <div className="App">
      <FormProvider>
        <VoyageForm />
      </FormProvider>
    </div>
  );
}

export default App;
