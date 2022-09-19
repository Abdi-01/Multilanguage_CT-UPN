import Image from 'next/image'
import { Router, useRouter } from 'next/router';

// Multilanguage
// Multilanguage
import i18next from '../i18n';
import OnChangeLanguage from '../functions/onChangeLanguage';

export default function Home() {
  return (
    <div>
      {/* Section1: Navbar */}
      <div className='container'>
        <div className="row align-items-center" style={{ padding: '10px 0px 10px 0px' }}>
          <div className="col-6 d-flex align-items-center">
            <span className='me-3'>
              Icon
            </span>
            <span>
              <Image src={require('./../public/grab-logo-png-transparent.png')} alt='Logo Grab' width={91}
                height={35}/>
            </span>
          </div>
          <div className="col-6 text-end">
            <span className='me-3'>
              {i18next.t('Section1.Menu-1')}
            </span>
            <span className='me-3'>
              {i18next.t('Section1.Menu-2')}
            </span>
            <span className='me-3'>
              <button className='btn btn-success p-0'>
                <OnChangeLanguage />
              </button>
            </span>
            <span>
              Icon
            </span>
          </div>
        </div>
      </div>

      {/* Section2: Jumbotron */}
      <div className='jumbotron-image d-flex align-items-end pb-5'>
        <div className='container ps-5'>
          <h1 style={{ fontSize: '64px', maxWidth: '600px' }}>
            Grab. Making every
            day better.
          </h1>
        </div>
      </div>
      <div className='d-flex align-items-center bg bg-success' style={{ height: '80px' }}>
        <h5 className='container ps-5'>
          Read About Us
        </h5>
      </div>
      <div className='d-flex align-items-center bg bg-light' style={{ height: '80px' }}>
        <h5 className='container ps-5'>
          Download App
        </h5>
      </div>
      <div className='d-flex align-items-center' style={{ height: '180px' }}>
        <div className='container ps-5'>
          <h3 style={{ maxWidth: '420px' }}>
            From essential services to earning opportunities. We're an all-in-one platform.
          </h3>
        </div>
      </div>

      {/* Section3: Content */}
      <div style={{ paddingBottom: '300px' }}>
        {/* Section3.1: Navbar Content */}
        <div className='container ps-5'>
          <div className='row'>
            <div className='col-2'>
              <h4 className='bg bg-dark text-light py-3 text-center' style={{ borderRadius: '100px' }}>
                Consumer
              </h4>
            </div>
            <div className='col-2'>
              <h4 className=' text-dark py-3 text-center' style={{ borderRadius: '100px' }}>
                Driver
              </h4>
            </div>
            <div className='col-2'>
              <h4 className=' text-dark py-3 text-center' style={{ borderRadius: '100px' }}>
                Merchant
              </h4>
            </div>
            <div className='col-2'>
              <h4 className=' text-dark py-3 text-center' style={{ borderRadius: '100px' }}>
                Enterprise
              </h4>
            </div>
          </div>
        </div>

        {/* Section3.2: Content */}
        <div className='container ps-5 mt-5'>
          <div className='pt-5' style={{ borderTop: '1px solid grey' }} >
            <div className='row'>
              <div className='col-6'>
                <h1>
                  Deliveries
                </h1>
              </div>
              <div className='col-6'>
                <div className='mb-5'>
                  <h3>
                    {i18next.t('Section3.Consumer.Menu-1').split('-')[0]}
                  </h3>
                  <p style={{ fontSize: '18px' }}>
                    {i18next.t('Section3.Consumer.Menu-1').split('-')[1]}
                  </p>
                </div>
                <div>
                  <h3>
                    {i18next.t('Section3.Consumer.Menu-2').split('-')[0]}
                  </h3>
                  <p style={{ fontSize: '18px' }}>
                    {i18next.t('Section3.Consumer.Menu-2').split('-')[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
