import React, { useEffect } from 'react'
import categoriesApi from '../api/Categories'
import Category from '../components/Category'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Policy from '../components/Policy'
import Slider from '../components/Slider'
import Store from '../components/Store'
import AccessoryList from './AccessoryList'
import IpadList from './IpadList'
import IphoneList from './IphoneList'
import MacList from './MacList'
import SoundList from './SoundList'
import WatchList from './WatchList'

const Home = () => {



  return <React.Fragment>
    <Slider />
    <Policy />
    <div className='container_wdithbg'>
      <Category />
      <IphoneList />
      <MacList />
      <IpadList />
      <WatchList />
      <SoundList />
      <AccessoryList />

      <Store />
      <Footer />
      <CopyRight />

    </div>
  </React.Fragment>
}

export default Home