import './style.scss'
import Link from 'next/link'
const Tags = () => {
  return (
    <div className="tags">
      <b>Tags</b>
      <Link href="/">
        <a>Covid 19</a>
      </Link>
      <Link href="/">
        <a>Hậu Covid 19</a>
      </Link>
      <Link href="/">
        <a>Doanh nghiệp khủng khoảng covid</a>
      </Link>
    </div>
  )
}

export default Tags
