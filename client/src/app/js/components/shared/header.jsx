import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/users';
import { Link } from 'react-router';

const headerContainerStyles = {
  borderBottom: '1px solid #E1E1E1',
  marginBottom: '20px'
};

const brandStyles = {
  fontSize: '20px',
  fontWeight: 'bold',
  textDecoration: 'none'
};

const ulStyles = {
  listStyle: 'none',
  padding: '0px',
  float: 'right',
  margin: '0px'
};

const liStyles = {
  display: 'inline-block',
  marginLeft: '10px'
};

class Header extends Component {
  handleSignOutClick(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div style={headerContainerStyles}>
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <Link to="/" style={brandStyles}>Discuss</Link>
              <ul style={ulStyles}>
                {currentUser ? (
                <li>{currentUser.email} ● <a href='#' onClick={this.handleSignOutClick.bind(this)}>Sign out</a></li>
                ) :
                  <div>
                    <li style={liStyles}>
                      <Link to="/sign-up">Sign up</Link>
                    </li>
                    <li style={liStyles}>
                      <Link to="/sign-in">Sign in</Link>
                    </li>
                  </div>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { currentUser } }) => ({ currentUser });

export default connect(mapStateToProps, { signOut })(Header);
