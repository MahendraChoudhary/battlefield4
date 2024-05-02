import {React, useEffect, useState} from 'react'

import {getdataApi} from './apiUtil'
import BrowserBreadcrumb from './components/BrowserBreadcrumb/BrowserBreadcrumb';
import BrowserSIIntro from './components/BrowserSIintro/BrowserSIIntro';
import BrowserSiButtons from './components/BrowserSiButtons/BrowserSiButtons';
import BrowserSicurrentstats from './components/BrowserSicurrentstats/BrowserSicurrentstats';
import Browserinfo from './components/Browserinfo/Browserinfo';

export default function ServerInfo() {
  const [serverdata, setServerData] = useState({});

  useEffect(() => {
    (async () => {
        const serverinfo = await getdataApi();
        // console.log(serverinfo)
        setServerData(serverinfo);
        console.log(serverdata);
      })()
    }, []);

  return (
    <>
      <BrowserBreadcrumb />
      <BrowserSIIntro />
      <BrowserSiButtons />
      <BrowserSicurrentstats {...serverdata.data}/>
      <Browserinfo {...serverdata.data}/>
    </>
  )
}
