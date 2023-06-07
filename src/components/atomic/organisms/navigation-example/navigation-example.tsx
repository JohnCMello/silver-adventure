import { BoxExample } from '@atoms/box-example/box-example'

type LinkEntry = { href: string; label: string }
export type NavigationExampleProps = { links: LinkEntry[]; linkComponent?: (link: LinkEntry) => React.ReactNode }
export function NavigationExample(props: NavigationExampleProps) {
  const { links, linkComponent } = props
  return (
    <nav>
      <BoxExample sx={{ p: 5 }} component='ul'>
        {links.map((link) => (
          <BoxExample key={link.href} sx={{ py: 2 }} component='li'>
            {linkComponent ? linkComponent(link) : <a href={link.href}>{link.label}</a>}
          </BoxExample>
        ))}
      </BoxExample>
    </nav>
  )
}
