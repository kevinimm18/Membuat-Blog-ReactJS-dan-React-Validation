// import logo from './logo.svg';
import './App.css';
import './mystyles.scss';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";


function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    localStorage.setItem('Contact', JSON.stringify(data))
  };

  console.log(watch("example"));

  const intialValues = {
    Nama: "",
    Email: "",
    Kategori: "",
    Age: 0,
    Pesan: ""
  };

return (
  <>
    <Navbar />
    <br />
    <h1 class="title is-1 is-spaced has-text-link container is-max-desktop has-text-centered is-family-monospace">CONTACT US</h1>
    <h2 class="subtitle is-4 has-text-link container is-max-desktop has-text-centered is-family-sans-serif">Kami senang mendengar pendapat dari Anda. Silahkan sampaikan Saran, Pesan, atau Pertanyaan di Form dibawah ini</h2>

    <div className="field container is-max-desktop">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="Nama">Nama</label>
        <div className="control">
          <input
            defaultValue={intialValues.Nama}
            className="input is-dark" type="text"
            placeholder="Nama Anda"
            {...register("Nama", {
              required: true,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors?.Nama?.type === "required" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Yang ini harus diisi masbro</p>
          )}
          {errors?.Nama?.type === "pattern" && (
            <p style={{fontFamily: "Samanata", color:'red'}}>Cuma boleh masukkin alfabeth</p>
          )}

        </div>

      <br />


      <div className="field container is-max-desktop">
        <label className="label" htmlFor="Email">Email</label>
        <div className="control">
          <input
            defaultValue={intialValues.Email}
            className="input is-dark"
            placeholder="emailanda@gmail.com"
            type="Email"
            {...register("Email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors?.Email?.type === "required" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Yang ini juga harus diisi Masbro</p>
          )}


          {errors?.Email?.type === "pattern" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Mohon masukkan Email yang Valid ya</p>
          )}
        </div>
        <br />


        <div className="field container is-max-desktop">
          <label className="label">Saya mau menyampaikan</label>
          <div className="control">
            <div className="select is-dark">
              <form onSubmit={handleSubmit(onSubmit)}>
                <select
                  defaultValue={intialValues.Kategori}
                  {...register("Kategori", {
                    required: true,
                    validate: (value) => value !== "Pilih"
                  })}>
                  <option value="Pilih">Pilih Kategori</option>
                  <option value="Saran">Saran</option>
                  <option value="Keluhan">Keluhan</option>
                  <option value="Pertanyaan">Pertanyaan</option>
                </select>
              </form>

              {errors.Kategori && (
                <p style={{fontFamily: "Samanata", color: "red"}}>Mohon pilih Kategori</p>
              )}
            </div>
          </div>


          <br /> <br />


          <label className="label">Usia</label>
          <input
            defaultValue={intialValues.Age}
            className="input is-dark" type="number" placeholder="Hanya angka"
            {...register("Age", {
              validate: {
                positiveNumber: (value) => parseFloat(value) > 0,
                lessThanHundred: (value) => parseFloat(value) < 200
              }
            })}
          /> <br />
          {errors.Age && errors.Age.type === "positiveNumber" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Your Age is invalid</p>
          )}
          {errors.Age && errors.Age.type === "lessThanHundred" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Calon immortal dilarang mengisi Form</p>
          )} <br />
  
          <div className="field container">
            <label className="label">Pesan.... Minum ?</label>
            <div className="control">
            <textarea
              defaultValue={intialValues.Pesan}
              className="textarea is-dark" type="text" placeholder="Ketik Pesan di Field ini" rows="10"
            {...register("Pesan", {
              required: true,
            })}
            />
            {errors?.Pesan?.type === "required" && (
            <p style={{fontFamily: "Samanata", color: "red"}}>Yang ini harus diisi masbro</p>
            )}
              
            </div>
          </div>
          <div className="field is-grouped container is-max-desktop">
            <button className="button is-link" type="submit">SUBMIT</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  </>
);
}


export default Contact;
