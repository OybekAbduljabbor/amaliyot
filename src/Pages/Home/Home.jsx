import {
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../Redux/Api/User";

import { useSelector } from "react-redux";

export function Home() {
  const admin = useSelector((state) => state.admin);

  const { data } = useGetUserQuery(admin.data.token);
  const [createUser, { data: resultCteate }] = useCreateUserMutation();
  const [deleteUser, { data: resultDelete }] = useDeleteUserMutation();
  const [upadteUser, { data: resultUpdate }] = useUpdateUserMutation();

  console.log(data);

  return (
    <div>
      <input type="text" />
    </div>
  );
}
