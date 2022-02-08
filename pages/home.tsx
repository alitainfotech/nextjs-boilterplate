import Layout from "components/common/Layout";

const HomePage = () => (
  <Layout>
    <>
      <div className="banner-wrapper">
        <div className="b-inner b-one">
          <h2 className="">
            <img src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22.jpg" />
            High
          </h2>
        </div>
        <div className="b-inner b-two">
          <h2 className="">
            end
            <img src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg" />
          </h2>
        </div>
        <div className="b-inner b-three">
          <h2 className="">
            <img src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db9eec2d6b7f_Hero-Gif-5.jpg" />
            digital
            <img
              className="img-r"
              src="https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbcbcd2d6b7a_Hero-Gif-21-p-1080.jpeg"
            />
          </h2>
        </div>
        <div className="b-inner b-four">
          <h2 className="">experiences</h2>
        </div>
      </div>
    </>
  </Layout>
);

export default HomePage;
