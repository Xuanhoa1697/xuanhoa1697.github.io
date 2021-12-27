const container = document.querySelector(".container")


let Header = (props) => {
    return <h1>{props.text}</h1>
}

class Item extends React.Component{
    render() {
        return (
            <div className="item">
                <a href={this.props.href}>
                    <img src={this.props.img} alt="Fail" />
                    <p>{this.props.text}</p>
                </a>
            </div>
        )
    }
}

function Content (){
    return (
        <div className="content">
            <Item img="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thời trang Nam"/>
            <Item img="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Điện thoại & Phụ kiện"/>
            <Item img="https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thiết bị Điện tử"/>
            <Item img="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Máy tính và Laptop"/>
            <Item img="https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Máy ảnh và Máy quay phim"/>
            <Item img="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Đồng hồ"/>
            <Item img="https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Giày dép Nam"/>
            <Item img="https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thiết bị Điện gia dụng"/>
            <Item img="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thể thao & Du lịch"/>
            <Item img="https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Oto & Xe máy & Xe đạp"/>
            <Item img="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thời trang Nữ"/>
            <Item img="https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Mẹ & Bé"/>
            <Item img="https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Nhà cửa và Đời sống"/>
            <Item img="https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Sắc đẹp"/>
            <Item img="https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Sức khỏe"/>
            <Item img="https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Túi ví nữ"/>
            <Item img="https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Phụ kiện trang sức Nữ"/>
            <Item img="https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Bách hóa Online"/>
            <Item img="https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Nhà sách Online"/>
            <Item img="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567" text="Thời trang Nam"/>
            
        </div>
    )
}


class BodyContent extends React.Component{
    render() {
        return (
            <div className="Body-content">
                <Header text="DANH MỤC"/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(<BodyContent/>,container)

