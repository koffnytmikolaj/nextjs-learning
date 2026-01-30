'use client';

import { useCallback, useState, useTransition } from 'react';
import { CancelButtonProps } from './types';
import { BookingType } from '@/types/booking';
import { cancelBooking } from '@/actions/bookings';

export default function CancelButton(props: CancelButtonProps) {
  const { bookingId } = props;

  const [isPending, startTransition] = useTransition();
  const [booking, setBooking] = useState<BookingType | null>(null);

  const handleCancel = useCallback(() => {
    startTransition(async () => {
      const booking = await cancelBooking(bookingId);
      setBooking(booking);
    });
  }, [bookingId]);

  if (booking?.status === 'canceled') {
    return <p>Rezerwacja odwołana</p>;
  }

  return (
    <button onClick={handleCancel} disabled={isPending}>
      {isPending ? 'Anulowanie...' : 'Anuluj rezerwację'}
    </button>
  );
}
