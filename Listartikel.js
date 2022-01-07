import Artikel from './Artikel';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import ImageUploading from 'react-images-uploading';
import React, { Component } from 'react';
import { render } from 'react-dom';

function Listartikel() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        localStorage.setItem('Listartikel', JSON.stringify(data))
    };
    
    console.log(watch("example"));
    
    const intialValues = {
        Judul: "",
        Isi: "",
        Kategori: "",
        Gambar: "",
    };
    
    onImageChange = event => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    const onImageChange = onImageChange.bind();
    
return (
    <>
        <Navbar />
        <br />
        <h1 class="title is-1 is-spaced has-text-link container is-max-desktop has-text-centered is-family-monospace">UNTUK MENAMBAH ARTIKEL</h1>

        <div className="field container is-max-desktop">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label" htmlFor="Judul">Judul</label>
                <div className="control">
                    <input
                        defaultValue={intialValues.Judul}
                        className="input is-dark" type="text"
                        placeholder="Judul Anda"
                        {...register("Judul", {
                            required: true,
                        })}
                    />
                    {errors?.Judul?.type === "required" && (
                        <p style={{ fontFamily: "Samanata", color: "red" }}>This field required</p>
                    )}

                </div>

                <br />


        <div className="field container is-max-desktop">
            <label className="label" htmlFor="Isi">Isi Artikel</label>
                <div className="control">
                    <textarea
                        defaultValue={intialValues.Isi}
                        className="textarea is-dark" type="text" rows="10"
                        placeholder="Isi Artikel"
                            {...register("Isi", {
                                required: true,
                            })}
                    />
                    {errors?.Isi?.type === "required" && (
                        <p style={{ fontFamily: "Samanata", color: "red" }}>Yang ini juga harus diisi Masbro</p>
                    )}

                </div>
                <br />


        <div className="field container is-max-desktop">
            <label className="label">Artikel ini ada di Wilayah: </label>
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
                            <option value="Saran">Sumatera</option>
                            <option value="Keluhan">Jawa</option>
                            <option value="Pertanyaan">Nusa Tenggara</option>
                            <option value="Pertanyaan">Kalimantan</option>
                            <option value="Pertanyaan">Sulawesi</option>
                            <option value="Pertanyaan">Maluku dan Papua</option>
                        </select>
                    </form>

                    {errors.Kategori && (
                        <p style={{ fontFamily: "Samanata", color: "red" }}>Mohon pilih Kategori</p>
                    )}
                </div>
            </div>

                
        <div className="file">
            <img alt="" src={this.state.image} />
            <h1>Pilih Gambar</h1>
            <input type="file" name="myImage" onChange={onImageChange} />
        </div>
        <br />

        <div className="field is-grouped container is-max-desktop">
            <button className="button is-link" type="submit">SUBMIT</button>
        </div>
        </div>
        </div>
            </form>
        </div>
    </>
)};

export default Listartikel;