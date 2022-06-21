import FirstComponenet from './components/FirstComponenet'
import Backdrop from './components/Backdrop';
import {useState} from 'react';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const modalCloseHandler = () =>{
    setModalOpen(false);
  }

  const openModalHandler = () => {
    setModalOpen(true);
  }

  return (
    <div>
      <h1>He Its my application</h1>
      {modalOpen?<FirstComponenet owner="Azhar" reason="For demo" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop />:null}
      <button onClick={openModalHandler}>Open Modal</button>
      
    </div>
  );
}

export default App;
