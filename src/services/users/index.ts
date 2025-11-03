import { USERS_URI } from "../../constants/routes";
import { http } from "../http";
import type { CreateUser, User } from "./types";

export async function getUsers(): Promise<User[]> {
  return http.get<User[]>(USERS_URI);
}

export async function findUserById(id: string): Promise<User> {
  return http.get(`${USERS_URI}/${id}`);
}

export async function createUser(data: CreateUser) {
  return http.post(USERS_URI, data);
}

export async function updateUser(id: string, data: CreateUser) {
  return http.put(`${USERS_URI}/${id}`, data);
}

export async function deleteUser(id: string) {
  return http.delete(`${USERS_URI}/${id}`);
}
