'use server';

import { bookings } from '@/lib/bookings';
import { BookingType } from '@/types/booking';
import { revalidatePath } from 'next/cache';

export const cancelBooking = async (
  bookingId: string,
): Promise<BookingType> => {
  const booking = bookings.find(
    (booking) => booking.id.toString() === bookingId,
  );

  if (!booking) {
    throw new Error('Booking not found!');
  }

  if (booking.status === 'active') {
    booking.status = 'canceled';
  }

  revalidatePath('/dashboard');
  revalidatePath(`/dashboard/bookings/${bookingId}`);

  return booking;
};
