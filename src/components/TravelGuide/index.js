import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelItem from '../TravelItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, travelData: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch(' https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const formattedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))

    console.log(data)
    this.setState({travelData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, travelData} = this.state

    return (
      <div className="bg-container">
        <h1 className="h1">Travel Guide</h1>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {travelData.map(item => (
              <TravelItem data={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default TravelGuide
