import { bookings } from '@/lib/bookings';
import { BookingType } from '@/types/booking';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json<BookingType[]>(bookings);
}
