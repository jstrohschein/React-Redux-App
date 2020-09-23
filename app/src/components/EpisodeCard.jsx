import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';


const EpisodeCard = props => {

  console.log ('EpisodCard Props: ', props)
  return (
    <div>

      <Col>
      <Card xs="12" md="4" xl="3" className='series-card'>
        <CardImg top width="100%" src={props.series.image_url} alt={`image of cover for ${props.series.title}`} className='series-img' />
        <CardBody className='series-body'>
          <CardTitle className='title'>{props.series.title}</CardTitle>
          <CardText className='synopsis'>{props.series.synopsis}</CardText>
          <CardText>
            <small className="text-muted">{props.series.airing ? 'Now Airing' : 'No Longer Airing'}</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
    </div>
  )
}

export default EpisodeCard