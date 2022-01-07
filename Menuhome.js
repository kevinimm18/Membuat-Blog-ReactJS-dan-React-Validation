import './App.css';
import './mystyles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

let isimenuhome = [
    {
        "namagambar": "GUNUNG BROMO",
        "namasubgambar": "JAWA",
        "sumberfoto": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/12/28/810982021.jpg"
    },
    {
        "namagambar": "GUNUNG KINABALU",
        "namasubgambar": "KALIMANTAN",
        "sumberfoto": "https://getlost.id/wp-content/uploads/2018/09/shutterstock_395343172-Copy.jpg"
    },
    {
        "namagambar": "DANAU SINGKARAK",
        "namasubgambar": "SUMATERA",
        "sumberfoto": "https://www.andalastourism.com/wp-content/uploads/2021/03/Danau-Singkarak.jpg"
    },
    {
        "namagambar": "ES PISANG HIJAU",
        "namasubgambar": "SULAWESI",
        "sumberfoto": "https://miro.medium.com/max/1400/1*N1xiCOB8KBfjdfBHqBiemw.jpeg"
    },
    {
        "namagambar": "IKAN KUAH KUNING",
        "namasubgambar": "PAPUA",
        "sumberfoto": "https://cdn.idntimes.com/content-images/community/2020/12/fromandroid-bf782270836e389fde1fe5cf2c1a6b1f_600x400.jpg"
    },
    {
        "namagambar": "NUSA PENIDA",
        "namasubgambar": "BALI",
        "sumberfoto": "https://i2.wp.com/girleatworld.net/wp-content/uploads/2018/04/nusa-penida-kelingking-1.jpg?resize=1024%2C816&ssl=1"
    }
];


class Menuhome extends React.Component {
    render() {
        return (
            <>
                <div class="columns is-multiline">
                    {
                        isimenuhome.map(item => (
                            <article className="tile is-child notification is-primary-light column is-one-third">
                                <p className="title is-size-2 has-text-centered">{item.namagambar}</p>
                                <p className="subtitle is-4 has-text-centered">{item.namasubgambar}</p>
                                <figure className="image is-5by4">
                                    <img src={item.sumberfoto} />
                                </figure>
                            </article>
                        ))
                    }
                </div>

                <div className="tile">
                    <article className="tile is-child notification is-link">
                        <p className="title is-size-1 has-text-centered">PLACES, FOOD</p>
                        <p className="subtitle has-text-centered">Aligned with INDONESIA Heritage</p>
                    </article>
                </div>
            </>
        );
    }
}







export default Menuhome;