type BackgroundImage = { url: string; alt: string }
type Props = { title: string; backgroundImage: BackgroundImage }
export function HeroBannerExample(props: Props) {
  const { backgroundImage, title } = props
  return (
    <div>
      <h2>{title}</h2>
      <img src={backgroundImage?.url || ''} alt={backgroundImage?.alt || ''} style={{ height: '250px' }} />
    </div>
  )
}
