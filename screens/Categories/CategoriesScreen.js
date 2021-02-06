import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import CategoryContainer from '../../components/CategoryContainer';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoriesActions from '../../redux/actions/categories';

class CategoriesScreen extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  goCategoryDetailScreen = (categoryName) => {
    this.props.actions.selectCategory(categoryName);
    this.props.navigation.navigate('CategoryDetail');
  };

  renderItem = (item) => {
    return (
      <CategoryContainer
        name={item.name}
        align={item.id}
        onPress={() => this.goCategoryDetailScreen(item.name)}
      />
    );
  };

  render() {
    return (
      <View>
        <Header title="Categories" />
        <FlatList
          data={this.props.categories}
          keyExtractor={(item) => item.id}
          renderItem={(item) => this.renderItem(item.item)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoriesListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoriesActions.getCategories,
        dispatch,
      ),
      selectCategory: bindActionCreators(
        categoriesActions.selectCategories,
        dispatch,
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
