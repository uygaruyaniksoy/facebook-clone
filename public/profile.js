const id = parseInt(window.location.pathname.substr(1));

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        image: {},
        friends: [],
      },
      visitor: !isNaN(id),
    };

    this.setPP = this.setPP.bind(this);
    this.fetchSelf = this.fetchSelf.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  componentWillMount() {
    this.fetchSelf();
    this.fetchUsers();
  }

  fetchUsers() {
    client.login().then(() => {
      db.collection('users').find().limit(100).execute().then((users) => this.setState(
        { users },
      ));
    });
  }

  fetchSelf() {
    client.login().then(() => {
      db.collection('users')
        .find({id: this.state.visitor ? id : parseInt(localStorage.getItem('facebook-clone-id'))})
        .limit(100)
        .execute()
        .then((a) => a[0] && this.setState(
          { user: a[0] },
          () => this.state.user.friends.forEach((f, i) => db.collection('users')
            .findOne({id: f})
            .then(friend => this.setState({
              user: Object.assign(
                {},
                this.state.user,
                { friends: [...this.state.user.friends.slice(0, i), friend, ...this.state.user.friends.slice(i + 1)] }
              ),
            }))
          )
        ));
    });
  }

  setPP(p) {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {image: p, pictures: this.state.user.pictures.filter(a => a !== p).concat(this.state.user.image)}}
    ).then(this.fetchSelf);
  }

  uploadPicture() {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {pictures: this.state.user.pictures.concat(this.state.imageLink)}}
    ).then(this.fetchSelf);
  }

  addFriend() {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {friends: this.state.user.friends.map(u => u.id).concat(this.state.friendId)}}
    ).then(this.fetchSelf);
  }

  render() {
    return (
      <div>
        <div className="offset-2 col-8" style={{
          marginTop: 100,
          backgroundColor: 'red',
        }}>
          <div className="row">
            <div
              className="col-4"
              style={{
                backgroundColor: 'blue'
              }}
            >
              <div
                style={{
                  height: 200,
                }}
              >
                <h2>
                  {`${this.state.user.name} ${this.state.user.surname}`}
                </h2>
                <img src={this.state.user.image.url} style={{ width: 150, height: 150 }}/>
              </div>
              <div
                style={{
                  minHeight: 200,
                }}
              >
                <h2>
                  Pictures
                </h2>
                <div className="row">
                  <div className="col-6">
                    <img className="card" src={this.state.user.image.url} style={{ width: 'inherit', }} />
                    <div className="alert alert-success col-12" style={{ padding: '0px 20px' }}>
                      {
                        `${this.state.user.image.likes} like(s)`
                      }
                      <button className="btn btn-success col-6">
                        Like
                      </button>
                    </div>
                  </div>
                  {
                    this.state.user.pictures && this.state.user.pictures.map(p => (
                      <div className="col-6" key={p.url}>
                        <img className="card" src={p.url} style={{ width: 'inherit', }} onMouseOver={(a) => this.setState({ hover: p })}/>
                        <div className="alert alert-success col-12" style={{ padding: '0px 20px' }}>
                          {
                            `${p.likes} like(s)`
                          }
                          <button className="btn btn-success col-6">
                            Like
                          </button>
                        </div>
                        {
                          !this.state.visitor && this.state.hover === p && <button style={{ marginTop: '-1rem' }} className="btn btn-success" onClick={() => this.setPP(p)}>set pp</button>
                        }
                      </div>
                    ))
                  }
                </div>
                <br />
                {
                  !this.state.visitor &&
                  <button
                    className="col-12 btn btn-success"
                    onClick={() => this.setState(
                      {
                        modal: {
                          callback: () => this.uploadPicture(),
                          heading: 'Upload Picture',
                          text: 'Please add the link of the picture you want to upload',
                          inputBox: true,
                          action: 'Upload',
                        },
                      },
                      () => $('#myModal').modal('show')
                    )}
                  >
                    add picture
                  </button>
                }
              </div>
              <br />
              <div
                style={{
                  height: 200,
                }}
              >
                <div className="row">
                  <h2 className="col-4">
                    Friends
                  </h2>
                  <h2 className="col-4">
                  </h2>
                  {
                    !this.state.visitor &&
                    <button
                      className="btn btn-success col-4"
                      onClick={() => this.setState(
                        {
                          modal: {
                            callback: () => this.addFriend(),
                            heading: 'Add Friend',
                            text: 'Please select whom you want to add as a friend',
                            userList: true,
                            action: 'Add Friend',
                          },
                        },
                        () => $('#myModal').modal('show')
                      )}
                    >
                      add friend
                    </button>
                  }
                </div>
                <div className="row">
                  {
                    this.state.user.friends.map((f, i) => (
                      <div
                        key={i}
                        className="col-4 card"
                        style={{
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          window.location.pathname = `/${f.id}`
                        }}
                      >
                        <img src={f.image && f.image.url} alt="" style={{ width: 'inherit' }}/>
                        <h4>{`${f.name} ${f.surname}`}</h4>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div
              className="col-8"
              style={{
                backgroundColor: 'green',
                height: 100,
              }}
            >
              <h4>
                put comments
              </h4>
              <p>
                all comments
              </p>
            </div>
          </div>
        </div>
        {
          this.state.modal &&
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">{this.state.modal.heading}</h4>
                  <button type="button" className="close" data-dismiss="modal">X</button>
                </div>

                <div className="modal-body">
                  {this.state.modal.text}
                </div>

                {
                  this.state.modal.inputBox && <input
                    type="text"
                    className="form-control col-10 offset-1"
                    onChange={e => this.setState({ imageLink: e.nativeEvent.target.value })}
                  />
                }
                {
                  <div className="col-10 offset-1">
                    {
                      this.state.modal.userList && this.state.users
                        .filter(a => a.id !== this.state.user.id)
                        .filter(a => this.state.user.friends.map(a => a.id).indexOf(a.id) < 0)
                        .map(u => (
                          <div
                            className={`alert alert-${u.id === this.state.friendId ? 'info' : 'warning'} row`}
                            key={u.id}
                            onClick={() => this.setState({ friendId: u.id })}
                          >
                            <img src={u.image && u.image.url} alt="" style={{ width: 50, height: 50 }}/>
                            <h4>{u.name}</h4>
                          </div>
                        ))
                    }
                  </div>
                }
                <br />

                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.state.modal.callback}>{this.state.modal.action}</button>
                </div>

              </div>
            </div>
          </div>

        }
      </div>
    )
  }
}

ReactDOM.render(<Profile/>, document.getElementById("root"));
