import React from 'react'
import { css } from 'glamor';

class CreateEntrepreneur extends React.Component {
  state = {
    firstName: '', lastName: '', email: '', password: '', jobPosition: ''
  }
  CreateEntrepreneur = () => {
    if (
      this.state.firstName === '' || this.state.lastname === '' || this.state.email === '' || this.state.password === '' || this.state.jobPosition === ''
    ) return
    this.props.CreateEntrepreneur(this.state)
    this.props.closeModal()
  }
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { closeModal } = this.props
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.form)}>
          <input
            placeholder='First Name'
            {...css(styles.input)}
            firstName='First Name'
            onChange={this.onChange}
            />
          <input
            placeholder='Last Name'
            {...css(styles.input)}
            lastName='Last Name'
            onChange={this.onChange}
            />
          <input
            placeholder='Email'
            {...css(styles.input)}
            email='Email'
            onChange={this.onChange}
            />
          <input
            placeholder='Password'
            {...css(styles.input)}
            password='Password'
            onChange={this.onChange}
            />
          <input
            placeholder='Job Position'
            {...css(styles.input)}
            jobPosition='Job Position'
            onChange={this.onChange}
            />
        </div>
        <div
            onClick={this.CreateEntrepreneur}
              {...css(styles.button)}
          >
            <p
              {...css(styles.buttonText)}
            >Submit</p>
        </div>
        <div
          {...css([styles.button, { backgroundColor: '#555'}])}
          onClick={closeModal}
        >
            <p
              {...css(styles.buttonText)}
              >Cancel</p>
        </div>
      </div>
    )
  }
}

export default CreateEntrepreneur
