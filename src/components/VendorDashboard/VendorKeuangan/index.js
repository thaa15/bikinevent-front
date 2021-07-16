import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
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
  console.log(income_history)
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
              <ButtonKeu>Tarik Saldo</ButtonKeu>
            </div>
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
              <ButtonKeu account>Ubah Rekening</ButtonKeu>
            </div>
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
