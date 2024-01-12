import axios from 'axios';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';

const Order = () => {
  const [itemList, setItemList] = useState([]);
  const [count, setCount] = useState([]); // 인덱스로 시도해보기

  useEffect(() => {
    const data = async () => {
      try {
        const url = 'http://localhost:3001/items';
        const response = await axios.get(url);
        setItemList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  const handleCounting = (id, type) => {};

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="px-6 py-4">
          {itemList.length ? (
            <ul className="flex flex-col gap-4 p-2">
              {itemList.map((item, index) => (
                <li key={item.id} className="w-full h-20 flex gap-4 border rounded-[10px] p-[9px]">
                  <div className="w-[62px] h-[62px] bg-home-color bg-opacity-40"></div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.event ? (
                        <span className="px-[10px] h-6 flex items-center rounded-[10px] text-[13px] text-white bg-order-color">
                          <span>이벤트</span>
                        </span>
                      ) : null}
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <button type="button" onClick={handleCounting(index, 'plus')}>
                          -
                        </button>
                        <span>{0}</span>
                        <button type="button" onClick={handleCounting(index, 'minus')}>
                          +
                        </button>
                      </div>
                      <span className="">{item.price.toLocaleString()}원</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="centerStyle">
              <p className="text-center">
                목록을
                <br /> 불러오고 있습니다.
              </p>
            </div>
          )}
        </div>
        <div className="totalOrder">
          <div className="flex flex-col items-end gap-[10px]">
            <p>총 수량 : 0개</p>
            <p>총 가격 : 0원</p>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Order;
