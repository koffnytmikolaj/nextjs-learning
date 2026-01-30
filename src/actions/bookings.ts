'use server';

import { bookings } from '@/lib/bookings';
import { BookingType } from '@/types/booking';

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
  return booking;
};
