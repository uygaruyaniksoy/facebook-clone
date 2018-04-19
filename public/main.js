class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      pageState: undefined,
      addState: {},
    };

    this._renderAdd = this._renderAdd.bind(this);
    this._renderDel = this._renderDel.bind(this);
    this._renderLog = this._renderLog.bind(this);
  }

  _renderAdd() {
    console.log(this.state.addState);
    return (
      <div>
        <div className="row">
          <div className="form-group col-6">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.setState({ addState: Object.assign({}, this.state.addState, { name: e.nativeEvent.target.value }) })
              }
            />
          </div>
          <div className="form-group col-6">
            <label>Surname:</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.setState({ addState: Object.assign({}, this.state.addState, { surname: e.nativeEvent.target.value }) })
              }
            />
          </div>
        </div>

        <div className="dropdown col-12">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {
              this.state.addState.gender ?
                this.state.addState.gender[0].toUpperCase() + this.state.addState.gender.substr(1) :
                "Gender"
            }
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              onClick={() =>
                this.setState({ addState: Object.assign({}, this.state.addState, { gender: 'female' }) })
              }
              href="#"
            >
              Female
            </a>
            <a
              className="dropdown-item"
              onClick={() =>
                this.setState({ addState: Object.assign({}, this.state.addState, { gender: 'male' }) })
              }
              href="#"
            >
              Male
            </a>
          </div>
        </div>

        <div className="form-group col-6">
          <label>Age:</label>
          <input
            type="text"
            className="form-control"
            onChange={e =>
              this.setState({ addState: Object.assign({}, this.state.addState, { age: e.nativeEvent.target.value }) })
            }
          />
        </div>

        <div className="form-group col-6">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            onChange={e =>
              this.setState({ addState: Object.assign({}, this.state.addState, { email: e.nativeEvent.target.value }) })
            }
          />
        </div>
      </div>
    );
  }

  _renderDel() {
    return (
      <div>

      </div>
    );
  }

  _renderLog() {
    return (
      <div>

      </div>
    );
  }


  componentWillMount() {/*
    client.login().then(() => {
      db.collection('users').find({name: "Uygar"}).limit(100).execute().then((a) => {debugger;});

      db.collection('users').find({ }).limit(100).execute().then((a) => {debugger;});
    });*/
  }

  render() {
    return (
      <div>
        <div className="offset-2 col-8" style={{
          marginTop: 100,
          backgroundColor: 'red',
          height: 700,
        }}>
          <div className="row">
            <div className="col-4">
              <button
                onClick={() => this.setState({ pageState: 'ADD' })}
                type="button"
                className="btn btn-primary col-12"
              >
                Add User
              </button>
            </div>
            <div className="col-4">
              <button
                onClick={() => this.setState({ pageState: 'DEL' })}
                type="button"
                className="btn btn-primary col-12"
              >
                Delete User
              </button>
            </div>
            <div className="col-4">
              <button
                onClick={() => this.setState({ pageState: 'LOG' })}
                type="button"
                className="btn btn-primary col-12"
              >
                Log in
              </button>
            </div>
          </div>

          <div>
            { this.state.pageState === 'ADD' && this._renderAdd()}
            { this.state.pageState === 'DEL' && this._renderDel()}
            { this.state.pageState === 'LOG' && this._renderLog()}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MainPage/>, document.getElementById("root"));