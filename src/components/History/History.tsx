import './History.css';
import type { HistoryProps } from '@/types';

const History = ({ title, duration, description }: HistoryProps) => {
  return (
    <div className="history">
      <div className="titleWrapper">
        <h3 className="title">{title}</h3>
        <p className="duration">{duration}</p>
      </div>

      <div className="verticalLine"></div>

      <div className="descWrapper">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default History;
