import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (

    <div className="dengcontainer">
      <Head>
        <title>BYE BYE DENG</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

        <div className="dengcontainer2">
      <img className="dengimage" src="https://lh3.googleusercontent.com/RnMqPUyUCDy8hus5ElvqU5jOjGWEuw_q4t2LjRKJUEB-6K_YAYgRH_X9bWPRbCGEdSm9t2gafh_9xDNlBhvdOC6n-Y9Jj5HC0JysUWU=w600" />
        </div>
    
          <a className="denglink" href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/46070014432019865234053906931457523796796472796958872296696882100657713053697">&lt;get the nft&gt;</a>
        
          <script type="text/javascript" src="/main.js"></script>
    </div>
  )
}
