export const makePath = (slug: string | null | undefined) => {
  if (!slug) return null
  const homeTest = /^home$/
  return homeTest.test(slug) ? '/' : `/${slug}`
}
