/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetData } from './data'

let total = 0

export default function Compute(): void {
  const Data = GetData()
  console.log(Data)

  for (const ob of Data) {
    let count = 0
    for (const key in ob) {
      if (key !== 'cid') {
        count++
      }
    }
    if (count === 7) {
      total++
    }
  }
  
}