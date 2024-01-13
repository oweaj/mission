const Button = ({ count, active, onClick }) => {
  return (
    <button
      type="submit"
      className={`w-full h-[48px] text-white ${count ? 'bg-black' : 'bg-order-button'}`}
      disabled={count ? false : true}
      onClick={onClick}
    >
      {active ? '로딩중...' : '주문하기'}
    </button>
  );
};

export default Button;
