import { Icon } from "./icon";
import type { Room } from "../lib/content";
import { bookingUrl } from "../lib/content";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <img src={room.image} alt={`${room.name} at Centre Break Beach Stay`} />
        <span className="room-number">0{index + 1}</span>
      </div>
      <div className="room-card-body">
        <p className="eyebrow">{room.eyebrow}</p>
        <h3>{room.name}</h3>
        <p className="room-description">{room.description}</p>
        <div className="room-meta">
          <span><Icon name="users" size={16} /> {room.sleeps}</span>
          <span><Icon name="bed" size={16} /> {room.beds}</span>
        </div>
        <div className="feature-list">
          {room.features.map((feature) => <span key={feature}><Icon name="check" size={14} /> {feature}</span>)}
        </div>
        <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Icon name="arrow" size={16} /></a>
      </div>
    </article>
  );
}
