import { PROFILE_AVATAR_URL } from "@/lib/constants";
import Image from "next/image";

export default function TopbarProfile() {
  return (
    <button className="btn max-lg:btn-circle btn-ghost flex gap-4 max-lg:mr-2 lg:py-6">
      <div className="avatar">
        <div className="size-10 lg:size-12 rounded-full">
          <Image
            alt="avatar"
            src={PROFILE_AVATAR_URL}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-start">
        <span className="font-bold text-lg">رضا شهرکی</span>
        <span className="font-normal text-sm">مهندس نرم‌افزار</span>
      </div>
    </button>
  );
}
