import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllusers = () => {
  // hooks
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  // custom hooks
  const { showMessage } = useMessage();

  // fetch all users
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザーの取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
