import { ProtectedRoutes } from "../../ProtectedRoutes";
export default function useCustomRoutes(Role: string) {
  const UpdatedRoutes = ProtectedRoutes.filter((item, i) => item.role === Role);
  return UpdatedRoutes;
}
