export type BookingDetailsPageProps = {
  bookingId: string;
};

export type BookingType = {
  id: number;
  customerName: string;
  date: string;
  status: 'active' | 'canceled';
};
