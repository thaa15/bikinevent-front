import React, { useState, useEffect } from "react";
import {
    LoginInput,
    LogApart,
    IconBg,
    LoginLabel,
    Buttonslog,
    Buttons,
} from "../LoginPage/LoginStyled";
import {
    CheckBoxInput,
    TermanConds,
} from "./RegisterStyled"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Pembeliregs = () => {
    const [visible, setVisible] = useState(true);
    const [typepw, setTypepw] = useState("");

    const toggle = () => {
        setVisible(!visible);
        if (visible === false) {
            setTypepw("text");
        } else {
            setTypepw("password");
        }
    };

    useEffect(() => {
        toggle();
    }, [])
    return (
        <form>
            <LoginLabel for="name">Nama Lengkap</LoginLabel><br />
            <LoginInput
                type="text"
                required
                name="name" /><br />

            <LoginLabel for="email">E-mail</LoginLabel><br />
            <LoginInput
                type="email"
                required
                name="email" /><br />

            <LoginLabel for="password">Password</LoginLabel><br />
            <LogApart>
                <LoginInput
                    type={typepw}
                    required
                    name="password"
                    pw />
                {visible ? (
                    <IconBg>
                        <BsFillEyeSlashFill
                            onClick={toggle}
                            style={{ color: "#909DAA" }} />
                    </IconBg>
                ) : (
                    <IconBg>
                        <BsFillEyeFill
                            onClick={toggle}
                            style={{ color: "#909DAA" }} />
                    </IconBg>
                )}
            </LogApart>

            <LoginLabel for="num">No HP (Terhubung WA)</LoginLabel><br />
            <LoginInput
                type="number"
                required
                name="num" /><br />

            <CheckBoxInput>
                <input
                    type="checkbox"
                    required
                    style={{ marginRight: "4px" }}
                />
                        Saya setuju dengan <TermanConds>Syarat dan Ketentuan</TermanConds>
            </CheckBoxInput>

            <Buttonslog type="submit">
                <Buttons>
                    Daftar
                        </Buttons>
            </Buttonslog>
        </form>
    )
}
export default Pembeliregs;