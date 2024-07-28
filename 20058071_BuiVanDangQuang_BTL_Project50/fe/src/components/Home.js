import { useEffect, useState } from "react"
import productService from "../service/login/product/productService"
import {  useNavigate } from "react-router-dom"
export default function Home() {
    const [productSaleList, setProductSaleList] = useState([])
    
    const getProductSaleList = async () => {
        try {
            const res = await productService.productSaleList()
            console.log(res);
            setProductSaleList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductSaleList()
        document.title = "Trang Chủ";
    }, [])

    const navigate = useNavigate()
    const handleDetailProduct = (id)=>{
        navigate('/product/detail/' + id)
    }
    console.log(productSaleList);
    return (
        <>
            <div style={{ marginTop: 117 }}>
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://healthyct.vn/wp-content/uploads/2021/12/thuc-pham-chuc-nang-healthy-care-01.jpg"
                                alt="New York"
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />


                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://nhathuocthanthien.com.vn/wp-content/uploads/2020/12/dgm_nttt_banner-Pharmacy-mb-tpcn.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />

                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://nhathuockhangviet.com/wp-content/uploads/2021/12/Banner-thuc-pham-chuc-nang-800x320.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>
            <section className="service-policy-area section-space container">
                <div className='container mt-5'>
                    <div className="d-flex">
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_1.jpg?v=1609"
                                    className="d-block w-100  h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_2.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_3.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_4.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_7.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-policy-area section-space container">
                <div ><h2 className='text-center bg-home text-secondary py-3'>SẢN PHẨM KHUYẾN MÃI</h2></div>
                <div className='container'>
                    <div id="carouselExampleControls" className="carousel carousel-dark slide " data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center mt-3">
                                    {
                                        productSaleList.slice(0,4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center mt-3">
                                {
                                        productSaleList.slice(4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <hr className='mx-5 hr-dieucosmetics' />

            <div className="container px-0 mt-5">
                <div className="row mx-0 mt-2 mb-5 ms-5 align-items-center">
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                        <h4 style={{ color: 'GrayText', textAlign: 'center' }}>
                            Với Thực phẩm bảo vệ sức khỏe
                            <h3 style={{ color: "#287035" }}>Tinh dầu CBD HempSapa</h3>
                            giấc ngủ của bạn sẽ được cải thiện
                        </h4>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-80 shadow"
                            src="https://simpleweb.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/12/0001-1.png"
                            alt=""
                        />
                    </div>
                    <div className="col-4">

                        <h6 style={{
                            color: 'black',
                            lineHeight: 2,
                            fontFamily: '"Cormorant Infant", "serif"'
                        }}>
                            Sử dụng tinh dầu CBD trong chăm sóc sức khỏe và trị bệnh đang là xu hướng diễn ra trên toàn thế giới. Tinh dầu CBD (CBD oil) được chiết xuất từ cây gai dầu (hemp) được dùng như thực phẩm chức năng để hỗ trợ điều trị nhiều loại bệnh lý như : ung thư, mất ngủ, trầm cảm, xương khớp, parkinson, động kinh,… hoàn toàn lành tính và không tác dụng phụ. Sản phẩm nhập khẩu 100% tiêu chuẩn Châu Âu.
                            ~ CBD Việt Nam ~                        </h6>
                    </div>
                </div>
                <div className="shadow-cosmetics-1">
                    <div className="row mx-0 bg-home text-white">
                        <div className="row container mx-0 px-0">
                            {/* First Product Section */}
                            <div className="column col-6 px-0 figure" id="zoomIn">
                                <img className="w-100" style={{ height: "500px" }} src="https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/04/gh-creation-ex-vien-uong-ho-tro-tang-chieu-cao-chinh-hang-nhat-ban-6449fc9eb94cd-27042023113958.jpg" alt="Product 1" />
                            </div>
                            <div className="col-6 mt-2 d-flex align-items-center" style={{ background: "white" }}>
                                <div style={{ textAlign: "center", width: "100%" }}>
                                    <h3 style={{ color: '#287035', paddingTop: 30 }}>Canxi Healthy Care Kids Milk Calcium 60 viên</h3>
                                    <h6 style={{
                                        color: 'black',
                                        lineHeight: 2,
                                        paddingTop: 20,
                                        paddingLeft: 30,
                                        paddingRight: 30,
                                        fontFamily: '"Cormorant Infant", "serif',
                                        background: "white"
                                    }}>
                                        Healthy Care Kids Milk Calcium là viên uống bổ sung Canxi cho bé hỗ trợ phát triển và duy trì xương, răng khỏe mạnh. Với thành phần bổ sung 65mg Canxi và 2,5mcg Vitamin D hằng ngày hỗ trợ sự tăng trưởng và phát triển khỏe mạnh ở trẻ sơ sinh và trẻ em.
                                        <ol style={{ textAlign: "left" }}>
                                            <li>Tăng cường sự tăng trưởng và phát triển khỏe mạnh ở trẻ sơ sinh và trẻ nhỏ.</li>
                                            <li>Hỗ trợ sự phát triển răng ở trẻ sơ sinh và trẻ nhỏ.</li>
                                            <li>Duy trì sức khỏe hệ thống miễn dịch.</li>
                                        </ol>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="row container mx-0 px-0">
                            {/* Second Product Section */}
                            <div className="col-6 mt-2 d-flex align-items-center" style={{ background: "white" }}>
                                <div style={{ textAlign: "center", width: "100%" }}>
                                    <h3 style={{ color: '#287035', paddingTop: 30 }}>Viên uống Ginkgo Biloba Healthy</h3>
                                    <h6 style={{
                                        color: 'black',
                                        lineHeight: 2,
                                        paddingTop: 10,
                                        paddingLeft: 30,
                                        paddingRight: 30,
                                        fontFamily: '"Cormorant Infant", "serif',
                                        background: "white"
                                    }}>
                                        Sản phẩm Ginkgo Biloba 2000 Úc là thực phẩm chức năng được nghiên cứu và sản xuất bởi thương hiệu thương hiệu Healthy Care. Một trong những thương hiệu lớn chuyên cung cấp các sản phẩm chăm sóc sức khỏe với nguồn gốc từ tự nhiên, lành tính cho người sử dụng. Với sự tư vấn của hơn 250 chuyên gia chăm sóc sức khỏe đầu ngành, Healthy Care được người dùng tin tưởng và sử dụng trên toàn thế giới, trong đó có Việt Nam.
                                    </h6>
                                </div>
                            </div>
                            <div className="col-6 px-0 column figure" id="zoomIn">
                                <img className="w-100 h-100" src="https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product-gallery/4367/vien-tuan-hoan-nao-ginkgo-biloba-healthy-care-uc-2000mg-17006408294367.jpg" alt="Product 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mx-5 hr-dieucosmetics mt-5' />

            <div className="container mt-5 py-5 mb-5" style={{background: "white"}}>
                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/free_shipping.png" alt=""/>
                            </div>
                            <div className="policy-terms">
                                <h5>Miễn Phí Giao Hàng</h5>
                                <p>Miễn phí giao hàng toàn quốc</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/support247.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hỗ Trợ 24/7</h5>
                                <p>Hỗ trợ 24h trong 1 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/money_back.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hoàn Trả Lại Tiền</h5>
                                <p>Hoàn trả lại tiền trong vòng 30 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/promotions.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Giảm Giá Đặt Hàng</h5>
                                <p>Giảm giá 5% trên mỗi đơn hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}