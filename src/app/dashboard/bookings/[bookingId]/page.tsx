import { BookingDetailsPageProps } from '@/types/booking';
import { PageProps } from '@/types/global';
import CancelButton from './CancelButton';
import { getBookingById } from '@/lib/bookings';
import { notFound } from 'next/navigation';

export default async function BookingDetailsPage({
  params,
}: PageProps<BookingDetailsPageProps>) {
  const { bookingId } = await params;

  const booking = getBookingById(bookingId);

  if (!booking) {
    notFound();
  }

  const { customerName, date, status } = booking;

  return (
    <main>
      <h3>Szczegóły rezerwacji</h3>
      <p>ID rezerwacji: {bookingId}</p>
      <p>Klient: {customerName}</p>
      <p>Data: {date}</p>
      <p>Status: {status}</p>
      <CancelButton bookingId={bookingId} />
    </main>
  );
}
