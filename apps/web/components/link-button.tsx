import { cn } from "@workspace/ui/lib/utils";
import { Icons } from "./icons";
import { buttonVariants } from "@workspace/ui/components/button";
import { BaseLink, BaseLinkProps } from "./base-link";

interface LinkButtonProps extends BaseLinkProps {
  showIcon?: boolean;
}

export const LinkButton = ({
  href,
  showIcon = true,
  children,
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <BaseLink
      href={href}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "border-primary bg-primary text-dark-foreground dark:hover:text-dark-foreground dark:text-light-foreground dark:bg-light-background hover:bg-light-background group h-auto rounded-full border px-6 py-3 text-lg font-semibold leading-[1.3] transition-colors duration-500 ease-in-out has-[>svg]:px-6",
        className,
      )}
      {...props}
    >
      <span
        className={cn("relative leading-[1.5]", showIcon ? "mr-1" : "mr-0")}
      >
        {children}
      </span>

      {showIcon && (
        <Icons.arrowRightLong
          className="h-[1em] w-auto shrink-0 -translate-x-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
          aria-hidden="true"
          data-icon-position="right"
        />
      )}
    </BaseLink>
  );
};
