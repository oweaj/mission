import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center gap-[41px] bg-black">
      <img src="/images/home-logo.svg" className="w-[150px] h-[51px]" alt="반장창고 홈 로고 이미지" />
      <button type="button" className="w-[172px] h-[88px] text-[25px] rounded-[20px] bg-white" onClick={() => navigate('order')}>
        주문하러 가기
      </button>
    </div>
  );
};

export default Home;
