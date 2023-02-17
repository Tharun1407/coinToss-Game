import {useState} from 'react'
import './index.css'

const CoinToss = () => {
  const [coinStatus, setCoinStatus] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)

  const tossCoin = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    return randomNumber === 0
      ? (setCoinStatus(true),
        setTotalCount(totalCount + 1),
        setHeadsCount(headsCount + 1))
      : (setCoinStatus(false),
        setTotalCount(totalCount + 1),
        setTailsCount(tailsCount + 1))
  }

  return (
    <div className="main-bg">
      <div className="white-bg">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="para">Heads (or) Tails</p>
        {coinStatus === true ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            alt="toss result"
          />
        )}
        <button type="button" onClick={tossCoin}>
          Toss Coin
        </button>
        <div className="counters">
          <p className="counter-para">Total: {totalCount}</p>
          <p className="counter-para">Heads: {headsCount}</p>
          <p className="counter-para">Tails: {tailsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
