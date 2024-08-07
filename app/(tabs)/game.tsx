import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, DimensionValue } from 'react-native';

import { custColors } from '@/constants/Colors'

const squareDim = 75;

export default function GameScreen() {
	const [clickCounter, setClickCounter] = useState(0);
	const [x, setX] = useState('50%');
	const [y, setY] = useState('45%');

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
				: <Text style={styles.headerText}>Click the Square</Text>}

			{/* safe space that the square to appear in */}
			<View style={styles.safeSquareSpace}>
				<Pressable 
					onPress={() => setClickCounter(clickCounter + 1)}
					style={[styles.movingSquare, {left: x as DimensionValue, top: y as DimensionValue}]}
				>
					<Text style={styles.squareText}></Text>
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
		paddingRight: 10 + squareDim,
		paddingBottom: 10 + squareDim,
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
		width: squareDim,
		height: squareDim,
		borderRadius: 10
	},
	squareText: {
		color: custColors.darkSageGreen
	}
});
