import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  children: string | React.ReactElement | ((p: RenderProps) => React.ReactElement);
  className?: string;
  activeClassName?: string;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

interface RenderProps {
  active: boolean;
}

function classNames(classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Custom component to pass styles to active links
 */
export const NextLink = ({
  href,
  children,
  className,
  activeClassName,
  style,
  activeStyle,
  ...rest
}: Props) => {
  const router = useRouter();

  const renderProps = {
    active: router.pathname === href,
  };

  return (
    <Link href={href} {...rest}>
      <a
        className={classNames([className, router.pathname === href ? activeClassName : ""])}
        style={router.pathname === href ? { ...style, ...activeStyle } : { ...style }}
      >
        {children instanceof Function ? children(renderProps) : children}
      </a>
    </Link>
  );
};
