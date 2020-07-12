import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Masthead = () => {
  return (
    <Layout>
      <Head title="masthead" />
      <p>do you see your work finding its home at dishsoap?</p>
      <p>guidelines & other notes:</p>
      <ol>
        <li>we accept all genres.</li>
        <li>
          simultaneous submissions are fine, but tell us if you get accepted
          elsewhere!
        </li>
        <li>
          send your finely-crafted dishes to dishsoap.mag@gmail.com with the
          subject line [name]-[genre]-[title]. we prefer docx format unless
          you've got some cool formatting to preserve. cover letters are cool;
          please keep your bios short and sweet (>150 words) and when listing
          publications, please list the ones that you feel are most
          representative of your work. long bios will be cut to fit.
        </li>
        <li>
          if your work is accepted for publication, we ask that you credit us as
          its first home when sending it to other places in the future
        </li>
        <li>
          throughout the submissions window, we would prefer it if dishsoap
          could be your pieces’ first home, but we will consider work that has
          been housed elsewhere before. please let us know in your cover letter.
        </li>
        <li>please note that we currently cannot pay our contributors.</li>
        <li>thank you for trusting us.</li>
      </ol>
      <p>
        <strong>poetry.</strong> at most 7 poems per submission & no word limit. <br/>
        <strong>prose.</strong> at most 3 per submission & 5000 words in total.<br/>
        <strong>art.</strong> at most 3 per submission. feel free to attach a brief explanation!<br/>
        <strong>other.</strong> as many as you'd like :).
      </p>
    </Layout>
  )
}

export default Masthead
