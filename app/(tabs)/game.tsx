import { useState, useEffect } from 'react';
import { SafeAreaView, Text, Pressable, StyleSheet, DimensionValue } from 'react-native';

import { custColors } from '@/constants/Colors'

export default function GameScreen() {
	const [clickCounter, setClickCounter] = useState(0);
	const [x, setX] = useState(Math.floor(Math.random() * 85) + '%');
	const [y, setY] = useState(Math.floor(Math.random() * 90) + '%');

	useEffect(() => {
		setX(Math.floor(Math.random() * 85) + '%')
		setY(Math.floor(Math.random() * 90) + '%')
	}, [clickCounter]);

	return (
		<SafeAreaView style={styles.pageStyle}>
			<Pressable 
				onPress={() => setClickCounter(clickCounter + 1)}
				style={[styles.movingSquare, {left: x as DimensionValue, top: y as DimensionValue, bottom: 10}]}
			>
				<Text style={styles.squareText}>{clickCounter}</Text>
			</Pressable>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		backgroundColor: custColors.sageGreen
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
