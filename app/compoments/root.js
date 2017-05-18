/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:36:57
 * @modify date 2017-05-17 10:36:57
 * @desc [description]
*/
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet }  from 'react-native';
import Search from './comm/search';
import Banner from './comm/banner';
import { size } from '../util/style';
import HotShow from './hotshow/index';
import Loading from './comm/loading';

class root extends Component {

	constructor(props) {
        super(props);
    }

	render() {
		return(
			<View style={style.wrap}>
				<Loading/>
			</View>
		);
	}

	// render() {
	// 	return(
	// 		<View style={style.wrap}>
	// 			<HotShow/>
	// 		</View>
	// 	);
	// }
}
const style = StyleSheet.create({
	wrap: {
		backgroundColor: '#f5f5f5',
		height: size.height,
		width: size.width
	}
});

module.exports = root;