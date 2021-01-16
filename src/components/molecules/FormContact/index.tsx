import BtnCustom from '@components/atoms/Button'
import { Icon } from '@components/icon/Icon'
import cx from 'classnames'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './style.module.scss'

const FormContact = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = (data: any) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    const url = `${process.env.api}/contacts`

    fetch(url, requestOptions).then(() => {
      toast.success('Cảm ơn phản hồi của bạn.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      reset()
    })
  }

  return (
    <div className={styles.support}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ul className={styles.support__item}>
        <li>
          <Icon name="worldwide" />
          <div>
            <h3>Địa chỉ</h3>
            <p>84 Thành Thái,Phường 12, Quận 10, TP.HCM</p>
          </div>
        </li>
        <li>
          <Icon name="mobile" />
          <div>
            <h3>Điện thoại</h3>
            <p>(028) 54484949 - (028) 38656744</p>
          </div>
        </li>
        <li>
          <Icon name="email" />
          <div>
            <h3>Email</h3>
            <p>contact@pkh.vn</p>
          </div>
        </li>
      </ul>
      <form className={styles.form_lh}>
        <div className="row">
          <div className={cx(styles['group-input'], 'col-md-6')}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Vui lòng nhập họ tên *"
                className="form-control"
                name="UserName"
                ref={register({
                  validate: (value: string) =>
                    value !== '' || 'Vui lòng nhập họ tên.',
                })}
              />
              <div className={styles.errors_message}>
                {errors.UserName && errors.UserName.message}
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Địa chỉ email *"
                className="form-control"
                name="Email"
                ref={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Vui lòng nhập địa chỉ email.',
                  },
                })}
              />
              <div className={styles.errors_message}>
                {errors.Email && 'Vui lòng nhập địa chỉ email.'}
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="form-control"
                name="Phone"
                // ref={register({
                //   pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                // })}
              />
              <div className={styles.errors_message}>
                {errors.Phone && 'Số điện thoại không đúng.'}
              </div>
            </div>
          </div>
          <div className={cx(styles['group-input'], 'col-md-6')}>
            <div className="form-group">
              <textarea
                placeholder="Nội dung *"
                className="form-control"
                rows={5}
                cols={50}
                name="content"
                ref={register({ required: true })}
              />
              <div className={styles.errors_message}>
                {errors.content && 'Vui lòng nhập nội dung.'}
              </div>
            </div>
          </div>
        </div>
        <div className={cx('text-center', styles.btn_send)}>
          <BtnCustom onClick={handleSubmit(onSubmit)}>Gửi thông tin</BtnCustom>
        </div>
      </form>
    </div>
  )
}
export default FormContact
