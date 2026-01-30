import { bookings } from '@/lib/bookings';
import { NextResponse } from 'next/server';
import { PageProps } from '@/types/global';
import { BookingDetailsPageProps, BookingType } from '@/types/booking';

export async function GET(
  _request: Request,
  { params }: PageProps<BookingDetailsPageProps>,
) {
  const { bookingId } = await params;

  const booking = bookings.find(
    (booking) => booking.id.toString() === bookingId,
  );

  if (!booking) {
    return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json<BookingType>(booking);
}
