export const site = {
  name: "Stream",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stream.example",
  email: "hafizanas663@gmail.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  tagline: "Ultra-low latency streaming infrastructure & media product engineering.",
  status: "All Edge Nodes Operational (99.999% SLA)",
};

export interface ServiceDetail {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  kicker: string;
  tagline: string;
  description: string;
  summary: string;
  specs: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  benefits: string[];
  useCases: { name: string; detail: string }[];
  visualBadge: string;
  ctaText: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "ai-solutions",
    index: "01",
    title: "AI Development",
    shortTitle: "AI Development",
    kicker: "Intelligent Media & Video AI Systems",
    tagline: "Custom machine learning models, video summarization, and intelligent automation.",
    description: "We build bespoke artificial intelligence systems that transform raw video pipelines into smart, searchable, and automated media engines. From real-time sports highlight clipping and speech-to-text indexing to automated compliance and computer vision tracking, we power next-generation streaming experiences.",
    summary: "Intelligent machine learning and generative video solutions engineered for high-throughput media.",
    specs: [
      { label: "Models", value: "Custom LLMs, Vision-Language, Whisper ASR" },
      { label: "Inference", value: "Sub-50ms Edge & GPU Accelerated" },
      { label: "Pipelines", value: "Real-time Vector Search & Multimodal Embeddings" },
      { label: "Deployment", value: "Triton, TensorRT, vLLM on Kubernetes" },
    ],
    features: [
      { title: "Real-Time Highlight & Clip Generation", desc: "Automated event detection and immediate short-form video synthesis from live broadcasts." },
      { title: "Speech-to-Text & Searchable Indexing", desc: "Multi-language transcription, frame-accurate captioning, and semantic video search." },
      { title: "Computer Vision & Object Tracking", desc: "Automated player tracking, content tagging, and brand placement analytics." },
      { title: "Automated Content Moderation", desc: "Frame-by-frame compliance analysis and sensitive content flagging in real time." },
    ],
    benefits: [
      "Slash post-production editing turnaround from hours to seconds",
      "Unlock new monetization streams through searchable video archives",
      "Full ownership and security of proprietary datasets and model weights",
      "Seamless integration with live broadcast encoders and VOD catalogs",
    ],
    useCases: [
      { name: "Live Sports Highlight Automation", detail: "Engineered automated real-time clip generation from live game streams within 15 seconds." },
      { name: "Multimodal Video Search", detail: "Built natural language semantic search enabling editors to query hours of footage instantly." },
      { name: "Automated Subtitle Engine", detail: "Deployed high-precision multi-language captioning pipeline processing 10k+ video hours daily." },
    ],
    visualBadge: "AI SYSTEM // LLM + VISION",
    ctaText: "Deploy AI Solutions",
  },
  {
    slug: "video-streaming",
    index: "02",
    title: "Video Streaming",
    shortTitle: "Video Streaming",
    kicker: "Adaptive VOD & Broadcast Pipelines",
    tagline: "End-to-end video processing, encoding, DRM security, and global content delivery.",
    description: "From raw video ingest to pristine multi-bitrate delivery, we engineer automated video-on-demand pipelines. We implement adaptive bitrate (ABR) encoding, studio-grade DRM, dynamic server-side ad insertion (SSAI), and multi-CDN distribution.",
    summary: "High-fidelity video pipelines delivering pristine 4K playback across any network condition.",
    specs: [
      { label: "Codecs", value: "H.264 (AVC), H.265 (HEVC), AV1, VP9" },
      { label: "Protocols", value: "HLS (RFC 8216), MPEG-DASH, CMAF" },
      { label: "DRM Security", value: "Widevine, FairPlay, PlayReady" },
      { label: "Delivery", value: "Multi-CDN with Intelligent Auto-Routing" },
    ],
    features: [
      { title: "Per-Title & Per-Shot Encoding", desc: "AI-optimized compression delivering crystal-clear 4K video while slashing bandwidth costs by 40%." },
      { title: "Multi-DRM Content Protection", desc: "Enterprise DRM key management to protect premium licensed content on all devices." },
      { title: "Server-Side Ad Insertion (SSAI)", desc: "Ad-block resistant, seamless commercial splicing with frame-accurate VAST/VMAP compliance." },
      { title: "Global CDN Caching", desc: "Multi-CDN redundancy ensuring buffer-free streaming across Americas, EMEA, and APAC." },
    ],
    benefits: [
      "Zero buffering with dynamic adaptive bitrate switching matching viewer bandwidth",
      "Studio-compliant DRM protecting your intellectual property against piracy",
      "Up to 45% reduction in egress costs via per-title encoding optimizations",
      "Comprehensive playback QoE monitoring tracking startup time and rebuffer rates",
    ],
    useCases: [
      { name: "4K Cinema On-Demand", detail: "Built a cloud encoding cluster transcoding 10,000+ hours of 4K Dolby Atmos content." },
      { name: "Fitness Video Platform", detail: "Integrated offline playback encryption with automated bandwidth throttling." },
      { name: "Enterprise Training Library", detail: "Implemented secure watermarked video delivery with granular role permissions." },
    ],
    visualBadge: "4K HDR // CMAF ABR",
    ctaText: "Deploy Video Pipeline",
  },
  {
    slug: "software-development",
    index: "03",
    title: "Software Development",
    shortTitle: "Software Development",
    kicker: "End-to-End Product Engineering",
    tagline: "Transform high-ambition streaming & digital concepts into market-defining products.",
    description: "We architect, design, and engineer full-lifecycle digital streaming applications. From rapid interactive prototypes to fault-tolerant production ecosystems, we ensure every product decision drives user retention and scalable monetization.",
    summary: "From uncertain idea to durable, focused, and high-performance product architectures.",
    specs: [
      { label: "Architecture", value: "Microservices & Edge Cloud" },
      { label: "Deployment", value: "Multi-Region Automated CI/CD" },
      { label: "Design System", value: "Component-driven (AntD / MUI / Custom)" },
      { label: "Velocity", value: "Iterative sprints with live staging" },
    ],
    features: [
      { title: "Product Discovery & Blueprinting", desc: "Mapping user journeys, technical constraints, and data flows before code begins." },
      { title: "Cross-Platform Streaming SDKs", desc: "Unified codebases for Web, iOS, Android, Smart TVs, and embedded devices." },
      { title: "Monetization & Entitlements", desc: "Seamless integration of AVOD, SVOD, TVOD, pay-per-view, and micropayments." },
      { title: "Continuous Telemetry", desc: "Real-time user engagement tracking and playback quality (QoE) metrics." },
    ],
    benefits: [
      "Accelerated time-to-market with tested modular architectures",
      "Unified UX across desktop, mobile, and connected television apps",
      "Built-in compliance, DRM licensing, and zero-trust authentication",
      "Scalable foundation designed to support millions of concurrent viewers",
    ],
    useCases: [
      { name: "Next-Gen OTT Launch", detail: "Engineered a white-label streaming hub with personalized content feeds for 500k+ subscribers." },
      { name: "Creator Studio Suite", detail: "Built a creator management portal with automated clip rendering and dynamic payout tracking." },
      { name: "Interactive Sports Platform", detail: "Delivered synchronized live data overlays with sub-second video synchronization." },
    ],
    visualBadge: "SOFTWARE ENG // V4.2",
    ctaText: "Start Product Discovery",
  },
];

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  bonus: string[];
  techStack: string[];
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const services = servicesData.map((s) => [s.index, s.title, s.summary]);

export const jobsData: JobPosting[] = [
  {
    id: "video-streaming-engineer",
    slug: "video-streaming-engineer",
    title: "Video Streaming Engineer / Developer",
    department: "Media Systems & Architecture",
    location: "Remote / Hybrid (Global)",
    type: "Full-Time",
    experience: "1+ Year Experience",
    overview:
      "We are seeking a proactive Video Streaming Engineer / Developer with 1+ year of practical experience in video playback, live media distribution, or video infrastructure. In this role, you will help design, build, and optimize high-throughput media pipelines, custom web/mobile player integrations, and ultra-low latency WebRTC/HLS delivery systems serving millions of concurrent viewers.",
    responsibilities: [
      "Engineer and maintain custom client-side video players using HLS.js, Shaka Player, Video.js, AVPlayer, and ExoPlayer.",
      "Implement and tune Low-Latency HLS (LL-HLS), Low-Latency DASH (LL-DASH), and WebRTC streaming pipelines.",
      "Integrate DRM content protection systems (Widevine, FairPlay, PlayReady) with multi-key manifest packaging.",
      "Collaborate on cloud transcoding clusters (FFmpeg, GStreamer, AWS MediaConvert) for multi-bitrate ABR encoding ladders.",
      "Monitor and diagnose real-time Playback Quality of Experience (QoE) metrics including TTFB, buffer ratio, and frame drops.",
      "Contribute to edge computing routines for dynamic manifest manipulation, token validation, and targeted SSAI splicing.",
    ],
    requirements: [
      "1+ year of professional experience working with web video playback, streaming infrastructure, or media application engineering.",
      "Hands-on proficiency with TypeScript/JavaScript or modern systems programming (Go, C++, Rust, or Python).",
      "Familiarity with fundamental video formats, codecs (H.264, HEVC, AV1), and streaming protocols (HLS, DASH, WebRTC, RTMP).",
      "Experience debugging media manifests (M3U8 playlists, MPD manifests) and network packet timings in browser devtools / Wireshark.",
      "Understanding of REST APIs, WebSocket protocols, and cloud computing fundamentals (AWS, GCP, or Cloudflare Workers).",
      "Curiosity, strong analytical problem-solving skills, and a genuine passion for high-fidelity media technology.",
    ],
    bonus: [
      "Experience with FFmpeg CLI filters or libavcodec library bindings.",
      "Knowledge of Server-Side Ad Insertion (SSAI) with VAST / VMAP specifications.",
      "Prior exposure to Connected TV environments (Apple TV tvOS, Android TV, Roku BrightScript).",
      "Contributions to open-source multimedia projects or WebAssembly video tools.",
    ],
    techStack: ["TypeScript", "HLS.js / Shaka", "WebRTC / WHIP", "FFmpeg", "Next.js 15", "Cloudflare Workers", "Docker / K8s"],
    featured: true,
  },
  {
    id: "edge-infrastructure-lead",
    slug: "edge-infrastructure-lead",
    title: "Senior Cloud & Edge Systems Lead",
    department: "Cloud Infrastructure",
    location: "Remote",
    type: "Full-Time",
    experience: "4+ Years Experience",
    overview:
      "Lead our distributed multi-CDN routing matrix, autoscaling GPU transcode clusters, and Prometheus observability backbones.",
    responsibilities: [
      "Architect Kubernetes container orchestration for automated burst transcode workers.",
      "Design intelligent DNS/HTTP traffic steering engines leveraging Real-User Monitoring (RUM) latency feeds.",
      "Manage origin shielding, caching topologies, and automated hitless failover topologies.",
    ],
    requirements: [
      "Strong background in Kubernetes, Terraform, Golang, and multi-CDN architecture.",
      "Experience operating high-bandwidth egress environments at petabyte scale.",
    ],
    bonus: ["Cloudflare Workers Compute, eBPF network observability, GPU NVENC optimization."],
    techStack: ["Kubernetes", "Terraform", "Go", "Prometheus", "Grafana", "Fastly / Cloudflare"],
    featured: false,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "qadeer-amin",
    name: "Qadeer Amin",
    role: "Software Engineer",
    image: "/team/qadeer-amin.jpg",
  },
  {
    id: "anas-ali",
    name: "Anas Ali",
    role: "CEO",
    image: "/team/anas-ali.jpg",
  },
  {
    id: "sulyman-khalil",
    name: "Sulyman Khalil",
    role: "AI Engineer",
    image: "/team/sulyman-khalil.jpg",
  },
  {
    id: "shumail",
    name: "Shumail",
    role: "Full Stack Engineer",
    image: "/team/shumail.jpg",
  },
];

export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  tagline: string;
  description: string;
  metrics: string;
  capabilities: string[];
  features: { title: string; desc: string }[];
  pills: string[];
}

export const solutionsData: SolutionDetail[] = [
  {
    id: "startups",
    slug: "startups",
    title: "For Startups & Media Creators",
    shortTitle: "Startups & Media",
    kicker: "High-Velocity Media Launches",
    tagline: "Launch your streaming product with an architecture built to scale from day one.",
    description: "We help media innovators and streaming startups bypass months of painful infrastructure plumbing. From turnkey web players and payment gateways to automated transcoding, we get you to market fast without lock-in.",
    metrics: "Sub-50ms TTFB / Zero Lock-in",
    capabilities: [
      "Fast-track MVP Player & Content Hub",
      "Dynamic Paywall, Subscriptions & Stripe Billing",
      "Cost-effective Cloud Transcoding & Ingest",
      "Real-time Creator Analytics & Payout Dashboard"
    ],
    features: [
      { title: "Rapid Product Sprint", desc: "Production-ready WebRTC and HLS streaming web application deployed in weeks." },
      { title: "Flexible Monetization", desc: "SVOD, TVOD, pay-per-view, and tiered membership gating built right in." },
      { title: "Zero Lock-in Video Cloud", desc: "Direct integration with cost-effective multi-cloud storage and egress networks." },
      { title: "Audience Telemetry", desc: "Track watch time, drop-off points, and player QoE from the first 100 to 100,000 users." }
    ],
    pills: ["Fast-Track MVP", "Next.js 15", "Low Latency HLS", "Stripe Billing"]
  },
  {
    id: "broadcasters",
    slug: "broadcasters",
    title: "For Live Broadcasters & Sports",
    shortTitle: "Live Broadcasters",
    kicker: "Stadium & Live Concurrency",
    tagline: "Sub-second live streaming pipelines engineered for high concurrency and real-time betting.",
    description: "Engineered for Tier-1 live sporting events, esports championships, and synchronized interactive broadcasts. We guarantee sub-800ms global glass-to-glass latency with instant failover origin clustering.",
    metrics: "< 800ms Latency / 99.999% SLA",
    capabilities: [
      "SRT / WebRTC Dual Ingestion with Instant Failover",
      "Synchronized Live Graphics & Betting Overlays",
      "Automated Live DVR & Cloud Highlight Clipping",
      "Multi-Origin Ingestion with Edge Re-Encoding"
    ],
    features: [
      { title: "Sub-Second Glass-to-Glass", desc: "Ultra-low latency streaming matching broadcast TV timing for betting and live interactivity." },
      { title: "Zero-Drop Redundancy", desc: "Hitless failover between active-active redundant encoders across separate physical regions." },
      { title: "Frame-Accurate Data Sync", desc: "Synchronize on-screen telemetry, live odds, and chat feeds down to individual video frames." },
      { title: "Automated Clip Pipeline", desc: "Instant automated generation of social highlight clips during live gameplay." }
    ],
    pills: ["WebRTC Direct Sync", "SRT Ingestion", "DVR Replay", "Live Telemetry"]
  },
  {
    id: "ott",
    slug: "ott",
    title: "OTT & Multi-Screen Platforms",
    shortTitle: "OTT Platforms",
    kicker: "10-Foot Living Room Ecosystems",
    tagline: "Turnkey Over-The-Top apps for Apple TV, Android TV, Roku, Fire TV, and mobile.",
    description: "We design and build bespoke 10-foot living room viewing experiences. Deliver fluid navigation, instant startup playback, studio DRM compliance, and cross-device watch state synchronization across every screen.",
    metrics: "6 Connected TV Ecosystems",
    capabilities: [
      "10-Foot Living Room UX for Apple TV, Roku & Android TV",
      "Studio DRM Integration (Apple FairPlay, Google Widevine, PlayReady)",
      "Cross-Device Watch State & Resume Queue Synchronization",
      "Server-Side Dynamic Ad Insertion (SSAI) with Ad-Block Bypass"
    ],
    features: [
      { title: "Native Connected TV Apps", desc: "Custom, lightweight runtimes for tvOS, Roku BrightScript, and Android TV / Fire OS." },
      { title: "Studio DRM Compliance", desc: "Hardware-enforced secure playback required by major Hollywood studios for 4K HDR." },
      { title: "Continuous Watch State", desc: "Pause on Apple TV in the living room and resume instantly on iPhone without losing place." },
      { title: "Maximized Ad Revenue", desc: "Server-side ad insertion stitched smoothly into video manifests for uninterrupted playback." }
    ],
    pills: ["Apple TV tvOS", "Roku SceneGraph", "Android TV", "Cross-Device Watch State"]
  },
  {
    id: "enterprise",
    slug: "enterprise",
    title: "Enterprise & Secure Video",
    shortTitle: "Enterprise Video",
    kicker: "Zero-Trust Confidential Media",
    tagline: "Confidential corporate town halls, training libraries, and internal video systems.",
    description: "Designed for global enterprises requiring ironclad confidentiality, single sign-on (SSO), dynamic forensic watermarking, and internal mesh CDN distribution that preserves office bandwidth.",
    metrics: "SOC2 / SSO / AES-256 DRM",
    capabilities: [
      "Dynamic Viewer-Specific Forensic Watermarking",
      "Internal eCDN & P2P Mesh Office Distribution",
      "Single Sign-On (SAML, Okta, Azure AD) with Role-Based ACL",
      "Comprehensive Audit Logs & Playback Analytics"
    ],
    features: [
      { title: "Forensic Watermarking", desc: "Dynamically embeds user email and IP into video frames to prevent leaks and screen captures." },
      { title: "Corporate eCDN Mesh", desc: "95%+ reduction in corporate WAN bandwidth during company-wide all-hands broadcasts." },
      { title: "Enterprise Identity Integration", desc: "Seamless SAML / OIDC login with granular permissions based on organizational departments." },
      { title: "Immutable Audit Trails", desc: "Detailed logs of exactly who watched what, when, and from which device." }
    ],
    pills: ["AES-256 DRM", "Forensic Watermarking", "SSO / SAML", "Zero-Trust Access"]
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    title: "Distributed Edge Infrastructure",
    shortTitle: "Edge Infrastructure",
    kicker: "Multi-CDN Cloud Mesh",
    tagline: "Autoscaling cloud infrastructure with multi-CDN traffic steering and real-time failure mitigation.",
    description: "We architect multi-region, multi-CDN video delivery meshes handling terabits per second. Our real-user monitoring (RUM) dynamically routes viewers to the fastest local CDN edge node in real time.",
    metrics: "Multi-CDN / 50+ Tbps Capacity",
    capabilities: [
      "GPU-Accelerated Kubernetes Transcoder Fleets",
      "Intelligent Multi-CDN RUM Routing & Auto-Steering",
      "Origin Shielding & Multi-Tier Edge Caching",
      "Real-Time Egress Cost Optimization"
    ],
    features: [
      { title: "Multi-CDN Auto-Steering", desc: "Dynamically switches CDN providers mid-stream if a provider degrades or experiences jitter." },
      { title: "GPU Cloud Transcoding", desc: "Scales transcoding capacity automatically during peak live spikes with spot GPU instances." },
      { title: "Origin Protection", desc: "Multi-tier origin shields ensuring 99.5%+ cache hit ratios and shielding core databases." },
      { title: "Egress Arbitrage", desc: "Reduces bandwidth egress costs by 30-45% through intelligent CDN volume routing." }
    ],
    pills: ["Kubernetes EKS/GKE", "Multi-CDN RUM", "Origin Shield", "Prometheus"]
  },
  {
    id: "custom",
    slug: "custom",
    title: "Custom Protocols & Media Labs",
    shortTitle: "Custom Media Labs",
    kicker: "Proprietary Codecs & R&D",
    tagline: "Bespoke media engineering for unique codecs, WebAssembly editors, and hardware bridges.",
    description: "For technology teams building what off-the-shelf software cannot do. We build in-browser WebCodecs video processing pipelines, custom SDI/NDI ingest bridges, and proprietary low-latency transport protocols.",
    metrics: "WebCodecs / Wasm / NDI",
    capabilities: [
      "Browser-Based WebCodecs & WebAssembly Processing",
      "Hardware SDI / NDI Studio Ingestion Bridges",
      "Custom Transport Protocols (QUIC / WebTransport)",
      "AI-Powered Automated Video Segmentation & Indexing"
    ],
    features: [
      { title: "Browser WebAssembly Engines", desc: "Full hardware-accelerated video editing and rendering directly in Chrome/Safari/Firefox." },
      { title: "WebTransport & QUIC", desc: "Next-generation transport layer protocols delivering lower latency than traditional TCP." },
      { title: "Studio Broadcast Bridges", desc: "Hardware integration connecting professional SDI/NDI broadcast switchers to web clouds." },
      { title: "Automated Metadata AI", desc: "Real-time speech transcription, visual scene indexing, and searchable semantic video catalogs." }
    ],
    pills: ["WebCodecs API", "Wasm Video FX", "AI Highlights", "NDI/SDI Bridge"]
  }
];

export const nav = [
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Product Development", href: "/services/product-development", desc: "Full-lifecycle digital & streaming platforms" },
      { label: "App Development", href: "/services/app-development", desc: "High-performance web & mobile streaming apps" },
      { label: "Video Streaming", href: "/services/video-streaming", desc: "VOD, ABR encoding, DRM & multi-CDN" },
      { label: "Live Streaming", href: "/services/live-streaming", desc: "Sub-second ultra-low latency broadcasting" },
      { label: "OTT Solutions", href: "/services/ott-solutions", desc: "Smart TVs, Apple TV, Roku & mobile apps" },
      { label: "Streaming Infrastructure", href: "/services/streaming-infrastructure", desc: "Cloud transcoding clusters & edge routing" },
      { label: "Custom Solutions", href: "/services/custom-solutions", desc: "Proprietary protocols, AI video & bespoke labs" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "For Startups & Media", href: "/solutions/startups", desc: "Fast-track streaming MVP architectures" },
      { label: "For Live Broadcasters", href: "/solutions/broadcasters", desc: "Resilient stadium & sports transmission" },
      { label: "OTT & Multi-Screen", href: "/solutions/ott", desc: "Living room apps for tvOS, Roku & Android TV" },
      { label: "Enterprise & Secure Video", href: "/solutions/enterprise", desc: "Confidential corporate video & eCDN mesh" },
      { label: "Distributed Edge Infrastructure", href: "/solutions/infrastructure", desc: "Multi-CDN RUM traffic steering" },
      { label: "Custom Protocols & Labs", href: "/solutions/custom", desc: "WebCodecs, Wasm editors & bespoke R&D" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];


