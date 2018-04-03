import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() {
return (
<div>
   <Header title = 'Test React Page'/>
</div>
);
}
}
const links = ['address No 1', 'address No 2', 'address No 3'];
function LinkList(props) {
const links = props.links;
const listItems = links.map((link,i) =>
<a href = {link}>  {i+1}:  {link}  |</a>
);
return (
<div>
   <h3> links </h3>
   <nav>{listItems}</nav>
</div>
);
}
const Header = ({title}) => (
<div>
   <title>{title}</title>
   <h2>{title}</h2>
   <LinkList links={links} />
</div>
);
export default App;