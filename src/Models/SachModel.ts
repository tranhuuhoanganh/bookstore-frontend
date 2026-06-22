class SachModel {
    maSach: number
    tenSach?: String // có thể bị null
    giaBan?: number
    giaNiemYet?: number
    moTa?: String
    soLuong?: number
    tenTacGia?: String
    trungBinhXepHang?: number

    constructor(
        maSach: number,
        tenSach: String, // có thể bị null
        giaBan: number,
        giaNiemYet: number,
        moTa: String,
        soLuong: number,
        tenTacGia: String,
        trungBinhXepHang: number,) {
        this.maSach = maSach
        this.tenSach = tenSach
        this.giaNiemYet = giaNiemYet
        this.moTa = moTa
        this.giaBan = giaBan
        this.soLuong = soLuong
        this.tenTacGia = tenTacGia

        this.trungBinhXepHang = trungBinhXepHang

    }
} export default SachModel