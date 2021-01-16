import './style.scss'
import Link from 'next/link'
import { Icon } from '@components/icon/Icon'
const BlockNewsHome = () => {
  return (
    <div className="block-news-home">
      <div className="art_topstory">
        <div className="thumb-big">
          <Link href="/news-detail">
            <a>
              <img src="/imgweb/big-img.jpg" alt="" className="img-fluid" />
              <span className="sub-title-category">Tin tức 24h</span>
            </a>
          </Link>
        </div>
        <div className="content">
          <h3 className="content-title">
            <Link href="/news-detail">
              <a>
                Bộ trưởng Bộ Y tế đề nghị Bệnh viện Đại học Y Dược thành lập
                khoa vệ tinh ở các tỉnh <Icon name={'video'} />
              </a>
            </Link>
          </h3>
          <p>
            <Link href="/news-detail">
              <a>
                Cho rằng bệnh nhân chỉ bị hắt hơi, sổ mũi, tiểu đường… cũng phải
                đón xe lên thành phố khám bệnh, Bộ trưởng Bộ Y tế đề nghị hãy
                trả bệnh nhân về lại địa phương.
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="sub_featured">
        <div className="art-item">
          <div className="small-big">
            <Link href="/news-detail">
              <a>
                <img className="img-fluid" src="/imgweb/top1.jpg" alt="" />
              </a>
            </Link>
          </div>
          <div className="content">
            <h3 className="content-title">
              <Link href="/news-detail">
                <a>
                  Hội nghị tim mạch 2016: Nhiều tiến bộ trong điều trị bệnh tim
                  mạch <Icon name={'video'} />
                </a>
              </Link>
            </h3>
            <Link href="/news-list">
              <a>
                <span className="sub-title-category handdle">
                  Kiến thức y khoa
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="art-item">
          <div className="small-big">
            <Link href="/news-detail">
              <a>
                <img className="img-fluid" src="/imgweb/top2.jpg" alt="" />
              </a>
            </Link>
          </div>
          <div className="content">
            <h3 className="content-title">
              <Link href="/news-detail">
                <a>
                  Ăn quá nhiều quả hồng, bệnh nhân bị tắc ruột{' '}
                  <Icon name={'video'} />
                </a>
              </Link>
            </h3>
            <Link href="/news-list">
              <a>
                <span className="sub-title-category handdle">Dinh dưỡng</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockNewsHome
