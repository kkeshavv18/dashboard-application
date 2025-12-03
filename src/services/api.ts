import axios from "axios";
import type { UsersResponse, User } from "../types/types";

export const fetchUsers = async (params: {
  limit?: number;
  skip?: number;
  q?: string;
  key?: string;
  value?: string;
}): Promise<UsersResponse> => {
  try {
    let url = `${import.meta.env.VITE_API_BASE_URL}/users`;

    if (params.q) {
      url = `${import.meta.env.VITE_API_BASE_URL}/users/search`;
    } else if (params.key && params.value) {
      url = `${import.meta.env.VITE_API_BASE_URL}/users/filter`;
    }

    const response = await axios.get(url, { params });
    return response.data;
  } catch {
    throw new Error("Failed to fetch users");
  }
};

export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/users/${id}`
    );
    return response.data;
  } catch {
    throw new Error("Failed to fetch user");
  }
};
