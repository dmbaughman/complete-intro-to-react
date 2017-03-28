/* global React ReactDOM */

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are awesome', color: 'peru' }),
        MyTitleFactory({ title: 'semicolons are ok', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'bork bork bork!', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'linting added later', color: 'darkvioletred' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
