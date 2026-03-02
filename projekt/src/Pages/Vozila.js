import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import "./Blog.css";

const BASE_URL = process.env.REACT_APP_API_URL

const Vozila = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [vozila, setVozila] = useState([]);
  const [izabranoVozilo, setIzabranoVozilo] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}marka`)
      .then((response) => response.json())
      .then((data) => setVozila(data));
  }, []);

  useEffect(() => {
    setLoading(true);

    let url = `${BASE_URL}vozila?_embed`;
    if (izabranoVozilo) url += "&marka=" + izabranoVozilo;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, [izabranoVozilo]);

  return (
    <>
      {loading && <Loader />}
      <div className="blog-page">
        <div className="container">
          <h1>Vozila</h1>
          <div className="row mb-4">
            <div className="col-6">
              <select className="form-select" value={izabranoVozilo} onChange={(e) => setIzabranoVozilo(e.target.value)}>
                <option value="">Sva vozila</option>
                {vozila.map((marka) => (
  <option key={marka.id} value={marka.id}>
    {marka.name}
  </option>
))}
              </select>
            </div>
          </div>
          <div className="row">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url;

              return (
                <div key={post.id} className="col-md-4 mb-4 blog-post">
                  {image && (
                    <Link to={'/vozila/' + post.slug}>
                    <img
                      src={image}
                      className="mb-3"
                      alt={post.title.rendered}
                    />
                    </Link>
                   )}
                  <Link to={'/vozila/' + post.slug}>   
                    <h2>{post.title.rendered}</h2>
                  </Link>

                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  <p>
                    {post._embedded?.author?.[0]?.name} |{" "}
                    {new Date(post.date).toLocaleDateString("hr-HR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vozila;