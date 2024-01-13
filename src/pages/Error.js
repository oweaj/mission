import usePageTime from '../hook/usePageTime';

const Error = () => {
  usePageTime();

  return (
    <div className="afterOrder text-center">
      <p>
        주문에 실패하였습니다. <br /> 다시 시도해주세요.
      </p>
    </div>
  );
};

export default Error;
