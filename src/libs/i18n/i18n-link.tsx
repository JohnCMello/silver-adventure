import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useTranslateRoute } from './use-translate-route'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; href: string }

export const I18nLink = React.forwardRef<HTMLAnchorElement, Props>(function NextLink(
  { children, href, ...props },
  ref
) {
  const translator = useTranslateRoute()
  const translatedHref = translator(href)
  return (
    <Link href={translatedHref} {...props} ref={ref} passHref legacyBehavior={true} prefetch={false}>
      {children}
    </Link>
  )
})
