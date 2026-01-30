'use client';

import { useCallback, useState } from 'react';
import { CancelButtonProps } from './types';
import { fetchJson } from '@/lib/api';
import { BookingType } from '@/types/booking';

export default function CancelButton(props: CancelButtonProps) {
  const { bookingId } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [booking, setBooking] = useState<BookingType | null>(null);

  const handleCancel = useCallback(async () => {
    setIsLoading(true);
    const booking = await fetchJson<BookingType>(
      `/api/bookings/${bookingId}/cancel`,
      {
        method: 'POST',
      },
    );
    setBooking(booking);
    setIsLoading(false);
  }, [bookingId]);

  if (booking?.status === 'canceled') {
    return <p>Rezerwacja odwołana</p>;
  }

  return (
    <button onClick={handleCancel} disabled={isLoading}>
      {isLoading ? 'Anulowanie...' : 'Anuluj rezerwację'}
    </button>
  );
}
