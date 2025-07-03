import './SkillDetail.css';

function SkillDetail({ icon, name, description }) {
    return (
        <article className="skillDetailContainer">
            <div className="skillWrapper">
                <img className="skillIcon" src={icon} alt="icon" />
                <p className="skillName">{name}</p>
            </div>
            <div className="skillDescWrapper">
                <p className="skillDescription">{description}</p>
            </div>
        </article>
    );
}

export default SkillDetail;