'use client';
import RenderCompanyElement from "./RenderCompanyElement";

export default function RenderTickerScroll() {
    return (
        <div className="flex overflow-hidden space-x-2">

            <div className="flex animate-loop-scroll space-x-2">
              <RenderCompanyElement
                magnitude="VL"
                pattern="arrowUp.svg"
                companyTicker="MSFT"
                fairValue={200}
                upperLimit={8800} />

              <RenderCompanyElement
                magnitude="O"
                pattern="arrowUp.svg"
                companyTicker="GOOG"
                fairValue={200}
                upperLimit={414} />

              <RenderCompanyElement
                magnitude="H"
                pattern="arrowUp.svg"
                companyTicker="QCOM"
                fairValue={20}
                upperLimit={99} />

              <RenderCompanyElement
                magnitude="M"
                pattern="arrowUp.svg"
                companyTicker="AMGN"
                fairValue={20}
                upperLimit={199} />

              <RenderCompanyElement
                magnitude="L"
                pattern="arrowUp.svg"
                companyTicker="NET"
                fairValue={200}
                upperLimit={999} />

            </div>

            <div className="flex animate-loop-scroll space-x-2" aria-hidden="true">
              <RenderCompanyElement
                magnitude="VL"
                pattern="arrowUp.svg"
                companyTicker="MSFT"
                fairValue={200}
                upperLimit={8800} />

              <RenderCompanyElement
                magnitude="O"
                pattern="arrowUp.svg"
                companyTicker="GOOG"
                fairValue={200}
                upperLimit={414} />

              <RenderCompanyElement
                magnitude="H"
                pattern="arrowUp.svg"
                companyTicker="QCOM"
                fairValue={20}
                upperLimit={99} />

              <RenderCompanyElement
                magnitude="M"
                pattern="arrowUp.svg"
                companyTicker="AMGN"
                fairValue={20}
                upperLimit={199} />

              <RenderCompanyElement
                magnitude="L"
                pattern="arrowUp.svg"
                companyTicker="NET"
                fairValue={200}
                upperLimit={999} />

            </div>
          </div>

    );
}