import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>레이아웃</div>
      <Outlet />
    </div>
  );
};
export default Layout;
