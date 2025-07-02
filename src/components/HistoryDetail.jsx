import './historyDetail.css';

function HistoryDetail({ title, duration, description }) {
    return(
        <article className="history">
            <div className="titleWrapper">
                <p className="title">{title}</p>
                <p className="duration">{duration}</p>
            </div>
            <div className="verticalLine" />
            <div className='descWrapper'>
                <p className="description">{description}</p>
            </div>
        </article>
    );
}

export default HistoryDetail;