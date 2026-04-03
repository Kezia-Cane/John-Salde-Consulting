"use client";

import dynamic from "next/dynamic";

const SectionStory = dynamic(() => import("@/components/SectionStory"), {
    ssr: false,
});

export default SectionStory;
