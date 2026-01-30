import { bookings } from '@/lib/bookings';
import { BookingDetailsPageProps, BookingType } from '@/types/booking';
import { PageProps } from '@/types/global';
import { NextResponse } from 'next/server';

export async function POST(
  _request: Request,
  { params }: PageProps<BookingDetailsPageProps>,
) {
  const { bookingId } = await params;

  const booking = bookings.find(
    (booking) => booking.id.toString() === bookingId,
  );

  if (!booking) {
    return NextResponse.json(
      { message: 'Booking not found!' },
      { status: 404 },
    );
  }
  if (booking.status === 'canceled') {
    return NextResponse.json<BookingType>(booking);
  }
  booking.status = 'canceled';
  return NextResponse.json<BookingType>(booking);
}
