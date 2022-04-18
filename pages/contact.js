import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";

export default function About() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>EliWeb-Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/favicon.svg" />
      </Head>

      <Nav />

      <main>
        <h1>Contact Us</h1>

        <div><b>Email: </b> info@eliweb.me</div> 
        <div><b>Phone Number: </b> 657555555</div>
      
            <section className='contact'>
            <form id="form" >   
                <div >     
                    <input  type="text" placeholder="Your Name" id="name" minLength="2" required></input>
                    <input  type="email" placeholder="Your Email" id="email"  className='email'></input>
                </div> 
                <textarea placeholder="Your message" id="message"  minLength="3" required></textarea>
                <br/>
                <button type="submit" >Submit</button>
            </form>  
            </section>

      </main>
      <Footer/>
    </div>
  );
}
