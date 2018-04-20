const id = parseInt(window.location.pathname.substr(1));

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };

    this.setPP = this.setPP.bind(this);
    this.fetchSelf = this.fetchSelf.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
  }

  componentWillMount() {
    this.fetchSelf();
  }

  fetchSelf() {
    client.login().then(() => {
      db.collection('users').find({id: parseInt(localStorage.getItem('facebook-clone-id'))}).limit(100).execute().then((a) => this.setState({ user: a[0] }));
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
                <img src={this.state.user.image} style={{ width: 150, height: 150 }}/>
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
                    <img className="card" src={this.state.user.image} style={{ width: 'inherit', }} />
                  </div>
                  {
                    this.state.user.pictures && this.state.user.pictures.map(p => (
                      <div className="col-6" key={p}>
                        <img className="card" src={p} style={{ width: 'inherit', }} onMouseOver={(a) => this.setState({ hover: p })}/>
                        {
                          this.state.hover === p && <button className="btn btn-success" onClick={() => this.setPP(p)}>set pp</button>
                        }
                      </div>
                    ))
                  }
                </div>
                <br />
                <button
                  className="col-12 btn btn-success"
                  onClick={() => this.setState(
                    {
                      modal: {
                        callback: () => this.uploadPicture(),
                        heading: 'Upload Picture',
                        text: 'Please add the link of the picture you want to upload',
                      },
                    },
                    () => $('#myModal').modal('show')
                  )}
                >
                  add picture
                </button>
              </div>
              <div
                style={{
                  height: 200,
                }}
              >
                <h2>
                  friends
                </h2>
                <h4>
                  add friends
                </h4>
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

                <input
                  type="text"
                  className="form-control col-10 offset-1"
                  onChange={e => this.setState({ imageLink: e.nativeEvent.target.value })}
                />
                <br />

                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.state.modal.callback}>Upload</button>
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
