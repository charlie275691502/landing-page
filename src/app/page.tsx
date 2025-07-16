"use client";

import { useCallback } from 'react';

export default function Home() {
  const onBenefitsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headlineAndIcons']");
    if(anchor) {
      anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    }
  }, []);
  
  const onSpecificationsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contentContainer']");
    if(anchor) {
      anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    }
  }, []);
  
  const onHowToTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='howItWorksSection']");
    if(anchor) {
      anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    }
  }, []);
  
  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='centeredCTAContainer']");
    if(anchor) {
      anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    }
  }, []);

  return (
    <div className="w-full relative bg-white overflow-auto flex flex-col items-center justify-start px-10 pb-5 box-border text-left text-6xl text-black font-['Bauhaus_Chez_Display_20']">
      {/* Hero Section */}
      <div className="w-full bg-white h-[885px] overflow-hidden flex-shrink-0 flex flex-row items-end justify-center relative max-w-[1500px] z-[3]">
        <div className="w-[1074px] h-[737px] flex flex-row items-start justify-start relative z-0">
          <div className="w-full absolute -top-[148px] right-[2px] left-[2px] h-[737px] z-0">
            <div className="absolute h-[85.89%] w-[55.59%] top-[7.6%] right-[8.01%] bottom-[6.51%] left-[36.41%] rounded-full border border-dashed border-black box-border" />
            <div className="absolute w-[15.9%] top-[197px] right-[13.81%] left-[70.29%] max-w-full overflow-hidden h-[166px] opacity-50">
              {/* Small sphere placeholder */}
              <div className="w-full h-full bg-gray-200 rounded-full" />
            </div>
            <div className="absolute w-[69.03%] top-0 right-[23.8%] left-[7.17%] max-w-full overflow-hidden h-[737px]">
              {/* Main B placeholder */}
              <div className="w-full h-full bg-gray-300 rounded-lg" />
            </div>
            <div className="absolute w-[22.51%] top-[286px] right-[77.49%] left-0 max-w-full overflow-hidden h-[106px]">
              {/* Globe left placeholder */}
              <div className="w-full h-full bg-gray-200 rounded-full" />
            </div>
            <div className="absolute w-[21.86%] top-[439px] right-0 left-[78.14%] max-w-full overflow-hidden h-[103px]">
              {/* Globe right placeholder */}
              <div className="w-full h-full bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute top-[554px] left-[91px] flex flex-col items-start justify-center py-[72px] px-0 z-[1]">
          <div className="w-[876px] relative tracking-[-0.03em] leading-[105%] font-extrabold inline-block h-[137px] flex-shrink-0">
            <p className="m-0">Frontend is Dead</p>
            <p className="m-0">Hallucination Takes Over</p>
          </div>
          <div className="relative text-xl tracking-[0.03em] leading-[140%] font-['DotGothic16']">
            <p className="m-0">Generic execution layer for agentic action on-chain</p>
            <p className="m-0">with native blockchain clients as MCP for LLM-based UX</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-[1200px] absolute top-0 left-10 h-[76px] flex flex-col items-center justify-start z-[4] text-[30px]">
        <div className="w-full h-[148px] flex flex-row items-center justify-between py-5 px-0 pb-20 box-border gap-0 max-w-[1500px]">
          <div className="relative tracking-[-0.05em] leading-[120%] font-black">foameo labs</div>
          <div className="rounded-[1000px] bg-[#d343c7] flex flex-row items-center justify-center py-[14px] px-[22px] gap-[2px] text-center text-sm text-white font-['DotGothic16']">
            <div className="relative tracking-[0.03em] leading-[140%]">GitHub</div>
            <div className="self-stretch w-[7px] max-h-full bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full flex flex-col items-center justify-start pb-[120px] box-border max-w-[1500px] z-[6]">
        <div className="self-stretch filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-t-[0.5px] border-solid border-[#e9e9e9] flex flex-col items-start justify-start pt-20 px-0 pb-[60px] gap-[50px]" data-scroll-to="headlineAndIcons">
          <div className="self-stretch flex flex-col items-start justify-start pr-[400px] relative gap-[50px]">
            <div className="w-[1200px] relative tracking-[-0.03em] leading-[100%] font-extrabold inline-block z-0">
              Consumer Crypto & UX reinvention on Natural Language
            </div>
            <div className="w-[1123px] relative text-base tracking-[0.03em] leading-[140%] font-['DotGothic16'] inline-block z-[1]">
              All blockchains are interoperable ledgers processing generic actions against their states. You should be able to talk to blockchains without intermediaries, skipping the frontends or protocol-defined SDKs. Foameo eliminates bespoke integrations between AI frameworks and on-chain apps, allowing Claude/ChatGPT talks to a high-performance clients directly via Model-Context Protocol.
            </div>
            <div className="w-[576px] absolute top-0 left-[calc(50%-288px)] text-xs tracking-[-0.01em] leading-[140%] font-['Asap'] text-[#d343c7] text-center inline-block z-[2]">
              Mission
            </div>
          </div>
          
          {/* Icons Module */}
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap pt-10 px-0 pb-0 gap-5 text-lg">
            {/* Feature 1 */}
            <div className="flex-1 border-t border-solid border-[#e9e9e9] box-border h-[246px] flex flex-col items-start justify-start pt-10 pr-5 pb-10 pl-0 gap-5 min-w-[265px]">
              <div className="w-6 relative h-6 overflow-hidden flex-shrink-0 bg-gray-300" />
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Generalization</div>
                <div className="self-stretch relative text-sm tracking-[0.03em] leading-[140%] font-['DotGothic16'] text-[#6f6f6f]">
                  Agnostic over all protocols and all blockchains with their native clients rebuilt into MCP servers that plugs into any LLM clients.
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex-1 border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-start pt-10 pr-5 pb-10 pl-0 gap-5 min-w-[265px]">
              <div className="w-6 relative h-6 overflow-hidden flex-shrink-0 bg-gray-300" />
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Scalability</div>
                <div className="self-stretch relative text-sm tracking-[0.03em] leading-[140%] font-['DotGothic16'] text-[#6f6f6f]">
                  Model-Context Protocol turns MxN adaption into one-off integration, saving millions of costs for AI frameworks and applications.
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex-[0.9245] border-t border-solid border-[#e9e9e9] box-border h-[246px] flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-0 gap-5 min-w-[265px]">
              <div className="w-6 relative h-6 overflow-hidden flex-shrink-0 bg-gray-300" />
              <div className="w-[225px] flex flex-col items-start justify-start gap-5">
                <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Performance</div>
                <div className="self-stretch relative text-sm tracking-[0.03em] leading-[140%] font-['DotGothic16'] text-[#6f6f6f]">
                  Node-based implementation on robust light clients, indexers, and dev-tools, leveraging Anthropic MCP SDKs in Rust/Go.
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex-[0.9245] border-t border-solid border-[#e9e9e9] box-border h-[246px] flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-0 gap-5 min-w-[265px]">
              <div className="w-6 relative h-6 overflow-hidden flex-shrink-0 bg-gray-300" />
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Security</div>
                <div className="self-stretch relative text-sm tracking-[0.03em] leading-[140%] font-['DotGothic16'] text-[#6f6f6f] whitespace-pre-wrap">
                  Type-safe transaction crafting with audited contract artifacts, plus agentic safeguard with server-side simulation against blockchain states.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artificial Bubbles */}
        <div className="w-[1200px] relative rounded-[30px] h-[620px] overflow-hidden flex-shrink-0">
          <div className="absolute -top-[674px] -left-[333px] w-[2047px] h-[1967px]">
            <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full opacity-70 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Features Carousel */}
      <div className="w-full h-[831px] flex flex-row items-start justify-start pb-[120px] box-border gap-5 max-w-[1500px] z-[7]">
        <div className="self-stretch flex-1 border-t border-solid border-[#e9e9e9] flex flex-col items-start justify-start pt-[60px] px-0 pb-20 gap-10">
          <div className="self-stretch flex flex-col items-start justify-start pr-20 gap-10">
            <div className="self-stretch relative tracking-[-0.03em] leading-[100%] font-extrabold">
              Service Model for Order Flow
            </div>
            <div className="w-[510px] relative text-sm tracking-[0.03em] leading-[140%] font-['DotGothic16'] text-[#6f6f6f] inline-block">
              In the coming years, 50%+ of transaction flows will have AI in the loop. Businesses with product-market fit will saturate the block-building pipeline, either as middleware or direct-to-consumer distribution.
            </div>
          </div>
          
          {/* List */}
          <div className="self-stretch flex flex-col items-start justify-start text-[15px] text-[#6f6f6f] font-['Asap']">
            <div className="self-stretch border-t border-solid border-[#e9e9e9] flex flex-row items-start justify-center py-5 pr-20 pl-0 gap-[30px]">
              <b className="relative leading-[140%] text-black">01</b>
              <div className="flex-1 relative leading-[140%] text-black">
                Foameo offers frontend-as-a-service to Web3 ecosystem.
              </div>
            </div>
            <div className="self-stretch border-t border-solid border-[#e9e9e9] flex flex-row items-start justify-center py-5 pr-20 pl-0 gap-[30px]">
              <b className="relative leading-[140%] text-black">02</b>
              <div className="flex-1 relative leading-[140%] text-black">
                MCP light clients also provides APIs services for other AI products.
              </div>
            </div>
            <div className="self-stretch border-t border-solid border-[#e9e9e9] flex flex-row items-start justify-center py-5 pr-20 pl-0 gap-[30px]">
              <b className="relative leading-[140%] text-black">03</b>
              <div className="flex-1 relative leading-[140%] text-black">
                Execution infrastructure is ready for institutional SLAs for on-chain analysis and stable-coin transfers with AI agents.
              </div>
            </div>
            <div className="self-stretch border-t border-solid border-[#e9e9e9] flex flex-row items-start justify-center py-5 pr-20 pl-0 gap-[30px]">
              <b className="relative leading-[140%] text-black">04</b>
              <div className="flex-1 relative leading-[140%] text-black">
                Generalized, end-to-end UX serves as a pivotal technology to craft direct-to-consumer product.
              </div>
            </div>
          </div>
          
          <div className="rounded-[1000px] bg-[#ecc6ec] flex flex-col items-center justify-center py-[14px] px-[22px] text-center text-sm font-['DotGothic16']">
            <div className="relative tracking-[0.03em] leading-[140%]">Discover More</div>
          </div>
        </div>
        
        {/* Features Carousel Image */}
        <div className="self-stretch flex-1 flex flex-col items-start justify-center max-w-[1600px]">
          <div className="self-stretch flex-1 rounded-[30px] overflow-hidden flex flex-col items-end justify-start p-[30px] bg-gray-200">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="w-10 rounded-[10px] max-h-full bg-gray-400" />
              <div className="w-10 rounded-[10px] max-h-full bg-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-start py-20 px-0 pb-[120px] gap-20 max-w-[1500px] z-[9] text-center text-[60px]" data-scroll-to="howItWorksSection">
        <div className="self-stretch flex flex-row items-start justify-between gap-0">
          <div className="relative tracking-[-0.03em] leading-[90%] font-semibold">Hear our voice</div>
          <div className="rounded-[1000px] bg-[#d343c7] flex flex-row items-center justify-center py-[14px] px-[22px] gap-[2px] text-sm text-white font-['DotGothic16']">
            <div className="relative tracking-[0.03em] leading-[140%]">Blog</div>
            <div className="self-stretch w-[7px] max-h-full bg-gray-300" />
          </div>
        </div>
        
        <div className="self-stretch flex flex-row items-start justify-center gap-5 text-left text-[80px] text-[#cecece] font-['Asap']">
          <div className="flex-1 border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-start pt-[60px] pr-[30px] pb-5 pl-0 gap-[60px] min-w-[240px]">
            <div className="self-stretch relative tracking-[-0.04em] leading-[100%]">01</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 text-lg text-black font-['Bauhaus_Chez_Display_20']">
              <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Get Started</div>
              <div className="self-stretch relative text-[15px] leading-[140%] font-['Asap'] text-[#6f6f6f]">
                With our intuitive setup, you're up and running in minutes.
              </div>
            </div>
          </div>
          
          <div className="flex-1 border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-start pt-[60px] pr-[30px] pb-5 pl-0 gap-[60px] min-w-[240px]">
            <div className="self-stretch relative tracking-[-0.04em] leading-[100%]">02</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 text-lg text-black font-['Bauhaus_Chez_Display_20']">
              <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Customize and Configure</div>
              <div className="self-stretch relative text-[15px] leading-[140%] font-['Asap'] text-[#6f6f6f]">
                Adapt Area to your specific requirements and preferences.
              </div>
            </div>
          </div>
          
          <div className="flex-1 border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-start pt-[60px] pr-[30px] pb-5 pl-0 gap-[60px] min-w-[240px]">
            <div className="self-stretch relative tracking-[-0.04em] leading-[100%]">03</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 text-lg text-black font-['Bauhaus_Chez_Display_20']">
              <div className="self-stretch relative tracking-[-0.03em] leading-[100%]">Grow Your Business</div>
              <div className="self-stretch relative text-[15px] leading-[140%] font-['Asap'] text-[#6f6f6f]">
                Make informed decisions to exceed your goals.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full border-t-[0.5px] border-solid border-[#e9e9e9] box-border flex flex-col items-center justify-start py-[120px] px-[300px] gap-10 max-w-[1500px] z-[11] text-center text-[60px]" data-scroll-to="centeredCTAContainer">
        <div className="self-stretch relative tracking-[-0.03em] leading-[90%] font-semibold">Connect with us</div>
        <div className="self-stretch relative text-[15px] leading-[140%] font-['Asap'] text-[#6f6f6f]">
          Schedule a quick call to learn about what we do.
        </div>
        <div className="rounded-[1000px] bg-[#d343c7] flex flex-row items-center justify-center py-[14px] px-[22px] gap-[2px] text-sm text-white font-['DotGothic16']">
          <div className="relative tracking-[0.03em] leading-[140%]">Contact Us</div>
          <div className="self-stretch w-[7px] max-h-full bg-gray-300" />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-solid border-[#e9e9e9] box-border flex flex-col items-start justify-end py-10 px-0 pb-5 gap-20 max-w-[1500px] z-[12] text-center text-sm font-['DotGothic16']">
        <div className="self-stretch flex flex-row items-end justify-start gap-10 text-left text-xs text-[#d343c7] font-['Asap']">
          <div className="w-[32px] relative h-[70px] bg-gray-300" />
          <div className="flex-1 flex flex-row items-center justify-start gap-4">
            <div className="relative tracking-[-0.01em] leading-[140%]">© Area.</div>
            <div className="relative tracking-[-0.01em] leading-[140%]">2025</div>
          </div>
          <div className="relative tracking-[-0.01em] leading-[140%]">All Rights Reserved</div>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="absolute top-4 left-[calc(50%-161px)] backdrop-blur-[30px] rounded-[100px] bg-white/40 overflow-hidden flex flex-row items-center justify-start py-5 px-6 gap-[27px] z-[13] text-center text-sm font-['DotGothic16']">
        <div className="relative tracking-[0.03em] leading-[140%] cursor-pointer" onClick={onBenefitsTextClick}>About</div>
        <div className="relative tracking-[0.03em] leading-[140%] cursor-pointer" onClick={onSpecificationsTextClick}>Mission</div>
        <div className="relative tracking-[0.03em] leading-[140%] cursor-pointer" onClick={onHowToTextClick}>Blog</div>
        <div className="relative tracking-[0.03em] leading-[140%] cursor-pointer" onClick={onContactUsTextClick}>Contact Us</div>
      </div>
    </div>
  );
}