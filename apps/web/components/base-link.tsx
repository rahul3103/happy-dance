import Link, { LinkProps } from "next/link";

export interface BaseLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function BaseLink({ children, ...props }: BaseLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <Link onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
