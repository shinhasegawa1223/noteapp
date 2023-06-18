import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button>Add</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-notetitle">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Note is Detail</p>
          <small>UpdateDate:xxxxxx</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
