// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-items-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogList={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
