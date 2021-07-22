import React, { useState,useEffect } from "react";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
import LegalTemp from "./LegalTemp";
import { MainLegal, LegalWritedContent, TempLegal } from "./LegalTempStyled";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const LegalLayanContent = ({ data, type }) => {
  const [lastIdx, setLastIdx] = useState([])
  useEffect(() => {
    if (type == "faq") {
      let newArr = [...lastIdx]
      for (let i = 0; i < data.length-1; i++) {
        newArr[i] = true;
      }
      setLastIdx(newArr)
    }
  }, []);

  return (
    <GlobalTemplate>
      <TempLegal>
        <LegalTemp typeLegal={type} />
        <MainLegal>
          {type == "faq" ? (
            <>
              {data.map((item, idx) => {
                return (
                  <>
                    <LegalWritedContent title key={idx}>
                      {item.title}
                    </LegalWritedContent>
                    <LegalWritedContent last={lastIdx[idx]}>
                      <ReactMarkdown
                        children={item.desc}
                        plugins={[[gfm, { singleTilde: false }]]}
                        allowDangerousHtml={true}
                      />
                    </LegalWritedContent>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <LegalWritedContent title>{data.title}</LegalWritedContent>
              <LegalWritedContent>
                <ReactMarkdown
                  children={data.desc}
                  plugins={[[gfm, { singleTilde: false }]]}
                  allowDangerousHtml={true}
                />
              </LegalWritedContent>
            </>
          )}
        </MainLegal>
      </TempLegal>
    </GlobalTemplate>
  );
};

export default LegalLayanContent;
