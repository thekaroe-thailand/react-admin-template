import React from 'react';

function Footer() {
    return (
        <>
        <footer className="main-footer">
    <div className="pull-right hidden-xs">
      <b>Version</b> 2.4.18
    </div>
    <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
    reserved.
  </footer>

  <aside className="control-sidebar control-sidebar-dark" style={{ display: 'none'}}>
    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
      <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane" id="control-sidebar-home-tab">
        <h3 className="control-sidebar-heading">Recent Activity</h3>
        <ul className="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-birthday-cake bg-red"></i>

              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                <p>Will be 23 on April 24th</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-user bg-yellow"></i>

              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>

                <p>New phone +1(800)555-1234</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>

              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>

                <p>nora@example.com</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="menu-icon fa fa-file-code-o bg-green"></i>

              <div className="menu-info">
                <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>

                <p>Execution time 5 seconds</p>
              </div>
            </a>
          </li>
        </ul>

        <h3 className="control-sidebar-heading">Tasks Progress</h3>
        <ul className="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <h4 className="control-sidebar-subheading">
                Custom Template Design
                <span className="label label-danger pull-right">70%</span>
              </h4>

              <div className="progress progress-xxs">
                <div className="progress-bar progress-bar-danger" style={{width: '70%'}}></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 className="control-sidebar-subheading">
                Update Resume
                <span className="label label-success pull-right">95%</span>
              </h4>

              <div className="progress progress-xxs">
                <div className="progress-bar progress-bar-success" style={{width: '95%'}}></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 className="control-sidebar-subheading">
                Laravel Integration
                <span className="label label-warning pull-right">50%</span>
              </h4>

              <div className="progress progress-xxs">
                <div className="progress-bar progress-bar-warning" style={{width: '50%'}}></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 className="control-sidebar-subheading">
                Back End Framework
                <span className="label label-primary pull-right">68%</span>
              </h4>

              <div className="progress progress-xxs">
                <div className="progress-bar progress-bar-primary" style={{width: '68%'}}></div>
              </div>
            </a>
          </li>
        </ul>

      </div>
      <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
      <div className="tab-pane" id="control-sidebar-settings-tab">
        <form method="post">
          <h3 className="control-sidebar-heading">General Settings</h3>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Report panel usage
              <input type="checkbox" className="pull-right" checked />
            </label>

            <p>
              Some information about this general settings option
            </p>
          </div>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Allow mail redirect
              <input type="checkbox" className="pull-right" checked />
            </label>

            <p>
              Other sets of options are available
            </p>
          </div>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Expose author name in posts
              <input type="checkbox" className="pull-right" checked />
            </label>

            <p>
              Allow the user to show his name in blog posts
            </p>
          </div>

          <h3 className="control-sidebar-heading">Chat Settings</h3>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Show me as online
              <input type="checkbox" className="pull-right" checked />
            </label>
          </div>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Turn off notifications
              <input type="checkbox" className="pull-right" />
            </label>
          </div>

          <div className="form-group">
            <label className="control-sidebar-subheading">
              Delete chat history
              <a href="javascript:void(0)" className="text-red pull-right"><i className="fa fa-trash-o"></i></a>
            </label>
          </div>
        </form>
      </div>
    </div>
  </aside>
  <div className="control-sidebar-bg"></div>
        </>
    )
}

export default Footer;