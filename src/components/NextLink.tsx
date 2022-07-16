import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  children: string | JSX.Element;
  className?: string;
  activeClassName?: string;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
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
  return (
    <Link href={href} {...rest}>
      <a
        className={classNames([className, router.pathname === href ? activeClassName : ""])}
        style={router.pathname === href ? { ...style, ...activeStyle } : { ...style }}
      >
        {children}
      </a>
    </Link>
  );
};
