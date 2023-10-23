import React, { useState, useEffect } from 'react';
import Tasklist from './lists/TaskList';
import Settings from './settings/Settings';


/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  const [dark, setDark] = useState(false);

  /**
   * Documetación del useEffect
   * Se crea una variable de estado donde se almacena el valor de la configuración en localStorage
   */
  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'));
    setDark(config.theme);
  }, []);

  /**
   * 
   * @returns Funcion para intercambiar la variable de estado light <->
   */
  const toggleDark = () => setDark(!dark);

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <Tasklist />
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
      <Settings toggleDark={toggleDark} />
    </div >
  );
};

export default App;
