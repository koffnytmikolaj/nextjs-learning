import { getBookings } from '@/lib/bookings';
import Link from 'next/link';

export default async function DashboardPage() {
  const bookings = getBookings();

  return (
    <main>
      <h3>Twoje rezerwacje</h3>
      <p>W tym miejscu zobaczysz listę nadchodzących wizyt.</p>
      <ul>
        {bookings.map(({ id, customerName, status }) => (
          <li key={id}>
            <Link href={`/dashboard/bookings/${id}`}>
              {id} {customerName} {status}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
