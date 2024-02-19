import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectSidebarState, toggleSidebar } from '../redux/sidebarSlice';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


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
            </div>
            <div className="nk-sidebar-element nk-sidebar-body">
                <div className="nk-sidebar-content">
                    <SimpleBar style={{ maxHeight: '100%', color: 'white' }}>
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
                                        <span className="nk-menu-icon"><em className="icon ni ni-users-fill"></em></span>
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
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">EmployeeStatus</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Location</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Department</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Designation</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Section</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Grade</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/country" className="nk-menu-link"><span className="nk-menu-text">Country</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">State</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Cost Center</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Sub Contract</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Bank</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Branch</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Leave Master</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Blood Group Master</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text"></span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Freeze Transaction(Travel Expense) </span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Financial Year</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Bus</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Holiday(Compulsory)</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Holiday Mapping</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Shoes</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Uniform</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Medical Insurance Details</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Shift</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Employee Category</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Leave Combination</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">OT Rule</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">OT Slab</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Roles</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Upload Multiple Photo</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Resign Type Master</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Salary Component</span></Link>
                                        </li>
                                        <li className="nk-menu-item">
                                            <Link to="/employee" className="nk-menu-link"><span className="nk-menu-text">Salary Component Details</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link">
                                    <span className="nk-menu-icon"><em className="icon ni ni-user-list-fill"></em></span>
                                    <span className="nk-menu-text">User Role</span>
                                </a>
                            </li> */}
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
                                </li>
                            </ul>
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}
export default Sidebar