import React ,{Component} from 'react';
import { connect } from 'dva';
import styles from './Hello.less'
class Hello extends Component {
    state = {
       
    };
    //https://www.tianqiapi.com/api/
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'weather/queryList',
        });
    }


    render() {
        const {city,data} = this.props.weather;
        var arr = data.map( (item,i) => {
            return (<li key ={i} className={styles.item}>
                <span>{item.day}</span>
                <span>{item.date}</span>
                <span>{item.week}</span>
                <span>{item.wea}</span>
            </li>)
        })
        return (<div>
            <p>{city}</p>
            <ul>
                {arr}
            </ul>
            </div>
        );
    }
}

export default connect((state) => 
    {   
        // debugger
        const { weather} = state;
        return {
            weather,
        }
    })(Hello);