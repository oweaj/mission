import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

// 전역상태관리 사용하기

function App() {
  return (
    <div className="w-[350px] h-screen fixed left-1/2 -translate-x-1/2 text-lg bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
