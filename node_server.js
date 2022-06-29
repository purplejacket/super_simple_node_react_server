const http = require("http");
const port = 3000;
const React = require("react");
const ReactDOMServer = require("react-dom/server");

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("div", null, "A very simple component");
  }
}

const appString = ReactDOMServer.renderToString(React.createElement(App, null));

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(appString);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
