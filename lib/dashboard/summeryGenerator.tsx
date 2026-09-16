import type { IconType } from "react-icons/lib";

import { BsCartFill, BsChatLeftTextFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";

export type Summary = {
  id: number;
  title: string;
  count: number;
  Icon: IconType;
  link: string;
};

const PREFIX_URL = "/dashboard/";

export default function summaryGenerator(
  productsLength: number,
  usersLength: number,
  ticketsLength: number,
  commentssLength: number,
): Array<Summary> {
  return [
    {
      id: 1,
      title: "محصولات",
      count: productsLength,
      Icon: BsCartFill,
      link: `${PREFIX_URL}products`,
    },
    {
      id: 2,
      title: "کاربران",
      count: usersLength,
      Icon: HiUsers,
      link: `${PREFIX_URL}users`,
    },
    {
      id: 3,
      title: "تیکت‌ها",
      count: ticketsLength,
      Icon: IoMdChatbubbles,
      link: `${PREFIX_URL}tickets`,
    },
    {
      id: 4,
      title: "کامنت‌ها",
      count: commentssLength,
      Icon: BsChatLeftTextFill,
      link: `${PREFIX_URL}comments`,
    },
  ];
}
