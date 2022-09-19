import { useRouter } from "next/router";

let OnChangeLanguage = () => {
    
    const router = useRouter()
    const params = router.locale
    let changeLanguage = () => {
        let params = router.locale

        if(params === 'id'){return router.push('/en')}
        return router.push('/id')
    }

    return(
        <div onClick={changeLanguage} className='p-2'>
            {params === 'id'? 'English':'Bahasa Indonesia'}
        </div>
    )
}
export default OnChangeLanguage

