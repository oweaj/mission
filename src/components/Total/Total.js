import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { totalCountSelector, totalPriceSelector } from '../../atom/selectItemAtom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Total = () => {
  const [active, setActive] = useState(false);
  const totalCount = useRecoilValue(totalCountSelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const navigate = useNavigate();

  const handleOrderButton = async () => {
    setActive(true);
    if (totalCount) {
      navigate('/complete');
    } else {
      navigate('/error');
    }
  };

  return (
    <div className="totalOrder">
      <div className="flex flex-col items-end gap-[10px]">
        <p>총 수량 : {totalCount}개</p>
        <p>총 가격 : {totalPrice.toLocaleString()}원</p>
      </div>
      <Button count={totalCount} active={active} onClick={handleOrderButton} />
    </div>
  );
};

export default Total;
