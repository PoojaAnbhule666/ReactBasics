// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );

// <div id="parent">
//       <div id="child">
//             <h1>i am an h1 tag</h1>
//             <h2>i am an h2 tag</h2>
//       </div>
//       <div id="child">
//             <h1>i am an h1 tag</h1>
//             <h2>i am an h2 tag</h2>
//       </div>
// </div>



const parent = React.createElement(
      "div",
      { id: "parent" },
      [React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
          ]),
          React.createElement("div2", { id: "child" }, [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
          ])]
    );

    //JSX

// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
//       console.log(heading)
//       root.render(heading)
root.render(parent);
