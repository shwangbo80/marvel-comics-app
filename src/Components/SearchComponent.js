import React, {useState, useEffect} from "react"
import {
  Button,
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Image,
  Accordion,
} from "react-bootstrap"
import {Rolling} from "react-loading-io"
import {HeartFill, SuitHeart, SuitHeartFill} from "react-bootstrap-icons"

export default function SearchComponent({favs, setFavs}) {
  const [comic, setComic] = useState("")
  const [startDate, setStartDate] = useState("2015-01-01")
  const [endDate, setEndDate] = useState("2021-12-01")
  const [limit, setLimit] = useState(5)
  const [orderChange, setOrderChange] = useState("")
  const [favClicked, setFavclicked] = useState(false)

  const [isLoading, setLoading] = useState(false)
  const [loader, loaderActive] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [apiData, setApiData] = useState([])
  const timestamp = 1
  const apiKey = "ee1be0ed47fa16c1180ea42bf4c51dc3"
  const hash = "abb8397e8f309853a6979c66696c8ee7"
  const apiUrl = `https://gateway.marvel.com:443/v1/public/comics?dateRange=${startDate}%2C${endDate}&titleStartsWith=${comic}&orderBy=${orderChange}&limit=${limit}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`

  const setFavorite = (item) => {
    console.log("favs: ", favs)
    console.log("items: ", item)
    setFavclicked(true)
    if (favs.indexOf(item) === -1) {
      setFavs([...favs, item])
      setFavclicked(true)
    }
  }

  const GenerateApi = () => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          throw Error(response.statusText)
        }
      })
      .then(loaderActive(true))
      .then(setErrorMessage(false))
      .then((apiResult) => {
        console.log(apiResult)
        setApiData(apiResult)
        setLoading(true)
        loaderActive(false)
      })
      .catch((error) => {
        loaderActive(false)
        setErrorMessage(true)
        console.log(error)
      })
  }

  const RenderData = () => {
    if (!isLoading) {
      return <div></div>
    } else if (isLoading) {
      const listItems = apiData.data.results.map((item, key) => {
        return (
          <Col md={4} key={item.id} className="py-2">
            <div className="resultContainer">
              <h5 className="ellipsis">{item.title}</h5>
              <Row className="mt-3">
                <Col xs={2}>
                  <h6>${item.prices[0].price}</h6>
                </Col>
                <Col xs={2}>
                  <a href={item.urls[0].url} target="_blank" rel="noreferrer">
                    Detail
                  </a>
                </Col>
                <Col xs={3}>
                  <SuitHeart
                    onClick={() => {
                      setFavorite(item)
                    }}
                  />
                </Col>
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
            </div>
          </Col>
        )
      })
      return (
        <Container className="mt-5">
          <Row>{listItems}</Row>
        </Container>
      )
    }
  }

  const Loader = () => {
    if (loader) {
      return <Rolling size={64} />
    } else {
      return <div></div>
    }
  }

  const displayErrorMessage = (error) => {
    if (!error) {
      return <p className="mt-3"></p>
    } else if (error) {
      return (
        <p className="text-danger mt-3">
          Invalid entry. Try sinmplifying the search
        </p>
      )
    }
  }

  const onChange = (e) => {
    e.preventDefault()
    setComic(e.target.value)
  }
  const handleChange = (e) => {
    e.preventDefault()
    setLimit(e.target.value)
  }
  const startDateChange = (e) => {
    e.preventDefault()
    setStartDate(e.target.value)
  }
  const endDateChange = (e) => {
    e.preventDefault()
    setEndDate(e.target.value)
  }

  const orderbyChange = (e) => {
    e.preventDefault()
    setOrderChange(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(e)
    GenerateApi()
    e.preventDefault()
  }

  let today = new Date().toISOString().slice(0, 10)

  return (
    <div>
      <Container className="bg-light">
        <Row>
          <Col></Col>
          <Col className="mt-5">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Comic Title"
                className="mb-3">
                <Form.Control
                  type="search"
                  value={comic}
                  onChange={onChange}
                  required
                />
              </FloatingLabel>
              <Form.Select
                aria-label="Default select example"
                className="formSelect mb-4"
                onChange={handleChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="formSelect mb-4"
                onChange={orderbyChange}>
                <option value="-onsaleDate">On Sale Date (from newest)</option>
                <option value="onsaleDate">On Sale Date (from oldest)</option>
                <option value="title">Title (a-z)</option>
                <option value="-title">Title (z-a)</option>
                <option value="issueNumber">Issue Number (from lowest)</option>
                <option value="-issueNumber">
                  Issue Number (from highest)
                </option>
              </Form.Select>
              <Row>
                <Col>
                  <label htmlFor="start">Start date:</label>
                  <input
                    type="date"
                    min="1960-01-01"
                    max="2021-01-01"
                    onChange={startDateChange}
                  />
                </Col>
                <Col>
                  <label htmlFor="end">End date:</label>
                  <input
                    type="date"
                    min="1960-01-01"
                    max={today}
                    onChange={endDateChange}
                  />
                </Col>
              </Row>
              <Button className="mt-4" type="button" onClick={handleSubmit}>
                Search
              </Button>
            </Form>
            {displayErrorMessage(errorMessage)}
          </Col>
          <Col></Col>
        </Row>
        <div className="loaderContainer mt-3">
          <Loader className="loader" />
        </div>
        <RenderData />
      </Container>
    </div>
  )
}
