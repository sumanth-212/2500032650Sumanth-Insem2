import { Routes, Route, Link, useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();

  function handleBooking() {
    navigate("/confirmation");
  }

  return (
    <main className="page">
      <section className="booking-card">
        <div className="eyebrow">BOOKING PORTAL</div>
        <h1>Plan your next experience</h1>
        <p className="intro">
          Complete your booking in one simple step. Click below to confirm.
        </p>

        <div className="booking-details">
          <div>
            <span className="detail-label">Experience</span>
            <strong>Premium Experience</strong>
          </div>
          <div>
            <span className="detail-label">Duration</span>
            <strong>1 Day</strong>
          </div>
          <div>
            <span className="detail-label">Booking status</span>
            <strong className="pending">Not booked</strong>
          </div>
        </div>

        <button className="primary-button" onClick={handleBooking}>
          Book Now <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

function ConfirmationPage() {
  return (
    <main className="page">
      <section className="booking-card confirmation-card">
        <div className="success-icon" aria-hidden="true">✓</div>
        <div className="eyebrow">CONFIRMATION</div>
        <h1>Booking Confirmed</h1>
        <p className="intro">
          Your booking has been successfully confirmed.
        </p>
        <Link className="secondary-button" to="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="page">
      <section className="booking-card">
        <h1>Page not found</h1>
        <Link className="secondary-button" to="/">Go to booking page</Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BookingPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}