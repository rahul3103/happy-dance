import Link, { LinkProps } from "next/link";

export interface BaseLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function BaseLink({ children, href, ...props }: BaseLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <Link href="" onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
