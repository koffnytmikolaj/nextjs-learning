import { fetchJson } from '@/lib/api';
import { BookingDetailsPageProps, BookingType } from '@/types/booking';
import { PageProps } from '@/types/global';
import CancelButton from './CancelButton';

export default async function BookingDetailsPage({
  params,
}: PageProps<BookingDetailsPageProps>) {
  const { bookingId } = await params;

  const booking = await fetchJson<BookingType>(`/api/bookings/${bookingId}`, {
    cache: 'no-store',
  });

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
