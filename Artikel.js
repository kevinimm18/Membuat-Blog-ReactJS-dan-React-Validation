// import logo from './logo.svg';
import './App.css';
import './mystyles.scss';
import React from 'react';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Listartikel from './Listartikel';

//const Artikel = localStorage.getItem('myCat');

// function Listartikel() {
//   const {
//       register,
//       handleSubmit,
//       watch,
//       formState: { errors }
//   } = useForm();

  // const onSubmit = (data) => {
  //     alert(JSON.stringify(data));
  //     localStorage.setItem('Listartikel', JSON.stringify(data))
  // };

  // console.log(watch("example"));

  // const intialValues = {
  //     Nama: "",
  //     Email: "",
  //     Kategori: "",
  //     Age: 0,
  //     Pesan: ""
  // };


class Artikel extends React.Component {
  // componentDidMount() {
  //   data = JSON.parse(localStorage.getItem(Listartikel) || "[]");
  // }

  render() {
    return (
      <>
      <Navbar />
        <div class="columns container is-vertical is-one-third has-background-link">
          <div class="columns-image is-one-third">
            <figure class="image is-2by2">
              <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/12/28/810982021.jpg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
              </div>
              <div class="media-content">
                <p class="title is-3 notifications has-text-info-light">GUNUNG BROMO</p>
                <p class="subtitle is-3 has-text-info-light">JAWA</p>
              </div>
            </div>

            <div class="content has-text-info-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br />
              <time datetime="2016-1-1">11: 09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

        <div class="columns container is-vertical is-one-third has-background-link">
          <div class="columns-image is-one-third">
            <figure class="image is-2by2">
              <img src="https://i2.wp.com/girleatworld.net/wp-content/uploads/2018/04/nusa-penida-kelingking-1.jpg?resize=1024%2C816&ssl=1" alt="Placeholder image" />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
              </div>
              <div class="media-content has-text-info-light">
                <p class="title is-3 notifications has-text-info-light">NUSA PENIDA</p>
                <p class="subtitle is-3 has-text-info-light">BALI</p>
              </div>
            </div>

            <div class="content has-text-info-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11: 09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

        <div class="columns container is-vertical is-one-third has-background-link">
          <div class="columns-image is-one-third">
            <figure class="image is-2by2">
              <img src="https://getlost.id/wp-content/uploads/2018/09/shutterstock_395343172-Copy.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
              </div>
              <div class="media-content has-text-info-light">
                <p class="title is-3 notifications has-text-info-light">GUNUNG KINABALU</p>
                <p class="subtitle is-3 has-text-info-light">KALIMANTAN</p>
              </div>
            </div>

            <div class="content has-text-info-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11: 09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

      </>
    );
  }
}


export default Artikel;
