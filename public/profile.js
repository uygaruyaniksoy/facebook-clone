const id = parseInt(window.location.pathname.substr(1));

class Profile extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    client.login().then(() => {
      db.collection('users').find({name: "Uygar"}).limit(100).execute().then((a) => {debugger;});

      db.collection('users').find({ }).limit(100).execute().then((a) => {debugger;});
    });
  }

  render() {
    return (
      <div>
        <div className="offset-2 col-8" style={{
          marginTop: 100,
          backgroundColor: 'red',
        }}>
          <h2>
            hello
          </h2>
          <p>
            {
              `profile with id: ${id}`
            }
          </p>
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
                  name surname
                </h2>
                <h2>
                  profile image
                </h2>
              </div>
              <div
                style={{
                  height: 200,
                }}
              >
                <h2>
                  all images
                </h2>
                <h4>
                  add photo
                </h4>
                <h4>
                  set pp
                </h4>
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
      </div>
    )
  }
}

ReactDOM.render(<Profile/>, document.getElementById("root"));