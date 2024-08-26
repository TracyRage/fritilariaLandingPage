'use client';
import RenderCompanyElement from "./RenderCompanyElement";
import { useTheme } from "./ThemeToggle";

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
                pattern="linearDown.svg"
                companyTicker="GOOG"
                fairValue={200}
                upperLimit={414} />

              <RenderCompanyElement
                magnitude="H"
                pattern="constant.svg"
                companyTicker="QCOM"
                fairValue={20}
                upperLimit={99} />

              <RenderCompanyElement
                magnitude="M"
                pattern="linearUp.svg"
                companyTicker="AMGN"
                fairValue={20}
                upperLimit={199} />

              <RenderCompanyElement
                magnitude="M"
                pattern="lastYearPump.svg"
                companyTicker="NET"
                fairValue={200}
                upperLimit={999} />


              <RenderCompanyElement
                magnitude="O"
                pattern="trapezoidUp.svg"
                companyTicker="TSMC"
                fairValue={400}
                upperLimit={600} />


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
                pattern="linearDown.svg"
                companyTicker="GOOG"
                fairValue={200}
                upperLimit={414} />

              <RenderCompanyElement
                magnitude="H"
                pattern="constant.svg"
                companyTicker="QCOM"
                fairValue={20}
                upperLimit={99} />

              <RenderCompanyElement
                magnitude="M"
                pattern="linearUp.svg"
                companyTicker="AMGN"
                fairValue={20}
                upperLimit={199} />

              <RenderCompanyElement
                magnitude="L"
                pattern="lastYearPump.svg"
                companyTicker="NET"
                fairValue={200}
                upperLimit={999} />


              <RenderCompanyElement
                magnitude="L"
                pattern="trapezoidUp.svg"
                companyTicker="TSMC"
                fairValue={400}
                upperLimit={600} />


            </div>
          </div>

    );
}