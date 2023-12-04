/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetData } from './data'

export function silver(input: string) {
	let temArr = [] as any
	const theData = GetData().split('\n')

	for (const line of theData) {
		let charArr = [] as any
		let temp = [] as any

		for (const char of line) {
			const num = parseInt(char)
			if (!isNaN(num)) temp.push(num)
			if (isNaN(num)) {
				charArr.push(char)
        for (const word of numArr) {
          if (char.includes(word)){ 
            temp.push(digitMap[word])
            charArr = charArr.filter((item: any) => word.includes(item))
          }
        }
			}
		}

		console.log(charArr)

		// numArr.map((item: any, index: number) => {
		// 	if (line.includes(item)) tempWord.push(index + 1)
		// })

		// console.log(tempWord)

		// temArr.push(tempNum)
		// numberArr.push(tempWord)
	}

	// let sumNum = 0
	// let sumWord = 0

	// temArr.map((item: any) => {
	// 	//console.log(item)
	// 	const size = item.length
	// 	if (size > 1) {
	// 		const join = parseInt(`${item[0]}${item[size - 1]}`)
	// 		//console.log(join)
	// 		sumNum += join
	// 	} else if (size === 1) {
	// 		const join = parseInt(`${item[0]}${item[0]}`)
	// 		//console.log(join)
	// 		sumNum += join
	// 	}
	// })

	// numberArr.map((item: any) => {
	// 	//console.log(item)
	// 	const size = item.length
	// 	if (size > 1) {
	// 		const join = parseInt(`${item[0]}${item[size - 1]}`)
	// 		//console.log(join)
	// 		sumWord += join
	// 	} else if (size === 1) {
	// 		const join = parseInt(`${item[0]}${item[0]}`)
	// 		//console.log(join)
	// 		sumWord += join
	// 	}
	// })

	// console.log('Silver:', sumNum)
	// console.log('Gold:', sumWord)
}

const numArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

const digitMap: { [key: string]: number } = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eighteen: 18,
	nineteen: 19,
	twenty: 20
}
