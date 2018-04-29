const id = parseInt(window.location.pathname.substr(1));

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        image: {},
        friends: [],
        comments: [],
      },
      visitor: !isNaN(id),
      dropdown: localStorage.getItem('facebook-clone-dropdown') == "true",
    };

    this.setPP = this.setPP.bind(this);
    this.fetchSelf = this.fetchSelf.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.likePP = this.likePP.bind(this);
    this.likePicture = this.likePicture.bind(this);
    this.likeComment = this.likeComment.bind(this);
    this.uploadComment = this.uploadComment.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
  }

  componentWillMount() {
    this.fetchSelf();
    this.fetchUsers();
  }

  componentDidUpdate() {
    console.log(123321);
    this.setBackgroundColor();
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

  likePP() {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {image: Object.assign({}, this.state.user.image, {likes: this.state.user.image.likes + 1})}}
    ).then(this.fetchSelf);
  }

  likePicture(p) {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {pictures: this.state.user.pictures.map((a) => a.url === p.url ? Object.assign({}, p, {likes: p.likes  + 1}) : a)}}
    ).then(this.fetchSelf);
  }

  likeComment(p) {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {comments: this.state.user.comments.map((a) => a.text === p.text ? Object.assign({}, p, {likes: p.likes  + 1}) : a)}}
    ).then(this.fetchSelf);
  }

  uploadComment() {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {comments: this.state.user.comments.concat({likes: 0, text: this.state.commentText})}}
    ).then(this.fetchSelf);
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
      {"$set": {pictures: this.state.user.pictures.concat({
        url: this.state.imageLink,
        likes: 0,
      })}}
    ).then(this.fetchSelf);
  }

  addFriend() {
    db.collection('users').updateOne(
      {id: this.state.user.id},
      {"$set": {friends: this.state.user.friends.map(u => u.id).concat(this.state.friendId)}}
    ).then(this.fetchSelf);
  }

  setBackgroundColor() {
    return;
    // it was just an experiment which failed
    this.backgroundColor = "#ccc";

    let img = document.getElementById('pp');
    var UimageObj = new Image();
    UimageObj.src = img.src;
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(UimageObj, 0, 0, img.width, img.height);
    let pixelData = canvas.getContext('2d').getImageData(0, 0, img.width, img.height).data;
    let r = 0;
    let g = 0;
    let b = 0;
    for (var i = 0; i < pixelData.length; i+=4) {
      r += pixelData[i+0];
      g += pixelData[i+1];
      b += pixelData[i+2];
    }
    r /= img.width * img.height;
    g /= img.width * img.height;
    b /= img.width * img.height;

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
                backgroundColor: this.backgroundColor || 'blue'
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
                <img id="pp" src={this.state.user.image.url} style={{ width: 150, height: 150 }}/>
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
                      <button className="btn btn-success col-6" onClick={() => this.likePP()}>
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
                          <button className="btn btn-success col-6" onClick={() => this.likePicture(p)}>
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
              <div>
                <div className="row">
                  <h2 className="col-4">
                    Friends
                  </h2>
                  <h6 className="col-4">
                      Enchanced View
                    <label className="switch">
                      <input checked={this.state.dropdown} type="checkbox" onChange={() => this.setState({ dropdown: !this.state.dropdown }, () => localStorage.setItem('facebook-clone-dropdown', this.state.dropdown))}></input>
                      <span className="slider round"></span>
                    </label>
                  </h6>
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
                    this.state.dropdown &&
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
                  {
                    !this.state.dropdown &&
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Friend List
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                          this.state.user.friends.map((f, i) => (
                            <a
                              key={i}
                              className="dropdown-item"
                              href="#"
                            >
                              <div
                                style={{
                                  cursor: 'pointer'
                                }}
                                onClick={() => {
                                  window.location.pathname = `/${f.id}`
                                }}
                              >
                                <img src={f.image && f.image.url} alt="" style={{ height: 40 }}/>
                                <h4>{`${f.name} ${f.surname}`}</h4>
                              </div>
                            </a>
                          ))
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div
              className="col-8"
              style={{
                backgroundColor: '#abe',
              }}
            >
              {
                !this.state.visitor &&
                  <div>
                    <h4>
                      add a comment
                    </h4>
                    <div className="form-group">
                      <label htmlFor="comment">Comment:</label>
                      <textarea className="form-control" rows="2" id="comment" onChange={(e) => this.setState({ commentText: e.target.value })}></textarea>
                    </div>
                    <button onClick={() => this.uploadComment()} className="btn btn-success">
                      add comment
                    </button>
                  </div>
              }
                <hr/>
                <h4>
                  all comments
                </h4>
              {
                this.state.user.comments.reduce((c, i) => [i].concat(c), []).map((a, i) => (
                  <div className="media" key={i}>
                    <div className="media-left">
                      <img src={this.state.user.image.url} className="media-object" style={{ width: 60 }}></img>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{`${this.state.user.name} ${this.state.user.surname}`}</h4>
                      <div className="row">
                        <p className="col-8">
                          {
                            a.text
                          }
                        </p>
                        <p className="col-4">
                          <div className="alert alert-success col-12" style={{ padding: '0px 20px' }}>
                            {
                              `${a.likes} like(s)`
                            }
                            <button className="btn btn-success col-6" onClick={() => this.likeComment(a)}>
                              Like
                            </button>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
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
