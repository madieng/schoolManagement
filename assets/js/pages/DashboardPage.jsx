import React from "react";
require("../../css/dashboard.css");
const DashboardPage = props => {
  return (
    <div className="dashboard justify-content-between align-items-center border-bottom w-100">
      <h1 className="h2">&nbsp;</h1>
      <div className="card border-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Primary card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-secondary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Secondary card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-success mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Success card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-danger mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Danger card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-warning mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Warning card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-info mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Info card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-light mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Light card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-dark mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Dark card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
