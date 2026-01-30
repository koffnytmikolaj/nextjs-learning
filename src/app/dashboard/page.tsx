import { fetchJson } from '@/lib/api';
import { BookingType } from '@/types/booking';
import Link from 'next/link';

export default async function DashboardPage() {
  const bookings = await fetchJson<BookingType[]>('/api/bookings');

  return (
    <main>
      <h3>Twoje rezerwacje</h3>
      <p>W tym miejscu zobaczysz listę nadchodzących wizyt.</p>
      <ul>
        {bookings.map(({ id, customerName }) => (
          <li key={id}>
            <Link href={`/dashboard/bookings/${id}`}>
              {id} {customerName}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
