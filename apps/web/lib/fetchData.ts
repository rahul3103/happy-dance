import { ApiResponse } from "@/types/api-response";

export async function fetchData<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${path}`,
      options,
    );

    if (!res.ok) {
      console.error(`Error fetching ${path}: ${res.status} ${res.statusText}`);
      return null as T;
    }

    const json = (await res.json()) as ApiResponse<T>;
    return json.record;
  } catch (error) {
    console.error(`Network or parsing error fetching ${path}:`, error);
    return null as T;
  }
}
