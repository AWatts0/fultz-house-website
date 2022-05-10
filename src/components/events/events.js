import {
    Container,CardGroup, Card
} from 'react-bootstrap'
import './events.css'

function EventsPage() {
    return(
        <Container className='main'>
            <div className='events-header'>
                <h1>
                Upcoming Events
                </h1>
            </div>
            <section className='month'>
                <div className='month-header' >
                    <h2>May</h2>
                </div>
            <CardGroup>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </section>
            <section className='month'>
            <div className='month-header' >
                    <h2>June</h2>
                </div>
                <CardGroup>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </section>
            <section className='month'>
            <div className='month-header' >
                    <h2>July</h2>
                </div>
                <CardGroup>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </section>
            <section className='month'>
            <div className='month-header' >
                    <h2>August</h2>
                </div>
                <CardGroup>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-event'>
                    <div className='date'>
                        <p>
                            APR
                        </p>
                        <p>
                            27
                        </p>
                    </div>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </section>
        </Container>
    )
}

export default EventsPage