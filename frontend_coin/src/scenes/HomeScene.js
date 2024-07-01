import React ,{Component} from 'react';
import {
  TabManager as TabManager,

    // HeaderComponent as Header,
    // DescriptionComponent as Description,
    // ProductComponent as Product,
    // InfoCustomerComponent as InfoCustomer,
    // MostRecentBlogComponent as MostRecent,

    // SearchBarComponent,
    // SearchCardsComponent as SearchCards,
    // CardExplainComponent,
    // ApplicationComponent as DownloadApp,
    // FooterComponent as Footer
} from '../Components';
import { connect } from 'react-redux';
// import {
  // homeInitial,
  // homeProducts,
// } from '../actions';


class HomeScene extends Component{
    constructor(props){
      super(props)
    }
    UNSAFE_componentWillMount() {
      // this.props.homeInitial();
      // this.props.homeProducts();

    }
    render() {
        return (
            <div>
              <TabManager />
              {/* <Header/>
              <Description/>
              <Product products={this.props.products}/>
              <InfoCustomer/>
              <MostRecent posts={this.props.webPosts} /> */}

              {/* <SearchBarComponent 
              submit={this.props.homeSearch}
              />
              <SearchCards 
                searchResults={this.props.searchResults}
              />
              <CardExplainComponent />
              <MostRecent posts={this.props.webPosts} />
              <DownloadApp/> */}
              {/* <Footer/> */}
            </div>
        )
    }
}
const mapStateToProps = ({ home }) => {
    return {
      webPosts       : home.webPosts,
      instagramPosts : home.instagramPosts,
      products       : home.products,
      // searchResults  : home.searchResults,
      error          : home.error,
      loading        : home.loading
    }
  };
  export default HomeScene;
  // export default connect(mapStateToProps, {
  //   // homeInitial,
  //   // homeProducts
  // })(HomeScene);
  