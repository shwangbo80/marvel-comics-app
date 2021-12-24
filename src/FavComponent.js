import React from "react"
import {Button, Container, Row, Col, Image, Accordion} from "react-bootstrap"

export default function FavComponent({favs, setFavs, setFavorite}) {
  const newFav = [...favs]
  console.log(newFav)

  if (newFav.length === 0) {
    return (
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <h1>No favorites saved</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }

  const handleDelete = (id) => {
    const newFavs = favs.filter((comic) => comic.id !== id)
    setFavs(newFavs)
  }

  const renderFavs = newFav.reverse().map((item) => {
    return (
      <Col md={3} key={item.id} className="py-2">
        <div className="resultContainer">
          <h5 className="ellipsis">{item.title}</h5>
          <Row className="mt-3">
            <Col xs={3}>
              <h6>${item.prices[0].price}</h6>
            </Col>
            <Col xs={2}>
              <a href={item.urls[0].url} target="_blank" rel="noreferrer">
                Detail
              </a>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <Accordion className="my-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Creators</Accordion.Header>
              <Accordion.Body>
                {item.creators.items.map((item, key) => {
                  return <p key={key}>{item.name}</p>
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <a
            href={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            target="_blank">
            <Image
              fluid
              alt={item.title}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />
          </a>
          <Button
            className="btn-danger mt-3"
            onClick={() => {
              handleDelete(item.id)
            }}>
            Delete
          </Button>
        </div>
      </Col>
    )
  })
  return (
    <Container className="mt-5">
      <Row>{renderFavs}</Row>
    </Container>
  )
}
