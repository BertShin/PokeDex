import React from 'react';
import values from 'lodash/values';


class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let pokeItems = values(this.props.items);
    console.log(pokeItems);
    return(
      <div>
        <ul>
          {
            pokeItems.map ( (item) => <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    );
  }
}



export default ItemDetail;
