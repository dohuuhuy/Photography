import { MDBIcon } from 'mdbreact'
import { social_interface } from 'src/interfaces'
import { list_social } from 'src/utils/sample-data'

export const Social = () => {
  return (
    <ul className="list-inline">
      {list_social.map(
        ({ icon, link, classname }: social_interface, i: number) => {
          return (
            <li className="list-inline-item" key={i}>
              <a target="_blank" href={link} className={classname}>
                <MDBIcon fab icon={icon} />
              </a>
            </li>
          )
        },
      )}
    </ul>
  )
}
