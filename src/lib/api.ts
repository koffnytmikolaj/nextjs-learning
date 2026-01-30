export async function fetchJson<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  console.log(process.env.NEXT_PUBLIC_BASE_URL, input);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${input}`, init);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}
