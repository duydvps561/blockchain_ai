export function Button({ children, variant = "ghost", className, ...props }) {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-200",
  };
  return (
    <button
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
