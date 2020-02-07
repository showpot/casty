import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Container } from 'reactstrap';

import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import logoSm from '../assets/images/logo-sm.png';
import logo from '../assets/images/logo-dark.png';
import profilePic from '../assets/images/users/user-1.jpg';


const Notifications = [{
  id: 1,
  text: 'Caleb Flakelar commented on Admin',
  subText: '1 min ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'primary'
},
{
  id: 2,
  text: 'New user registered.',
  subText: '5 min ago',
  icon: 'mdi mdi-account-plus',
  bgColor: 'info'
},
{
  id: 3,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'success'
},
{
  id: 4,
  text: 'Caleb Flakelar commented on Admin',
  subText: '2 days ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'danger'
},
{
  id: 5,
  text: 'Caleb Flakelar commented on Admin',
  subText: '1 min ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'primary'
},
{
  id: 6,
  text: 'New user registered.',
  subText: '5 min ago',
  icon: 'mdi mdi-account-plus',
  bgColor: 'info'
},
{
  id: 7,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'success'
},
{
  id: 8,
  text: 'Caleb Flakelar commented on Admin',
  subText: '2 days ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'danger'
}];

const ProfileMenus = [{
  label: 'My Account',
  icon: 'fe-user',
  redirectTo: "/",
},
{
  label: 'Settings',
  icon: 'fe-settings',
  redirectTo: "/"
},
{
  label: 'Lock Screen',
  icon: 'fe-lock',
  redirectTo: "/"
},
{
  label: 'Logout',
  icon: 'fe-log-out',
  redirectTo: "/logout",
  hasDivider: true
}]


class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.Fragment>
        <div className="navbar-custom">
          <Container fluid>
            <ul className="list-unstyled topnav-menu float-right mb-0">

            <li className="dropdown notification-list">
                <Link className={classNames('navbar-toggle', 'nav-link', {'open': this.props.isMenuOpened})} to="#" onClick={this.props.menuToggle}>
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </li>

              <li className="d-none d-sm-block">
                <form className="app-search">
                  <div className="app-search-box">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <i className="fe-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </li>

              <li>
                <NotificationDropdown notifications={Notifications} />
              </li>

              <li>
                <ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={'Nik Patel'} />
              </li>


              <li className="dropdown notification-list">
                <button className="btn btn-link nav-link right-bar-toggle waves-effect waves-light" onClick={this.props.rightSidebarToggle}>
                  <i className="fe-settings noti-icon"></i>
                </button>
              </li>
            </ul>

            <div className="logo-box">
              <Link to="/" className="logo text-center">
                <span className="logo-lg">
                 <h1>Casty</h1>
                </span>
                <span className="logo-sm">
                <h1>Casty</h1>
                </span>
              </Link>
            </div>

            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
              <li className="dropdown d-none d-lg-block">
                <UncontrolledDropdown>
                  <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-link nav-link dropdown-toggle waves-effect waves-light">
                    Create New
                    <i className="mdi mdi-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    <Link to="/" className="dropdown-item">
                      <i className="fe-briefcase mr-1"></i>
                      <span>New Projects</span>
                    </Link>
                    <Link to="/" className="dropdown-item">
                      <i className="fe-user mr-1"></i>
                      <span>Create Users</span>
                    </Link>
                    <Link to="/" className="dropdown-item">
                      <i className="fe-bar-chart-line- mr-1"></i>
                      <span>Revenue Report</span>
                    </Link>
                    <Link to="/" className="dropdown-item">
                      <i className="fe-settings mr-1"></i>
                      <span>Settings</span>
                    </Link>
                    <DropdownItem divider />
                    <Link to="/" className="dropdown-item">
                      <i className="fe-headphones mr-1"></i>
                      <span>Help & Support</span>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </Container>
        </div>
      </React.Fragment >
    );
  }
}


export default connect()(Topbar);

