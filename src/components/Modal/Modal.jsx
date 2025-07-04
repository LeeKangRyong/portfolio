import './Modal.css';
import useAssets from '../../hooks/useAssets';

function Modal({ setModal, title, duration }) {

    const { assets: projects } = useAssets('projects');

    return (
        <article className="modalContaner" onClick={setModal}>
            <div className="modalContentWrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modalTop">
                    <h2 className="modalTopContentTitle">{title}</h2>
                    <p className="modalTopContentDuration">{duration}</p>
                    <button onClick={setModal} className="modalCloseButton">
                    닫기
                </button>
                </div>
                <div className="modalContent">
                    <h3 className="modalContentResultTitle">프로젝트 결과물</h3>
                    <div className="modalContentResult">
                        <img src={projects["project2_encap1"]} alt="project" />
                        <img src={projects["project2_encap2"]} alt="project" />
                        <img src={projects["project2_encap3"]} alt="project"/>
                        <img src={projects["project2_encap4"]} alt="project"/>
                        {/* TODO: images.map => desktop, tablet에서는 2xn 형태로 보여주고, mobile부터는 1xn으로 보여주기*/}
                    </div>
                    <h3 className="modalContentArcTitle">Architecture</h3>
                    <div className="modalContentArc">
                        <img src={projects["project2_encap_arc"]} alt="project"/>
                        {/* TODO: arc image 하나 넣기*/}
                    </div>
                    <h3 className="modalContentFAQTitle">FAQ</h3>
                        {/* TODO: chatWrapper, chatTitle, chatContent로 이루어진 function map */}
                    <div className="modalContentFAQ"></div>
                    <p>hello</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>i am lee</p>
                    <p>dede</p>
                </div>
            </div>
        </article>
    );
}

export default Modal;