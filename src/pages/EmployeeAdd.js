import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.js'
import Header from '../components/Header.js'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

const EmployeeAdd = () => {
    const [prefix, setPrefix] = useState('');
    const [gender, setGender] = useState('');

    const handlePrefixChange = (e) => {
        const selectedPrefix = e.target.value;
        setPrefix(selectedPrefix);
        if (selectedPrefix === 'Mr') {
            setGender('Male');
        } else if (selectedPrefix === 'Mrs') {
            setGender('Female');
        } else {
            setGender('');
        }
    };

    const handleGenderChange = (e) => {
        const selectedGender = e.target.value;
        setGender(selectedGender);
        if (selectedGender === 'Male') {
            setPrefix('Mr');
        } else if (selectedGender === 'Female') {
            setPrefix('Mrs');
        } else {
            setPrefix('');
        }
    };
    return (
        <main className="nk-body bg-lighter npc-general has-sidebar">
            <div className="nk-app-root">
                <div className="nk-main ">
                    <Sidebar />
                    <div className="nk-wrap ">
                        <Header />
                        <div className="nk-content ">
                            <div className="container-fluid">
                                <div className="nk-content-inner">
                                    <div className="nk-content-body">
                                        <div className="nk-block-head nk-block-head-sm">
                                            <div className="nk-block-between">
                                                <div className="nk-block-head-content">
                                                    <h3 className="nk-block-title page-title">Employee Add</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nk-block">
                                            <div className="card card-bordered">
                                                <div className="card-inner">
                                                    <div className="row">

                                                        <div className="col-12 mt-4">
                                                            <Link to='/employee' className={`btn btn-primary me-2`}>Back</Link>
                                                            <button className='btn btn-primary me-2'>Clear</button>
                                                            <button className='btn btn-primary me-2'>Save</button>
                                                        </div>
                                                        <div className="col-12 mt-1">
                                                            <Tabs
                                                                defaultActiveKey="emp-personal"
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                            >
                                                                <Tab eventKey="emp-personal" title="Employee Personal Info">
                                                                    <div className="row gy-4">
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="company-name">Company Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="location-name">Location Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="department-name">Department Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="cost-center-name">Cost Center Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Employee Code</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Employee Code" readOnly />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-status">Employee Status</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="form-group">
                                                                                <label className="form-label" htmlFor="emp-name">Employee Name</label>
                                                                                <div className="form-control-wrap d-flex">
                                                                                    <div className="form-control-select me-2 w-50">
                                                                                        <select className="form-control" value={prefix} onChange={handlePrefixChange}>
                                                                                            <option>Select</option>
                                                                                            <option value={'Mr'}>Mr</option>
                                                                                            <option value={'Mrs'}>Mrs</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <input type="text" className="form-control me-2" id="emp-name" placeholder="First Name" />
                                                                                    <input type="text" className="form-control me-2" id="emp-name" placeholder="Middle Name" />
                                                                                    <input type="text" className="form-control" id="emp-name" placeholder="Last Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Designation Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Blood Group</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" htmlFor="designation-name">Gender</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="custom-control custom-radio me-2">
                                                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} />
                                                                                        <label className="custom-control-label" htmlFor="customRadio1">Male</label>
                                                                                    </div>
                                                                                    <div className="custom-control custom-radio">
                                                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} />
                                                                                        <label className="custom-control-label" htmlFor="customRadio2">Female</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Section Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Work Location</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Work Location" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Machine Code</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Machine Code" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Address</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Address" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Country Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">State Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">City Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="City Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Pin code</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Pin code" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Phone number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Phone number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Birth Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Birth Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Email Id</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Email Id" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Photo</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="file" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Tab>
                                                                <Tab eventKey="emp-other" title="Employee Other Info">
                                                                    <div className="row gy-4">
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="company-name">Grade</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="location-name">Join Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Join Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="department-name">Category</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="location-name">Group Join Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Group Join Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="cost-center-name">Rate Code</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="cost-center-name">Sub Contractor</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="cost-center-name">Bank Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="cost-center-name">Branch Name</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Account Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Account Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">PF Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="PF Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">GL Code</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="GL Code" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">ESI Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="ESI Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">PAN Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="PAN Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">UAN Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="UAN Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">LIN Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="LIN Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Pension Applicable</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div class="custom-control custom-radio me-2">
                                                                                        <input type="radio" id="customRadio3" name="customRadio1" class="custom-control-input" />
                                                                                        <label class="custom-control-label" for="customRadio3">Yes</label>
                                                                                    </div>
                                                                                    <div class="custom-control custom-radio">
                                                                                        <input type="radio" id="customRadio4" name="customRadio1" class="custom-control-input" />
                                                                                        <label class="custom-control-label" for="customRadio4">No</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Medical Policy Number</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Medical Policy Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">UID Number (Aadhaar)</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="UID Number (Aadhaar)" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Total experience</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Total experience" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="emp-code">Retirement Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Retirement Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Weekly Off</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Reporting to</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Uniform</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Shoe</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Bus</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Pick Up Point</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Select</option>
                                                                                            <option>Option 1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Probation Period</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Probation Period" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Probation Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Probation Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Notice Period</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Notice Period" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Technical/Non-Technical</label>
                                                                                <div className="form-control-wrap">
                                                                                    <div className="form-control-select">
                                                                                        <select className="form-control">
                                                                                            <option>Technical</option>
                                                                                            <option>Non-Technical</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Confirmation Date</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Confirmation Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Working Hours</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="text" className="form-control" id="emp-code" placeholder="Working Hours" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Active</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="checkbox" name="" id="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label className="form-label" for="designation-name">Union Member</label>
                                                                                <div className="form-control-wrap">
                                                                                    <input type="checkbox" name="" id="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Tab>
                                                            </Tabs>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default EmployeeAdd