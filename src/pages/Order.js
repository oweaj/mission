import axios from 'axios';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [itemList, setItemList] = useState([]);
  const [clickItem, setClickItem] = useState([]);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

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

  // 상품 수량 및 금액 체크
  const handleCountPrice = (item, type) => {
    setClickItem((prev) => {
      const check = prev.findIndex((prev) => prev.id === item.id);

      if (check !== -1) {
        const update = [...prev];
        const itemCount = update[check].count;

        if (type === 'plus' && itemCount < 999) {
          update[check] = { ...update[check], count: itemCount + 1 };
        }
        if (type === 'minus' && itemCount > 0) {
          update[check] = { ...update[check], count: itemCount - 1 };
        }
        update[check].price = update[check].count * item.price;

        return update;
      }

      return [...prev, { id: item.id, count: 1, price: item.price }];
    });
  };

  // 총 수량 및 금액 합산
  const totalCount = clickItem.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = clickItem.reduce((acc, item) => acc + item.price, 0);

  const handleOrderButton = async () => {
    setActive(true);
    if (totalCount) {
      navigate('/complete');
    } else {
      navigate('/error');
    }
  };

  return (
    <>
      <Header />
      <div className="h-[calc(100%-227px)] p-4 overflow-y-auto">
        {itemList.length ? (
          <ul className="flex flex-col gap-4 p-2">
            {itemList.map((item) => {
              const selectItem = clickItem.find((select) => select.id === item.id);
              const selectCount = selectItem ? selectItem.count : 0;
              return (
                <li
                  key={item.id}
                  className={`w-full h-20 flex gap-4 border border-black border-opacity-30 rounded-[10px] p-[9px] ${
                    selectCount >= 1 ? 'bg-order-color bg-opacity-10' : 'bg-white'
                  }`}
                >
                  <div className="w-[62px] h-[62px] bg-home-color bg-opacity-40" />
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
                      <div className="flex gap-2">
                        <button type="button" onClick={() => handleCountPrice(item, 'minus')}>
                          -
                        </button>
                        <span>{selectCount}</span>
                        <button type="button" onClick={() => handleCountPrice(item, 'plus')}>
                          +
                        </button>
                      </div>
                      <span>{item.price.toLocaleString()}원</span>
                    </div>
                  </div>
                </li>
              );
            })}
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
          <p>총 수량 : {totalCount}개</p>
          <p>총 가격 : {totalPrice.toLocaleString()}원</p>
        </div>
        <Button count={totalCount} active={active} onClick={handleOrderButton} />
      </div>
    </>
  );
};

export default Order;
