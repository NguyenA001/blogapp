import React, { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getPublishedBlogItems } from "../Services/DataService";

export default function BlogPage() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect( async () => {
    let publishedItems = await getPublishedBlogItems();
    console.log(publishedItems);
    setBlogItems(publishedItems);
  })
  // const [blogItems, setBlogItems] = useState([
  //   {
  //     Id: 1,
  //     Title: "Growing Tomatos",
  //     Publisher: "Walaa AlSalmi",
  //     Date: "01-12-2022",
  //     Text: "Devote a prime, sunny spot to growing tomatoes. Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants.",
  //     Image:
  //       "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=m9c3T-XV",
  //     published: true,
  //   },

  //   {
  //     Id: 2,
  //     Title: "Growing Peppers",
  //     Date: "01-06-2022",
  //     Publisher: "Tom Finland",
  //     Text: "Set pepper plant seedlings out after the last spring frost. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day.",
  //     Image:
  //       "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Bell-Peppers-A105431708.jpg",
  //     published: true,
  //   },
  //   {
  //     Id: 3,
  //     Title: "Growing Eggplants",
  //     Publisher: "Sam Bilton",
  //     Date: "12-24-2021",
  //     Text: "Start eggplant seeds indoors up to 10 weeks before the last frost date. Plant the seeds 1/4inch deep, water after planting and cover loosely with plastic to retain moisture. Transplant the seedlings to the garden when soil temperatures reach 60 degrees. Transplant the seedlings to the garden when soil temperatures reach 60 degrees.",
  //     Image:
  //       "https://cleangreensimple.com/wp-content/uploads/2020/05/growing-eggplant.jpg",
  //     published: true,
  //   },
  //   {
  //     Id: 4,
  //     Title: "Growing Zucchinis",
  //     Publisher: "Tina Freedman",
  //     Date: "12-15-2021",
  //     Text: "Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and small space gardening. There are also bush types suitable for container gardening and small space gardening.",
  //     Image:
  //       "https://greenhouseemporium.com/wp-content/uploads/2020/02/How_to_Grow_Zucchini_2.jpg",
  //     published: true,
  //   },
  // ]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          {blogItems.map((item, i) => {
            return (
              <>
                {i % 2 == 0 ? (
                  <>
                    <Row key={i}>
                      <Col md={6}>
                        <Row>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <h2>{item.title}</h2>
                          </Col>
                          <Col md={12}>
                            <Row>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                <h6>{item.publisherName}</h6>
                              </Col>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                <h6>{item.date}</h6>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <img src={item.image} width="350px" height="200px"/>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                      <h3>{item.description}</h3>
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <Row key={i}>
                      <Col md={6} className="d-flex justify-content-center">
                      <h3>{item.description}</h3>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <h2>{item.title}</h2>
                          </Col>
                          <Col md={12}>
                            <Row>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                <h6>{item.publisherName}</h6>
                              </Col>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                <h6>{item.date}</h6>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <img src={item.image} width="350px" height="200px"/>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
