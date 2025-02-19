import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const ProfileMenuDialog = () => {
  const router = useRouter();
  const isAuth = useAuth();

  function handleLogout() {
    localStorage.removeItem("isAuth");
    router.replace("/sign-in");
  }

  return (
    <div className="absolute translate-y-2 -translate-x-1/2 bg-white z-10 border rounded-md shadow-md">
      <div className="flex flex-col space-y-2 w-48">
        {!isAuth && (
          <div
            onClick={() => router.push("/sign-in")}
            className="hover:bg-stone-200 px-6 py-2 cursor-pointer flex justify-start font-medium items-center gap-x-2"
          >
            <IoMdLogIn />
            <p className="text-sm">SignIn</p>
          </div>
        )}

        {/* <div className="hover:bg-stone-200 px-6 py-2 cursor-pointer flex justify-start font-medium items-center gap-x-2">
          <MdOutlinePassword />
          <p className="text-sm">Login</p>
        </div> */}

        {isAuth && (
          <div
            onClick={handleLogout}
            className="hover:bg-stone-200 px-6 py-2 cursor-pointer flex justify-start font-medium items-center gap-x-2"
          >
            <IoMdLogOut />
            <p className="text-sm">Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenuDialog;
