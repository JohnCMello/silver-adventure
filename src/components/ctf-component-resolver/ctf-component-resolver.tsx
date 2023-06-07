import { Locale } from '@libs/i18n'
import { ctfResolverMappings } from './ctf-component-resolver-mappings'
import { useTranslations } from 'next-intl'

type ComponentNotFoundProps = { componentName: string }
const ComponentNotFound = ({ componentName }: ComponentNotFoundProps) => {
  const t = useTranslations('error')
  return <h1>{t('error-no-page-content', { name: componentName })}</h1>
}

export type CtfResolvedComponentProps = { id: string; typename: string; locale: Locale }
export const CtfComponentResolver = (props: CtfResolvedComponentProps) => {
  const { typename, id } = props

  const Component = ctfResolverMappings[typename]?.component

  if (!Component) return <ComponentNotFound componentName={typename} />
  return <Component key={id} {...props} />
}
