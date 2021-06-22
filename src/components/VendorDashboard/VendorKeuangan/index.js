import React from "react";
import { GlobalTemplate } from "../../../templates/GlobalTemplate";
import DashboardSite from "../DashboardSideVendor";
import { MainVendash,TempVendash } from "../VendorDashboardStyled";
import {
    TitleVendorKeu,
    ContentSeparator,
    TitleSubKeu,
    InfoKeuWrited,
    ButtonKeu,
    IncomeWrite,
    WithdrawalWrite,
    BalanceTable,
    ManageTable
} from "./VendorKeuanganStyled"

const VendorKeuanganContent = ({balance_released,seller_balance,account_number,bank,account_name,income_history,balance_withdrawal}) => {
    return (
        <GlobalTemplate>
            <TempVendash>
                <DashboardSite typeVendash="keuangan" />
                <MainVendash>

                    <TitleVendorKeu>Informasi Penghasilan</TitleVendorKeu>
                    <ContentSeparator>
                        <div>
                            <TitleSubKeu>Akan Dilepas</TitleSubKeu>
                            <InfoKeuWrited>Rp{balance_released}</InfoKeuWrited>
                        </div>
                        <div>
                            <TitleSubKeu>Saldo Penjual</TitleSubKeu>
                            <InfoKeuWrited>Rp{seller_balance}</InfoKeuWrited>
                        </div>
                        <div>
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
                    {income_history.map((data,idx)=>{
                        return(
                            <IncomeWrite key={idx}>{data}</IncomeWrite>
                        )
                    })}
                    <div style={{marginBottom:"20px"}}/>

                    <TitleVendorKeu>Riwayat Penarikan Saldo</TitleVendorKeu>
                    <ManageTable>
                        <BalanceTable>
                            {balance_withdrawal.map((item,idx)=>{
                                return(
                                    <tr>
                                        <WithdrawalWrite key={idx}>{item.bank}</WithdrawalWrite>
                                        <WithdrawalWrite>{item.account_number}</WithdrawalWrite>
                                        <WithdrawalWrite>{item.name}</WithdrawalWrite>
                                        <WithdrawalWrite>{item.balance}</WithdrawalWrite>
                                        <WithdrawalWrite>{item.date}</WithdrawalWrite>
                                    </tr>
                                )
                            })}
                        </BalanceTable>
                    </ManageTable>
                </MainVendash>
            </TempVendash>
        </GlobalTemplate>
    )
}

export default VendorKeuanganContent;