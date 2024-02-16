import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.js'
import Header from '../components/Header.js'
import { Link } from 'react-router-dom';

const Employee = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName === activeButton ? null : buttonName);
    };

    const isActive = (buttonName) => buttonName === activeButton;

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
                                                    <h3 className="nk-block-title page-title">Employee</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nk-block">
                                            <div className="card card-bordered">
                                                <div className="card-inner">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p className='lead'>Search</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-control-wrap">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="Enter Employee Code" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-outline-primary btn-dim">Employee Code</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mt-4">
                                                            <div className="row">
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <Link to='/employee-add' className={`btn btn-primary me-2 mb-2 w-100 justify-content-center`}>Add</Link>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <Link to='/employee-add' className={`btn btn-primary me-2 mb-2 w-100 justify-content-center`}>Modify</Link>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>Employee Transfer</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>Qualification Details</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>Shift Pattern</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>OT Rules</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>Family Details</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>OT-COFF Rule</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className='btn btn-primary me-2 mb-2 w-100 justify-content-center'>Approval Matrix</button>
                                                                </div>
                                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                                    <button className={`btn btn-primary me-2 mb-2 w-100 justify-content-center ${isActive('View All') ? 'active' : ''}`} onClick={() => handleButtonClick('View All')}>View All</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {isActive('View All') && <div className="col-12 mt-4">
                                                            <div className='table-responsive'>
                                                                <table className='table table-bordered'>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Id</th>
                                                                            <th>First Name</th>
                                                                            <th>Last Name</th>
                                                                            <th>Company Name</th>
                                                                            <th>Location Name</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Ash</td>
                                                                            <td>Jenkins</td>
                                                                            <td>Apple</td>
                                                                            <td>California</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>}
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
export default Employee