import React,{useState} from "react";
import { 
  GlobalTemplate,
  PopUpBg
} from "../../../templates/GlobalTemplate";
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
} from "./VendorKeuanganStyled";
import { 
  ChangePwBg,
  TitleApart,
  DivisionTitle,
  TitleChangepw,
  DivButton
} from "../VendorProfil/VendorProfileStyled";
import { 
  LabelVendorProduk,
  InputModif
} from "../VendorProduk/VendorProdukStyled";
import { 
  Buttonslog,
  Buttons
} from "../../LogReg/LoginPage/LoginStyled";

const VendorKeuanganContent = ({
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
  const [withdrawalNominal, setWithdrawalNominal] = useState(0);

  return (
    <GlobalTemplate>
      <TempVendash>
        <DashboardSite typeVendash="keuangan" />
        <MainVendash>
          <TitleVendorKeu>Informasi Penghasilan</TitleVendorKeu>
          <ContentSeparator>
            <div>
              <TitleSubKeu>Saldo Penjual</TitleSubKeu>
              <InfoKeuWrited>Rp{parseInt(seller_balance).toLocaleString("id-ID")}</InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Akan Dilepas</TitleSubKeu>
              <InfoKeuWrited>Rp{parseInt(to_be_released).toLocaleString("id-ID")}</InfoKeuWrited>
            </div>
            <div>
              <TitleSubKeu>Sudah Dilepas</TitleSubKeu>
              <InfoKeuWrited>Rp{parseInt(balance_released).toLocaleString("id-ID")}</InfoKeuWrited>
            </div>
            <div>
              <ButtonKeu
              onClick={() => { setWithdrawal(true) }}>Tarik Saldo</ButtonKeu>
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
                        <DivisionTitle button onClick={() => { setWithdrawal(false) }}>
                          <DivButton>
                            X
                          </DivButton>
                        </DivisionTitle>
                      </TitleApart>
                      <LabelVendorProduk awal>Saldo Penjual</LabelVendorProduk>
                      <InfoKeuWrited>Rp{parseInt(seller_balance).toLocaleString("id-ID")}</InfoKeuWrited>
                      <LabelVendorProduk>Nominal Penarikan Saldo</LabelVendorProduk>
                      <InputModif
                        type="number"
                        required
                        name="nominal"
                        onChange={(e)=>{setWithdrawalNominal(e.target.value)}}
                      />
                      <LabelVendorProduk>Password Penjual</LabelVendorProduk>
                      <InputModif
                        type="password"
                        required
                        pattern=".{6,}"
                        title="Enam atau lebih karakter"
                        name="pwvendors"
                      />
                      <Buttonslog>
                        <Buttons
                        onClick={() => { 
                          setWithdrawal(false)
                          setSureWithdrawal(true)
                        }}>Selanjutnya</Buttons>
                      </Buttonslog>
                    </ChangePwBg>
                  </PopUpBg>
                ) : (<></>)}
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
                        <DivisionTitle button onClick={() => { setSureWithdrawal(false) }}>
                          <DivButton>
                            X
                          </DivButton>
                        </DivisionTitle>
                      </TitleApart>
                      <LabelVendorProduk awal>Anda akan melakukan penarikan senilai</LabelVendorProduk>
                      <InfoKeuWrited>Rp{parseInt(withdrawalNominal).toLocaleString("id-ID")}</InfoKeuWrited>
                      <LabelVendorProduk>Rekening Tujuan</LabelVendorProduk>
                      <InfoKeuWrited>{account_number}</InfoKeuWrited>    
                      <InfoKeuWrited>{bank}</InfoKeuWrited>
                      <InfoKeuWrited>{account_name}</InfoKeuWrited>              
                      <Buttonslog>
                        <Buttons>Tarik Saldo</Buttons>
                      </Buttonslog>
                    </ChangePwBg>
                  </PopUpBg>
                ) : (<></>)}
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
              onClick={() => { setChangeAccount(true) }}>Ubah Rekening</ButtonKeu>
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
                        <DivisionTitle button onClick={() => { setChangeAccount(false) }}>
                          <DivButton>
                            X
                          </DivButton>
                        </DivisionTitle>
                      </TitleApart>
                      <LabelVendorProduk awal>Nomor Rekening Baru</LabelVendorProduk>
                      <InputModif
                        type="number"
                        required
                        name="newacc"
                      />
                      <LabelVendorProduk>Nama Bank Baru</LabelVendorProduk>
                      <InputModif
                        type="text"
                        required
                        placeholder="(BNI, BCA, BRI, CIMB dll)"
                        name="newbank"
                      />
                      <LabelVendorProduk>Nama Pemilik Rekening Baru</LabelVendorProduk>
                      <InputModif
                        type="text"
                        required
                        name="newaccname"
                      />
                      <LabelVendorProduk>Password Penjual</LabelVendorProduk>
                      <InputModif
                        type="password"
                        required
                        pattern=".{6,}"
                        title="Enam atau lebih karakter"
                        name="pwvendor"
                      />
                      <Buttonslog>
                        <Buttons>Simpan</Buttons>
                      </Buttonslog>
                    </ChangePwBg>
                  </PopUpBg>
                ) : (<></>)}
              </>
          </ContentSeparator>

          <TitleVendorKeu>Riwayat Penghasilan</TitleVendorKeu>
          {income_history.length === 0 ?
            (
              <BoxNotEntry>Belum ada penghasilan</BoxNotEntry>
            )
            : (
              <>
                {income_history.map((data, idx) => {
                  return <IncomeWrite key={idx}>{data.invoice}</IncomeWrite>;
                })}
                <div style={{ marginBottom: "20px" }} />
              </>
            )}

          <TitleVendorKeu>Riwayat Penarikan Saldo</TitleVendorKeu>
          {balance_withdrawal.length === 0 ?
            (
              <BoxNotEntry>Belum ada penarikan saldo!</BoxNotEntry>
            )
            : (
              <ManageTable>
                <BalanceTable>
                  {balance_withdrawal.map((item, idx) => {
                    return (
                      <tr>
                        <WithdrawalWrite key={idx}>
                          {item.nama_bank}
                        </WithdrawalWrite>
                        <WithdrawalWrite>{item.no_rekening}</WithdrawalWrite>
                        <WithdrawalWrite>{item.pemilik_rekening}</WithdrawalWrite>
                        <WithdrawalWrite>
                          {parseInt(item.jumlah).toLocaleString("id-ID")}
                        </WithdrawalWrite>
                        <WithdrawalWrite>{item.tanggal_penarikan}</WithdrawalWrite>
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
