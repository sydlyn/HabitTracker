import { useEffect, useState } from 'react';
import { 
	SafeAreaView, 
	View,
	ScrollView, 
	Text, 
	Pressable,
	StyleSheet 
} from 'react-native';

import { custColors, opaqueColors } from '@/constants/Colors'

export default function MainScreen() {
	const [clickCounter, setClickCounter] = useState(0);
	const [dateAndTime, setDateAndTime] = useState('');
	const [instances, setInstances] = useState([] as string[]);

	const getDateAndTime = () => {
		const date = new Date().getDate() 
    const month = new Date().getMonth() + 1 
    const year = new Date().getFullYear() 
    const hours = new Date().getHours() 
    const min = new Date().getMinutes() 
    const sec = new Date().getSeconds() 

		function addZero(i: number) {
			return (i < 10 ? "0" + i : i)
		}

    return (
			month + '/' + date + '/' + year + ' ~ ' 
			+ ((hours % 12 == 0) ? '12' : addZero(hours % 12)) 
			+ ':' + addZero(min) + ':' + addZero(sec) 
			+ (Math.floor(hours / 12) ? ' PM' : ' AM')
		)
	}

	const handlePress = () => {
		setDateAndTime(getDateAndTime());
		setClickCounter(clickCounter + 1);
	}

	useEffect(() => {
    if (dateAndTime) {
      setInstances([...instances, "instance at: " + dateAndTime]);
    }
  }, [clickCounter, dateAndTime]); 

	return (
		<SafeAreaView style={styles.pageStyle}>
			{/* header title */}
			<Text style={styles.titleText}>habit tracker</Text>

			{/* instance list */}
			<ScrollView>
				{instances.map((inst, index) => (
					<View key={index} style={{padding: 2}}>
						<View key={index} style={styles.instanceBar}>
							<Text key={index} style={styles.instanceText}>{inst}</Text>
						</View>
					</View>
				))}
			</ScrollView>

			{/* bottom buttons */}
			<View style={styles.pageBottomStyle}>
				<View style={styles.instanceCounter}>
					<Text style={styles.instanceCounter}>{clickCounter}</Text>
				</View>
				<Pressable 
					style={styles.newInstanceButton} 
					onPress={() => handlePress()}
				>
					<Text style={styles.buttonText}>new fidget</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		backgroundColor: custColors.sageGreen,
	},
	pageBottomStyle: {
		flexDirection: 'row',
		paddingBottom: 10
	},
	titleText: {
		color: 'white',
		fontSize: 40,
		paddingHorizontal: 20,
		paddingBottom: 10
	},
	instanceBar: {
		backgroundColor: opaqueColors.darkGrey,
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 10
	},
	instanceText: {
		color: 'white',
		width: '85%',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	instanceCounter: {
		color: custColors.darkSageGreen,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 20,
		marginLeft: 'auto',
	},
	newInstanceButton: {
		backgroundColor: 'white',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: 20,
		width: '70%',
		borderRadius: 20,
		alignItems: 'center',
	},
	buttonText: {
		color: custColors.darkSageGreen
	}
});
