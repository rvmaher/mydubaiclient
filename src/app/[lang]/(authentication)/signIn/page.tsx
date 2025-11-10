import { getDictionary } from '../../../../dictionaries/dictionaries'
import SignInForm from './SignInForm'

export default async function SignInPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'ar' | 'nl' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isRTL = lang === 'ar'

    return <SignInForm dict={dict} lang={lang} isRTL={isRTL} />
}