import { BsBell } from "react-icons/bs";

export default function TopbarNotification() {
  return (
    <button className="btn my-auto btn-ghost btn-circle size-8 lg:size-12">
      <BsBell className="size-5 lg:size-7" />
    </button>
  );
}
