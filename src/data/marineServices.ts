import { Anchor } from "lucide-react";
import type { Service } from "./services";

// ─── Marine & Underwater Services ────────────────────────────────────────────
// Content adapted from TPI's six ROV & underwater service brochures (2026).
// Gallery frames under /assets/marine/ and photo-jacket-underwater are TPI's own
// brochure imagery. Photographs listed in MARINE_PHOTO_CREDITS are licensed
// Wikimedia Commons stand-ins. Client direction: show no third-party ROVs and
// no visible company names in any photograph.

const M = "/assets/marine";

export const marineService: Service = {
  id: "marine",
  title: "Marine & Underwater Services",
  slug: "marine-underwater",
  icon: Anchor,
  shortDesc: "ROV inspection, underwater testing and seabed survey for submerged assets and environments.",
  hasDetailedPage: true,
  subServices: [
    {
      id: "offshore-subsea-inspection",
      brochure: "/brochures/TPI-Offshore-Subsea-Asset-Inspection.pdf",
      slug: "offshore-subsea-asset-inspection",
      title: "Offshore & Subsea Asset Inspection",
      shortDesc:
        "ROV condition surveys of jackets, subsea equipment, risers and moorings, with every observation tied to an identifiable component.",
      fullDesc:
        "We survey the condition of accessible offshore structures and subsea equipment for maintenance planning, incident review and integrity programmes. Each scope follows the asset configuration and your inspection priorities.\n\nSurface-supplied power keeps the ROV working on long runs. Pilots hold position for close-ups, mark findings against component references and log any gaps in coverage. Imaging sonar adds context when visibility drops, and a live image scale lets us size a local feature during the dive or flag it for measurement afterwards.",
      highlights: [
        "Platforms and jackets",
        "Wellheads and subsea systems",
        "Risers and jumpers",
        "Buoys and moorings",
        "Umbilicals and control lines",
        "Anodes and protective systems",
      ],
      capabilities: [
        {
          title: "Platforms and jackets",
          desc: "We inspect legs, braces and nodes for damage, corrosion and missing parts. Local cavitation cleaning at up to 500 bar can expose a connection for a closer look.",
        },
        {
          title: "Wellheads and subsea systems",
          desc: "Our cameras record the external condition of trees, manifolds, umbilical termination assemblies and protective frames, including visible displacement at accessible interfaces.",
        },
        {
          title: "Risers and jumpers",
          desc: "We inspect exposed risers and production or gas-lift jumpers, together with their clamps, supports and protection systems.",
        },
        {
          title: "Buoys and moorings",
          desc: "We record the condition of buoy undersides, chains, ropes, shackles and anchor interfaces, including wear and contact with the seabed.",
        },
        {
          title: "Umbilicals and control lines",
          desc: "We check external protection, supports and connections on accessible umbilicals and on hydraulic or electrical flying leads.",
        },
        {
          title: "Anodes and protective systems",
          desc: "We document anode attachment and visible consumption, and size selected features from scaled images, live or after the dive.",
        },
      ],
      applications:
        "Routine condition monitoring, maintenance campaigns, post-storm or post-incident assessment, pre-work and post-work verification, and decommissioning planning.",
      addOns:
        "Specified scopes can add ultrasonic thickness gauging, cathodic protection potentials and local surface preparation, carried out with suitable tooling and qualified personnel.",
      limits:
        "Coverage and methods depend on asset access, visibility, currents, deployment arrangements and the verified capability of the selected equipment. Engineering fitness-for-service assessment is scoped separately.",
      deliverables: [
        { title: "Inspection video and stills", desc: "Organised recordings and annotated images, referenced to the inspected assets." },
        { title: "Asset coverage record", desc: "The areas inspected, the features that could not be reached and any incomplete coverage." },
        { title: "Anomaly register", desc: "Visible defects and observations, with image references and agreed priority categories." },
        { title: "Technical inspection report", desc: "Findings, specified measurement results and recommendations for further inspection, maintenance or engineering review." },
      ],
      enquiryPrompt:
        "Send the asset locations, water depths, drawings where available, the coverage you need and your preferred mobilisation window.",
      heroImage: `${M}/photo-offshore-platform.webp`,
      image: `${M}/photo-offshore-field-dusk.webp`,
      gallery: [
        { src: `${M}/rov-marked-jacket-member.webp`, alt: "Painted identification number on a submerged jacket member, filmed by ROV" },
        { src: `${M}/rov-mooring-chain.webp`, alt: "Marine growth on an accessible section of mooring chain" },
        { src: `${M}/rov-imaging-sonar.webp`, alt: "Imaging sonar return around a submerged structure in low visibility" },
      ],
    },
    {
      id: "underwater-ndt-corrosion",
      brochure: "/brochures/TPI-Underwater-NDT-Corrosion-Assessment.pdf",
      slug: "underwater-ndt-corrosion-assessment",
      title: "Underwater NDT & Corrosion Assessment",
      shortDesc:
        "Ultrasonic thickness readings, cathodic protection surveys and measured corrosion evidence for submerged steel.",
      fullDesc:
        "We combine underwater visual inspection with selected measurements to document metal loss, coating condition and corrosion-protection performance on submerged steel. The inspection plan fixes the test locations, methods and reporting format before we mobilise.\n\nUltrasonic readings and scaled surface measurements are linked to their test points, so your corrosion team can find a result again and compare it at the next inspection.",
      highlights: [
        "Ultrasonic thickness gauging",
        "Cathodic protection surveys",
        "Sacrificial anode inspection",
        "Coating condition assessment",
        "Corrosion defect documentation",
        "Pre-NDT water-jet cleaning",
      ],
      capabilities: [
        {
          title: "Ultrasonic thickness gauging",
          desc: "We measure remaining steel thickness at accessible test points and compare readings with nominal or previous values where they exist.",
        },
        {
          title: "Cathodic protection surveys",
          desc: "We take structure-to-electrolyte potentials at agreed points so your corrosion team can assess how well the CP system is protecting the asset.",
        },
        {
          title: "Sacrificial anode inspection",
          desc: "We record anode presence, attachment and visible consumption, with selected dimensions where the scope calls for them.",
        },
        {
          title: "Coating condition assessment",
          desc: "We document coating breakdown and exposed steel, and quantify the affected area from scaled images for repair planning.",
        },
        {
          title: "Corrosion defect documentation",
          desc: "We measure lengths and angles in the image plane. Where a defect boundary is clear, we report its area and perimeter against the test-point reference.",
        },
        {
          title: "Pre-NDT water-jet cleaning",
          desc: "We clear marine growth from test points with a cavitation water jet rated up to 500 bar, at a working pressure suited to the coating.",
        },
      ],
      applications:
        "Exposed steel pipelines, vessel hulls, platform members, risers, manifolds, steel piles and other accessible submerged components. What we can test depends on material, geometry and surface condition.",
      limits:
        "UT readings describe the tested locations only, and thickness gauging is not a full weld or crack inspection. Methods depend on access, surface preparation, probe contact and verified tooling. Fitness-for-service assessment is scoped separately.",
      deliverables: [
        { title: "Measurement schedules", desc: "UT thickness readings and CP potentials, linked to asset identifiers and individual test locations." },
        { title: "Method and calibration record", desc: "The instruments used, their calibration references and the conditions at the time of measurement." },
        { title: "Annotated inspection evidence", desc: "Selected images and an observation register covering coating, corrosion and anode condition." },
        { title: "Technical findings and follow-up", desc: "Results, coverage limits and recommendations for further inspection, monitoring or engineering review." },
      ],
      enquiryPrompt:
        "Send asset drawings, materials, nominal thicknesses, coating details, water depths, previous results and the testing scope you need.",
      heroImage: `${M}/photo-sacrificial-anode.webp`,
      image: `${M}/coating-defect-measure.webp`,
      gallery: [
        { src: `${M}/anode-length-scale.webp`, alt: "Sacrificial anode measured against an on-screen scale" },
        { src: `${M}/flange-scale-check.webp`, alt: "Flange diameter checked against a physical scale reference" },
        { src: `${M}/rov-defect-trace.webp`, alt: "Traced outline of a surface defect used to report its area and perimeter" },
      ],
    },
    {
      id: "pipeline-cable-inspection",
      brochure: "/brochures/TPI-Pipeline-Subsea-Cable-Inspection.pdf",
      slug: "pipeline-subsea-cable-inspection",
      title: "Pipeline & Subsea Cable Inspection",
      shortDesc:
        "Route-referenced inspection of exposed pipelines, power and telecom cables, crossings and protection systems.",
      fullDesc:
        "We inspect accessible pipeline and cable sections to document external condition, supports and visible interaction with the seabed. Each scope defines the route sections, coverage and measurements your assessment needs.\n\nPilots fly operator-supervised passes along the known route and stop at crossings, supports and free spans. Every finding carries a route reference, so a crew can go back to the same spot.",
      highlights: [
        "Exposed pipeline inspection",
        "Free spans and supports",
        "Crossings and interfaces",
        "Subsea cable inspection",
        "Cable and pipeline protection",
        "Incident and installation checks",
      ],
      capabilities: [
        {
          title: "Exposed pipeline inspection",
          desc: "We locate coating damage, corrosion and deformation on exposed pipe. Scaled images and route references let your team size and revisit local defects.",
        },
        {
          title: "Free spans and supports",
          desc: "We identify unsupported sections and inspect sleepers, clamps and supports. Where geometry and coverage permit, we measure span length or seabed clearance.",
        },
        {
          title: "Crossings and interfaces",
          desc: "We document displaced supports, erosion and interference at exposed river, creek and subsea crossings.",
        },
        {
          title: "Subsea cable inspection",
          desc: "We inspect agreed lengths of exposed power and telecom cable for external damage, displacement and interference.",
        },
        {
          title: "Cable and pipeline protection",
          desc: "We check mattresses and rock protection for gaps or displacement, bend protection for damage, and the condition of accessible cable entries.",
        },
        {
          title: "Incident and installation checks",
          desc: "We document priority locations after storms, suspected damage or installation work, with paired observations before and after intervention.",
        },
      ],
      applications:
        "Offshore flowlines, exposed export pipelines, power and telecom cables, river and creek crossings, and coastal approaches.",
      addOns:
        "Specified scopes can add validated dimensional measurements, local cleaning, ultrasonic thickness readings on accessible steel and CP potentials. Our engineers can then review the significance of selected findings.",
      limits:
        "Locating buried assets, measuring depth of cover, internal inspection and leak-rate quantification need separately specified methods. Visual observation alone does not establish the integrity of a whole pipeline or cable.",
      deliverables: [
        { title: "Route coverage record", desc: "Inspected sections, asset references and coverage limits, with mapped locations where positioning is in scope." },
        { title: "Annotated video and stills", desc: "Organised recordings and selected images of asset condition and visible anomalies." },
        { title: "Anomaly and measurement register", desc: "Referenced findings with specified dimensions or test results, linked to route sections." },
        { title: "Technical findings and follow-up", desc: "Observed deterioration and recommended further inspection, maintenance or engineering review." },
      ],
      enquiryPrompt:
        "Send route drawings or coordinates, water depths, asset dimensions, burial and protection details, previous findings and the sections you want prioritised.",
      heroImage: `${M}/photo-platform-risers.webp`,
      image: `${M}/rov-exposed-flowline.webp`,
      gallery: [
        { src: `${M}/photo-pipeline-mattresses.webp`, alt: "Concrete protection mattresses stacked on a barge before installation over a pipeline" },
        { src: `${M}/rov-seabed-detail.webp`, alt: "Seabed surface beside an exposed flowline, recorded for context" },
        { src: `${M}/coating-defect-measure.webp`, alt: "Coating defect on steel pipe sized on a scaled inspection image" },
      ],
    },
    {
      id: "hull-marine-structure-inspection",
      brochure: "/brochures/TPI-Vessel-Hull-Marine-Structure-Inspection.pdf",
      slug: "vessel-hull-marine-structure-inspection",
      title: "Vessel Hull & Marine Structure Inspection",
      shortDesc:
        "Underwater surveys of hulls, propellers, sea chests, jetties, bridge foundations and dam intakes, indexed by zone or member.",
      fullDesc:
        "We examine accessible submerged surfaces and components to document damage, deterioration, fouling and obstruction. Each inspection follows an agreed asset list, coverage plan and reporting format.\n\nOnce safe access and isolation are agreed, pilots work undersides and vertical faces at a controlled stand-off. Findings are indexed by hull zone, fitting or pile, so close-ups can be compared and repair areas found again.",
      highlights: [
        "Hull and coating surveys",
        "Propellers, rudders and thrusters",
        "Sea chests and external fittings",
        "Jetties, quays and marine piles",
        "Bridges and coastal structures",
        "Dams, reservoirs and water assets",
      ],
      capabilities: [
        {
          title: "Hull and coating surveys",
          desc: "We document damage, coating loss and marine growth by hull zone. Targeted cavitation cleaning runs at up to 500 bar, at a pressure suited to the coating.",
        },
        {
          title: "Propellers, rudders and thrusters",
          desc: "We inspect accessible propellers, rudders and thrusters for blade damage, deformation, fouling and entanglement.",
        },
        {
          title: "Sea chests and external fittings",
          desc: "We examine grilles, intakes, outlets and fittings for damage or obstruction that needs maintenance.",
        },
        {
          title: "Jetties, quays and marine piles",
          desc: "We inspect piles, braces, connections and sheet piles, and report coating-loss area by pile or member where a scaled image supports it.",
        },
        {
          title: "Bridges and coastal structures",
          desc: "We document visible defects, foundation exposure and signs of undermining at bridge elements, seawalls and revetments.",
        },
        {
          title: "Dams, reservoirs and water assets",
          desc: "We inspect submerged gates, trash racks, intakes and accessible surfaces in water-filled storage assets.",
        },
      ],
      applications:
        "Routine condition surveys, maintenance planning, grounding or collision assessment, pre-purchase and charter survey support, post-flood inspection, and pre-work or post-work verification.",
      addOns:
        "Selected scopes can include steel thickness gauging, CP potentials and defect dimensions. UWILD and in-water survey support follows the applicable class requirements, surveyor attendance and supplier acceptance.",
      limits:
        "Inspection depends on safe access, visibility and operating conditions. Class acceptance, structural capacity assessment and commercial survey opinions need the relevant approvals or separately appointed specialists.",
      deliverables: [
        { title: "Annotated video and images", desc: "Organised footage and selected stills, referenced to the vessel components or structure inspected." },
        { title: "Coverage and observation record", desc: "Areas inspected, visible defects, features that could not be reached and any incomplete coverage." },
        { title: "Specified measurement results", desc: "Dimensional, thickness or CP readings where included, with test-location and method references." },
        { title: "Technical inspection report", desc: "Findings and recommendations for maintenance, further testing or specialist review within the agreed scope." },
      ],
      enquiryPrompt:
        "Send the vessel or structure details, location, drawings, water depths, access arrangements, inspection priorities and any class or surveyor requirements.",
      heroImage: `${M}/photo-drydock-propeller.webp`,
      image: `${M}/hull-propeller-rudder.webp`,
      gallery: [
        { src: `${M}/hull-coating-condition.webp`, alt: "Close-up of hull coating condition and fouling" },
        { src: `${M}/hull-plate-seam.webp`, alt: "Hull plate seam and the surrounding surface, filmed at a controlled stand-off" },
        { src: `${M}/photo-structure-inspection-diver.webp`, alt: "Close inspection of submerged concrete armour units" },
      ],
    },
    {
      id: "bathymetric-seabed-surveys",
      brochure: "/brochures/TPI-Bathymetric-Seabed-Surveys.pdf",
      slug: "bathymetric-seabed-surveys",
      title: "Bathymetric & Seabed Surveys",
      shortDesc:
        "Positioned depth surveys, terrain models, scour checks and volume calculations for ports, reservoirs, crossings and offshore sites.",
      fullDesc:
        "We plan local bathymetric and seabed surveys around the coverage, resolution and accuracy the work needs, then select depth sensors, positioning and processing to suit. Underwater imagery adds context to the depth data.\n\nSurvey lines run against an agreed datum. Live 2D and 3D views let us spot and close coverage gaps before demobilising, and checked depth points feed the contours, profiles, terrain models and volume estimates you receive.",
      highlights: [
        "Local bathymetric surveys",
        "Profiles and terrain models",
        "Scour and erosion surveys",
        "Reservoir capacity and sedimentation",
        "Dredging assessment support",
        "Seabed features and obstructions",
      ],
      capabilities: [
        {
          title: "Local bathymetric surveys",
          desc: "Automated path planning covers the agreed area along operator-supervised lines, recording positioned depths at the specified spacing.",
        },
        {
          title: "Profiles and terrain models",
          desc: "We review 2D and 3D seabed maps during the survey. Checked depth points support contours, profiles and terrain models at the resolution the data allow.",
        },
        {
          title: "Scour and erosion surveys",
          desc: "We map bed depressions and exposed foundations around structures and crossings. Comparable repeat surveys show where scour has progressed.",
        },
        {
          title: "Reservoir capacity and sedimentation",
          desc: "We estimate storage at a stated water level. Repeat surveys on a common datum show how deposition or erosion changes the available capacity.",
        },
        {
          title: "Dredging assessment support",
          desc: "We compare bed levels before and after dredging and, where coverage allows, calculate the volume of material removed or deposited.",
        },
        {
          title: "Seabed features and obstructions",
          desc: "We record the positions of visible or sonar-detected features within the survey area and state the positioning method used.",
        },
      ],
      applications:
        "Offshore structures, ports and berths, intakes and outfalls, bridge foundations, reservoirs, pipeline crossings and coastal works.",
      limits:
        "Coverage, point density and achievable uncertainty depend on the sensors and positioning selected; the proposal states the method, the deliverables and whether a separate hydrographic survey platform is needed. Formal hydrographic standards, dredging acceptance and certified clearance need specifically agreed equipment, coverage and verification.",
      deliverables: [
        { title: "Depth data and survey plans", desc: "Referenced depth points and plan views at the agreed coverage, with coordinate and vertical datum information." },
        { title: "Profiles, contours and models", desc: "Seabed profiles, contour plans or terrain models, where the acquired data support them." },
        { title: "Change and feature records", desc: "Scour or sediment-change comparisons and obstruction observations, where they are in scope." },
        { title: "Technical survey report", desc: "Method, equipment, reference systems, quality checks, achieved coverage and limitations, with agreed CAD or GIS outputs." },
      ],
      enquiryPrompt:
        "Send the survey boundary, expected depths, purpose, required accuracy and resolution, reference datum, previous surveys and preferred output formats.",
      heroImage: `${M}/photo-multibeam-seabed.webp`,
      image: `${M}/bathymetry-terrain-model.webp`,
      gallery: [
        { src: `${M}/bathymetry-terrain-contours.webp`, alt: "3D terrain surface with depth contours draped over the surveyed bed" },
        { src: `${M}/photo-multibeam-wreck.webp`, alt: "Multibeam bathymetry image of a wreck lying on the seabed" },
        { src: `${M}/bathymetry-depth-contours.webp`, alt: "Depth contour plan of a surveyed basin, coloured by depth band" },
      ],
    },
    {
      id: "underwater-environmental-surveys",
      brochure: "/brochures/TPI-Underwater-Environmental-Ecological-Surveys.pdf",
      slug: "underwater-environmental-ecological-surveys",
      title: "Underwater Environmental & Ecological Surveys",
      shortDesc:
        "Repeatable video transects, habitat observations, water-quality profiles and sampling support for EIA, EES and marine monitoring.",
      fullDesc:
        "We combine structured underwater observation with selected measurements and sampling support. The study design ties survey stations, field records and specialist interpretation to the environmental questions you need answered.\n\nPilots follow defined transects at a planned height above the bed. Station, survey effort, altitude and visibility are logged with the imagery, so seasonal surveys can be compared like for like. The work connects directly to our EIA practice and laboratory.",
      highlights: [
        "EIA and EES video transects",
        "Seabed habitat observations",
        "Fish and biodiversity surveys",
        "Water-quality profiling",
        "Targeted sampling support",
        "Impact and restoration monitoring",
      ],
      capabilities: [
        {
          title: "EIA and EES video transects",
          desc: "We film defined transects at project and reference stations, at a consistent camera height where conditions permit, so habitats can be compared between surveys.",
        },
        {
          title: "Seabed habitat observations",
          desc: "We describe visible substrate, organisms and disturbance, and measure a clearly bounded patch of colonisation within a scaled image.",
        },
        {
          title: "Fish and biodiversity surveys",
          desc: "We record visible marine life with consistent observation effort. Specialist review supports identification and comparison across stations or seasons.",
        },
        {
          title: "Water-quality profiling",
          desc: "We profile agreed parameters at selected depths and locations, with sensor calibration and field quality checks recorded alongside the results.",
        },
        {
          title: "Targeted sampling support",
          desc: "We support collection at selected underwater locations with a sampler suited to the analysis, recording volume, preservation and chain of custody.",
        },
        {
          title: "Impact and restoration monitoring",
          desc: "We revisit marked stations to assess habitat change, sediment disturbance and restoration progress using comparable transects and effort.",
        },
      ],
      applications:
        "Offshore energy facilities, ports and dredging projects, coastal developments, intakes and outfalls, aquaculture sites and restoration areas, for baseline studies and operational or seasonal monitoring.",
      addOns:
        "Marine specialists interpret imagery and field data in the context of the study. Selected samples can go for laboratory analysis under a defined QA/QC programme; eDNA sampling needs a validated collection and preservation method.",
      limits:
        "Video describes visible organisms and habitats. Infaunal communities and chemical conditions need appropriate sampling and analysis, and sensor and sampler choice depends on verified compatibility with the study method.",
      deliverables: [
        { title: "Survey imagery and station records", desc: "Referenced video and stills, survey effort and field conditions, linked to agreed stations or transects." },
        { title: "Habitat and biodiversity findings", desc: "Descriptions of visible habitats and organisms, with classifications, maps or metrics where the survey design supports them." },
        { title: "Measurements and sample records", desc: "Water-quality data, calibration checks and sampling records, with laboratory results where included." },
        { title: "Environmental interpretation", desc: "A technical report on findings, limitations and monitoring implications, with material for EIA or EES reporting where specified." },
      ],
      enquiryPrompt:
        "Send the project location, study objectives, water depths, existing data, target season, required parameters and any monitoring or reporting commitments.",
      heroImage: `${M}/photo-healthy-reef.webp`,
      image: `${M}/reef-transect.webp`,
      gallery: [
        { src: `${M}/structure-colonisation.webp`, alt: "Sponges, tunicates and other organisms colonising a submerged structure" },
        { src: `${M}/colonisation-area-measure.webp`, alt: "Patch of colonisation measured within a laser-scaled frame" },
        { src: `${M}/photo-diver-transect.webp`, alt: "Survey transect line laid across a reef for repeat observation" },
      ],
    },
  ],
};

/**
 * Licensed stand-in photographs (Wikimedia Commons). Replace with TPI's own
 * footage when available; CC BY / CC BY-SA images must keep this attribution.
 */
export const MARINE_PHOTO_CREDITS: Record<string, { by: string; licence: string; page: string }> = {
  "photo-offshore-platform": { by: "GuavaTrain", licence: "CC0", page: "https://commons.wikimedia.org/wiki/File:Holstein_at_Dusk.jpg" },
  "photo-offshore-field-dusk": { by: "Genghiskhanviet", licence: "Public domain", page: "https://commons.wikimedia.org/wiki/File:An_oil_rig_offshore_Vungtau.jpg" },
  "photo-sacrificial-anode": { by: "Zwergelstern", licence: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Sacrificial_anode.jpg" },
  "photo-healthy-reef": { by: "Laszlo Ilyes", licence: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Healthy_Reef_(2067197055).jpg" },
  "photo-platform-risers": { by: "FrogsLegs71", licence: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Risers_going_below_a_offshore_oil_platform.jpg" },
  "photo-pipeline-mattresses": { by: "Ciacho5", licence: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Pipeline_matrasses_on_barge1.jpg" },
  "photo-drydock-propeller": { by: "AlfvanBeem", licence: "CC0", page: "https://commons.wikimedia.org/wiki/File:Union_5_in_dry-dock_of_Antwerp_pic4.JPG" },
  "photo-structure-inspection-diver": { by: "Idmer34", licence: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Idmer_underwater_inspection.jpg" },
  "photo-multibeam-seabed": { by: "Ifremer", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Crat%C3%A8res_sous-marins_en_baie_de_Concarneau_(Ifremer_00705-81751_-_34709).jpg" },
  "photo-multibeam-wreck": { by: "U.S. Navy", licence: "Public domain", page: "https://commons.wikimedia.org/wiki/File:US_Navy_030411-N-0000X-001_A_detailed_multibeam_image_for_the_survey_of_USS_Susan_B._Anthony_(AP-72).jpg" },
  "photo-diver-transect": { by: "Peter Southwood", licence: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Diver_swimming_a_transect_for_Reef_Life_Survey_PB164699.JPG" },
};

/** Credits for the stand-in photographs a set of image paths uses. */
export const creditsFor = (paths: (string | undefined)[]) =>
  Array.from(new Set(paths.filter(Boolean).map((p) => p!.split("/").pop()!.replace(/\.webp$/, ""))))
    .filter((key) => key in MARINE_PHOTO_CREDITS)
    .map((key) => ({ key, ...MARINE_PHOTO_CREDITS[key] }));

/** Overview content for the Marine & Underwater service line page. */
export const marineOverview = {
  brochure: "/brochures/TPI-Underwater-Inspection-and-Survey-Services.pdf",
  heroImage: `${M}/photo-jacket-underwater.webp`,
  intro:
    "Remotely operated vehicles take our cameras, imaging sonar and measurement tools to submerged steel, concrete and seabed. Every finding is referenced to a component, route section, hull zone or survey station, so your team can find it again, plan the work and compare it at the next campaign.",
  record: [
    { title: "Inspection evidence", desc: "Annotated stills and video indexed by asset, hull zone, station or route section." },
    { title: "Findings and measurements", desc: "Anomaly registers, defect dimensions and test readings linked to their locations." },
    { title: "Survey and monitoring data", desc: "Depth plans, terrain models, transect logs and environmental field records." },
    { title: "Technical report", desc: "Methods, coverage, data quality, limitations and findings for follow-up." },
  ],
  enquiryShort: "Tell us the asset, its location and water depth. We'll scope the survey.",
};
