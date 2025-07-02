import './aboutMe.css';
import face from '../assets/face.jpg';
import gamja from '../assets/gamza_gif.gif';

function AboutMe() {
    return (
        <>
            <h1 className="aboutTitle">About me</h1>
            <div className="aboutMe">
                <div className="aboutMeTextWrapper">
                    <div className="aboutMeText">
                        <p>서비스를 만드는 프론트엔드 개발자, 이강룡 입니다. (2002.02.03, 24살)</p>
                        <p>단순 개발이 아닌, 서비스 개발 전체 흐름에 맞추어 개발하는 것을 좋아합니다.</p>
                        <p>다양한 사람들과 소통하며 사용자에게 가장 가까이 다가가 서비스를 제공한다는 점에서</p>
                        <p>프론트엔드를 깊이 파고들기로 결정하였습니다.</p>
                        <p>서비스의 도메인, 사용자 등을 고려하여 어울리는 기술스택을 탐구하고 사용하는 것을 좋아합니다.</p>
                    </div>
                </div>
                <img className="face" src={face} alt="증명사진" />
            </div>
        <div className="contactAndGamja">
            <div className="contact">
                <span className='contactText'>Contact) gaiogo2@naver.com</span>
                <span className='contactText'>Github) https://github.com/LeeKangRyong</span>
                <span className='contactText'>Notion) gaiogo2@naver.com</span>
            </div>
            <div className="gamjaWrapper">
                <img className="gamja" src={gamja} alt="감자" />
                <p className='gamjaText'>집에서 키우는 거북이, 감자입니다</p>
            </div>
        </div>
        </>
    );
}

export default AboutMe;