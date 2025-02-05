import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {




  return (
    
    <Fragment>
      
      <div className="belt">
        {
        props.sushi.map(fish => <Sushi sushi={fish} key={fish.id}  eatSushi={props.eatSushi}/>) 
        }
        
        <MoreButton getMore={props.getMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer