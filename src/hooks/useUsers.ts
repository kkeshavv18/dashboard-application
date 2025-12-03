import { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";
import type { UsersResponse } from "../types/types";

interface UseUsersParams {
  limit?: number;
  skip?: number;
  q?: string;
  key?: string;
  value?: string;
}

export const useUsers = (params: UseUsersParams = {}) => {
  const [data, setData] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchUsers(params);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [params]);

  return { data, loading, error, refetch: () => {} }; // refetch can be added if needed
};
