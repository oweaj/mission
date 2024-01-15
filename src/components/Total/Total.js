import { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { selectItemAtom, totalCountSelector, totalPriceSelector } from '../../atom/selectItemAtom';

import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Total = () => {
  const [active, setActive] = useState(false);
  const totalCount = useRecoilValue(totalCountSelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const orderItem = useRecoilValue(selectItemAtom);
  const selectItemReset = useResetRecoilState(selectItemAtom);
  const navigate = useNavigate();

  // 선택한 상품 주문하기
  const handleOrder = async () => {
    setActive(true);
    try {
      const url = 'http://localhost:3001/orders';
      await axios.post(url, orderItem);
      navigate('/complete');
    } catch (error) {
      navigate('/error');
    }
    selectItemReset();
  };

  return (
    <div className="totalOrder">
      <div className="flex flex-col items-end gap-[10px]">
        <p>총 수량 : {totalCount}개</p>
        <p>총 가격 : {totalPrice.toLocaleString()}원</p>
      </div>
      <Button count={totalCount} active={active} onClick={handleOrder} />
    </div>
  );
};

export default Total;
