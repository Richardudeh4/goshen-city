import { forwardRef } from "react";
import clsx from "clsx";
import { TbMenu2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import Logo from "./Logo";

const Appscreen = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      <div className="flex justify-between items-center px-4 pt-4">
        <TbMenu2 className="text-xl text-white" />
        <Logo className="text-gray-300 hover:text-white text-xl duration-300" />
        <FaUser className="text-xl text-white" />
      </div>
      {children}
    </div>
  );
};

Appscreen.Title = forwardRef(function AppscreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  );
});

Appscreen.Subtitle = forwardRef(function AppscreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  );
});

Appscreen.Body = forwardRef(function AppscreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("mt-6 flex-auto rounded-t-2xl bg-white", className)}
    >
      {children}
    </div>
  );
});

Appscreen.Header = forwardRef(function AppscreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  );
});
export default Appscreen;
