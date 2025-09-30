import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function page() {
  return (
    <div className="max-w-[1280px] pb-6 mx-auto bg-background1">
      <div className="min-h-full mx-4 d:mx-[270px] pt-10">
        <h2 className="font-extrabold text-3xl">FAQ</h2>

        <div className="my-6">
          <p className="font-extrabold">Q. 입덕은 어떤 곳인가요?</p>
          <p className="mt-1 text-sm text-gray1">
            A. 입덕(IPDuck)은 다양한 창작물을 모아 정리하고, 창작자와 팬이 함께
            즐기는 &quot;팬 커뮤니티&quot;입니다. 동시에 창작물 정보를 편리하게
            만날 수 있는 &quot;온라인 페어&quot;이기도 해요.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">Q. IP는 무엇을 뜻하나요?</p>
          <p className=" mt-1 text-sm text-gray1">
            A. IP는 &quot;지식재산권(Intellectual Property)&quot;을 의미합니다.
            <br />
            입덕에서는 주로 시각적 IP— 디자인, 캐릭터, 그래픽뿐 아니라 세계관,
            스토리, 특허 등 무형적 권리까지 포함합니다.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. IP LIST에는 어떤 IP들이 등록되나요?
          </p>
          <p className=" mt-1 text-sm text-gray1">
            A. 웹툰, 광고 캐릭터, 이모티콘, 브랜드 아이덴티티(BI), 제품 캐릭터,
            일러스트, 게임/애니메이션 캐릭터, 만화, 영화, 공공 캐릭터등 다양한
            분야의 IP가 등록됩니다.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">Q. 입덕지수(IP Index)란 무엇인가요?</p>
          <p className=" mt-1 text-sm text-gray1">
            A. 입덕지수는 IP의 활동과 반응을 데이터로 수치화한
            &quot;지표(Index)&quot;입니다.
            <br />
            대중성(Popularity), 상품성(Marketability), 팬 호감도(Fan
            Preference), 업계종사자 의견(Professional Insight) 등을 종합해
            객관적인 차트로 보여줍니다.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 입덕지수와 입덕랭킹은 어떤 차이가 있나요?
          </p>
          <div className=" mt-1 text-sm text-gray1">
            A. <br />
            <ul className="list-disc mt-1 pl-5 space-y-1">
              <li>
                입덕지수(IP Index) → IP별 활동과 팬 반응을 수치화한 데이터
              </li>
              <li>
                입덕랭킹(IP Ranking) → 주별·월별·카테고리별 입덕지수를 종합해
                만든 순위
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 내가 직접 입덕지수를 높일 수 있나요?
          </p>
          <div className="mt-1 text-sm text-gray1">
            <p>A. 네! 가능합니다.</p>
            <ul className="list-disc mt-1 pl-5 space-y-1">
              <li>SNS에서 응원하기</li>
              <li>새로운 소식 공유하기</li>
              <li>글로벌 활동 확산</li>
              <li>사이트 내 별점 주기, My List에 추가하기</li>
            </ul>
            <p className="mt-1">
              👉 팬의 활동이 많을수록 해당 IP의 입덕지수는 올라갑니다.
            </p>
          </div>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 태그버블은 어떤 기준으로 만들어지나요?
          </p>
          <p className="mt-1 text-sm text-gray1">
            A. IP 등록 시 추출된 키워드의 &quot;교집함&quot;이 많을수록 버블이
            크게 표시됩니다.
            <br />
            이를 통해 최신 캐릭터 IP 트렌드를 한눈에 확인할 수 있어요.
          </p>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 마이 리스트(My List)는 어떤 기능인가요?
          </p>
          <div className="mt-1 text-sm text-gray1">
            <p>
              A. 내가 좋아하는 IP를 &quot;My Page&quot;에 저장할 수 있는
              기능입니다.
            </p>
            <ul className="list-disc mt-1 pl-5 space-y-1">
              <li>자주 보는 IP를 빠르게 확인할 수 있고</li>
              <li>저장만으로도 입덕지수 상승에 기여합니다.</li>
            </ul>
          </div>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 새로운 IP를 제안하거나 오류를 발견하면 어떻게 하나요?
          </p>
          <div className="mt-1 text-sm text-gray1">
            <p>A. 언제든 제안·수정 요청 주세요.</p>
            <div className="mt-1">
              📧{" "}
              <a
                href="mailto:info@ipduck.co.kr"
                className="underline underline-offset-2"
              >
                info@ipduck.co.kr
              </a>
            </div>
            <p className="mt-1">
              👉 새로운 IP 추천, 잘못된 정보 정정, IP 권리 관련 문의 모두
              환영합니다.
            </p>
          </div>
        </div>

        <div className="my-6">
          <p className="font-extrabold">
            Q. 입덕에서 본 캐릭터를 내 제품에 활용할 수 있나요?
          </p>
          <p className="mt-1 text-sm text-gray1">
            A. 입덕은 앞으로 제조, 마케팅, 창작자 활동을 연결하는 기능을 강화할
            예정입니다.
            <br />더 흥미롭고 유용한 플랫폼으로 계속 발전하고 있으니 기대해
            주세요!
          </p>
        </div>
      </div>
    </div>
  );
}
