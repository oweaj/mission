import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageTime = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const pageTime = setTimeout(() => {
      navigate('/order');
    }, 3000);

    return () => clearTimeout(pageTime);
  }, []);
};

export default usePageTime;
