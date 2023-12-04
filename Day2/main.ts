/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetData } from './data'

let total = 0

export default function Compute() {
	const input = GetData().split('\n')

	const newArr = input.map((item: string, index: number) => {
		let obj: any = {}
		let tempArr = []

		const game = item.replace(`Game ${index + 1}:`, '').split(/[;]/)

		const clean = game.map((item: string) => {
			let obj: any = {}
			const parse = item.split(',')

			parse.map((item: string) => {
				const Num: any = item.match(/\d+/g)

				const val = parseInt(Num)
				if (item.includes('red')) obj['red'] = obj.red ? obj.red + val : val
				if (item.includes('blue')) obj['blue'] = obj.blue ? obj.blue + val : val
				if (item.includes('green')) obj['green'] = obj.green ? obj.green + val : val
			})
			return obj
		})
		return clean
	})

	const Eval = (input: any) => {
		for (const item of input) {
			if (item.red > 12 || item.blue > 14 || item.green > 13) return false
		}
	}

	newArr.map((item: any, index: number) => {
		const game = index + 1
		console.log(item)
		if (Eval(item) !== false) total += game
	})

	console.log(total)
}
