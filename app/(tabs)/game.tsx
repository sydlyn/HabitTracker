import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, DimensionValue } from 'react-native';

import { custColors } from '@/constants/Colors'

export default function GameScreen() {
	const [clickCounter, setClickCounter] = useState(0);
	const [x, setX] = useState('50%');
	const [y, setY] = useState('40%');

	useEffect(() => {
		if (clickCounter) {
			setX(Math.floor(Math.random() * 100) + '%')
			setY(Math.floor(Math.random() * 100) + '%')
		}
	}, [clickCounter]);

	return (
		<SafeAreaView style={styles.pageStyle}>
			{/* header title at the start of the game */}
			{clickCounter ? <></> 
				: <Text style={styles.headerText}>Click the Square to Begin</Text>}

			{/* safe space that the square to appear in */}
			<View style={styles.safeSquareSpace}>
				<Pressable 
					onPress={() => setClickCounter(clickCounter + 1)}
					style={[styles.movingSquare, {left: x as DimensionValue, top: y as DimensionValue}]}
				>
					<Text style={styles.squareText}>{clickCounter}</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		backgroundColor: custColors.sageGreen
	},
	safeSquareSpace: {
		flex: 1,
		backgroundColor: custColors.sageGreen,
		paddingRight: 60,
		paddingBottom: 60,
		paddingLeft: 10,
		paddingTop: 10
	},
	headerText: {
		color: 'white',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 20,
		padding: 20
	},
	movingSquare: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 50,
		borderRadius: 10
	},
	squareText: {
		color: custColors.darkSageGreen
	}
});
