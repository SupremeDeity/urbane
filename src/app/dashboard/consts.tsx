import { ImStatsDots } from "react-icons/im";
import { CgDatabase } from "react-icons/cg";
import { GoLog } from "react-icons/go";
import { BsPlugin } from "react-icons/bs";
import { IoCloud, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export const routes = [
  { routeName: "Analytics", path: "/dashboard", icon: <ImStatsDots /> },
  { routeName: "Users", path: "/dashboard/users", icon: <FaRegUser /> },
  {
    routeName: "Integrations",
    path: "/dashboard/integrations",
    icon: <BsPlugin />,
  },
  { routeName: "Logs", path: "/dashboard/logs", icon: <GoLog /> },
  { routeName: "Database", path: "/dashboard/database", icon: <CgDatabase />, disabled: true },
  { routeName: "Storage", path: "/dashboard/storage", icon: <IoCloud />, disabled: true },

  {
    routeName: "Settings",
    icon: <IoSettingsOutline />,
    path: "/dashboard/settings",
    disabled: true,
  },
];

export const defaultGraphScheme = "paired";
