class SachModel {
    maSach: number
    tenSachh?: String // có thể bị null
    giaBan?: number
    giaNiemYet?: number
    moTa?: String
    soLuong?: number
    tenTacGia?: String
    trungBinhXepHang?: number

    constructor(
        maSach: number,
        tenSachh: String, // có thể bị null
        giaBan: number,
        giaNiemYet: number,
        moTa: String,
        soLuong: number,
        tenTacGia: String,
        trungBinhXepHang: number,) {
        this.maSach = maSach
        this.tenSachh = tenSachh
        this.giaNiemYet = giaNiemYet
        this.moTa = moTa
        this.giaBan = giaBan
        this.soLuong = soLuong
        this.tenTacGia = tenTacGia

        this.trungBinhXepHang = trungBinhXepHang

    }
} export default SachModel