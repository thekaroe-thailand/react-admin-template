import React from 'react';

function ContentBody() {
    return (
        <>
            <section className="content">
                <div className="row">
                    <div className="col-lg-3 col-xs-6">

                        <div className="small-box bg-aqua">
                            <div className="inner">
                                <h3>150</h3>

                                <p>New Orders</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">

                        <div className="small-box bg-green">
                            <div className="inner">
                                <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>

                                <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6">

                        <div className="small-box bg-yellow">
                            <div className="inner">
                                <h3>44</h3>

                                <p>User Registrations</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6">

                        <div className="small-box bg-red">
                            <div className="inner">
                                <h3>65</h3>

                                <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-pie-graph"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <section className="col-lg-7 connectedSortable">
                        <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs pull-right">
                                <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
                                <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
                                <li className="pull-left header"><i className="fa fa-inbox"></i> Sales</li>
                            </ul>
                            <div className="tab-content no-padding">
                                <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: '300px' }}></div>
                                <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: '300px' }}></div>
                            </div>
                        </div>

                        <div className="box box-success">
                            <div className="box-header">
                                <i className="fa fa-comments-o"></i>

                                <h3 className="box-title">Chat</h3>

                                <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                                    <div className="btn-group" data-toggle="btn-toggle">
                                        <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body chat" id="chat-box">
                                <div className="item">
                                    <img src="dist/img/user4-128x128.jpg" alt="user image" className="online" />

                                    <p className="message">
                                        <a href="#" className="name">
                                            <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                                            Mike Doe
                                        </a>
                                        I would like to meet you to discuss the latest news about
                                        the arrival of the new theme. They say it is going to be one the
                                        best themes on the market
                                    </p>
                                    <div className="attachment">
                                        <h4>Attachments:</h4>

                                        <p className="filename">
                                            Theme-thumbnail-image.jpg
                                        </p>

                                        <div className="pull-right">
                                            <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">
                                    <img src="dist/img/user3-128x128.jpg" alt="user image" className="offline" />

                                    <p className="message">
                                        <a href="#" className="name">
                                            <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:15</small>
                                            Alexander Pierce
                                        </a>
                                        I would like to meet you to discuss the latest news about
                                        the arrival of the new theme. They say it is going to be one the
                                        best themes on the market
                                    </p>
                                </div>

                                <div className="item">
                                    <img src="dist/img/user2-160x160.jpg" alt="user image" className="offline" />

                                    <p className="message">
                                        <a href="#" className="name">
                                            <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:30</small>
                                            Susan Doe
                                        </a>
                                        I would like to meet you to discuss the latest news about
                                        the arrival of the new theme. They say it is going to be one the
                                        best themes on the market
                                    </p>
                                </div>

                            </div>

                            <div className="box-footer">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Type message..." />

                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-success"><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box box-primary">
                            <div className="box-header">
                                <i className="ion ion-clipboard"></i>

                                <h3 className="box-title">To Do List</h3>

                                <div className="box-tools pull-right">
                                    <ul className="pagination pagination-sm inline">
                                        <li><a href="#">&laquo;</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="todo-list">
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>

                                        <input type="checkbox" value="" />
                                        <span className="text">Design a nice theme</span>
                                        <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>
                                        <input type="checkbox" value="" />
                                        <span className="text">Make the theme responsive</span>
                                        <small className="label label-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>
                                        <input type="checkbox" value="" />
                                        <span className="text">Let theme shine like a star</span>
                                        <small className="label label-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>
                                        <input type="checkbox" value="" />
                                        <span className="text">Let theme shine like a star</span>
                                        <small className="label label-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>
                                        <input type="checkbox" value="" />
                                        <span className="text">Check your messages and notifications</span>
                                        <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fa fa-ellipsis-v"></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </span>
                                        <input type="checkbox" value="" />
                                        <span className="text">Let theme shine like a star</span>
                                        <small className="label label-default"><i className="fa fa-clock-o"></i> 1 month</small>
                                        <div className="tools">
                                            <i className="fa fa-edit"></i>
                                            <i className="fa fa-trash-o"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box-footer clearfix no-border">
                                <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
                            </div>
                        </div>

                        <div className="box box-info">
                            <div className="box-header">
                                <i className="fa fa-envelope"></i>

                                <h3 className="box-title">Quick Email</h3>
                                <div className="pull-right box-tools">
                                    <button type="button" className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip"
                                        title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="emailto" placeholder="Email to:" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                    </div>
                                    <div>
                                        <textarea className="textarea" placeholder="Message"
                                            style={{ width: '100%', height: '125px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px;' }}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="box-footer clearfix">
                                <button type="button" className="pull-right btn btn-default" id="sendEmail">Send
                                    <i className="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </div>

                    </section>
                    <section className="col-lg-5 connectedSortable">

                        <div className="box box-solid bg-light-blue-gradient">
                            <div className="box-header">
                                <div className="pull-right box-tools">
                                    <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip"
                                        title="Date range">
                                        <i className="fa fa-calendar"></i></button>
                                    <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse"
                                        data-toggle="tooltip" title="Collapse" style={{ marginRight: '5px' }}>
                                        <i className="fa fa-minus"></i></button>
                                </div>

                                <i className="fa fa-map-marker"></i>

                                <h3 className="box-title">
                                    Visitors
                                </h3>
                            </div>
                            <div className="box-body">
                                <div id="world-map" style={{ height: '250px', width: '100%' }}></div>
                            </div>
                            <div className="box-footer no-border">
                                <div className="row">
                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                        <div id="sparkline-1"></div>
                                        <div className="knob-label">Visitors</div>
                                    </div>
                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                        <div id="sparkline-2"></div>
                                        <div className="knob-label">Online</div>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <div id="sparkline-3"></div>
                                        <div className="knob-label">Exists</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box box-solid bg-teal-gradient">
                            <div className="box-header">
                                <i className="fa fa-th"></i>

                                <h3 className="box-title">Sales Graph</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="box-body border-radius-none">
                                <div className="chart" id="line-chart" style={{ height: '250px' }}></div>
                            </div>
                            <div className="box-footer no-border">
                                <div className="row">
                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                        <input type="text" className="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                                            data-fgColor="#39CCCC" />

                                        <div className="knob-label">Mail-Orders</div>
                                    </div>
                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                        <input type="text" className="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                                            data-fgColor="#39CCCC" />

                                        <div className="knob-label">Online</div>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <input type="text" className="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                                            data-fgColor="#39CCCC" />

                                        <div className="knob-label">In-Store</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box box-solid bg-green-gradient">
                            <div className="box-header">
                                <i className="fa fa-calendar"></i>

                                <h3 className="box-title">Calendar</h3>
                                <div className="pull-right box-tools">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bars"></i></button>
                                        <ul className="dropdown-menu pull-right" role="menu">
                                            <li><a href="#">Add new event</a></li>
                                            <li><a href="#">Clear events</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">View calendar</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="box-body no-padding">
                                <div id="calendar" style={{ width: '100%' }}></div>
                            </div>
                            <div className="box-footer text-black">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="clearfix">
                                            <span className="pull-left">Task #1</span>
                                            <small className="pull-right">90%</small>
                                        </div>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-green" style={{ width: '90%' }}></div>
                                        </div>

                                        <div className="clearfix">
                                            <span className="pull-left">Task #2</span>
                                            <small className="pull-right">70%</small>
                                        </div>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-green" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="clearfix">
                                            <span className="pull-left">Task #3</span>
                                            <small className="pull-right">60%</small>
                                        </div>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-green" style={{ width: '60%' }}></div>
                                        </div>

                                        <div className="clearfix">
                                            <span className="pull-left">Task #4</span>
                                            <small className="pull-right">40%</small>
                                        </div>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-green" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </section>
        </>
    )
}

export default ContentBody;