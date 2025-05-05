import Link, { LinkProps } from "next/link";

export interface BaseLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

type OnNavigateEventHandler = (event: { preventDefault: () => void }) => void;

export function BaseLink({ children, ...props }: BaseLinkProps) {
  const handleNavigate: OnNavigateEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Link prefetch={false} onNavigate={handleNavigate} {...props}>
      {children}
    </Link>
  );
}
