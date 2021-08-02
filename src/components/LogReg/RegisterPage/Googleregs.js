import React, { useState, useEffect } from "react";
import {
    RegisterTittle,
    TypeChooseGoogle,
    Welcomed,
    TypeImage,
    TypeApart,
    TypeSigned,
    Typebg,
    IconCheck,
    ChecklistCircle,
    CheckBoxInput,
    TermanConds,
    CondTermBg,
    CondTermContent,
} from "./RegisterStyled"
import {
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    Buttonslog,
    Buttons,
    LoginBg,
    LoginBox,
} from "../LoginPage/LoginStyled";
import {
    PopUpBg,
    ContentPopUp
  } from "../../../templates/GlobalTemplate";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import LoadingPage from "../../../templates/Loading"
import pembelireg from "../../../images/pembelireg.png";
import ReactMarkdown from "react-markdown";
import { layananService } from "../../../services/Layanan";
import gfm from "remark-gfm";

const GoogleRegisterPage = () => {
    const [checkreg, setCheckreg] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(true);
    const [typepw, setTypepw] = useState("");
    const [accountCreated, setAccountCreated] = useState(false);
    const [condTerm, setCondTerm] = useState(false);
    const [error, setError] = useState([]);
    const [syarat, setSyarat] = useState([]);
    const [formData, setFormData] = useState({
        nama_lengkap: "",
        email: "",
        password: "",
        phone_number: "",
        role: "609d0717322f2d5510e1a0a7",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await layananService.getLayanan();
            const data = response.data;
            setSyarat(data.syarat_ketentuan);
        };
        fetchData();
    }, []);

    const toggle = () => {
        setVisible(!visible);
        if (visible === false) {
            setTypepw("text");
        } else {
            setTypepw("password");
        }
    };
    setTimeout(() => {
        setIsLoading(false);
    }, 1000)

    useEffect(() => {
        toggle();
    }, []);
    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <LoginBg>
                    <LoginBox>
                        <RegisterTittle>Daftar Sebagai</RegisterTittle>
                        <TypeChooseGoogle>
                            <TypeApart onClick={() => { setCheckreg(true) }}
                                aktif={checkreg === true} need>
                                <Typebg aktif={checkreg === true}>
                                    <TypeImage src={pembelireg}>
                                        <TypeSigned>
                                            Pembeli
                                            <IconCheck aktif={checkreg === true}>
                                                <ChecklistCircle />
                                            </IconCheck>
                                        </TypeSigned>
                                    </TypeImage>
                                </Typebg>
                            </TypeApart>
                        </TypeChooseGoogle>

                        <Welcomed>
                            Selamat Datang! <br /> Mohon lengkapi data di bawah untuk daftar
                        </Welcomed>

                        <>
                            <form>
                                <p style={{ color: "red" }}>{error}</p>
                                <br />
                                <LoginLabel for="name">Nama Lengkap</LoginLabel>
                                <br />
                                <LoginInput
                                    type="text"
                                    required
                                    name="nama_lengkap"
                                    onChange={(e) =>
                                        setFormData({ ...formData, nama_lengkap: e.target.value })
                                    }
                                />
                                <br />

                                <LoginLabel for="email">E-mail</LoginLabel>
                                <br />
                                <LoginInput
                                    type="email"
                                    required
                                    autocomplete="off"
                                    name="email"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <br />

                                <LoginLabel for="password">Password</LoginLabel>
                                <br />
                                <LogApart>
                                    <LoginInput
                                        type={typepw}
                                        required
                                        pattern=".{6,}"
                                        autocomplete="off"
                                        title="Enam atau lebih karakter"
                                        name="password"
                                        pw
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                    />
                                    {visible ? (
                                        <IconBg>
                                            <BsFillEyeSlashFill
                                                onClick={toggle}
                                                style={{ color: "#909DAA" }}
                                            />
                                        </IconBg>
                                    ) : (
                                        <IconBg>
                                            <BsFillEyeFill onClick={toggle} style={{ color: "#909DAA" }} />
                                        </IconBg>
                                    )}
                                </LogApart>

                                <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel>
                                <br />
                                <LoginInput
                                    type="text"
                                    value={formData.phone_number}
                                    required
                                    name="phone_number"
                                    autocomplete="off"
                                    onChange={(e) => {
                                        let regexp = /^[0-9\b]+$/;
                                        if (e.target.value === "" || regexp.test(e.target.value)) {
                                            setFormData({ ...formData, phone_number: e.target.value });
                                        }
                                    }}
                                />
                                <br />

                                <CheckBoxInput>
                                    <input type="checkbox" required style={{ marginRight: "4px" }} />
                                    <div
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            setCondTerm(true);
                                        }}
                                    >
                                        Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
                                    </div>
                                </CheckBoxInput>

                                <Buttonslog type="submit">
                                    <Buttons>Daftar</Buttons>
                                </Buttonslog>
                            </form>
                            <>
                                {condTerm ? (
                                    <PopUpBg need>
                                        <ContentPopUp>
                                            <CondTermBg>
                                                {/* <CondTermTitle>Syarat dan Ketentuan</CondTermTitle> */}

                                                <CondTermContent>
                                                    <ReactMarkdown
                                                        children={syarat.desc}
                                                        plugins={[[gfm, { singleTilde: false }]]}
                                                        allowDangerousHtml={true}
                                                    />
                                                </CondTermContent>

                                                <Buttonslog
                                                    onClick={() => {
                                                        setCondTerm(false);
                                                    }}
                                                >
                                                    <Buttons>Tutup</Buttons>
                                                </Buttonslog>
                                            </CondTermBg>
                                        </ContentPopUp>
                                    </PopUpBg>
                                ) : (
                                    <></>
                                )}
                            </>
                        </>

                    </LoginBox>
                </LoginBg>
            )}
        </>
    )
}
export default GoogleRegisterPage;