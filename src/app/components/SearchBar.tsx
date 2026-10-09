'use client';
import { useState, type FormEvent } from 'react';

const tabs = ['Hotels', 'Houseboats', 'Kayaking', 'Tour Packages'];

export default function SearchBar() {
  const [tab, setTab] = useState(0);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: connect to your booking API / enquiry endpoint
    console.log({ type: tabs[tab], ...data });
  };
  return (
    <div className="search" id="book">
      <div className="tabs" role="tablist" aria-label="Booking type">
        {tabs.map((t, i) => (
          <button key={t} role="tab" aria-selected={tab === i}
            className={tab === i ? 'active' : ''} onClick={() => setTab(i)} type="button">{t}</button>
        ))}
      </div>
      <form onSubmit={onSubmit} className="fields">
        <label>Destination
          <input name="destination" placeholder="Munnar, Alleppey, Dubai…" required />
        </label>
        <label>Check-in<input type="date" name="checkin" required /></label>
        <label>Check-out<input type="date" name="checkout" required /></label>
        <label>Guests
          <select name="guests" defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
          </select>
        </label>
        <button className="btn btn-gold" type="submit"><span>Search</span></button>
      </form>
    </div>
  );
}
