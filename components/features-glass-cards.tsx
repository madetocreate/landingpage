"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  description: string;
  href: string;
  iconName: "CloudArrowUpIcon" | "LockClosedIcon" | "ArrowPathIcon";
}

interface FeaturesGlassCardsProps {
  features: Feature[];
}

const iconMap = {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
};

export default function FeaturesGlassCards({ features }: FeaturesGlassCardsProps) {
  return (
    <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.iconName];
        
        return (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              rotateX: [0, -2, 2, -2, 0],
              rotateY: [0, 1, -1, 1, 0],
              transition: {
                y: { type: "spring", stiffness: 300, damping: 20 },
                rotateX: { duration: 0.5, ease: "easeInOut" },
                rotateY: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            className="group relative flex flex-col rounded-2xl p-8 backdrop-blur-xl bg-white/70 border border-gray-300/30 shadow-lg shadow-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
              boxShadow: "0 8px 32px 0 rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(209, 213, 219, 0.3) inset",
            }}
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col flex-auto">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors duration-300">
                  <IconComponent aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600" />
                </div>
                <span>{feature.name}</span>
              </dt>
              <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl" />
          </motion.div>
        );
      })}
    </div>
  );
}

