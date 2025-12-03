export interface ApiParams {
  limit: number;
  skip: number;
  q?: string;
  key?: string;
  value?: string;
}

export const genderOptions = [
  { label: "ALL GENDERS", value: "all" },
  { label: "MALE", value: "male" },
  { label: "FEMALE", value: "female" },
];

export function buildApiParams(
  query: string,
  selectedTypes: string[],
  currentPage: number,
  pageSize: number
): ApiParams {
  const params: ApiParams = {
    limit: pageSize,
    skip: (currentPage - 1) * pageSize,
  };
  if (query) params.q = query;
  if (
    selectedTypes.includes("male") &&
    !selectedTypes.includes("female") &&
    !selectedTypes.includes("all")
  ) {
    params.key = "gender";
    params.value = "male";
  } else if (
    selectedTypes.includes("female") &&
    !selectedTypes.includes("male") &&
    !selectedTypes.includes("all")
  ) {
    params.key = "gender";
    params.value = "female";
  }
  return params;
}

export function calculateTotalPages(total: number, pageSize: number): number {
  return Math.ceil(total / pageSize);
}
