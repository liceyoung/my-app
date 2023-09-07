// import Image from 'next/image'
import DropDown from '../../components/DropDown/DropDown'
import StairWay from '../../components/Stairway/StairWay'
import WordN from '../../components/WordN/WordN'
import Frame138 from'../../components/Frame138/Frame138'

let logoList = [
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
  '/Union.svg',
]
export default function Home() {
  return (
    <>
      <DropDown />
      <StairWay />
      <WordN/>
      <Frame138 logoList={logoList}/>
    </>
  )
}
