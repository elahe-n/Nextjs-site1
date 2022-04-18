import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";


export default function Home() {
  return (
    // CSS Modules: style specific to a page or component
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Nav />

      <main>
        <h1>Web Design and Development</h1>
        <br/>
        <div>
        <Image
          className="avatar"
          src="/img/photo.jpg"
          alt=""
          width="100"
          height="100"
        />
        </div>

        <p>
        EliWeb is a web development and design company. We provide best services in website development, design, support, domain and hosting and CEO strategies to our customers according to their requirements. We help our customers to introduce their services and products easier and facilitate their sale process to have rise in sale.  
        <br/>We are committed to offer our services at reasonable price and deliver them according to your needs at the agreed time.
        </p>

        <div className='example-list'>
      <div className='strongTitle'>Examples of my work...</div> 

      <div className='example-list-item' >
         <a href="https://elahe-n.github.io/Quote-Generator/" target="blank">
         <Image
          className="example-img"
          src="/img/quote.png"
          alt=""
          width="400"
          height="200"
        />
         </a>
         <div>
         <a href="https://elahe-n.github.io/Quote-Generator/" target="blank"><h3>Quote Generator</h3> </a>
           <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching quotes</p>
         </div>
      </div>

      <div className='example-list-item' >
        <a href="https://elahe-n.github.io/hobby/" target="blank">
        <Image
          className="example-img"
          src="/img/hobby.png"
          alt=""
          width="400"
          height="300"
        />
        </a>

        <div>
        <a href="https://elahe-n.github.io/hobby/" target="blank"><h3>Hobby Information</h3></a>
          <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching Hobby information.</p>
        </div>
      </div>
     
      <div className='example-list-item'> 
          <a href="https://elahe-n.github.io/unsplash-galley-infinite-scroll/" target="blank">
          <Image
          className="example-img"
          src="/img/unsplash.png"
          alt=""
          width="400"
          height="300"
        />
          </a>
          <div>
          <a href="https://elahe-n.github.io/unsplash-galley-infinite-scroll/" target="blank"> <h3>Unsplash Image Loader</h3></a>
            <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching images from Unsplash.</p>
          </div>
      </div>

      <div className='example-list-item'>
          <a href="https://elahe-n.github.io/NASAPictures/" target="blank">
          <Image
          className="example-img"
          src="/img/nasa.png"
          alt=""
          width="400"
          height="300"
        />
          </a>
          <div>
          <a href="https://elahe-n.github.io/NASAPictures/" target="blank"><h3>Nasa Picture of Day</h3></a>
            <p>This site has been developed and designed with HTML, CSS, and Java Script. <br/>The Data of the users' feedback is being stored in Firebase database. It also fetches an api from NASAPOD api </p>
          </div>
      </div>

      <div className='example-list-item' >
        <a href="https://elahe-n.github.io/#" target="blank"> 
        <Image
          className="example-img"
          src="/img/elsite.png"
          alt=""
          width="400"
          height="300"
        />
        </a>
        <div>
        <a href="https://elahe-n.github.io/#" target="blank">  <h3>Resume Site</h3></a>
          <p>This site has been developed and designed with HTML, CSS, Java Script and React.</p>
        </div>
      </div>
     
    </div>
      </main>
      <Footer/>
    </div>
  );
}
