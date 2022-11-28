import { Login } from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import { Router } from "./Router";

export function App() {
  const admin = useSelector((state) => state.admin);

  return <>{admin.data ? <Router /> : <Login />}</>;
}
