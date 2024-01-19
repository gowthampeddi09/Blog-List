// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogList} = props
  return (
    <li className="blog-container">
      <div className="blog-top-content">
        <h1 className="blog-heading">{blogList.title}</h1>
        <p className="blog-text">{blogList.publishedDate}</p>
      </div>
      <p className="blog-text">{blogList.description}</p>
    </li>
  )
}

export default BlogItem
