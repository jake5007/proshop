import { Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {
  Product,
  Loader,
  Message,
  Paginate,
  ProductCarousel,
} from "../components";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {keyword ? (
        <Link to="/" className="btn btn-light mb-3">
          Go Back
        </Link>
      ) : (
        <ProductCarousel />
      )}
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
            {data.products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword} />
        </>
      )}
    </>
  );
};
export default HomeScreen;
