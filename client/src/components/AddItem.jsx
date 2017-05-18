import React from 'react';
import AddItemForm from './AddItemForm.jsx';
import ItemSearchDialog from './ItemSearchDialog.jsx';

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };
  }

  clickAddItem(event) {
    this.setState({
      showForm: true
    });
  }

  toggleForm(bool) {
    this.setState({
      showForm: bool,
    });
  }

  render() {
    if (this.state.showForm) {
      return (
        <div>
          <AddItemForm houseId={this.props.houseId} toggleForm={this.toggleForm.bind(this)} submitItem={this.props.submitItem}/>
        </div>
      );
    } else {
      return (
        <div className="add-item">
          <ItemSearchDialog  houseId={this.props.houseId} toggleForm={this.toggleForm.bind(this)} submitItem={this.props.submitItem} />
        </div>
      );
    }
  }
}

export default AddItem;
