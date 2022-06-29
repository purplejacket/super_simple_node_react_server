# A very simple Node + React server

The intent of this example app is to illustrate how an elementary `Node` server can render a `React` component on the server side using `ReactDOMServer.renderToString` and then send that string to the browser as the payload.

I.e.:  Clone this git repository, do `npm install`, run it with `node server.js`, navigate your browser to http://localhost:3000/, and it will receive this content:

```html
<div>A very simple server-rendered component</div>
```

# Resources

This nano-project is basically a mashup of an example of `ReactDOMServer.renderToString` from the freecodecamp website, here:

https://www.freecodecamp.org/learn/front-end-development-libraries/react/render-react-on-the-server-with-rendertostring

Along with an elementary node server described here:

https://blog.risingstack.com/your-first-node-js-http-server/

Also, bablejs.io was used to pre-compile the `jsx` so that server.js can be a pure JavaScript file:

https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYGwhgzhAECCAO9oFMAeAXZA7AJjAwgPYC28hW260A3gFDTTDkToBOArsOoawBTytC8CAEoa9BtAjt4yPgKGiA3BIC-E1thxzeYupOib07VlmgAeHAEsAbgD5Y0G3ICeUq6RDIpc56wC0mrhyyDiMJGQUWOjmAPTW9mq0qiq0TFgs0GCIAMpsVlgA5tAAvNAASshgXAAiAPIAsjm-cgB0QdqsACqEeawFhbzmCPCxdiJAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.18.7&externalPlugins=&assumptions=%7B%7D

