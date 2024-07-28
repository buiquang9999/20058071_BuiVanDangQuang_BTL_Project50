import { Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid p-0 ">
        <div className="ext-center text-lg-start bg-footer">
          <div className="container p-4">
            <div className="row mt-4 mx-0">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h4
                  className="text-uppercase mb-4"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Al Nile"
                  }}
                >
                  Liên Hệ
                </h4>
                <div>
                  <p className="text-footer">
                    <i className="bi bi-geo-alt-fill me-2 " />
                    12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
                <div>
                  <p className="text-footer">
                    <i className="bi bi-telephone-fill me-2 " />
                    0702750337
                  </p>
                </div>
                <div className="mt-4 ">
                  <a>
                    <i className="bi bi-facebook fs-4 btn text-footer" />
                  </a>
                  <a>
                    <i className="bi bi-youtube fs-4 btn text-footer" />
                  </a>
                  <a>
                    <i className="bi bi-twitter fs-4 btn text-footer" />
                  </a>
                  <a>
                    <i className="bi bi-instagram fs-4 btn text-footer" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4
                  className="text-uppercase mb-4 pb-1"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Al Nile"
                  }}
                >
                  Email
                </h4>
                <div className="form-outline form-white mb-4 ">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control input-field-footer"
                    placeholder="Địa chỉ Email..."
                  />
                </div>
                <ul className="fa-ul text-white">
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home" />
                    </span>
                    <a href="" className="ms-2 text-footer">
                      Về chúng tôi
                    </a>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope" />
                    </span>
                    <a href="" className="ms-2 text-footer">
                      Tuyển dụng
                    </a>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone" />
                    </span>
                    <a href="" className="ms-2 text-footer">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4
                  className="text-uppercase mb-4 "
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Al Nile"
                  }}
                >
                  Giờ Mở Cửa
                </h4>
                <table className="table text-center text-footer">
                  <thead>
                    <tr>
                      <td>T2 - T5:</td>
                      <td>6:00 - 22:00</td>
                    </tr>
                  </thead>
                  <tbody className="fw-normal">
                    <tr>
                      <td>T6 - CN:</td>
                      <td>6:00 - 24:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <img
                  style={{ marginTop: "-110px", marginLeft: 835 }}
                  src="https://theme.hstatic.net/200000256383/1000657411/14/i_payment.png?v=169"
                  alt="Ariyana Tourism Complex"
                  width="200px;"
                />
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >

            <a className="text-footer" href="https://codegym.vn/">
              © 2024 Bùi Quang
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}