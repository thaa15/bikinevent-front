import React,{useState,useEffect,useRef} from "react";
import Dropzone from "react-dropzone";
import {
    LoginBg,
    LoginBox,
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    HaveAccountLink,
    Buttonslog,
    Buttons,
    RadioButton
} from "../LoginPage/LoginStyled";
import {
    RegisterTittle,
    HaveAccount,
    TypeChoose,
    Welcomed,
    TypeImage,
    TypeApart,
    TypeSigned,
    Typebg,
    IconCheck,
    CheckBoxInput,
    TermanConds,
    InputCityApart,
    DropDiv,
    UploadFile
} from "./RegisterStyled"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa";
import pembelireg from "../../../images/pembelireg.png";
import vendorreg from "../../../images/vendorreg.png";
import upfil from "../../../images/uploadfile.png";

const RegisterPage = () =>{
    const [visible,setVisible] = useState(true);
    const [typepw, setTypepw] = useState("");
    const [checkreg, setCheckreg] = useState(true);
    const [file, setFile] = useState();
    const dropRef = useRef();
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);
    
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };

    const updateBorder = (dragState) => {
        if (dragState === "over") {
          dropRef.current.style.border = "1px dashed #007BFF";
        } else if (dragState === "leave") {
          dropRef.current.style.border = "1px dashed #1d6dc2";
        }
    };

    const toggle = () => {
        setVisible(!visible);
        if(visible === false){
            setTypepw("text");
        }else{
            setTypepw("password");
        }
    };

    useEffect(() => {
        toggle();
    }, [])
    return(
        <LoginBg>
            <LoginBox>
                <RegisterTittle>Daftar Sebagai</RegisterTittle>
                <HaveAccount>
                        Sudah memiliki akun?
                    <HaveAccountLink to="/login">Log In</HaveAccountLink>
                </HaveAccount>
                <form>

                    <TypeChoose>
                        <TypeApart onClick={()=>{setCheckreg(true)}}
                        aktif={checkreg === true}>
                            <Typebg aktif={checkreg === true}>
                                <TypeImage src={pembelireg}>
                                    <TypeSigned>
                                        Pembeli
                                        <IconCheck aktif={checkreg === true}>
                                            <FaCheckCircle style={{color:"#219653",
                                                                fontSize:"40px",
                                                                background:"white",
                                                                borderRadius:"100%"}}/>
                                        </IconCheck>
                                    </TypeSigned>
                                </TypeImage>
                            </Typebg>
                        </TypeApart>
                        <TypeApart onClick={()=>{setCheckreg(false)}}
                        aktif={checkreg === false}>
                            <Typebg aktif={checkreg === false}>
                                <TypeImage src={vendorreg}>
                                    <TypeSigned>
                                        Vendor
                                        <IconCheck aktif={checkreg === false}>
                                            <FaCheckCircle style={{color:"#219653",
                                                                fontSize:"40px",
                                                                background:"white",
                                                                borderRadius:"100%"}}/>
                                        </IconCheck>
                                    </TypeSigned>
                                </TypeImage>
                            </Typebg>
                        </TypeApart>
                    </TypeChoose>

                    <Welcomed>
                    Selamat Datang! <br/> Mohon lengkapi data di bawah untuk daftar
                    </Welcomed>

                    {checkreg ? (
                        <>
                        <LoginLabel for="name">Nama Lengkap</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="name"/><br/>
    
                        <LoginLabel for="email">E-mail</LoginLabel><br/>
                        <LoginInput
                            type="email"
                            required
                            name="email"/><br/>
    
                        <LoginLabel for="password">Password</LoginLabel><br/>
                        <LogApart>
                            <LoginInput
                            type={typepw}
                            required
                            name="password"
                            pw/>
                            {visible ? (
                                <IconBg>
                                <BsFillEyeSlashFill
                                onClick={toggle} 
                                style={{color:"#909DAA"}}/>
                                </IconBg>
                            ) : (
                                <IconBg>
                                <BsFillEyeFill 
                                onClick={toggle}
                                style={{color:"#909DAA"}}/>
                                </IconBg>
                            )}
                        </LogApart>
    
                        <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="num"/><br/>
                        </>
                    ) : (
                        <>
                        <LoginLabel for="email">E-mail</LoginLabel><br/>
                        <LoginInput
                            type="email"
                            required
                            name="email"/><br/>
    
                        <LoginLabel for="password">Password</LoginLabel><br/>
                        <LogApart>
                            <LoginInput
                            type={typepw}
                            required
                            name="password"
                            pw/>
                            {visible ? (
                                <IconBg>
                                <BsFillEyeSlashFill
                                onClick={toggle} 
                                style={{color:"#909DAA"}}/>
                                </IconBg>
                            ) : (
                                <IconBg>
                                <BsFillEyeFill 
                                onClick={toggle}
                                style={{color:"#909DAA"}}/>
                                </IconBg>
                            )}
                        </LogApart>

                        <LoginLabel for="name">Nama Lengkap</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="name"/><br/>
                
                        <LoginLabel for="nik">NIK</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="nik"/><br/>
                        
                        <LoginLabel for="birth">Tempat, Tanggal Lahir</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="birth"/><br/>
                        
                        <LoginLabel for="gend">Jenis Kelamin</LoginLabel><br/>
                        <div style={{display:"flex",margin:"5px auto 15px"}}>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <RadioButton type="radio" value="pria" name="gender" checked/>
                                <LoginLabel for="pria">Pria</LoginLabel>
                            </div>
                            <div style={{display:"flex",alignItems:"center",margin:"0 10px"}}>
                                <RadioButton type="radio" value="wanita" name="gender"/>
                                <LoginLabel for="wanita">Wanita</LoginLabel>
                            </div>
                        </div>
                        
                        <LoginLabel for="nameven">Nama Vendor (Tidak Bisa Diubah)</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="nameven"/><br/>

                        <LoginLabel for="address">Alamat Lengkap</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="address"/><br/>
                        
                        <InputCityApart>
                            <div style={{flexBasis:"58%"}}>
                            <LoginLabel for="city">Kota/Kabupaten</LoginLabel><br/>
                            <LoginInput
                                type="text"
                                required
                                name="city"/><br/>
                            </div>
                            <div style={{flexBasis:"40%"}}>
                            <LoginLabel for="pos">Kode Pos</LoginLabel><br/>
                            <LoginInput
                                type="number"
                                required
                                name="pos"/><br/>
                            </div>
                        </InputCityApart>

                        <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="num"/><br/>

                        <LoginLabel for="rek">Nomor Rekening</LoginLabel><br/>
                        <LoginInput
                            type="number"
                            required
                            name="rek"/><br/>

                        <LoginLabel for="bank">Nama Bank</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="bank"/><br/>

                        <LoginLabel for="rekan">Rekening Atas Nama</LoginLabel><br/>
                        <LoginInput
                            type="text"
                            required
                            name="rekan"/><br/>

                        <LoginLabel for="wajah">Upload Foto Wajah</LoginLabel><br/>
                        <UploadFile>
                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder("over")}
                                onDragLeave={() => updateBorder("leave")}
                            >
                                {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps({ className: "drop-zone" })}
                                    ref={dropRef}
                                >
                                    <input {...getInputProps()} required/>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img
                                            className="preview-image"
                                            src={previewSrc}
                                            alt="Preview"
                                            width="60%"
                                            />
                                        </div>
                                        ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this file</p>
                                        </div>
                                        )
                                    ) : (
                                        <img
                                            className="preview-message"
                                            src={upfil}
                                            alt="Preview"
                                            />
                                    )}
                                        </div>
                                        )}
                            </Dropzone>
                        </UploadFile>

                        <LoginLabel for="ktp">Upload Foto KTP</LoginLabel><br/>
                        <UploadFile>
                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder("over")}
                                onDragLeave={() => updateBorder("leave")}
                            >
                                {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps({ className: "drop-zone" })}
                                    ref={dropRef}
                                >
                                    <input {...getInputProps()} required/>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img
                                            className="preview-image"
                                            src={previewSrc}
                                            alt="Preview"
                                            width="60%"
                                            />
                                        </div>
                                        ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this file</p>
                                        </div>
                                        )
                                    ) : (
                                        <img
                                            className="preview-message"
                                            src={upfil}
                                            alt="Preview"
                                            />
                                    )}
                                        </div>
                                        )}
                            </Dropzone>
                        </UploadFile>

                        <LoginLabel for="buktab">Upload Foto Buku Tabungan</LoginLabel><br/>
                        <UploadFile>
                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder("over")}
                                onDragLeave={() => updateBorder("leave")}
                            >
                                {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps({ className: "drop-zone" })}
                                    ref={dropRef}
                                >
                                    <input {...getInputProps()} required/>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img
                                            className="preview-image"
                                            src={previewSrc}
                                            alt="Preview"
                                            width="60%"
                                            />
                                        </div>
                                        ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this file</p>
                                        </div>
                                        )
                                    ) : (
                                        <img
                                            className="preview-message"
                                            src={upfil}
                                            alt="Preview"
                                            />
                                    )}
                                        </div>
                                        )}
                            </Dropzone>
                        </UploadFile>

                        <LoginLabel for="fotok">Upload Foto Toko</LoginLabel><br/>
                        <UploadFile>
                            <Dropzone
                                onDrop={onDrop}
                                onDragEnter={() => updateBorder("over")}
                                onDragLeave={() => updateBorder("leave")}
                            >
                                {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps({ className: "drop-zone" })}
                                    ref={dropRef}
                                >
                                    <input {...getInputProps()} required/>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img
                                            className="preview-image"
                                            src={previewSrc}
                                            alt="Preview"
                                            width="60%"
                                            />
                                        </div>
                                        ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this file</p>
                                        </div>
                                        )
                                    ) : (
                                        <img
                                            className="preview-message"
                                            src={upfil}
                                            alt="Preview"
                                            />
                                    )}
                                        </div>
                                        )}
                            </Dropzone>
                        </UploadFile>
                        </>
                    )}
                    
                    <CheckBoxInput>
                    <input 
                    type="checkbox" 
                    required
                    style={{marginRight:"4px"}}
                    />
                        Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
                    </CheckBoxInput>

                    <Buttonslog type="submit">
                        <Buttons>
                            Daftar
                        </Buttons>
                    </Buttonslog>
                </form>
            </LoginBox>
        </LoginBg>
    )
}
export default RegisterPage;