import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/Pages/Login";
import { Home } from "../components/Pages/Home";
import { UserManagement } from "../components/Pages/UserManagement";
import { Setting } from "../components/Pages/Setting";
import { Page404 } from "../components/Pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

// react-router-dom v6
export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home">
          <Route
            index
            element={
              <HeaderLayout>
                <Home />
              </HeaderLayout>
            }
          />
          <Route
            path="user_management"
            element={
              <HeaderLayout>
                <UserManagement />
              </HeaderLayout>
            }
          />
          <Route
            path="setting"
            element={
              <HeaderLayout>
                <Setting />
              </HeaderLayout>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <HeaderLayout>
              <Page404 />
            </HeaderLayout>
          }
        />
      </Routes>
    </LoginUserProvider>
  );
});
