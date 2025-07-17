import { FunctionComponent, useCallback } from 'react';
import styles from './Desktop.module.css';


const Desktop:FunctionComponent = () => {
  	
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
    		<div className={styles.desktop}>
      			<img className={styles.icon} alt="" src="13 3.png" />
      			<img className={styles.png1Icon} alt="" src="48 PNG 1.png" />
      			<img className={styles.smallSphereIcon} alt="" src="Small sphere.png" />
      			<div className={styles.heroSection}>
        				<div className={styles.heroBubleOut}>
          					<div className={styles.heroBubbles}>
            						<div className={styles.dashedCircle} />
            						<img className={styles.smallSphereIcon1} alt="" src="Small sphere.png" />
            						<img className={styles.mainBIcon} alt="" src="Main-B.png" />
            						<img className={styles.globeLeftIcon} alt="" src="Globe left.png" />
            						<img className={styles.globeRightIcon} alt="" src="Globe right.png" />
          					</div>
        				</div>
        				<div className={styles.heroText}>
          					<div className={styles.frontendIsDeadHallucinationContainer}>
            						<p className={styles.frontendIsDead}>Frontend is Dead</p>
            						<p className={styles.frontendIsDead}>Hallucination Takes Over</p>
          					</div>
          					<div className={styles.genericExecutionLayerContainer}>
            						<p className={styles.frontendIsDead}>Generic execution layer for agentic action on-chain</p>
            						<p className={styles.frontendIsDead}>with native blockchain clients as MCP for LLM-based UX</p>
          					</div>
        				</div>
      			</div>
      			<div className={styles.navigation}>
        				<div className={styles.navigation1}>
          					<div className={styles.foameo}>foameo labs</div>
          					<div className={styles.buttonLinkout}>
            						<div className={styles.text}>{`GitHub `}</div>
            						<img className={styles.arrowIcon} alt="" src="Arrow.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.logoCloud}>
        				<div className={styles.trustedBy}>Trusted by:</div>
        				<div className={styles.logoRow}>
          					<div className={styles.logo1}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
          					<div className={styles.logo1}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
          					<div className={styles.logo3}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
          					<div className={styles.logo1}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
          					<div className={styles.logo3}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
          					<div className={styles.logo6}>
            						<img className={styles.logoIcon} alt="" src="Logo.png" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.benefitsSection}>
        				<div className={styles.headlineAndIcons} data-scroll-to="headlineAndIcons">
          					<div className={styles.text1}>
            						<div className={styles.consumerCrypto}>{`Consumer Crypto & UX reinvention on Natural Language`}</div>
            						<div className={styles.allBlockchainsAre}>All blockchains are interoperable ledgers processing generic actions against their states. You should be able to talk to blockchains without intermediaries, skipping the frontends or protocol-defined SDKs. Foameo eliminates bespoke integrations between AI frameworks and on-chain apps, allowing Claude/ChatGPT talks to a high-performance clients directly via Model-Context Protocol.</div>
            						<div className={styles.mission}>Mission</div>
          					</div>
          					<div className={styles.iconsModule}>
            						<div className={styles.iconLockup1}>
              							<img className={styles.cableIcon} alt="" src="Cable icon.svg" />
              							<div className={styles.text11}>
                								<div className={styles.generalization}>Generalization</div>
                								<div className={styles.agnosticOverAll}>Agnostic over all protocols and all blockchains with their native clients rebuilt into MCP servers that plugs into any LLM clients.</div>
              							</div>
            						</div>
            						<div className={styles.iconLockup2}>
              							<img className={styles.cableIcon} alt="" src="Earth icon.svg" />
              							<div className={styles.text11}>
                								<div className={styles.generalization}>Scalability</div>
                								<div className={styles.agnosticOverAll}>Model-Context Protocol turns MxN adaption into one-off integration, saving millions of costs for AI frameworks and applications.</div>
              							</div>
            						</div>
            						<div className={styles.iconLockup3}>
              							<img className={styles.cableIcon} alt="" src="Chart icon.svg" />
              							<div className={styles.text3}>
                								<div className={styles.generalization}>Performance</div>
                								<div className={styles.agnosticOverAll}>Node-based implementation on robust light clients, indexers, and dev-tools, leveraging Anthropic MCP SDKs in Rust/Go.</div>
              							</div>
            						</div>
            						<div className={styles.iconLockup3}>
              							<img className={styles.cableIcon} alt="" src="Account icon.svg" />
              							<div className={styles.text11}>
                								<div className={styles.generalization}>Security</div>
                								<div className={styles.typeSafeTransactionCrafting}>{`Type-safe transaction crafting with audited contract artifacts, plus agentic safeguard with server-side simulation against blockchain states.  `}</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.artificialBubbles}>
          					<div className={styles.div}>
            						<img className={styles.icon1} alt="" src="13 3.png" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.featuresCarousel}>
        				<div className={styles.text5}>
          					<div className={styles.title}>
            						<div className={styles.serviceModelFor}>Service Model for Order Flow</div>
            						<div className={styles.inTheComing}>In the coming years, 50%+ of transaction flows will have AI in the loop. Businesses with product-market fit will saturate the block-building pipeline, either as middleware or direct-to-consumer distribution.</div>
          					</div>
          					<div className={styles.list}>
            						<div className={styles.listItem1}>
              							<b className={styles.trustedBy}>01</b>
              							<div className={styles.foameoOffersFrontendAsASe}>Foameo offers frontend-as-a-service to Web3 ecosystem.</div>
            						</div>
            						<div className={styles.listItem1}>
              							<b className={styles.trustedBy}>02</b>
              							<div className={styles.foameoOffersFrontendAsASe}>MCP light clients also provides APIs services for other AI products.</div>
            						</div>
            						<div className={styles.listItem1}>
              							<b className={styles.trustedBy}>03</b>
              							<div className={styles.foameoOffersFrontendAsASe}>Execution infrastructure is ready for institutional SLAs for on-chain analysis and stable-coin transfers with AI agents.</div>
            						</div>
            						<div className={styles.listItem1}>
              							<b className={styles.trustedBy}>04</b>
              							<div className={styles.foameoOffersFrontendAsASe}>{`Generalized, end-to-end UX serves as a pivotal technology to craft direct-to-consumer product. `}</div>
            						</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.text}>Discover More</div>
          					</div>
        				</div>
        				<div className={styles.featuresCarouselV1}>
          					<div className={styles.image}>
            						<div className={styles.controls}>
              							<img className={styles.arrowLeftIcon} alt="" src="Arrow Left.png" />
              							<img className={styles.arrowRightIcon} alt="" src="Arrow right.svg" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.specificationsTable}>
        				<div className={styles.content} data-scroll-to="contentContainer">
          					<div className={styles.textContent}>
            						<div className={styles.market}>Market</div>
            						<b className={styles.frictionlessIntegrationFor}>Frictionless Integration for Distribution</b>
            						<div className={styles.ourZeroCostServicesContainer}>
              							<p className={styles.frontendIsDead}>Our zero-cost services aims to capture maximum order flow. We takes fees from transactions with PMF.</p>
              							<p className={styles.frontendIsDead}>Foameo devotes to craft seamless consumer experience that converts to distribution.</p>
            						</div>
            						<div className={styles.button1}>
              							<div className={styles.text}>Discover More</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.content2}>
          					<img className={styles.vanDiaghramIcon} alt="" src="Van Diaghram.png" />
          					<div className={styles.texts}>
            						<b className={styles.atonomy}>Atonomy</b>
            						<b className={styles.collaboration}>Collaboration</b>
            						<b className={styles.capability}>Capability</b>
            						<div className={styles.depthAndContinuity}>Depth and continuity of an agent’s ability to perform a task asynchronously and independently</div>
            						<div className={styles.degreeOfAgent}>Degree of agent coordination, specialization, and emergent behavior in multi-agent swarm</div>
            						<div className={styles.breadthOfOnChain}>Breadth of on-chain tasks AI can perform arbitrarily</div>
            						<div className={styles.whereWeStand}>Where We Stand</div>
            						<div className={styles.technology}>Technology</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.howItWorksSection} data-scroll-to="howItWorksSection">
        				<div className={styles.hearOurVoiceParent}>
          					<div className={styles.hearOurVoice}>Hear our voice</div>
          					<div className={styles.buttonLinkout1}>
            						<div className={styles.text}>Blog</div>
            						<img className={styles.arrowIcon} alt="" src="Arrow.svg" />
          					</div>
        				</div>
        				<div className={styles.up}>
          					<div className={styles.lockup1}>
            						<div className={styles.div1}>01</div>
            						<div className={styles.getStartedParent}>
              							<div className={styles.generalization}>Get Started</div>
              							<div className={styles.withOurIntuitive}>With our intuitive setup, you’re up and running in minutes.</div>
            						</div>
          					</div>
          					<div className={styles.lockup1}>
            						<div className={styles.div1}>02</div>
            						<div className={styles.getStartedParent}>
              							<div className={styles.generalization}>Customize and Configure</div>
              							<div className={styles.withOurIntuitive}>Adapt Area to your specific requirements and preferences.</div>
            						</div>
          					</div>
          					<div className={styles.lockup1}>
            						<div className={styles.div1}>03</div>
            						<div className={styles.getStartedParent}>
              							<div className={styles.generalization}>Grow Your Business</div>
              							<div className={styles.withOurIntuitive}>Make informed decisions to exceed your goals.</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.heroImage}>
        				<div className={styles.imageContainer}>
          					<div className={styles.imageContainerChild} />
          					<div className={styles.imageContainerItem} />
          					<div className={styles.imageContainerInner} />
          					<img className={styles.lineIcon} alt="" src="Line 4.svg" />
          					<img className={styles.icon2} alt="" src="4 9.png" />
          					<div className={styles.div4}>
            						<img className={styles.icon1} alt="" src="13 3.png" />
          					</div>
          					<img className={styles.globeRightIcon1} alt="" src="Globe right.png" />
        				</div>
      			</div>
      			<div className={styles.centeredCta} data-scroll-to="centeredCTAContainer">
        				<div className={styles.connectWithUs}>Connect with us</div>
        				<div className={styles.withOurIntuitive}>Schedule a quick call to learn about what we do.</div>
        				<div className={styles.buttonLinkout1}>
          					<div className={styles.text}>Contact Us</div>
          					<img className={styles.arrowIcon} alt="" src="Arrow.svg" />
        				</div>
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.links}>
          					<div className={styles.navItems}>
            						<div className={styles.benefits} onClick={onBenefitsTextClick}>Benefits</div>
            						<div className={styles.benefits} onClick={onSpecificationsTextClick}>Specifications</div>
            						<div className={styles.benefits} onClick={onHowToTextClick}>How-to</div>
          					</div>
        				</div>
        				<div className={styles.credits}>
          					<img className={styles.logoIcon6} alt="" src="Logo.png" />
          					<div className={styles.text8}>
            						<div className={styles.area}>© Area.</div>
            						<div className={styles.area}>2025</div>
          					</div>
          					<div className={styles.area}>All Rights Reserved</div>
        				</div>
      			</div>
      			<div className={styles.navItems1}>
        				<div className={styles.benefits} onClick={onBenefitsTextClick}>About</div>
        				<div className={styles.benefits} onClick={onSpecificationsTextClick}>Mission</div>
        				<div className={styles.benefits} onClick={onHowToTextClick}>Blog</div>
        				<div className={styles.benefits} onClick={onContactUsTextClick}>Contact Us</div>
      			</div>
    		</div>);
};

export default Desktop;
