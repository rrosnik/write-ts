
enum IfcActionRequestTypeEnum {
    email = "email",
    fax = "fax",
    phone = "phone",
    post = "post",
    verbal = "verbal",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcActionSourceTypeEnum {
    dead_load_g = "dead_load_g",
    completion_g1 = "completion_g1",
    live_load_q = "live_load_q",
    snow_s = "snow_s",
    wind_w = "wind_w",
    prestressing_p = "prestressing_p",
    settlement_u = "settlement_u",
    temperature_t = "temperature_t",
    earthquake_e = "earthquake_e",
    fire = "fire",
    impulse = "impulse",
    impact = "impact",
    transport = "transport",
    erection = "erection",
    propping = "propping",
    system_imperfection = "system_imperfection",
    shrinkage = "shrinkage",
    creep = "creep",
    lack_of_fit = "lack_of_fit",
    buoyancy = "buoyancy",
    ice = "ice",
    current = "current",
    wave = "wave",
    rain = "rain",
    brakes = "brakes",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcActionTypeEnum {
    permanent_g = "permanent_g",
    variable_q = "variable_q",
    extraordinary_a = "extraordinary_a",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcActuatorTypeEnum {
    electricactuator = "electricactuator",
    handoperatedactuator = "handoperatedactuator",
    hydraulicactuator = "hydraulicactuator",
    pneumaticactuator = "pneumaticactuator",
    thermostaticactuator = "thermostaticactuator",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAddressTypeEnum {
    office = "office",
    site = "site",
    home = "home",
    distributionpoint = "distributionpoint",
    userdefined = "userdefined"
}

enum IfcAirTerminalBoxTypeEnum {
    constantflow = "constantflow",
    variableflowpressuredependant = "variableflowpressuredependant",
    variableflowpressureindependant = "variableflowpressureindependant",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAirTerminalTypeEnum {
    diffuser = "diffuser",
    grille = "grille",
    louvre = "louvre",
    register = "register",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAirToAirHeatRecoveryTypeEnum {
    fixedplatecounterflowexchanger = "fixedplatecounterflowexchanger",
    fixedplatecrossflowexchanger = "fixedplatecrossflowexchanger",
    fixedplateparallelflowexchanger = "fixedplateparallelflowexchanger",
    rotarywheel = "rotarywheel",
    runaroundcoilloop = "runaroundcoilloop",
    heatpipe = "heatpipe",
    twintowerenthalpyrecoveryloops = "twintowerenthalpyrecoveryloops",
    thermosiphonsealedtubeheatexchangers = "thermosiphonsealedtubeheatexchangers",
    thermosiphoncoiltypeheatexchangers = "thermosiphoncoiltypeheatexchangers",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAlarmTypeEnum {
    bell = "bell",
    breakglassbutton = "breakglassbutton",
    light = "light",
    manualpullbox = "manualpullbox",
    siren = "siren",
    whistle = "whistle",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAlignmentTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAnalysisModelTypeEnum {
    in_plane_loading_2d = "in_plane_loading_2d",
    out_plane_loading_2d = "out_plane_loading_2d",
    loading_3d = "loading_3d",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcAnalysisTheoryTypeEnum {
    first_order_theory = "first_order_theory",
    second_order_theory = "second_order_theory",
    third_order_theory = "third_order_theory",
    full_nonlinear_theory = "full_nonlinear_theory",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcArithmeticOperatorEnum {
    add = "add",
    divide = "divide",
    multiply = "multiply",
    subtract = "subtract"
}

enum IfcAssemblyPlaceEnum {
    site = "site",
    factory = "factory",
    notdefined = "notdefined"
}

enum IfcAudioVisualApplianceTypeEnum {
    amplifier = "amplifier",
    camera = "camera",
    display = "display",
    microphone = "microphone",
    player = "player",
    projector = "projector",
    receiver = "receiver",
    speaker = "speaker",
    switcher = "switcher",
    telephone = "telephone",
    tuner = "tuner",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBSplineCurveForm {
    polyline_form = "polyline_form",
    circular_arc = "circular_arc",
    elliptic_arc = "elliptic_arc",
    parabolic_arc = "parabolic_arc",
    hyperbolic_arc = "hyperbolic_arc",
    unspecified = "unspecified"
}

enum IfcBSplineSurfaceForm {
    plane_surf = "plane_surf",
    cylindrical_surf = "cylindrical_surf",
    conical_surf = "conical_surf",
    spherical_surf = "spherical_surf",
    toroidal_surf = "toroidal_surf",
    surf_of_revolution = "surf_of_revolution",
    ruled_surf = "ruled_surf",
    generalised_cone = "generalised_cone",
    quadric_surf = "quadric_surf",
    surf_of_linear_extrusion = "surf_of_linear_extrusion",
    unspecified = "unspecified"
}

enum IfcBeamTypeEnum {
    beam = "beam",
    joist = "joist",
    hollowcore = "hollowcore",
    lintel = "lintel",
    spandrel = "spandrel",
    t_beam = "t_beam",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBenchmarkEnum {
    greaterthan = "greaterthan",
    greaterthanorequalto = "greaterthanorequalto",
    lessthan = "lessthan",
    lessthanorequalto = "lessthanorequalto",
    equalto = "equalto",
    notequalto = "notequalto",
    includes = "includes",
    notincludes = "notincludes",
    includedin = "includedin",
    notincludedin = "notincludedin"
}

enum IfcBoilerTypeEnum {
    water = "water",
    steam = "steam",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBooleanOperator {
    union = "union",
    intersection = "intersection",
    difference = "difference"
}

enum IfcBuildingElementPartTypeEnum {
    insulation = "insulation",
    precastpanel = "precastpanel",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBuildingElementProxyTypeEnum {
    complex = "complex",
    element = "element",
    partial = "partial",
    provisionforvoid = "provisionforvoid",
    provisionforspace = "provisionforspace",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBuildingSystemTypeEnum {
    fenestration = "fenestration",
    foundation = "foundation",
    loadbearing = "loadbearing",
    outershell = "outershell",
    shading = "shading",
    transport = "transport",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcBurnerTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCableCarrierFittingTypeEnum {
    bend = "bend",
    cross = "cross",
    reducer = "reducer",
    tee = "tee",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCableCarrierSegmentTypeEnum {
    cableladdersegment = "cableladdersegment",
    cabletraysegment = "cabletraysegment",
    cabletrunkingsegment = "cabletrunkingsegment",
    conduitsegment = "conduitsegment",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCableFittingTypeEnum {
    connector = "connector",
    entry = "entry",
    exit = "exit",
    junction = "junction",
    transition = "transition",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCableSegmentTypeEnum {
    busbarsegment = "busbarsegment",
    cablesegment = "cablesegment",
    conductorsegment = "conductorsegment",
    coresegment = "coresegment",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcChangeActionEnum {
    nochange = "nochange",
    modified = "modified",
    added = "added",
    deleted = "deleted",
    notdefined = "notdefined"
}

enum IfcChillerTypeEnum {
    aircooled = "aircooled",
    watercooled = "watercooled",
    heatrecovery = "heatrecovery",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcChimneyTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCoilTypeEnum {
    dxcoolingcoil = "dxcoolingcoil",
    electricheatingcoil = "electricheatingcoil",
    gasheatingcoil = "gasheatingcoil",
    hydroniccoil = "hydroniccoil",
    steamheatingcoil = "steamheatingcoil",
    watercoolingcoil = "watercoolingcoil",
    waterheatingcoil = "waterheatingcoil",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcColumnTypeEnum {
    column = "column",
    pilaster = "pilaster",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCommunicationsApplianceTypeEnum {
    antenna = "antenna",
    computer = "computer",
    fax = "fax",
    gateway = "gateway",
    modem = "modem",
    networkappliance = "networkappliance",
    networkbridge = "networkbridge",
    networkhub = "networkhub",
    printer = "printer",
    repeater = "repeater",
    router = "router",
    scanner = "scanner",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcComplexPropertyTemplateTypeEnum {
    p_complex = "p_complex",
    q_complex = "q_complex"
}

enum IfcCompressorTypeEnum {
    dynamic = "dynamic",
    reciprocating = "reciprocating",
    rotary = "rotary",
    scroll = "scroll",
    trochoidal = "trochoidal",
    singlestage = "singlestage",
    booster = "booster",
    opentype = "opentype",
    hermetic = "hermetic",
    semihermetic = "semihermetic",
    weldedshellhermetic = "weldedshellhermetic",
    rollingpiston = "rollingpiston",
    rotaryvane = "rotaryvane",
    singlescrew = "singlescrew",
    twinscrew = "twinscrew",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCondenserTypeEnum {
    aircooled = "aircooled",
    evaporativecooled = "evaporativecooled",
    watercooled = "watercooled",
    watercooledbrazedplate = "watercooledbrazedplate",
    watercooledshellcoil = "watercooledshellcoil",
    watercooledshelltube = "watercooledshelltube",
    watercooledtubeintube = "watercooledtubeintube",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcConnectionTypeEnum {
    atpath = "atpath",
    atstart = "atstart",
    atend = "atend",
    notdefined = "notdefined"
}

enum IfcConstraintEnum {
    hard = "hard",
    soft = "soft",
    advisory = "advisory",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcConstructionEquipmentResourceTypeEnum {
    demolishing = "demolishing",
    earthmoving = "earthmoving",
    erecting = "erecting",
    heating = "heating",
    lighting = "lighting",
    paving = "paving",
    pumping = "pumping",
    transporting = "transporting",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcConstructionMaterialResourceTypeEnum {
    aggregates = "aggregates",
    concrete = "concrete",
    drywall = "drywall",
    fuel = "fuel",
    gypsum = "gypsum",
    masonry = "masonry",
    metal = "metal",
    plastic = "plastic",
    wood = "wood",
    notdefined = "notdefined",
    userdefined = "userdefined"
}

enum IfcConstructionProductResourceTypeEnum {
    assembly = "assembly",
    formwork = "formwork",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcControllerTypeEnum {
    floating = "floating",
    programmable = "programmable",
    proportional = "proportional",
    multiposition = "multiposition",
    twoposition = "twoposition",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCooledBeamTypeEnum {
    active = "active",
    passive = "passive",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCoolingTowerTypeEnum {
    naturaldraft = "naturaldraft",
    mechanicalinduceddraft = "mechanicalinduceddraft",
    mechanicalforceddraft = "mechanicalforceddraft",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCostItemTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCostScheduleTypeEnum {
    budget = "budget",
    costplan = "costplan",
    estimate = "estimate",
    tender = "tender",
    pricedbillofquantities = "pricedbillofquantities",
    unpricedbillofquantities = "unpricedbillofquantities",
    scheduleofrates = "scheduleofrates",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCoveringTypeEnum {
    ceiling = "ceiling",
    flooring = "flooring",
    cladding = "cladding",
    roofing = "roofing",
    molding = "molding",
    skirtingboard = "skirtingboard",
    insulation = "insulation",
    membrane = "membrane",
    sleeving = "sleeving",
    wrapping = "wrapping",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCrewResourceTypeEnum {
    office = "office",
    site = "site",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCurtainWallTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcCurveInterpolationEnum {
    linear = "linear",
    log_linear = "log_linear",
    log_log = "log_log",
    notdefined = "notdefined"
}

enum IfcDamperTypeEnum {
    backdraftdamper = "backdraftdamper",
    balancingdamper = "balancingdamper",
    blastdamper = "blastdamper",
    controldamper = "controldamper",
    firedamper = "firedamper",
    firesmokedamper = "firesmokedamper",
    fumehoodexhaust = "fumehoodexhaust",
    gravitydamper = "gravitydamper",
    gravityreliefdamper = "gravityreliefdamper",
    reliefdamper = "reliefdamper",
    smokedamper = "smokedamper",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDataOriginEnum {
    measured = "measured",
    predicted = "predicted",
    simulated = "simulated",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDerivedUnitEnum {
    angularvelocityunit = "angularvelocityunit",
    areadensityunit = "areadensityunit",
    compoundplaneangleunit = "compoundplaneangleunit",
    dynamicviscosityunit = "dynamicviscosityunit",
    heatfluxdensityunit = "heatfluxdensityunit",
    integercountrateunit = "integercountrateunit",
    isothermalmoisturecapacityunit = "isothermalmoisturecapacityunit",
    kinematicviscosityunit = "kinematicviscosityunit",
    linearvelocityunit = "linearvelocityunit",
    massdensityunit = "massdensityunit",
    massflowrateunit = "massflowrateunit",
    moisturediffusivityunit = "moisturediffusivityunit",
    molecularweightunit = "molecularweightunit",
    specificheatcapacityunit = "specificheatcapacityunit",
    thermaladmittanceunit = "thermaladmittanceunit",
    thermalconductanceunit = "thermalconductanceunit",
    thermalresistanceunit = "thermalresistanceunit",
    thermaltransmittanceunit = "thermaltransmittanceunit",
    vaporpermeabilityunit = "vaporpermeabilityunit",
    volumetricflowrateunit = "volumetricflowrateunit",
    rotationalfrequencyunit = "rotationalfrequencyunit",
    torqueunit = "torqueunit",
    momentofinertiaunit = "momentofinertiaunit",
    linearmomentunit = "linearmomentunit",
    linearforceunit = "linearforceunit",
    planarforceunit = "planarforceunit",
    modulusofelasticityunit = "modulusofelasticityunit",
    shearmodulusunit = "shearmodulusunit",
    linearstiffnessunit = "linearstiffnessunit",
    rotationalstiffnessunit = "rotationalstiffnessunit",
    modulusofsubgradereactionunit = "modulusofsubgradereactionunit",
    accelerationunit = "accelerationunit",
    curvatureunit = "curvatureunit",
    heatingvalueunit = "heatingvalueunit",
    ionconcentrationunit = "ionconcentrationunit",
    luminousintensitydistributionunit = "luminousintensitydistributionunit",
    massperlengthunit = "massperlengthunit",
    modulusoflinearsubgradereactionunit = "modulusoflinearsubgradereactionunit",
    modulusofrotationalsubgradereactionunit = "modulusofrotationalsubgradereactionunit",
    phunit = "phunit",
    rotationalmassunit = "rotationalmassunit",
    sectionareaintegralunit = "sectionareaintegralunit",
    sectionmodulusunit = "sectionmodulusunit",
    soundpowerlevelunit = "soundpowerlevelunit",
    soundpowerunit = "soundpowerunit",
    soundpressurelevelunit = "soundpressurelevelunit",
    soundpressureunit = "soundpressureunit",
    temperaturegradientunit = "temperaturegradientunit",
    temperaturerateofchangeunit = "temperaturerateofchangeunit",
    thermalexpansioncoefficientunit = "thermalexpansioncoefficientunit",
    warpingconstantunit = "warpingconstantunit",
    warpingmomentunit = "warpingmomentunit",
    userdefined = "userdefined"
}

enum IfcDirectionSenseEnum {
    positive = "positive",
    negative = "negative"
}

enum IfcDiscreteAccessoryTypeEnum {
    anchorplate = "anchorplate",
    bracket = "bracket",
    shoe = "shoe",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDistributionChamberElementTypeEnum {
    formedduct = "formedduct",
    inspectionchamber = "inspectionchamber",
    inspectionpit = "inspectionpit",
    manhole = "manhole",
    meterchamber = "meterchamber",
    sump = "sump",
    trench = "trench",
    valvechamber = "valvechamber",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDistributionPortTypeEnum {
    cable = "cable",
    cablecarrier = "cablecarrier",
    duct = "duct",
    pipe = "pipe",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDistributionSystemEnum {
    airconditioning = "airconditioning",
    audiovisual = "audiovisual",
    chemical = "chemical",
    chilledwater = "chilledwater",
    communication = "communication",
    compressedair = "compressedair",
    condenserwater = "condenserwater",
    control = "control",
    conveying = "conveying",
    data = "data",
    disposal = "disposal",
    domesticcoldwater = "domesticcoldwater",
    domestichotwater = "domestichotwater",
    drainage = "drainage",
    earthing = "earthing",
    electrical = "electrical",
    electroacoustic = "electroacoustic",
    exhaust = "exhaust",
    fireprotection = "fireprotection",
    fuel = "fuel",
    gas = "gas",
    hazardous = "hazardous",
    heating = "heating",
    lighting = "lighting",
    lightningprotection = "lightningprotection",
    municipalsolidwaste = "municipalsolidwaste",
    oil = "oil",
    operational = "operational",
    powergeneration = "powergeneration",
    rainwater = "rainwater",
    refrigeration = "refrigeration",
    security = "security",
    sewage = "sewage",
    signal = "signal",
    stormwater = "stormwater",
    telephone = "telephone",
    tv = "tv",
    vacuum = "vacuum",
    vent = "vent",
    ventilation = "ventilation",
    wastewater = "wastewater",
    watersupply = "watersupply",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDocumentConfidentialityEnum {
    public = "public",
    restricted = "restricted",
    confidential = "confidential",
    personal = "personal",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDocumentStatusEnum {
    draft = "draft",
    finaldraft = "finaldraft",
    final = "final",
    revision = "revision",
    notdefined = "notdefined"
}

enum IfcDoorPanelOperationEnum {
    swinging = "swinging",
    double_acting = "double_acting",
    sliding = "sliding",
    folding = "folding",
    revolving = "revolving",
    rollingup = "rollingup",
    fixedpanel = "fixedpanel",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDoorPanelPositionEnum {
    left = "left",
    middle = "middle",
    right = "right",
    notdefined = "notdefined"
}

enum IfcDoorStyleConstructionEnum {
    aluminium = "aluminium",
    high_grade_steel = "high_grade_steel",
    steel = "steel",
    wood = "wood",
    aluminium_wood = "aluminium_wood",
    aluminium_plastic = "aluminium_plastic",
    plastic = "plastic",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDoorStyleOperationEnum {
    single_swing_left = "single_swing_left",
    single_swing_right = "single_swing_right",
    double_door_single_swing = "double_door_single_swing",
    double_door_single_swing_opposite_left = "double_door_single_swing_opposite_left",
    double_door_single_swing_opposite_right = "double_door_single_swing_opposite_right",
    double_swing_left = "double_swing_left",
    double_swing_right = "double_swing_right",
    double_door_double_swing = "double_door_double_swing",
    sliding_to_left = "sliding_to_left",
    sliding_to_right = "sliding_to_right",
    double_door_sliding = "double_door_sliding",
    folding_to_left = "folding_to_left",
    folding_to_right = "folding_to_right",
    double_door_folding = "double_door_folding",
    revolving = "revolving",
    rollingup = "rollingup",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDoorTypeEnum {
    door = "door",
    gate = "gate",
    trapdoor = "trapdoor",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDoorTypeOperationEnum {
    single_swing_left = "single_swing_left",
    single_swing_right = "single_swing_right",
    double_door_single_swing = "double_door_single_swing",
    double_door_single_swing_opposite_left = "double_door_single_swing_opposite_left",
    double_door_single_swing_opposite_right = "double_door_single_swing_opposite_right",
    double_swing_left = "double_swing_left",
    double_swing_right = "double_swing_right",
    double_door_double_swing = "double_door_double_swing",
    sliding_to_left = "sliding_to_left",
    sliding_to_right = "sliding_to_right",
    double_door_sliding = "double_door_sliding",
    folding_to_left = "folding_to_left",
    folding_to_right = "folding_to_right",
    double_door_folding = "double_door_folding",
    revolving = "revolving",
    rollingup = "rollingup",
    swing_fixed_left = "swing_fixed_left",
    swing_fixed_right = "swing_fixed_right",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDuctFittingTypeEnum {
    bend = "bend",
    connector = "connector",
    entry = "entry",
    exit = "exit",
    junction = "junction",
    obstruction = "obstruction",
    transition = "transition",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDuctSegmentTypeEnum {
    rigidsegment = "rigidsegment",
    flexiblesegment = "flexiblesegment",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcDuctSilencerTypeEnum {
    flatoval = "flatoval",
    rectangular = "rectangular",
    round = "round",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricApplianceTypeEnum {
    dishwasher = "dishwasher",
    electriccooker = "electriccooker",
    freestandingelectricheater = "freestandingelectricheater",
    freestandingfan = "freestandingfan",
    freestandingwaterheater = "freestandingwaterheater",
    freestandingwatercooler = "freestandingwatercooler",
    freezer = "freezer",
    fridge_freezer = "fridge_freezer",
    handdryer = "handdryer",
    kitchenmachine = "kitchenmachine",
    microwave = "microwave",
    photocopier = "photocopier",
    refrigerator = "refrigerator",
    tumbledryer = "tumbledryer",
    vendingmachine = "vendingmachine",
    washingmachine = "washingmachine",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricDistributionBoardTypeEnum {
    consumerunit = "consumerunit",
    distributionboard = "distributionboard",
    motorcontrolcentre = "motorcontrolcentre",
    switchboard = "switchboard",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricFlowStorageDeviceTypeEnum {
    battery = "battery",
    capacitorbank = "capacitorbank",
    harmonicfilter = "harmonicfilter",
    inductorbank = "inductorbank",
    ups = "ups",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricGeneratorTypeEnum {
    chp = "chp",
    enginegenerator = "enginegenerator",
    standalone = "standalone",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricMotorTypeEnum {
    dc = "dc",
    induction = "induction",
    polyphase = "polyphase",
    reluctancesynchronous = "reluctancesynchronous",
    synchronous = "synchronous",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElectricTimeControlTypeEnum {
    timeclock = "timeclock",
    timedelay = "timedelay",
    relay = "relay",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElementAssemblyTypeEnum {
    accessory_assembly = "accessory_assembly",
    arch = "arch",
    beam_grid = "beam_grid",
    braced_frame = "braced_frame",
    girder = "girder",
    reinforcement_unit = "reinforcement_unit",
    rigid_frame = "rigid_frame",
    slab_field = "slab_field",
    truss = "truss",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcElementCompositionEnum {
    complex = "complex",
    element = "element",
    partial = "partial"
}

enum IfcEngineTypeEnum {
    externalcombustion = "externalcombustion",
    internalcombustion = "internalcombustion",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcEvaporativeCoolerTypeEnum {
    directevaporativerandommediaaircooler = "directevaporativerandommediaaircooler",
    directevaporativerigidmediaaircooler = "directevaporativerigidmediaaircooler",
    directevaporativeslingerspackagedaircooler = "directevaporativeslingerspackagedaircooler",
    directevaporativepackagedrotaryaircooler = "directevaporativepackagedrotaryaircooler",
    directevaporativeairwasher = "directevaporativeairwasher",
    indirectevaporativepackageaircooler = "indirectevaporativepackageaircooler",
    indirectevaporativewetcoil = "indirectevaporativewetcoil",
    indirectevaporativecoolingtowerorcoilcooler = "indirectevaporativecoolingtowerorcoilcooler",
    indirectdirectcombination = "indirectdirectcombination",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcEvaporatorTypeEnum {
    directexpansion = "directexpansion",
    directexpansionshellandtube = "directexpansionshellandtube",
    directexpansiontubeintube = "directexpansiontubeintube",
    directexpansionbrazedplate = "directexpansionbrazedplate",
    floodedshellandtube = "floodedshellandtube",
    shellandcoil = "shellandcoil",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcEventTriggerTypeEnum {
    eventrule = "eventrule",
    eventmessage = "eventmessage",
    eventtime = "eventtime",
    eventcomplex = "eventcomplex",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcEventTypeEnum {
    startevent = "startevent",
    endevent = "endevent",
    intermediateevent = "intermediateevent",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcExternalSpatialElementTypeEnum {
    external = "external",
    external_earth = "external_earth",
    external_water = "external_water",
    external_fire = "external_fire",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFanTypeEnum {
    centrifugalforwardcurved = "centrifugalforwardcurved",
    centrifugalradial = "centrifugalradial",
    centrifugalbackwardinclinedcurved = "centrifugalbackwardinclinedcurved",
    centrifugalairfoil = "centrifugalairfoil",
    tubeaxial = "tubeaxial",
    vaneaxial = "vaneaxial",
    propelloraxial = "propelloraxial",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFastenerTypeEnum {
    glue = "glue",
    mortar = "mortar",
    weld = "weld",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFilterTypeEnum {
    airparticlefilter = "airparticlefilter",
    compressedairfilter = "compressedairfilter",
    odorfilter = "odorfilter",
    oilfilter = "oilfilter",
    strainer = "strainer",
    waterfilter = "waterfilter",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFireSuppressionTerminalTypeEnum {
    breechinginlet = "breechinginlet",
    firehydrant = "firehydrant",
    hosereel = "hosereel",
    sprinkler = "sprinkler",
    sprinklerdeflector = "sprinklerdeflector",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFlowDirectionEnum {
    source = "source",
    sink = "sink",
    sourceandsink = "sourceandsink",
    notdefined = "notdefined"
}

enum IfcFlowInstrumentTypeEnum {
    pressuregauge = "pressuregauge",
    thermometer = "thermometer",
    ammeter = "ammeter",
    frequencymeter = "frequencymeter",
    powerfactormeter = "powerfactormeter",
    phaseanglemeter = "phaseanglemeter",
    voltmeter_peak = "voltmeter_peak",
    voltmeter_rms = "voltmeter_rms",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFlowMeterTypeEnum {
    energymeter = "energymeter",
    gasmeter = "gasmeter",
    oilmeter = "oilmeter",
    watermeter = "watermeter",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFootingTypeEnum {
    caisson_foundation = "caisson_foundation",
    footing_beam = "footing_beam",
    pad_footing = "pad_footing",
    pile_cap = "pile_cap",
    strip_footing = "strip_footing",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcFurnitureTypeEnum {
    chair = "chair",
    table = "table",
    desk = "desk",
    bed = "bed",
    filecabinet = "filecabinet",
    shelf = "shelf",
    sofa = "sofa",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcGeographicElementTypeEnum {
    terrain = "terrain",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcGeometricProjectionEnum {
    graph_view = "graph_view",
    sketch_view = "sketch_view",
    model_view = "model_view",
    plan_view = "plan_view",
    reflected_plan_view = "reflected_plan_view",
    section_view = "section_view",
    elevation_view = "elevation_view",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcGlobalOrLocalEnum {
    global_coords = "global_coords",
    local_coords = "local_coords"
}

enum IfcGridTypeEnum {
    rectangular = "rectangular",
    radial = "radial",
    triangular = "triangular",
    irregular = "irregular",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcHeatExchangerTypeEnum {
    plate = "plate",
    shellandtube = "shellandtube",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcHumidifierTypeEnum {
    steaminjection = "steaminjection",
    adiabaticairwasher = "adiabaticairwasher",
    adiabaticpan = "adiabaticpan",
    adiabaticwettedelement = "adiabaticwettedelement",
    adiabaticatomizing = "adiabaticatomizing",
    adiabaticultrasonic = "adiabaticultrasonic",
    adiabaticrigidmedia = "adiabaticrigidmedia",
    adiabaticcompressedairnozzle = "adiabaticcompressedairnozzle",
    assistedelectric = "assistedelectric",
    assistednaturalgas = "assistednaturalgas",
    assistedpropane = "assistedpropane",
    assistedbutane = "assistedbutane",
    assistedsteam = "assistedsteam",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcInterceptorTypeEnum {
    cyclonic = "cyclonic",
    grease = "grease",
    oil = "oil",
    petrol = "petrol",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcInternalOrExternalEnum {
    internal = "internal",
    external = "external",
    external_earth = "external_earth",
    external_water = "external_water",
    external_fire = "external_fire",
    notdefined = "notdefined"
}

enum IfcInventoryTypeEnum {
    assetinventory = "assetinventory",
    spaceinventory = "spaceinventory",
    furnitureinventory = "furnitureinventory",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcJunctionBoxTypeEnum {
    data = "data",
    power = "power",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcKnotType {
    uniform_knots = "uniform_knots",
    quasi_uniform_knots = "quasi_uniform_knots",
    piecewise_bezier_knots = "piecewise_bezier_knots",
    unspecified = "unspecified"
}

enum IfcLaborResourceTypeEnum {
    administration = "administration",
    carpentry = "carpentry",
    cleaning = "cleaning",
    concrete = "concrete",
    drywall = "drywall",
    electric = "electric",
    finishing = "finishing",
    flooring = "flooring",
    general = "general",
    hvac = "hvac",
    landscaping = "landscaping",
    masonry = "masonry",
    painting = "painting",
    paving = "paving",
    plumbing = "plumbing",
    roofing = "roofing",
    sitegrading = "sitegrading",
    steelwork = "steelwork",
    surveying = "surveying",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcLampTypeEnum {
    compactfluorescent = "compactfluorescent",
    fluorescent = "fluorescent",
    halogen = "halogen",
    highpressuremercury = "highpressuremercury",
    highpressuresodium = "highpressuresodium",
    led = "led",
    metalhalide = "metalhalide",
    oled = "oled",
    tungstenfilament = "tungstenfilament",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcLayerSetDirectionEnum {
    axis1 = "axis1",
    axis2 = "axis2",
    axis3 = "axis3"
}

enum IfcLightDistributionCurveEnum {
    type_a = "type_a",
    type_b = "type_b",
    type_c = "type_c",
    notdefined = "notdefined"
}

enum IfcLightEmissionSourceEnum {
    compactfluorescent = "compactfluorescent",
    fluorescent = "fluorescent",
    highpressuremercury = "highpressuremercury",
    highpressuresodium = "highpressuresodium",
    lightemittingdiode = "lightemittingdiode",
    lowpressuresodium = "lowpressuresodium",
    lowvoltagehalogen = "lowvoltagehalogen",
    mainvoltagehalogen = "mainvoltagehalogen",
    metalhalide = "metalhalide",
    tungstenfilament = "tungstenfilament",
    notdefined = "notdefined"
}

enum IfcLightFixtureTypeEnum {
    pointsource = "pointsource",
    directionsource = "directionsource",
    securitylighting = "securitylighting",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcLoadGroupTypeEnum {
    load_group = "load_group",
    load_case = "load_case",
    load_combination = "load_combination",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcLogicalOperatorEnum {
    logicaland = "logicaland",
    logicalor = "logicalor",
    logicalxor = "logicalxor",
    logicalnotand = "logicalnotand",
    logicalnotor = "logicalnotor"
}

enum IfcMechanicalFastenerTypeEnum {
    anchorbolt = "anchorbolt",
    bolt = "bolt",
    dowel = "dowel",
    nail = "nail",
    nailplate = "nailplate",
    rivet = "rivet",
    screw = "screw",
    shearconnector = "shearconnector",
    staple = "staple",
    studshearconnector = "studshearconnector",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcMedicalDeviceTypeEnum {
    airstation = "airstation",
    feedairunit = "feedairunit",
    oxygengenerator = "oxygengenerator",
    oxygenplant = "oxygenplant",
    vacuumstation = "vacuumstation",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcMemberTypeEnum {
    brace = "brace",
    chord = "chord",
    collar = "collar",
    member = "member",
    mullion = "mullion",
    plate = "plate",
    post = "post",
    purlin = "purlin",
    rafter = "rafter",
    stringer = "stringer",
    strut = "strut",
    stud = "stud",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcMotorConnectionTypeEnum {
    beltdrive = "beltdrive",
    coupling = "coupling",
    directdrive = "directdrive",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcNullStyle {
    null = "null"
}

enum IfcObjectTypeEnum {
    product = "product",
    process = "process",
    control = "control",
    resource = "resource",
    actor = "actor",
    group = "group",
    project = "project",
    notdefined = "notdefined"
}

enum IfcObjectiveEnum {
    codecompliance = "codecompliance",
    codewaiver = "codewaiver",
    designintent = "designintent",
    external = "external",
    healthandsafety = "healthandsafety",
    mergeconflict = "mergeconflict",
    modelview = "modelview",
    parameter = "parameter",
    requirement = "requirement",
    specification = "specification",
    triggercondition = "triggercondition",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcOccupantTypeEnum {
    assignee = "assignee",
    assignor = "assignor",
    lessee = "lessee",
    lessor = "lessor",
    lettingagent = "lettingagent",
    owner = "owner",
    tenant = "tenant",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcOpeningElementTypeEnum {
    opening = "opening",
    recess = "recess",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcOutletTypeEnum {
    audiovisualoutlet = "audiovisualoutlet",
    communicationsoutlet = "communicationsoutlet",
    poweroutlet = "poweroutlet",
    dataoutlet = "dataoutlet",
    telephoneoutlet = "telephoneoutlet",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPerformanceHistoryTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPermeableCoveringOperationEnum {
    grill = "grill",
    louver = "louver",
    screen = "screen",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPermitTypeEnum {
    access = "access",
    building = "building",
    work = "work",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPhysicalOrVirtualEnum {
    physical = "physical",
    virtual = "virtual",
    notdefined = "notdefined"
}

enum IfcPileConstructionEnum {
    cast_in_place = "cast_in_place",
    composite = "composite",
    precast_concrete = "precast_concrete",
    prefab_steel = "prefab_steel",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPileTypeEnum {
    bored = "bored",
    driven = "driven",
    jetgrouting = "jetgrouting",
    cohesion = "cohesion",
    friction = "friction",
    support = "support",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPipeFittingTypeEnum {
    bend = "bend",
    connector = "connector",
    entry = "entry",
    exit = "exit",
    junction = "junction",
    obstruction = "obstruction",
    transition = "transition",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPipeSegmentTypeEnum {
    culvert = "culvert",
    flexiblesegment = "flexiblesegment",
    rigidsegment = "rigidsegment",
    gutter = "gutter",
    spool = "spool",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPlateTypeEnum {
    curtain_panel = "curtain_panel",
    sheet = "sheet",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPreferredSurfaceCurveRepresentation {
    curve3d = "curve3d",
    pcurve_s1 = "pcurve_s1",
    pcurve_s2 = "pcurve_s2"
}

enum IfcProcedureTypeEnum {
    advice_caution = "advice_caution",
    advice_note = "advice_note",
    advice_warning = "advice_warning",
    calibration = "calibration",
    diagnostic = "diagnostic",
    shutdown = "shutdown",
    startup = "startup",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcProfileTypeEnum {
    curve = "curve",
    area = "area"
}

enum IfcProjectOrderTypeEnum {
    changeorder = "changeorder",
    maintenanceworkorder = "maintenanceworkorder",
    moveorder = "moveorder",
    purchaseorder = "purchaseorder",
    workorder = "workorder",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcProjectedOrTrueLengthEnum {
    projected_length = "projected_length",
    true_length = "true_length"
}

enum IfcProjectionElementTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPropertySetTemplateTypeEnum {
    pset_typedrivenonly = "pset_typedrivenonly",
    pset_typedrivenoverride = "pset_typedrivenoverride",
    pset_occurrencedriven = "pset_occurrencedriven",
    pset_performancedriven = "pset_performancedriven",
    qto_typedrivenonly = "qto_typedrivenonly",
    qto_typedrivenoverride = "qto_typedrivenoverride",
    qto_occurrencedriven = "qto_occurrencedriven",
    notdefined = "notdefined"
}

enum IfcProtectiveDeviceTrippingUnitTypeEnum {
    electronic = "electronic",
    electromagnetic = "electromagnetic",
    residualcurrent = "residualcurrent",
    thermal = "thermal",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcProtectiveDeviceTypeEnum {
    circuitbreaker = "circuitbreaker",
    earthleakagecircuitbreaker = "earthleakagecircuitbreaker",
    earthingswitch = "earthingswitch",
    fusedisconnector = "fusedisconnector",
    residualcurrentcircuitbreaker = "residualcurrentcircuitbreaker",
    residualcurrentswitch = "residualcurrentswitch",
    varistor = "varistor",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcPumpTypeEnum {
    circulator = "circulator",
    endsuction = "endsuction",
    splitcase = "splitcase",
    submersiblepump = "submersiblepump",
    sumppump = "sumppump",
    verticalinline = "verticalinline",
    verticalturbine = "verticalturbine",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcRailingTypeEnum {
    handrail = "handrail",
    guardrail = "guardrail",
    balustrade = "balustrade",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcRampFlightTypeEnum {
    straight = "straight",
    spiral = "spiral",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcRampTypeEnum {
    straight_run_ramp = "straight_run_ramp",
    two_straight_run_ramp = "two_straight_run_ramp",
    quarter_turn_ramp = "quarter_turn_ramp",
    two_quarter_turn_ramp = "two_quarter_turn_ramp",
    half_turn_ramp = "half_turn_ramp",
    spiral_ramp = "spiral_ramp",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcRecurrenceTypeEnum {
    daily = "daily",
    weekly = "weekly",
    monthly_by_day_of_month = "monthly_by_day_of_month",
    monthly_by_position = "monthly_by_position",
    by_day_count = "by_day_count",
    by_weekday_count = "by_weekday_count",
    yearly_by_day_of_month = "yearly_by_day_of_month",
    yearly_by_position = "yearly_by_position"
}

enum IfcReferentTypeEnum {
    kilopoint = "kilopoint",
    milepoint = "milepoint",
    station = "station",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcReflectanceMethodEnum {
    blinn = "blinn",
    flat = "flat",
    glass = "glass",
    matt = "matt",
    metal = "metal",
    mirror = "mirror",
    phong = "phong",
    plastic = "plastic",
    strauss = "strauss",
    notdefined = "notdefined"
}

enum IfcReinforcingBarRoleEnum {
    main = "main",
    shear = "shear",
    ligature = "ligature",
    stud = "stud",
    punching = "punching",
    edge = "edge",
    ring = "ring",
    anchoring = "anchoring",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcReinforcingBarSurfaceEnum {
    plain = "plain",
    textured = "textured"
}

enum IfcReinforcingBarTypeEnum {
    anchoring = "anchoring",
    edge = "edge",
    ligature = "ligature",
    main = "main",
    punching = "punching",
    ring = "ring",
    shear = "shear",
    stud = "stud",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcReinforcingMeshTypeEnum {
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcRoleEnum {
    supplier = "supplier",
    manufacturer = "manufacturer",
    contractor = "contractor",
    subcontractor = "subcontractor",
    architect = "architect",
    structuralengineer = "structuralengineer",
    costengineer = "costengineer",
    client = "client",
    buildingowner = "buildingowner",
    buildingoperator = "buildingoperator",
    mechanicalengineer = "mechanicalengineer",
    electricalengineer = "electricalengineer",
    projectmanager = "projectmanager",
    facilitiesmanager = "facilitiesmanager",
    civilengineer = "civilengineer",
    commissioningengineer = "commissioningengineer",
    engineer = "engineer",
    owner = "owner",
    consultant = "consultant",
    constructionmanager = "constructionmanager",
    fieldconstructionmanager = "fieldconstructionmanager",
    reseller = "reseller",
    userdefined = "userdefined"
}

enum IfcRoofTypeEnum {
    flat_roof = "flat_roof",
    shed_roof = "shed_roof",
    gable_roof = "gable_roof",
    hip_roof = "hip_roof",
    hipped_gable_roof = "hipped_gable_roof",
    gambrel_roof = "gambrel_roof",
    mansard_roof = "mansard_roof",
    barrel_roof = "barrel_roof",
    rainbow_roof = "rainbow_roof",
    butterfly_roof = "butterfly_roof",
    pavilion_roof = "pavilion_roof",
    dome_roof = "dome_roof",
    freeform = "freeform",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSIPrefix {
    exa = "exa",
    peta = "peta",
    tera = "tera",
    giga = "giga",
    mega = "mega",
    kilo = "kilo",
    hecto = "hecto",
    deca = "deca",
    deci = "deci",
    centi = "centi",
    milli = "milli",
    micro = "micro",
    nano = "nano",
    pico = "pico",
    femto = "femto",
    atto = "atto"
}

enum IfcSIUnitName {
    ampere = "ampere",
    becquerel = "becquerel",
    candela = "candela",
    coulomb = "coulomb",
    cubic_metre = "cubic_metre",
    degree_celsius = "degree_celsius",
    farad = "farad",
    gram = "gram",
    gray = "gray",
    henry = "henry",
    hertz = "hertz",
    joule = "joule",
    kelvin = "kelvin",
    lumen = "lumen",
    lux = "lux",
    metre = "metre",
    mole = "mole",
    newton = "newton",
    ohm = "ohm",
    pascal = "pascal",
    radian = "radian",
    second = "second",
    siemens = "siemens",
    sievert = "sievert",
    square_metre = "square_metre",
    steradian = "steradian",
    tesla = "tesla",
    volt = "volt",
    watt = "watt",
    weber = "weber"
}

enum IfcSanitaryTerminalTypeEnum {
    bath = "bath",
    bidet = "bidet",
    cistern = "cistern",
    shower = "shower",
    sink = "sink",
    sanitaryfountain = "sanitaryfountain",
    toiletpan = "toiletpan",
    urinal = "urinal",
    washhandbasin = "washhandbasin",
    wcseat = "wcseat",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSectionTypeEnum {
    uniform = "uniform",
    tapered = "tapered"
}

enum IfcSensorTypeEnum {
    cosensor = "cosensor",
    co2sensor = "co2sensor",
    conductancesensor = "conductancesensor",
    contactsensor = "contactsensor",
    firesensor = "firesensor",
    flowsensor = "flowsensor",
    frostsensor = "frostsensor",
    gassensor = "gassensor",
    heatsensor = "heatsensor",
    humiditysensor = "humiditysensor",
    identifiersensor = "identifiersensor",
    ionconcentrationsensor = "ionconcentrationsensor",
    levelsensor = "levelsensor",
    lightsensor = "lightsensor",
    moisturesensor = "moisturesensor",
    movementsensor = "movementsensor",
    phsensor = "phsensor",
    pressuresensor = "pressuresensor",
    radiationsensor = "radiationsensor",
    radioactivitysensor = "radioactivitysensor",
    smokesensor = "smokesensor",
    soundsensor = "soundsensor",
    temperaturesensor = "temperaturesensor",
    windsensor = "windsensor",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSequenceEnum {
    start_start = "start_start",
    start_finish = "start_finish",
    finish_start = "finish_start",
    finish_finish = "finish_finish",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcShadingDeviceTypeEnum {
    jalousie = "jalousie",
    shutter = "shutter",
    awning = "awning",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSimplePropertyTemplateTypeEnum {
    p_singlevalue = "p_singlevalue",
    p_enumeratedvalue = "p_enumeratedvalue",
    p_boundedvalue = "p_boundedvalue",
    p_listvalue = "p_listvalue",
    p_tablevalue = "p_tablevalue",
    p_referencevalue = "p_referencevalue",
    q_length = "q_length",
    q_area = "q_area",
    q_volume = "q_volume",
    q_count = "q_count",
    q_weight = "q_weight",
    q_time = "q_time"
}

enum IfcSlabTypeEnum {
    floor = "floor",
    roof = "roof",
    landing = "landing",
    baseslab = "baseslab",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSolarDeviceTypeEnum {
    solarcollector = "solarcollector",
    solarpanel = "solarpanel",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSpaceHeaterTypeEnum {
    convector = "convector",
    radiator = "radiator",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSpaceTypeEnum {
    space = "space",
    parking = "parking",
    gfa = "gfa",
    internal = "internal",
    external = "external",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSpatialZoneTypeEnum {
    construction = "construction",
    firesafety = "firesafety",
    lighting = "lighting",
    occupancy = "occupancy",
    security = "security",
    thermal = "thermal",
    transport = "transport",
    ventilation = "ventilation",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStackTerminalTypeEnum {
    birdcage = "birdcage",
    cowl = "cowl",
    rainwaterhopper = "rainwaterhopper",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStairFlightTypeEnum {
    straight = "straight",
    winder = "winder",
    spiral = "spiral",
    curved = "curved",
    freeform = "freeform",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStairTypeEnum {
    straight_run_stair = "straight_run_stair",
    two_straight_run_stair = "two_straight_run_stair",
    quarter_winding_stair = "quarter_winding_stair",
    quarter_turn_stair = "quarter_turn_stair",
    half_winding_stair = "half_winding_stair",
    half_turn_stair = "half_turn_stair",
    two_quarter_winding_stair = "two_quarter_winding_stair",
    two_quarter_turn_stair = "two_quarter_turn_stair",
    three_quarter_winding_stair = "three_quarter_winding_stair",
    three_quarter_turn_stair = "three_quarter_turn_stair",
    spiral_stair = "spiral_stair",
    double_return_stair = "double_return_stair",
    curved_run_stair = "curved_run_stair",
    two_curved_run_stair = "two_curved_run_stair",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStateEnum {
    readwrite = "readwrite",
    readonly = "readonly",
    locked = "locked",
    readwritelocked = "readwritelocked",
    readonlylocked = "readonlylocked"
}

enum IfcStructuralCurveActivityTypeEnum {
    const = "const",
    linear = "linear",
    polygonal = "polygonal",
    equidistant = "equidistant",
    sinus = "sinus",
    parabola = "parabola",
    discrete = "discrete",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStructuralCurveMemberTypeEnum {
    rigid_joined_member = "rigid_joined_member",
    pin_joined_member = "pin_joined_member",
    cable = "cable",
    tension_member = "tension_member",
    compression_member = "compression_member",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStructuralSurfaceActivityTypeEnum {
    const = "const",
    bilinear = "bilinear",
    discrete = "discrete",
    isocontour = "isocontour",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcStructuralSurfaceMemberTypeEnum {
    bending_element = "bending_element",
    membrane_element = "membrane_element",
    shell = "shell",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSubContractResourceTypeEnum {
    purchase = "purchase",
    work = "work",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSurfaceFeatureTypeEnum {
    mark = "mark",
    tag = "tag",
    treatment = "treatment",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSurfaceSide {
    positive = "positive",
    negative = "negative",
    both = "both"
}

enum IfcSwitchingDeviceTypeEnum {
    contactor = "contactor",
    dimmerswitch = "dimmerswitch",
    emergencystop = "emergencystop",
    keypad = "keypad",
    momentaryswitch = "momentaryswitch",
    selectorswitch = "selectorswitch",
    starter = "starter",
    switchdisconnector = "switchdisconnector",
    toggleswitch = "toggleswitch",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcSystemFurnitureElementTypeEnum {
    panel = "panel",
    worksurface = "worksurface",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTankTypeEnum {
    basin = "basin",
    breakpressure = "breakpressure",
    expansion = "expansion",
    feedandexpansion = "feedandexpansion",
    pressurevessel = "pressurevessel",
    storage = "storage",
    vessel = "vessel",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTaskDurationEnum {
    elapsedtime = "elapsedtime",
    worktime = "worktime",
    notdefined = "notdefined"
}

enum IfcTaskTypeEnum {
    attendance = "attendance",
    construction = "construction",
    demolition = "demolition",
    dismantle = "dismantle",
    disposal = "disposal",
    installation = "installation",
    logistic = "logistic",
    maintenance = "maintenance",
    move = "move",
    operation = "operation",
    removal = "removal",
    renovation = "renovation",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTendonAnchorTypeEnum {
    coupler = "coupler",
    fixed_end = "fixed_end",
    tensioning_end = "tensioning_end",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTendonTypeEnum {
    bar = "bar",
    coated = "coated",
    strand = "strand",
    wire = "wire",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTextPath {
    left = "left",
    right = "right",
    up = "up",
    down = "down"
}

enum IfcTimeSeriesDataTypeEnum {
    continuous = "continuous",
    discrete = "discrete",
    discretebinary = "discretebinary",
    piecewisebinary = "piecewisebinary",
    piecewiseconstant = "piecewiseconstant",
    piecewisecontinuous = "piecewisecontinuous",
    notdefined = "notdefined"
}

enum IfcTransformerTypeEnum {
    current = "current",
    frequency = "frequency",
    inverter = "inverter",
    rectifier = "rectifier",
    voltage = "voltage",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTransitionCode {
    discontinuous = "discontinuous",
    continuous = "continuous",
    contsamegradient = "contsamegradient",
    contsamegradientsamecurvature = "contsamegradientsamecurvature"
}

enum IfcTransitionCurveType {
    biquadraticparabola = "biquadraticparabola",
    blosscurve = "blosscurve",
    clothoidcurve = "clothoidcurve",
    cosinecurve = "cosinecurve",
    cubicparabola = "cubicparabola",
    sinecurve = "sinecurve"
}

enum IfcTransportElementTypeEnum {
    elevator = "elevator",
    escalator = "escalator",
    movingwalkway = "movingwalkway",
    craneway = "craneway",
    liftinggear = "liftinggear",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcTrimmingPreference {
    cartesian = "cartesian",
    parameter = "parameter",
    unspecified = "unspecified"
}

enum IfcTubeBundleTypeEnum {
    finned = "finned",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcUnitEnum {
    absorbeddoseunit = "absorbeddoseunit",
    amountofsubstanceunit = "amountofsubstanceunit",
    areaunit = "areaunit",
    doseequivalentunit = "doseequivalentunit",
    electriccapacitanceunit = "electriccapacitanceunit",
    electricchargeunit = "electricchargeunit",
    electricconductanceunit = "electricconductanceunit",
    electriccurrentunit = "electriccurrentunit",
    electricresistanceunit = "electricresistanceunit",
    electricvoltageunit = "electricvoltageunit",
    energyunit = "energyunit",
    forceunit = "forceunit",
    frequencyunit = "frequencyunit",
    illuminanceunit = "illuminanceunit",
    inductanceunit = "inductanceunit",
    lengthunit = "lengthunit",
    luminousfluxunit = "luminousfluxunit",
    luminousintensityunit = "luminousintensityunit",
    magneticfluxdensityunit = "magneticfluxdensityunit",
    magneticfluxunit = "magneticfluxunit",
    massunit = "massunit",
    planeangleunit = "planeangleunit",
    powerunit = "powerunit",
    pressureunit = "pressureunit",
    radioactivityunit = "radioactivityunit",
    solidangleunit = "solidangleunit",
    thermodynamictemperatureunit = "thermodynamictemperatureunit",
    timeunit = "timeunit",
    volumeunit = "volumeunit",
    userdefined = "userdefined"
}

enum IfcUnitaryControlElementTypeEnum {
    alarmpanel = "alarmpanel",
    controlpanel = "controlpanel",
    gasdetectionpanel = "gasdetectionpanel",
    indicatorpanel = "indicatorpanel",
    mimicpanel = "mimicpanel",
    humidistat = "humidistat",
    thermostat = "thermostat",
    weatherstation = "weatherstation",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcUnitaryEquipmentTypeEnum {
    airhandler = "airhandler",
    airconditioningunit = "airconditioningunit",
    dehumidifier = "dehumidifier",
    splitsystem = "splitsystem",
    rooftopunit = "rooftopunit",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcValveTypeEnum {
    airrelease = "airrelease",
    antivacuum = "antivacuum",
    changeover = "changeover",
    check = "check",
    commissioning = "commissioning",
    diverting = "diverting",
    drawoffcock = "drawoffcock",
    doublecheck = "doublecheck",
    doubleregulating = "doubleregulating",
    faucet = "faucet",
    flushing = "flushing",
    gascock = "gascock",
    gastap = "gastap",
    isolating = "isolating",
    mixing = "mixing",
    pressurereducing = "pressurereducing",
    pressurerelief = "pressurerelief",
    regulating = "regulating",
    safetycutoff = "safetycutoff",
    steamtrap = "steamtrap",
    stopcock = "stopcock",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcVibrationIsolatorTypeEnum {
    compression = "compression",
    spring = "spring",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcVoidingFeatureTypeEnum {
    cutout = "cutout",
    notch = "notch",
    hole = "hole",
    miter = "miter",
    chamfer = "chamfer",
    edge = "edge",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWallTypeEnum {
    movable = "movable",
    parapet = "parapet",
    partitioning = "partitioning",
    plumbingwall = "plumbingwall",
    shear = "shear",
    solidwall = "solidwall",
    standard = "standard",
    polygonal = "polygonal",
    elementedwall = "elementedwall",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWasteTerminalTypeEnum {
    floortrap = "floortrap",
    floorwaste = "floorwaste",
    gullysump = "gullysump",
    gullytrap = "gullytrap",
    roofdrain = "roofdrain",
    wastedisposalunit = "wastedisposalunit",
    wastetrap = "wastetrap",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWindowPanelOperationEnum {
    sidehungrighthand = "sidehungrighthand",
    sidehunglefthand = "sidehunglefthand",
    tiltandturnrighthand = "tiltandturnrighthand",
    tiltandturnlefthand = "tiltandturnlefthand",
    tophung = "tophung",
    bottomhung = "bottomhung",
    pivothorizontal = "pivothorizontal",
    pivotvertical = "pivotvertical",
    slidinghorizontal = "slidinghorizontal",
    slidingvertical = "slidingvertical",
    removablecasement = "removablecasement",
    fixedcasement = "fixedcasement",
    otheroperation = "otheroperation",
    notdefined = "notdefined"
}

enum IfcWindowPanelPositionEnum {
    left = "left",
    middle = "middle",
    right = "right",
    bottom = "bottom",
    top = "top",
    notdefined = "notdefined"
}

enum IfcWindowStyleConstructionEnum {
    aluminium = "aluminium",
    high_grade_steel = "high_grade_steel",
    steel = "steel",
    wood = "wood",
    aluminium_wood = "aluminium_wood",
    plastic = "plastic",
    other_construction = "other_construction",
    notdefined = "notdefined"
}

enum IfcWindowStyleOperationEnum {
    single_panel = "single_panel",
    double_panel_vertical = "double_panel_vertical",
    double_panel_horizontal = "double_panel_horizontal",
    triple_panel_vertical = "triple_panel_vertical",
    triple_panel_bottom = "triple_panel_bottom",
    triple_panel_top = "triple_panel_top",
    triple_panel_left = "triple_panel_left",
    triple_panel_right = "triple_panel_right",
    triple_panel_horizontal = "triple_panel_horizontal",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWindowTypeEnum {
    window = "window",
    skylight = "skylight",
    lightdome = "lightdome",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWindowTypePartitioningEnum {
    single_panel = "single_panel",
    double_panel_vertical = "double_panel_vertical",
    double_panel_horizontal = "double_panel_horizontal",
    triple_panel_vertical = "triple_panel_vertical",
    triple_panel_bottom = "triple_panel_bottom",
    triple_panel_top = "triple_panel_top",
    triple_panel_left = "triple_panel_left",
    triple_panel_right = "triple_panel_right",
    triple_panel_horizontal = "triple_panel_horizontal",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWorkCalendarTypeEnum {
    firstshift = "firstshift",
    secondshift = "secondshift",
    thirdshift = "thirdshift",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWorkPlanTypeEnum {
    actual = "actual",
    baseline = "baseline",
    planned = "planned",
    userdefined = "userdefined",
    notdefined = "notdefined"
}

enum IfcWorkScheduleTypeEnum {
    actual = "actual",
    baseline = "baseline",
    planned = "planned",
    userdefined = "userdefined",
    notdefined = "notdefined"
}
