import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  seed?: string;
  large?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ seed, large }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`relative overflow-hidden rounded-full border-gray-300 bg-white ${
        large ? "h-20 w-20" : "h-10 w-10"
      }`}
    >
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
