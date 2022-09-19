import '../styles/globals.css'

// Multilanguage
import i18next from '../i18n';
import { useRouter } from 'next/router';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.locale){
    i18next.changeLanguage(router.locale)
  }
  return <Component {...pageProps} />
}

export default MyApp
