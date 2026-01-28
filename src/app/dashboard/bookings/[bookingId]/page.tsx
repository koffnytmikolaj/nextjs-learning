import { PageProps } from '@/types/global';

type BookingDetailsPageProps = {
  bookingId: string;
};

export default async function BookingDetailsPage({
  params,
}: PageProps<BookingDetailsPageProps>) {
  const { bookingId } = await params;

  return (
    <main>
      <h3>Szczegóły rezerwacji</h3>
      <p>ID rezerwacji: {bookingId}</p>
    </main>
  );
}
