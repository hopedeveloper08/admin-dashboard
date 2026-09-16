import { IconType } from "react-icons";
import { BsHouseDoor, BsCart2, BsChatLeftText } from "react-icons/bs";
import { HiOutlineChatBubbleLeftRight, HiOutlineUsers } from "react-icons/hi2";

type MenuItem = {
  id: string;
  title: string;
  icon: IconType;
  link: string;
};

const PREFIX_URL = "/dashboard/";

const menu: Array<MenuItem> = [
  {
    id: "dashboard",
    title: "صفحه اصلی",
    icon: BsHouseDoor,
    link: `${PREFIX_URL}`,
  },
  {
    id: "products",
    title: "محصولات",
    icon: BsCart2,
    link: `${PREFIX_URL}products`,
  },
  {
    id: "users",
    title: "کاربران",
    icon: HiOutlineUsers,
    link: `${PREFIX_URL}users`,
  },
  {
    id: "tickets",
    title: "تیکت‌ها",
    icon: HiOutlineChatBubbleLeftRight,
    link: `${PREFIX_URL}tickets`,
  },
  {
    id: "comments",
    title: "کامنت‌ها",
    icon: BsChatLeftText,
    link: `${PREFIX_URL}comments`,
  },
];

export default menu;
