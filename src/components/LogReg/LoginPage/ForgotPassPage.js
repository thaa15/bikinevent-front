import React, { useState, useEffect } from "react";
import {
    LoginBg,
    LoginBox,
    LoginTittle,
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    RadioButton,
    HaveAccount,
    HaveAccountLink,
    Buttonslog,
    Buttons,
    Liner,
    OrLine,
    Buttonsgoogle,
    GooglePlus,
    ForgotPass,
    BgForgot
} from "./LoginStyled";
import LoadingPage from "../../../templates/Loading";
import { useHistory } from "react-router";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import line from "../../../images/line.png";
import { authService } from "../../../services/Auth";
import {
    PopBgSuccess,
    BgSuccess,
    PopUpBg,
    Succesicon,
    Failedicon,
    ContentPopUp
} from "../../../templates/GlobalTemplate";
import sucregcheck from "../../../images/sucregcheck.png";
import { SucRegWrited, GoHome, SucRegBox, SucRegBg } from "../SuccessRegPage/SuccessRegStyled";
import {
    ChangePwBg,
    TitleApart,
    DivButton,
    DivisionTitle,
    TitleChangepw,
} from "../../VendorDashboard/VendorProfil/VendorProfileStyled";
import { InputModif, LabelVendorProduk } from "../../VendorDashboard/VendorProduk/VendorProdukStyled";

const ForgotPasswordPage = () => {
    const history = useHistory()
    const [visible, setVisible] = useState({
        new: true,
        repeat: true
    });
    const [isLoading, setIsLoading] = useState(true);
    const [typepw, setTypepw] = useState({
        new: "",
        repeat: ""
    });
    const [loginUser, setLoginUser] = useState(false);

    const toggle = () => {
        if (visible.new === false && visible.repeat === true) {
            setTypepw({ new: "text", ...typepw });
        } else if (visible.new === true && visible.repeat === false) {
            setTypepw({ repeat: "text", ...typepw });
        } else if (visible.new === false && visible.repeat === false) {
            setTypepw({ new: "text", repeat: "text" });
        } else {
            setTypepw({ new: "password", repeat: "password" });
        }
    };

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    useEffect(() => {
        toggle();
        setIsLoading(false);
    }, []);
    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <LoginBg>
                    <LoginBox>
                        <LoginTittle>Lupa Password</LoginTittle>
                        <form>
                            <LoginLabel for="newpassword">Password baru</LoginLabel>
                            <LogApart>
                                <LoginInput
                                    type={typepw.new}
                                    required
                                    name="newpassword"
                                    pw
                                />
                                {visible.new ? (
                                    <IconBg>
                                        <BsFillEyeFill
                                            onClick={() => {
                                                setVisible({ ...visible, new: (!visible.new) });
                                                if (visible.new === false) {
                                                    setTypepw({ ...typepw,new: "password" });
                                                }else{
                                                    setTypepw({ ...typepw,new: "text"});
                                                }
                                            }}
                                            style={{ color: "#909DAA" }}
                                        />
                                    </IconBg>
                                ) : (
                                    <IconBg>
                                        <BsFillEyeSlashFill
                                            onClick={() => {
                                                setVisible({ ...visible, new: (!visible.new) });
                                                if (visible.new === false) {
                                                    setTypepw({ ...typepw,new: "password" });
                                                }else{
                                                    setTypepw({ ...typepw,new: "text"});
                                                }
                                            }}
                                            style={{ color: "#909DAA" }}
                                        />
                                    </IconBg>
                                )}
                            </LogApart>

                            <LoginLabel for="repeatpassword">Ulangi Password baru</LoginLabel>
                            <LogApart>
                                <LoginInput
                                    type={typepw.repeat}
                                    required
                                    name="repeatpassword"
                                    pw
                                />
                                {visible.repeat ? (
                                    <IconBg>
                                        <BsFillEyeFill
                                            onClick={() => {
                                                setVisible({ ...visible, repeat: (!visible.repeat) });
                                                if (visible.repeat === false) {
                                                    setTypepw({ ...typepw,repeat: "password" });
                                                }else{
                                                    setTypepw({ ...typepw,repeat: "text"});
                                                }
                                            }}
                                            style={{ color: "#909DAA" }}
                                        />
                                    </IconBg>
                                ) : (
                                    <IconBg>
                                        <BsFillEyeSlashFill
                                            onClick={() => {
                                                setVisible({ ...visible, repeat: (!visible.repeat) });
                                                if (visible.repeat === false) {
                                                    setTypepw({ ...typepw,repeat: "password" });
                                                }else{
                                                    setTypepw({ ...typepw,repeat: "text"});
                                                }
                                            }}
                                            style={{ color: "#909DAA" }}
                                        />
                                    </IconBg>
                                )}
                            </LogApart>

                            <Buttonslog type="button"
                            onClick={()=>(setLoginUser(true))}>
                                <Buttons>Simpan</Buttons>
                            </Buttonslog>
                        </form>

                        {loginUser ? (
                            <PopUpBg>
                                <ContentPopUp>
                                    <SucRegBox>
                                        <img
                                            src={sucregcheck}
                                            alt="success"
                                            style={{ margin: "12px auto" }}
                                        />
                                        <SucRegWrited>Permintaan Ubah Password Berhasil</SucRegWrited>
                                        <SucRegWrited message>
                                            Klik link pada email anda untuk mengubah password
                                        </SucRegWrited>
                                        <GoHome
                                            onClick={() => {
                                                history.push('/login')
                                            }}
                                        >
                                            Tutup
                                        </GoHome>
                                    </SucRegBox>
                                </ContentPopUp>
                            </PopUpBg>
                        ) : (<></>)}
                    </LoginBox>
                </LoginBg>
            )}
        </>
    );
};
export default ForgotPasswordPage;
