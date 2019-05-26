import React, {Component} from 'react';
import CountriesTable from '../CountiesTable';
import "semantic-ui-css/semantic.min.css";

class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:null
        };
    }
    componentWillMount(){
        this.loadData();

    }
    loadData()
    {
        fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;subregion")
            .then(res=>res.json())
            .then((resData)=>{resData.sort(function (a,b) {return b.population-a.population});this.setState({data:resData})})
            .catch(err=>console.log("err:",err));
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated()) {
            if (!this.state.data) {
                return <div align="center"><img src='https://cdn-images-1.medium.com/max/1600/0*4Gzjgh9Y7Gu8KEtZ.gif'
                                                alt="loading..."/></div>
            }
            return (
                <div>
                    <select className="ui dropdown" onChange={() => this.setState({data: this.state.data.reverse()})}>
                        <option value="1">High to low</option>
                        <option value="0">Low to high</option>
                    </select>
                    <CountriesTable {...this.state.data}/>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}
export default Home;