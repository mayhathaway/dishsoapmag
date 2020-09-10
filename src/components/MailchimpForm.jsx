// external libs
import React from "react"
// import { graphql} from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp"

// internal stuff

// helpers

// styles & assets

import indexStyles from "../pages/index.module.scss"

class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
    }
  }

  sayThanks = () => {
    const newsletter = document.getElementById("form")
    newsletter.innerHTML = "<div id='newsletter-thanks'>thanks!<div>"
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, { LNAME: this.state.name }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        this.sayThanks()
      })
      .catch(() => {})
  }

  handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        <input
          id="outlined-email-input"
          label="Email"
          type="email" 
          name="email"
          autoComplete="email"
          placeholder="email :)"
          variant="outlined"
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className={indexStyles.button}
        >
          join!
        </button>
      </form>
    )
  }
}

export default MailchimpForm