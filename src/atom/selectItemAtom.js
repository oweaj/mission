import { atom, selector } from 'recoil';

// 선택한 상품 리스트
export const selectItemAtom = atom({
  key: 'selectItemAtom',
  default: [],
});

// 총 상품 개수 카운팅
export const totalCountSelector = selector({
  key: 'totalCountSelector',
  get: ({ get }) => {
    const selectItem = get(selectItemAtom);
    return selectItem.reduce((acc, item) => acc + item.count, 0);
  },
});

// 총 상품 금액 합산
export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const selectItem = get(selectItemAtom);
    return selectItem.reduce((acc, item) => acc + item.price, 0);
  },
});
