import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="col col1">
                <h2>Daftar Film Mu</h2>
                <p>Disini, Memilih Film yang ingin kamu tonton.<br />Jika kamu ingin mencari lebih banyak lagi, klik tombol "lagi"</p>
                <button type="button">Lagi</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;