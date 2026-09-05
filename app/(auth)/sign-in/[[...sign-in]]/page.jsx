import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden h-[40vh] md:block md:h-screen">
        <Image
          src={"/login.jpg"}
          alt="login"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center md:h-screen dark:bg-gray-600">
        <SignIn />
      </div>
    </div>
  );
}
