import usePageTime from '../hook/usePageTime';

const Complete = () => {
  usePageTime();

  return (
    <div className="afterOrder gap-3">
      <img src="/images/CheckFilled.svg" alt="주문 완료 아이콘" />
      <p>주문이 완료되었습니다.</p>
    </div>
  );
};

export default Complete;
