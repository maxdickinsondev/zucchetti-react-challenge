import { USERS_URI } from "../../constants/routes";
import { http } from "../http";
import type { User } from "./types";

export async function getUsers(): Promise<User[]> {
  return http.get<User[]>(USERS_URI);
}
