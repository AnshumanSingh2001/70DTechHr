import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarSlice';

const Header = () => {
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleNoti, setToggleNoti] = useState(false);
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };
    return (
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ms-n1">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu" onClick={handleToggleSidebar}><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="#" className="logo-link">
                            <img className="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark" />
                        </a>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown user-dropdown">
                                <a href="#" className={`dropdown-toggle ${toggleProfile ? 'show' : ''}`} data-bs-toggle="dropdown" onClick={() => setToggleProfile(!toggleProfile)}>
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt"></em>
                                        </div>
                                        <div className="user-info d-none d-md-block">
                                            <div className="user-status">Welcome</div>
                                            <div className="user-name dropdown-indicator">Admin</div>
                                        </div>
                                    </div>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 ${toggleProfile ? 'show' : ''}`} style={toggleProfile ? { position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(-9.6px, 38.4px, 0px)' } : {}}>
                                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                                <span>A</span>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">Admin</span>
                                                <span className="sub-text">Admin@.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="#"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                            <li><a href="#"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown notification-dropdown me-n1">
                                <a href="#" className={`dropdown-toggle nk-quick-nav-icon ${toggleNoti ? 'show' : ''}`} data-bs-toggle="dropdown" onClick={() => setToggleNoti(!toggleNoti)}>
                                    <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1 ${toggleNoti ? 'show' : ''}`} style={toggleNoti ? { position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(-9.6px, 38.4px, 0px)' } : {}}>
                                    <div className="dropdown-head">
                                        <span className="sub-title nk-dropdown-title">Notifications</span>
                                        <a href="#">Mark All as Read</a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="nk-notification">
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                    <div className="nk-notification-time">2 hrs ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-foot center">
                                        <a href="#">View All</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header