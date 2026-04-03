
import AllPosts from "./AllPosts";
const PostDetails = (props) => (
  <div className="blog-list-item">
    <div className="blog-list-item-title">
      {props.post.titre}
    </div>

    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author">
        {props.post.auteur},
      </span>
    </div>

    <div className="blog-list-item-lede">
      <img src={props.post.imageUrl} alt="no content" />
    </div>
  </div>
);

export default PostDetails;