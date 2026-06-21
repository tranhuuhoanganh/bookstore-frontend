class HinhAnhModel {
    maHinhAnh:number
    tenHinhAnh?:String
    icon?:boolean
    link?:String
    duLieuAnh?:String

    constructor(maHinhAnh:number,
    tenHinhAnh?:String,
    icon?:boolean,
    link?:String,
    duLieuAnh?:String){
        this.maHinhAnh = maHinhAnh
        this.tenHinhAnh = tenHinhAnh
        this.icon=icon
        this.link = link
        this.duLieuAnh = duLieuAnh
    }
}export default HinhAnhModel