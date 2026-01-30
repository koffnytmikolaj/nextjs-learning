import { BookingType } from '@/types/booking';

export const bookings: BookingType[] = [
  {
    id: 1,
    customerName: 'Jan Kowalski',
    date: '2026-02-10',
    status: 'active',
  },
  {
    id: 2,
    customerName: 'Anna Nowak',
    date: '2026-02-12',
    status: 'active',
  },
];

export const getBookingById = (bookingId: string): BookingType | undefined => {
  return bookings.find((booking) => booking.id.toString() === bookingId);
};

export const getBookings = (): BookingType[] => {
  return bookings;
};
