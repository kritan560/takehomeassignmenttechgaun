import React from "react";

/**
 * A layout component for authentication-related pages.
 * Centers its children both horizontally and vertically within the viewport.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 *
 * @example
 * <AuthLayout>
 *   <SignInForm />
 * </AuthLayout>
 */
const AuthLaout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default AuthLaout;