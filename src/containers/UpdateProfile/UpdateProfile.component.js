import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import SectionHeader from 'components/SectionHeader';
import ProfileDetails from 'components/ProfileDetails';
import Password from 'components/Password';
import PropTypes from 'prop-types';
import { getCustomer } from 'api';
import MyAccountError from 'components/MyAccountError';
import MyAccountConsents from 'components/MyAccountConsents';
import { WrapStyled } from './UpdateProfileStyled';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsError: [],
      isUserDetailsLoading: false,
      isConsentLoading: false
    };
  }

  componentDidMount() {
    const { userProfile, setCurrentUser } = this.props;
    if (!userProfile.user) {
      this.setState({
        isUserDetailsLoading: true
      });
      getCustomer()
        .then(response => {
          if (response.errors.length) {
            this.setState({
              detailsError: response.errors
            });
          } else {
            setCurrentUser(response.responseData);
          }
          this.setState({
            isUserDetailsLoading: false
          });
        })
        .catch(err => {
          this.setState({ detailsError: [err], isUserDetailsLoading: false });
        });
    }
  }

  render() {
    const { detailsError, isUserDetailsLoading, isConsentLoading } = this.state;
    const {
      userProfile: { user, consents, consentsError },
      setConsents,
      showPopup,
      setCurrentUser,
      t
    } = this.props;
    return (
      <WrapStyled>
        <SectionHeader marginTop="0">{t('Profile details')}</SectionHeader>
        {detailsError.length !== 0 ? (
          <MyAccountError generalError />
        ) : (
          <>
            <ProfileDetails
              firstName={user ? user.firstName : ''}
              lastName={user ? user.lastName : ''}
              email={user ? user.email : ''}
              isLoading={isUserDetailsLoading}
              setCurrentUser={setCurrentUser}
            />
            <SectionHeader>{t('Password')}</SectionHeader>
            <Password showPopup={showPopup} />
          </>
        )}

        <SectionHeader> {t('Terms Details')}</SectionHeader>
        {consentsError.length !== 0 ? (
          <MyAccountError generalError />
        ) : (
          <MyAccountConsents
            consents={consents}
            isLoading={isConsentLoading}
            setConsents={setConsents}
          />
        )}
      </WrapStyled>
    );
  }
}

UpdateProfile.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  setConsents: PropTypes.func.isRequired,
  consentsError: PropTypes.string,
  userProfile: PropTypes.objectOf(PropTypes.any),
  showPopup: PropTypes.func.isRequired,
  t: PropTypes.func
};

UpdateProfile.defaultProps = {
  userProfile: { user: null },
  consentsError: '',
  t: k => k
};

export { UpdateProfile as PureUpdateProfile };

export default withTranslation()(labeling()(UpdateProfile));