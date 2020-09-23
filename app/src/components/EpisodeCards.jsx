import React, { useEffect } from 'react'
import EpisodeCard from './EpisodeCard'
import { fetchData } from '../actions/fetchActions'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'


const EpisodeCards = props => {



  useEffect(() => {
    props.fetchData()
  }, [])

  return props.episodeData.loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : props.episodeData.error ? (
    <h1>{props.episodeData.error}</h1>
  ) : (
    <div>
      <Container>
      <Row>
      {props.episodeData.map(episode => {
        return(
          <EpisodeCard series={episode} key={episode.mal_id} />
        )
      })}
      </Row>
      </Container>
    </div>
  )


}

const mapStateToProps = state => {
  return {
    episodeData: state.data
  }
}



export default connect(mapStateToProps, { fetchData })(EpisodeCards)