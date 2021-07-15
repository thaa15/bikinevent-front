import React from "react";
import { GlobalTemplate } from "../../templates/GlobalTemplate";
import LegalTemp from "./LegalTemp";
import { MainLegal, LegalWritedContent, TempLegal } from "./LegalTempStyled";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
const LegalLayanContent = ({ data, type }) => {
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
                    <LegalWritedContent>
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
