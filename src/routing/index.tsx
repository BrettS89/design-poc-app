import { Route, Routes } from 'react-router-dom';
import System from '../modules/system';
import DesignSystems from '../modules/systems';

export default () => {
  return (
    <Routes>
      <Route path='/system/:id' element={<System />} />
      <Route path='/' element={<DesignSystems />} />
    </Routes>
  );
};
