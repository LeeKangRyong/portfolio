import './history.css';
import HistoryDetail from '../components/HistoryDetail';

function History() {
    return (
        <article className="historyContainer">
            <h1 className="historyTitle">History</h1>
            
            <div className="historyWrapper">
                <HistoryDetail 
                    title="숭실대학교" 
                    duration="2020.03 ~ 현재"
                    description={`숭실대학교 IT대학 AI융합학부 (20, 4학년)`}
                />
                <HistoryDetail 
                    title="LG AIMERS 4기" 
                    duration="2024.01 ~ 2024.02"
                    description={`ML 기본교육 및 MQL 데이터 기반 B2B 영업 예측 모델 해커톤 수료\n데이터 EDA 및 전처리 담당`}
                />
                <HistoryDetail 
                    title="프로메테우스 6기" 
                    duration="2024.09 ~ 현재"
                    description={`인공지능 기반 서비스 개발 동아리 6기 부원`}
                />
                <HistoryDetail 
                    title="SKT FLY AI CHALLENGERS 6기" 
                    duration="2024.12 ~ 2025.02"
                    description={`AI(ML/DL/LLM/OpenCV 등) 부트캠프 수료\nESG 및 창업 기반 Flutter를 통한 AI 어플리케이션 제작`}
                />
            </div>
        </article>
    );
}

export default History;