import { Link } from "react-router-dom";
import { NEWS } from "../store/news";
import { Button } from "react-bootstrap";

function NewsList() {
  const loadItem = (name, image, status, description, date) => {
    localStorage.setItem("name", name);
    localStorage.setItem("image", image);
    localStorage.setItem("status", status);
    localStorage.setItem("description", description);
    localStorage.setItem("date", date);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col mt-3 mb-3">
        </div>
      </div>
      <div className="row">
        {NEWS && NEWS.length > 0 ? (
          NEWS.map((item) => {
            if (item.status) {
              return (
                <div className="col-md-3 mb-3 mt-3 mx-auto">
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>

                      <Link to={`/news`}>
                        <Button
                          onClick={() =>
                            loadItem(
                              item.name,
                              item.image,
                              item.status,
                              item.description,
                              item.date
                            )
                          }
                        >
                          Show
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <div className="col">
            <p>No data available</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default NewsList;
