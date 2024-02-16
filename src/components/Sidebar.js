import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectSidebarState, toggleSidebar } from '../redux/sidebarSlice';
import logo from '../assets/img/logo.jpg'

const Sidebar = () => {
    const [isCompact, setIsCompact] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const { isOpen } = useSelector(selectSidebarState);
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    const toggleCompact = () => setIsCompact(!isCompact);

    const toggleSubMenu = (index) => {
        if (activeSubMenu === index) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(index);
        }
    };

    return (
        <div className={`nk-sidebar nk-sidebar-fixed is-dark ${isCompact ? 'is-compact' : ''} ${isOpen ? 'nk-sidebar-active' : ''}`} data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-menu-trigger">
                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu" onClick={handleToggleSidebar}><em className="icon ni ni-arrow-left"></em></a>
                    <a href="#" className={`nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex ${isCompact ? 'compact-active' : ''}`} data-target="sidebarMenu" onClick={toggleCompact}><em className="icon ni ni-menu"></em></a>
                </div>
                <div className="nk-sidebar-brand">
                    <Link to="/dashboard" className="logo-link nk-sidebar-logo">
                        <img className="logo-light logo-img" src={logo} srcset="./images/logo2x.png 2x" alt="logo" />
                        <img className="logo-dark logo-img" src={logo} srcset="./images/logo-dark2x.png 2x" alt="logo-dark" />
                    </Link>
                </div>
            </div>
            <div className="nk-sidebar-element nk-sidebar-body">
                <div className="nk-sidebar-content">
                    <div className="nk-sidebar-menu" data-simplebar>
                        <ul className="nk-menu">
                            <li className="nk-menu-item">
                                <Link to="/dashboard" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill"></em></span>
                                    <span className="nk-menu-text">Dashboard</span>
                                </Link>
                            </li>
                            <li className={`nk-menu-item ${activeSubMenu === 1 ? 'active' : ''} has-sub`}>
                                <a href="#" className="nk-menu-link nk-menu-toggle" onClick={() => toggleSubMenu(1)}>
                                    <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                    <span className="nk-menu-text">Admin</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a href="#" className="nk-menu-link"><span className="nk-menu-text">User Admin</span></a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="#" className="nk-menu-link"><span className="nk-menu-text">Menu Master</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nk-menu-item ${activeSubMenu === 2 ? 'active' : ''} has-sub`}>
                                <a href="#" className="nk-menu-link nk-menu-toggle" onClick={() => toggleSubMenu(2)}>
                                    <span className="nk-menu-icon"><em className="icon ni ni-layers-fill"></em></span>
                                    <span className="nk-menu-text">Master</span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Employee</span></Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-user-list-fill"></em></span>
                                    <span className="nk-menu-text">User Role</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-calendar-check-fill"></em></span>
                                    <span className="nk-menu-text">Attendance</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-notice"></em></span>
                                    <span className="nk-menu-text">Leave</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar