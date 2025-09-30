import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IPDuck",
};

export default function page() {
  return (
    <div className="max-w-[1280px] mx-auto bg-background2 pb-6">
      <div className=" min-h-full mx-4 d:mx-[270px] pt-10">
        <h2 className="font-bold text-3xl">What is IP DUCK?</h2>

        <div className="my-6">
          <p className="font-extrabold">“입덕”은 무엇입니까?</p>
          <p className="mt-2 text-sm text-gray1">
            &quot;입덕&quot;은 특정 인물, 분야, 또는 취미에 관심을 갖게 되어
            팬이 되거나 매니아가 되어가는 과정을 의미합니다. <br /> 즉, 이전에는
            관심 없던 대상에 대해 깊이 빠져들기 시작하는 상태를 뜻합니다. 주로
            아이돌, 연예인, 게임, 애니메이션 등 다양한 분야에서 사용됩니다.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            입덕서비스 “IPDcuk.co.kr” 은 무엇인가요?
          </p>
          <p className="mt-2 text-sm text-gray1">
            &quot;입덕주식회사 (IPDuck Corp.)&quot; 는 국내외의 다양한 시각적 IP
            (Intelectual Property)를 연구하고 각 IP들의 팬들을 “입덕”시켜 보다
            간결하고 손쉬운 방식의 창작자-사용자 생태계를 만들어 내는 것을
            목표로 합니다. <br />
            <br />
            글로벌 메가 IP부터 1인 일러스트레이터까지, <br />
            귀여운 캐릭터를 좋아하는 소녀부터 거대한 IP산업의 제작사까지 모두
            하나의 팬으로서 존재하며 서로를 응원하는 곳. <br /> <br />
            IP Duck 서비스를 통해 입덕의 즐거움과 가능성을 경험할 수 있습니다.
          </p>
        </div>

        <div className="relative w-full h-[21.875rem]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/images/video/ipduck.webm"
          />
        </div>

        <div className="my-6 text-gray1">
          <p className="font-bold text-black">CONTACT</p>
          <p>info@ipduck.co.kr</p>
        </div>
      </div>
    </div>
  );
}
