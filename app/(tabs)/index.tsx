import { useEffect, useState, useRef } from 'react';
import { 
	SafeAreaView, 
	View,
	ScrollView, 
	Text, 
	Pressable,
	StyleSheet 
} from 'react-native';

import { custColors, opaqueColors } from '@/constants/Colors';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MainScreen() {
	const [clickCounter, setClickCounter] = useState(0);
	const [dateAndTime, setDateAndTime] = useState('');
	const [instances, setInstances] = useState([] as string[]);

	const scrollViewRef = useRef<ScrollView | null>(null);

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

	const handleNewInstance = () => {
		setDateAndTime(getDateAndTime());
		setClickCounter(clickCounter + 1);
	}

	const handleClearInstances = () => {
		setClickCounter(0);
		setInstances([]);
	}

	useEffect(() => {
    if (clickCounter) {
      setInstances([...instances, "instance at: " + dateAndTime]);
    }
  }, [clickCounter, dateAndTime]); 

	return (
		<SafeAreaView style={styles.pageStyle}>
			{/* header title */}
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.titleText}>habit tracker</Text>
				<MaterialIcons 
					style={styles.clearIcon} 
					name="clear" size={30} color="white" 
					onPress={() => handleClearInstances()}
				/>
			</View>

			{/* instance list */}
			<ScrollView 
				ref={scrollViewRef}
      	onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
			>
				{instances.map((inst, index) => (
					<View key={index} style={{padding: 2}}>
						<View key={index} style={styles.instanceBar}>
							<Text key={index} style={styles.instanceText}>{inst}</Text>
						</View>
					</View>
				))}
			</ScrollView>


			{/* add new instance button */}
			<View style={styles.pageBottomStyle}>
				<Pressable 
					style={styles.newInstanceButton} 
					onPress={() => handleNewInstance()}
				>
					<Text style={styles.buttonText}>+</Text>
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
	titleText: {
		color: 'white',
		fontSize: 40,
		paddingHorizontal: 20,
		paddingBottom: 10
	},
	clearIcon: {
		marginLeft: 'auto',
		paddingHorizontal: 20,
		alignSelf: 'center'
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
	pageBottomStyle: {
		flexDirection: 'row',
		paddingVertical: 15,
		paddingRight: 25,
	},
	newInstanceButton: {
		backgroundColor: 'white',
		marginLeft: 'auto',
		padding: 20,
		width: 75,
		height: 75,
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: custColors.darkSageGreen,
		fontSize: 30,
	}
});
