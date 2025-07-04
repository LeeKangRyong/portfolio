import './Modal.css';
import useAssets from '../../hooks/useAssets';
import FAQ from '../FAQ/FAQ';

function Modal({ setModal, title, duration, resultImg, arcImg, faqData, topcolor }) {
    const { assets: projects } = useAssets('projects');

    return (
        <article className="modalContaner" onClick={setModal}>
            <div className="modalContentWrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modalTop" style={{ backgroundColor: topcolor}}>
                    <h2 className="modalTopContentTitle">{title}</h2>
                    <p className="modalTopContentDuration">{duration}</p>
                    <button onClick={setModal} className="modalCloseButton">
                        X
                    </button>
                </div>
                <div className="modalContent">
                    <h3 className="modalContentResultTitle">프로젝트 결과물</h3>
                    <div className="modalContentResult">
                        {resultImg && resultImg.map((imgKey, index) => (
                            <img 
                                key={index} 
                                src={projects[imgKey]} 
                                alt={`project result ${index + 1}`} 
                            />
                        ))}
                    </div>
                    <h3 className="modalContentArcTitle">Architecture</h3>
                    <div className="modalContentArc">
                        {arcImg && (
                            <img src={projects[arcImg]} alt="project architecture" />
                        )}
                    </div>
                    <h3 className="modalContentFAQTitle">FAQ</h3>
                    <div className="modalContentFAQ">
                        {faqData && faqData.map((faq, index) => (
                            <FAQ 
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Modal;