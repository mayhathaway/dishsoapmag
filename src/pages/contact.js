import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import layoutStyles from "../components/layout.module.scss"
import indexStyles from "./index.module.scss"
import contactStyles from "./contact.module.scss"
import MobileNav from "../components/mobileNav"


const ContactPage = () => {
  return (
    <>
      <MobileNav />
      <Nav />
      <Subheader title="reach us over the soap suds!" />
      <Layout>
        <Head title="contact" />
        <div className={contactStyles.contactForm}>
          <form
            name="contact"
            action="https://getform.io/f/amdyxpgb"
            method="POST"
          >
            <div className={contactStyles.formContainer}>
              <div className={contactStyles.side}>
                <label>
                  <p>email*</p>{" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="soapluvr@gmail.com"
                  />
                </label>
              </div>
              <div className={contactStyles.side}>
                <label>
                  <p>full name*</p>{" "}
                  <input type="text" name="name" placeholder="Soapy McSoapface" />
                </label>
              </div>
            </div>
            <div>
              <label>
                <p>type your message here..</p>{" "}
                <textarea
                  placeholder="I love dumping copious amounts of dish soap on..."
                  name="message"
                  className={contactStyles.boxsizingBorder}
                ></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className={indexStyles.button}>
                contact!
              </button>
            </div>
          </form>
        </div>
        <div className={layoutStyles.pinkLineBottom}></div>
        <div className={contactStyles.quote}>
          <h1 className={contactStyles.quoteText}>
            "friends don't leave friends behind to wash dishes for yetis!"
          </h1>
          <h1 className={contactStyles.author}>- philip reeve</h1>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
