import Cookies from "js-cookie";
import { Router } from "next/router";

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("refreshToken");
  Router.push("/login");
};
