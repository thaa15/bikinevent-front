import React, { useContext, useState } from "react";
import { GlobalTemplate, PopUpBg } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash, TempVendash } from "../VendorDashboardStyled";
import { BoxNotEntry } from "../VendorPesanan/VendorPesananStyle";
import {
  TitleVendorKeu,
  ContentSeparator,
  TitleSubKeu,
  InfoKeuWrited,
  ButtonKeu,
  IncomeWrite,
  WithdrawalWrite,
  BalanceTable,
  ManageTable,
  ErrorMessage
} from "./VendorKeuanganStyled";
import {
  ChangePwBg,
  TitleApart,
  DivisionTitle,
  TitleChangepw,
  DivButton,
} from "../VendorProfil/VendorProfileStyled";
import {
  LabelVendorProduk,
  InputModif,
} from "../VendorProduk/VendorProdukStyled";
import { Buttonslog, Buttons } from "../../LogReg/LoginPage/LoginStyled";
import { vendorService } from "../../../services/Vendor";
import { loginContext } from "../../../context";
import { orderPenarikanService } from "../../../services/OrderPenarikan";

const VendorKeuanganContent = ({
  vendorId,
  balance_released,
  seller_balance,
  account_number,
  bank,
  account_name,
  income_history,
  balance_withdrawal,
  to_be_released,
}) => {
  const [changeAccount, setChangeAccount] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [sureWithdrawal, setSureWithdrawal] = useState(false);
  const [withdrawalNominal, setWithdrawalNominal] = useState("");
  const { loginInfo } = useContext(loginContext);
  const [infoKeuangan, setInfoKeuangan] = useState({
    no_rekening: 0,
    nama_bank: "",
    nama_rekening: "",
  });

  const tarikSaldo = async () => {
    if (parseInt(seller_balance) < parseInt(withdrawalNominal)) {
      return console.log("Saldo tidak mencukupi");
    } else {
      let bodyVendor = {
        keuangan: {
          saldo_penjual: parseInt(seller_balance) - parseInt(withdrawalNominal),
          akan_dilepas: parseInt(to_be_released) + parseInt(withdrawalNominal),
        },
      };
      const responseVendor = await vendorService.editVendorById(
        vendorId,
        loginInfo.token,
        bodyVendor
      );
      console.log(responseVendor);

      let bodyOrder = {
        nama_bank: bank,
        no_rekening: account_number,
        nama_rekening: account_name,
        jumlah: withdrawalNominal,
        withdrawn: false,
        vendor: vendorId,
      };
      const responseOrder = orderPenarikanService.postOrderPenarikan(
        loginInfo.token,
        bodyOrder
      );
      window.location.reload()
      console.log(responseOrder);
      return responseOrder;
    }
  };
  const ubahRekening = async () => {
    const response = await vendorService.editVendorById(
      vendorId,
      loginInfo.token,
      infoKeuangan
    );
    console.log(response);
    return response;
  };

  return (
    <GlobalTemplate>
      <TempVendash>
        <DashboardSite typeVendash="keuangan" />
        <MainVendash>
          <TitleVendorKeu>Informasi Penghasilan</TitleVendorKeu>
          <ContentSeparator>
            <div>
              <TitleSubKeu>Saldo Penjual</TitleSubKeu>
              <InfoKeuWrited>
                Rp{parseInt(seller_balance).toLocaleString("id-ID")}
              </InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Akan Dilepas</TitleSubKeu>
              <InfoKeuWrited>
                Rp{parseInt(to_be_released).toLocaleString("id-ID")}
              </InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Sudah Dilepas</TitleSubKeu>
              <InfoKeuWrited>
                Rp{parseInt(balance_released).toLocaleString("id-ID")}
              </InfoKeuWrited>
            </div>
            <div>
              <ButtonKeu
                onClick={() => {
                  setWithdrawal(true);
                }}
              >
                Tarik Saldo
              </ButtonKeu>
            </div>

            {/* POP UP TARIK SALDO */}
            <>
              {withdrawal ? (
                <PopUpBg need>
                  <ChangePwBg>
                    <TitleApart>
                      <DivisionTitle>
                        <TitleChangepw>Tarik Saldo</TitleChangepw>
                      </DivisionTitle>
                      <DivisionTitle
                        button
                        onClick={() => {
                          setWithdrawal(false);
                        }}
                      >
                        <DivButton>X</DivButton>
                      </DivisionTitle>
                    </TitleApart>
                    <LabelVendorProduk awal>Saldo Penjual</LabelVendorProduk>
                    <InfoKeuWrited>
                      Rp{parseInt(seller_balance).toLocaleString("id-ID")}
                    </InfoKeuWrited>
                    <LabelVendorProduk>
                      Nominal Penarikan Saldo
                    </LabelVendorProduk>
                    <InputModif
                      type="text"
                      value={(withdrawalNominal)}
                      pattern="[0-9]"
                      required
                      name="nominal"
                      onChange={(e) => {
                        let regexp = /^[0-9\b]+$/
                        if (e.target.value === '' || regexp.test(e.target.value)) {
                          setWithdrawalNominal(e.target.value);
                        }
                      }}
                    />
                    {parseInt(seller_balance) < parseInt(withdrawalNominal) ? (
                      <ErrorMessage>
                        Penarikan tidak boleh lebih dari saldo penjualan
                      </ErrorMessage>
                    ) : (<></>)}
                    {/* <LabelVendorProduk>Password Penjual</LabelVendorProduk>
                    <InputModif
                      type="password"
                      required
                      pattern=".{6,}"
                      title="Enam atau lebih karakter"
                      name="pwvendors"
                    /> */}
                    <Buttonslog>
                      <Buttons
                        onClick={() => {
                          if (parseInt(seller_balance) > parseInt(withdrawalNominal)) {
                            setWithdrawal(false);
                            setSureWithdrawal(true);
                          }
                        }}
                      >
                        Selanjutnya
                      </Buttons>
                    </Buttonslog>
                  </ChangePwBg>
                </PopUpBg>
              ) : (
                <></>
              )}
            </>

            {/* POP UP TARIK SALDO */}
            <>
              {sureWithdrawal ? (
                <PopUpBg need>
                  <ChangePwBg>
                    <TitleApart>
                      <DivisionTitle>
                        <TitleChangepw>Tarik Saldo</TitleChangepw>
                      </DivisionTitle>
                      <DivisionTitle
                        button
                        onClick={() => {
                          setSureWithdrawal(false);
                        }}
                      >
                        <DivButton>X</DivButton>
                      </DivisionTitle>
                    </TitleApart>
                    <LabelVendorProduk awal>
                      Anda akan melakukan penarikan senilai
                    </LabelVendorProduk>
                    <InfoKeuWrited>
                      Rp{parseInt(withdrawalNominal).toLocaleString("id-ID")}
                    </InfoKeuWrited>
                    <LabelVendorProduk>Rekening Tujuan</LabelVendorProduk>
                    <InfoKeuWrited>{account_number}</InfoKeuWrited>
                    <InfoKeuWrited>{bank}</InfoKeuWrited>
                    <InfoKeuWrited>{account_name}</InfoKeuWrited>
                    <Buttonslog onClick={tarikSaldo}>
                      <Buttons>Tarik Saldo</Buttons>
                    </Buttonslog>
                  </ChangePwBg>
                </PopUpBg>
              ) : (
                <></>
              )}
            </>
          </ContentSeparator>

          <TitleVendorKeu>Rekening Penjualan</TitleVendorKeu>
          <ContentSeparator>
            <div>
              <TitleSubKeu>Nomor Rekening</TitleSubKeu>
              <InfoKeuWrited>{account_number}</InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Bank</TitleSubKeu>
              <InfoKeuWrited>{bank}</InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Atas Nama</TitleSubKeu>
              <InfoKeuWrited>{account_name}</InfoKeuWrited>
            </div>
            <div>
              <ButtonKeu
                account
                onClick={() => {
                  setChangeAccount(true);
                }}
              >
                Ubah Rekening
              </ButtonKeu>
            </div>
            {/* POP UP GANTI REKENING */}
            <>
              {changeAccount ? (
                <PopUpBg need>
                  <ChangePwBg>
                    <TitleApart>
                      <DivisionTitle>
                        <TitleChangepw>Ubah Rekening</TitleChangepw>
                      </DivisionTitle>
                      <DivisionTitle
                        button
                        onClick={() => {
                          setChangeAccount(false);
                        }}
                      >
                        <DivButton>X</DivButton>
                      </DivisionTitle>
                    </TitleApart>
                    <LabelVendorProduk awal>
                      Nomor Rekening Baru
                    </LabelVendorProduk>
                    <InputModif
                      type="number"
                      required
                      name="newacc"
                      onChange={(e) =>
                        setInfoKeuangan({
                          ...infoKeuangan,
                          no_rekening: e.target.value,
                        })
                      }
                    />
                    <LabelVendorProduk>Nama Bank Baru</LabelVendorProduk>
                    <InputModif
                      type="text"
                      required
                      placeholder="(BNI, BCA, BRI, CIMB dll)"
                      name="newbank"
                      onChange={(e) =>
                        setInfoKeuangan({
                          ...infoKeuangan,
                          nama_bank: e.target.value,
                        })
                      }
                    />
                    <LabelVendorProduk>
                      Nama Pemilik Rekening Baru
                    </LabelVendorProduk>
                    <InputModif
                      type="text"
                      required
                      name="newaccname"
                      onChange={(e) =>
                        setInfoKeuangan({
                          ...infoKeuangan,
                          nama_rekening: e.target.value,
                        })
                      }
                    />
                    {/* <LabelVendorProduk>Password Penjual</LabelVendorProduk>
                    <InputModif
                      type="password"
                      required
                      pattern=".{6,}"
                      title="Enam atau lebih karakter"
                      name="pwvendor"
                    /> */}
                    <Buttonslog>
                      <Buttons onClick={ubahRekening}>Simpan</Buttons>
                    </Buttonslog>
                  </ChangePwBg>
                </PopUpBg>
              ) : (
                <></>
              )}
            </>
          </ContentSeparator>

          <TitleVendorKeu>Riwayat Penghasilan</TitleVendorKeu>
          {income_history.length === 0 ? (
            <BoxNotEntry>Belum ada penghasilan</BoxNotEntry>
          ) : (
            <>
              {income_history.map((data, idx) => {
                return <IncomeWrite key={idx}>{data.invoice}</IncomeWrite>;
              })}
              <div style={{ marginBottom: "20px" }} />
            </>
          )}

          <TitleVendorKeu>Riwayat Penarikan Saldo</TitleVendorKeu>
          {balance_withdrawal.length === 0 ? (
            <BoxNotEntry>Belum ada penarikan saldo!</BoxNotEntry>
          ) : (
            <ManageTable>
              <BalanceTable>
                {balance_withdrawal.map((item, idx) => {
                  return (
                    <tr>
                      <WithdrawalWrite key={idx}>
                        {item.nama_bank}
                      </WithdrawalWrite>
                      <WithdrawalWrite>{item.no_rekening}</WithdrawalWrite>
                      <WithdrawalWrite>{item.nama_rekening}</WithdrawalWrite>
                      <WithdrawalWrite>
                        {parseInt(item.jumlah).toLocaleString("id-ID")}
                      </WithdrawalWrite>
                      <WithdrawalWrite>
                        {item.tanggal_penarikan}
                      </WithdrawalWrite>
                      <WithdrawalWrite proses={item.withdrawn === false} dikirim={item.withdrawn === true}>
                        {item.withdrawn ? "Berhasil" : "Pending"}
                      </WithdrawalWrite>
                    </tr>
                  );
                })}
              </BalanceTable>
            </ManageTable>
          )}
        </MainVendash>
      </TempVendash>
    </GlobalTemplate>
  );
};

export default VendorKeuanganContent;
