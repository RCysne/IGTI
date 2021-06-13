import { render } from '@testing-library/react';
import React from 'react';
import Header from '/home/cysne/React/igti-pa/src/Components/header/header';
import Section from '/home/cysne/React/igti-pa/src/Components/section/section';
import Form from '/home/cysne/React/igti-pa/src/Components/form/form';
import './style.css';

const App = () => {
 render(); {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Form/>
    </div>
    );

}
}
export default App;
