import '../../style/HomeSection.css';
import Card from '../homePost/Card';
import React, {Component} from 'react';
class HomeSection extends Component {

    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            posts: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        let stockedToken = localStorage.getItem("token");
    fetch ("http://localhost:4200/api/posts", {
        headers: { 
            'Authorization': 'Bearer' + ' ' + JSON.stringify(JSON.parse(stockedToken)), 
        },
    })
    .then(response => response.json())
    .then((response) => {
        this.setState({
            posts: response.reverse(),
            DataisLoaded: true})
    })
    .catch ((error) => console.log(error))
    }
    render() {
        const { DataisLoaded, posts } = this.state;
        if (!DataisLoaded) return false ;
   
        return (
        <section>
        <ul className = "homeSection">
            {posts.map((post) =>  {
                return <Card post={post} key={post._id}/>
            })
            }
        </ul>
        </section>
    );
}
}

export default HomeSection