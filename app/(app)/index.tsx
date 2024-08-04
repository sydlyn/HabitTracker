import { useState } from 'react';
import { 
	SafeAreaView, 
	ScrollView, 
	Text, 
	Pressable,
	StyleSheet } from 'react-native';

export default function MainScreen() {
	const [dateAndTime, setDateAndTime] = useState('')

	const getDateAndTime = () => {
		const date = new Date().getDate() //current date
    const month = new Date().getMonth() + 1 //current month
    const year = new Date().getFullYear() //current year
    const hours = new Date().getHours() //current hours
    const min = new Date().getMinutes() //current minutes
    const sec = new Date().getSeconds() //current seconds

    return month + '/' + date + '/' + year + ' ~ ' +  (hours % 12) + ':' + min + ':' + sec + (hours % 12 ? ' PM' : ' AM')
	}

	return (
		<SafeAreaView style={styles.pageStyle}>
			<Text style={styles.titleText}>fidget tracker</Text>

			<ScrollView>
				<Text style={styles.instanceText}>instance at: {dateAndTime}</Text>
			</ScrollView>

			<Pressable 
				style={styles.newInstanceButton} 
				onPress={() => setDateAndTime(getDateAndTime())}
			>
				<Text>New Fidget</Text>
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		backgroundColor: '#acb7a0'
	},
	titleText: {
		color: 'white',
		fontSize: 40,
		paddingHorizontal: 20,
		paddingBottom: 20
	},
	instanceText: {
		color: 'white',
		paddingHorizontal: 30
	},
	newInstanceButton: {
		backgroundColor: 'white',
		marginTop: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: 20,
		width: '80%',
		borderRadius: 100,
		alignItems: 'center'
	}
});
