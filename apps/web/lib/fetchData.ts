export async function fetchData<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      console.error(`Error fetching ${url}: ${res.status} ${res.statusText}`);
      return null as T;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`Network or parsing error fetching ${url}:`, error);
    return null as T;
  }
}
