import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"

import indexStyles from "../pages/index.module.scss"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result })
  }
  handleChange = event => {
    this.setState({ email: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
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
        <br />
        <button
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
          className={indexStyles.button}
        >
          join!
        </button>
      </form>
    )
  }
}
