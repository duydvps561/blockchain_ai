export function Sidebar({ children, className }) {
  return (
    <aside className={`h-full bg-gray-100 ${className}`}>{children}</aside>
  );
}
