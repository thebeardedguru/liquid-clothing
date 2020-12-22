import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;


    emailSignInStart(email, password);
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props;
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="password"
            handleChange={this.handleChange}
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {' '}
              SIGN IN WITH GOOGLE{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
