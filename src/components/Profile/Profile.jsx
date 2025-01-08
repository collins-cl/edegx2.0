import "../Profile/Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="profile-title">My Profile</div>

            <div className="profile-details">
              <div className="section">
                <div className="card">
                  <p>Full name</p>
                  <h3>Collins Collins</h3>
                </div>

                <div className="card">
                  <p>Registration Email</p>
                  <h3>collinsolads@gmail.com</h3>
                </div>

                <div className="card">
                  <p>User ID</p>
                  <h3>UXS12QD</h3>
                </div>

                <div className="card">
                  <p>Phone number</p>
                  <h3>N/A</h3>
                </div>

                <div className="alert">
                  <div className="alrt">
                    <p>!</p>
                  </div>
                  <p className="alert-info">
                    You can only edit your profile picture here. If you need to
                    change your other information here Contact Support
                  </p>
                </div>
              </div>

              <div className="section-2">
                <div className="avatar">
                  <p>CC</p>
                </div>

                <div className="upgrade">Upgrade to Tier 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
