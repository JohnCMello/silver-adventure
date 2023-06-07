import { DrawerExample } from '@atoms/drawer-example/drawer-example'
import { NavigationExample } from '@/components/atomic/organisms/navigation-example/navigation-example'
import { useTheme } from '@libs/theme'
import { BoxExample } from '@atoms/box-example/box-example'
import { I18nLink, i18nConfig, useI18nRoutesContext } from '@libs/i18n'

type Props = { children: React.ReactNode }
export function LayoutExample(props: Props) {
  const { children } = props
  const { locale, localeRoutes } = useI18nRoutesContext()
  const safeLocal = locale === i18nConfig.defaultLocale ? '' : `/${locale}`
  const links = Array.from(localeRoutes[locale].keys()).map((item) => ({
    label: `${safeLocal}${item}`,
    href: `${safeLocal}${item}`,
  }))

  const theme = useTheme()
  const { navigationWidth } = theme.sizes
  return (
    <BoxExample sx={{ display: 'flex' }}>
      <DrawerExample
        variant='permanent'
        sx={{
          width: navigationWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            pr: 4,
            width: navigationWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <NavigationExample links={links} linkComponent={(item) => <I18nLink href={item.href}>{item.label}</I18nLink>} />
      </DrawerExample>
      <BoxExample component='main' sx={{ flexGrow: 1, p: 8 }}>
        {children}
      </BoxExample>
    </BoxExample>
  )
}
