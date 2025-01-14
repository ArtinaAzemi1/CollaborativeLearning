import React, {useState, useEffect} from 'react';

const Student =() => {
    return (
        <div className="content">
            <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Student Table</CardTitle>
                <br/>
              </CardHeader>
              <CardBody>
              <Button style={{marginBottom: "20px", marginTop: "20px"}}>Add Student</Button>
              <Container>
                <div style={tableStyle}>
                <Table style={minWidthStyle} responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                  </Table>
                  </div>
                  </Container>
                  </CardBody>
            </Card>
          </Col>        
        </Row>
        </div>
    )
}

export default Student;