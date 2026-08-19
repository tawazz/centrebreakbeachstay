import { Icon } from "./icon";
import { assetPath } from "../lib/content";
import type { Room } from "../lib/content";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <img src={assetPath(room.image)} alt={`${room.name} at Centre Break Beach Stay near Jurien Bay`} />
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
        <a
          className="button button-dark room-card-cta"
          href={room.bookingUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Check dates and rates for ${room.name}`}
          data-booking-placement={`room-${room.name}`}
        >
          Check dates & rates <Icon name="arrow" size={16} />
        </a>
      </div>
    </article>
  );
}
