'use client';

import { ErrorPageProps } from './types';

export default function ErrorPage(props: ErrorPageProps) {
  const { error, reset } = props;

  return (
    <div>
      <h2>Wystąpił błąd</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Spróbuj ponownie</button>
    </div>
  );
}
